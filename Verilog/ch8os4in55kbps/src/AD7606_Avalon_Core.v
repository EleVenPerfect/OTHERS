// -----------------------------------------------------------------------------
//
// Copyright 2011(c) Analog Devices, Inc.
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, 
// are permitted provided that the following conditions are met:
//  - Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  - Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in
//    the documentation and/or other materials provided with the
//    distribution.
//  - Neither the name of Analog Devices, Inc. nor the names of its
//    contributors may be used to endorse or promote products derived
//    from this software without specific prior written permission.
//  - The use of this software may or may not infringe the patent rights
//    of one or more patent holders.  This license does not release you
//    from the requirement that you obtain separate licenses from these
//    patent holders to use this software.
//  - Use of the software either in source or binary form, must be run
//    on or directly connected to an Analog Devices Inc. component.
//
// THIS SOFTWARE IS PROVIDED BY ANALOG DEVICES "AS IS" AND ANY EXPRESS OR IMPLIED 
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, NON-INFRINGEMENT, MERCHANTABILITY 
// AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL ANALOG DEVICES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, 
// INTELLECTUAL PROPERTY RIGHTS, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND 
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// -----------------------------------------------------------------------------
// FILE NAME :      ad7606_Avalon_Core.v
// MODULE NAME :    ad7606_Avalon_Core
// AUTHOR :         acostina
// AUTHOR’S EMAIL : adrian.costina@analog.com
// -----------------------------------------------------------------------------
// SVN REVISION: 1420
// -----------------------------------------------------------------------------
// KEYWORDS : ad7606
// -----------------------------------------------------------------------------
// PURPOSE : This module is intended to read data from ADCs, connected to a CED1Z 
//           board
// -----------------------------------------------------------------------------
// REUSE ISSUES
// Reset Strategy      : Active high reset signal
// Clock Domains       : 2 clocks - the system clock that drives the internal logic 
//                     : and a clock for ADC conversions
// Critical Timing     : N/A
// Test Features       : N/A
// Asynchronous I/F    : N/A
// Instantiations      : AD7606, write_master
// Synthesizable (y/n) : Y
// Target Device       : CED1Z
// Other               : Avalon accesible registers:
//  CONTROL_REGISTER    : address 0:    bit 0 - start acquisition
//                                      bit 1 - software reset
//                                      bit 2 - control_fixed_location (for 1, the avalon master will write data to a single location)
//                                      bit 3 - write data to the DUT
//  ACQ_COUNT_REGISTER  : address 1: counter to store the total number of sample acquisitions requested by software
//  BASE_REGISTER       : address 2: the base address where data will be written
//  STATUS_REGISTER     : address 3: status register
//  DUT_WRITE_REGISTER  : address 4: data to be written to the DUT 
// -----------------------------------------------------------------------------

`timescale 1ns/100ps //Use a timescale that is best for simulation.

//------------------------------------------------------------------------------
//----------- Module Declaration -----------------------------------------------
//------------------------------------------------------------------------------

module AD7606_Avalon_Core
#(
    //data path width
    //range : 8, 16, 32, 64, 128, 256, 512, 1024 
    parameter DATAWIDTH = 16,

    // (DATAWIDTH)/8
    //range: 1, 2, 4, 8, 16, 32, 64, 128
    parameter BYTEENABLEWIDTH = 2,

    //The number of address bits exposed to the system interconnect fabric.
    //range: 1-32
    parameter ADDRESSWIDTH = 32,

    //FIFO depth of the internal buffer
    //range: 4 ,8, 16, 62, 64, 128
    parameter FIFODEPTH = 32,

    //Log2(FIFODEPTH)
    //range: 2-7
    parameter FIFODEPTH_LOG2 = 5,

    //Set to '1' to use on chip memory for the internal buffer
    //Set to '0' to use logical elements instead of memory
    //range: 0/1
    parameter FIFOUSEMEMORY = 1
)

//----------- Ports Declarations -----------------------------------------------
(
    //clock and reset signals
    input                           clk_i,
    input                           reset_i,

     //avalon ports slave
    input       [31:0]              avalon_writedata_i,
    input                           avalon_write_i,
    input                           avalon_read_i,
    input       [ 2:0]              avalon_address_i,
    output  reg [31:0]              avalon_readdata_o,

    //avalon master ports
    input                           avalon_master_waitrequest_i,
    output  [ADDRESSWIDTH-1:0]      avalon_master_address_o,
    output                          avalon_master_write_o,
    output  [BYTEENABLEWIDTH-1:0]   avalon_master_byteenable_o,
    output  [DATAWIDTH-1:0]         avalon_master_writedata_o,

    //DUT control and data interface
    input       [15:0]  adc_db_i,       //ADC parallel data bus
    input               adc_busy_i,     //ADC BUSY signal
    output      [2:0]   adc_os_o,       //ADC OVERSAMPLING signals
    output              adc_range_o,    //ADC RANGE signal
    output              adc_cs_n_o,     //ADC CS signal
    output              adc_rd_n_o,     //ADC RD signal
    output              adc_reset_o,    //ADC RESET signal
    output              adc_stdby_o,    //ADC STAND BY signal
    output              adc_convst_o    //ADC CONVST signal
);

//------------------------------------------------------------------------------
//----------- Registers Declarations -------------------------------------------
//------------------------------------------------------------------------------

//Avalon registers
reg [31:0] control_register;    // Address 0: bit 0 start acquisition,
                                           // bit 1 software reset,
                                           // bit 2 control_fixed_location (for 1, the avalon master will write data to a single location)
                                           // bit 3 write data to the DUT
                                           // bit 4 control signal (DUT)
reg [31:0] acq_count_register;      // Address 1: counter to store the total number of 
                                    //            sample acquisitions requested by software
reg [31:0] base_register;           // Address 2: the base address where data will be written
reg [31:0] status_register;         // Address 3: status register
reg [31:0] dut_write_register;      //address 4: data to be written to the DUT

// Control inputs and outputs for write master
reg        control_go;             //strobe to initiate a write master transaction

// User logic inputs and outputs for write master
reg                     user_write_buffer;      //signal to activate the WRReq signal on the memory subcomponent of the write master core
reg [DATAWIDTH-1:0]     user_buffer_data;       //data to be written in the memory subcomponent of the write master core
reg [ADDRESSWIDTH-1:0]  control_write_base;     //address of the start location where data will be written
reg [ADDRESSWIDTH-1:0]  control_write_length;   //number of bytes to be written by the write master 

//State machine
reg [5:0]   core_state;
reg [5:0]   core_next_state;

//Internal signals
reg [31:0]  committed_data;         //integer used to keep track of the number of words already written in the system memory
reg [31:0]  dev_total_read_cnt;     //counts the total number of samples received from the device
reg         acquisition_complete;   //signals that the acquisition is complete
reg         buffer_overflow;        //used to indicate that the buffer was overflown, and data is not contiguous
reg         write_addr_err;         //used to signal that a write request on a wrong address has been performed

//IP control and data interface
reg         dut_wr_data_n;
reg [15:0]  dut_data_i;

//------------------------------------------------------------------------------
//----------- Local Parameters -------------------------------------------------
//------------------------------------------------------------------------------
//CORE states
localparam IDLE             = 6'b000001;
localparam SYNCHRONIZE      = 6'b000010;
localparam ACQ_SAMPLE       = 6'b000100;
localparam TRANSFER_SAMPLE  = 6'b001000;
localparam WRITE_FIFO       = 6'b010000;
localparam DMA_WRITE        = 6'b100000;

//------------------------------------------------------------------------------
//----------- Wire Declarations ------------------------------------------------
//------------------------------------------------------------------------------

wire reset;                           //used to concatenate the software/hardware reset signals in a single signal

//write master wires
wire          control_fixed_location;
wire          control_done;
wire          user_buffer_full;       //signal from the write master core, active in case the memory subcomponent is full

//IP control and data interfaces
wire          sync;                 // signal used to synchronize with the first data channel
wire          data_rd_ready;        // signals that new data is available
wire          dut_data_wr_ready;    // signals that the write has been performed
wire [15:0]   dut_data_o;           // bus used to transfer data from the ADC

//------------------------------------------------------------------------------
//----------- Assign/Always Blocks ---------------------------------------------
//------------------------------------------------------------------------------

assign reset                    = reset_i | control_register[1];    //merge software reset and hardware reset in the same signal
assign control_fixed_location   = control_register[2];              //1 if data will be written to the same address

//process to update the avalon registers
always @(posedge clk_i)
begin
    control_register[0] <= 1'b0;
    control_register[1] <= 1'b0;
    control_register[3] <= 1'b0;
    status_register[0]  <= acquisition_complete;
    status_register[1]  <= buffer_overflow;
    status_register[2]  <= write_addr_err;
    if (reset == 1'b1)
    begin
        control_register    <= 32'b0;
        acq_count_register  <= 32'b0;
        base_register       <= 32'b0;
        status_register     <= 32'b0;
        dut_write_register  <= 32'b0;
        write_addr_err      <= 1'b0;
    end
    else if (avalon_write_i == 1'b1)
    begin
        case (avalon_address_i)
            3'b000:
            begin
                control_register    <= avalon_writedata_i;
            end
            3'b001:
            begin
                acq_count_register  <= avalon_writedata_i;
            end
            3'b010:
            begin
                base_register       <= avalon_writedata_i;
            end
            3'b100:
           begin
                dut_write_register  <= avalon_writedata_i;
            end
            default:
            begin
                write_addr_err     <= 1'b1;
            end
        endcase
    end
    else if (avalon_read_i == 1'b1)
    begin
         case (avalon_address_i)
            3'b000:
            begin
                avalon_readdata_o   <= control_register;
            end
            3'b001:
            begin
                avalon_readdata_o   <= acq_count_register;
            end
            3'b010:
            begin
                avalon_readdata_o   <= base_register;
            end
            3'b011:
            begin
                avalon_readdata_o   <= status_register;
            end
            3'b100:
            begin
                avalon_readdata_o   <= dut_write_register;
            end
            default:
            begin
                avalon_readdata_o   <= status_register;
            end
        endcase
    end
end

//process to write data to the DUT
always @(posedge clk_i)
begin
    if(reset == 1'b1)
    begin
        dut_wr_data_n       <= 1'b1;
        dut_data_i          <= 16'h0000;
    end
    else
    begin
        dut_data_i          <= dut_write_register[15:0];
        if(control_register[3] == 1)
        begin
            dut_wr_data_n   <= 1'b0;
        end
        else if( dut_data_wr_ready == 1'b1 )
        begin
           dut_wr_data_n    <= 1'b1; 
        end
    end
end

//update the CORE current state and the control signals
always @(posedge clk_i)
begin
    if(reset_i == 1'b1)
    begin
        core_state      <= IDLE;
        buffer_overflow <= 1'b0;
    end
    else
    begin
        core_state <= core_next_state;
        case (core_state)
            IDLE:
            begin
                control_go              <= 1'b0;
                control_write_length    <= 1'b0;

                user_write_buffer       <= 1'b0;
                user_buffer_data        <= 0;

                dev_total_read_cnt      <= acq_count_register;
                committed_data          <= 1'b0;
            end
            SYNCHRONIZE:
            begin
                control_go              <= 1'b0;
                user_write_buffer       <= 1'b0;
                acquisition_complete    <= 1'b0;
            end
            ACQ_SAMPLE:
            begin
                control_go              <= 1'b0;
                user_write_buffer       <= 1'b0;
                acquisition_complete    <= 1'b0;
            end
            TRANSFER_SAMPLE:
            begin
                control_go              <= 1'b0;
                if (user_buffer_full == 1'b1)
                begin
                    user_write_buffer       <= 1'b0;
                    buffer_overflow         <= 1'b1;
                end
                else
                begin
                    user_write_buffer       <= 1'b1 ;
                    control_write_length    <= control_write_length + BYTEENABLEWIDTH;
                    control_write_base      <= base_register + committed_data;
                    user_buffer_data        <= dut_data_o[15:0];
                    if (dev_total_read_cnt  == 0)
                    begin
                        dev_total_read_cnt <= 0;
                    end
                    else
                    begin
                        dev_total_read_cnt  <= dev_total_read_cnt - 32'b1;
                    end
                end
            end
            WRITE_FIFO:
            begin
                acquisition_complete    <= 1'b0;
                user_write_buffer       <= 1'b0;
                if(control_done == 1'b1)
                begin
                    control_go  <=  1'b1;
                end
                else
                begin
                    control_go <= 1'b0;
                end
            end
            DMA_WRITE:
            begin
                committed_data              <= committed_data + control_write_length ;
                control_write_length        <= 32'h0;
                control_go                  <= 1'b0;
                if(dev_total_read_cnt == 0)
                begin
                    acquisition_complete    <= 1'b1;
                end
                else
                begin
                    acquisition_complete    <= 1'b0;
                end
            end
        endcase
    end
end

//update the ADC next state
always @(core_state, control_register, data_rd_ready, dev_total_read_cnt, control_done, sync)
begin
    core_next_state <= core_state;
    case (core_state)
        IDLE:
        begin
            if (control_register[0]== 1'b1)
            begin
                core_next_state <= SYNCHRONIZE;
            end
            else
            begin
                core_next_state <= IDLE;
            end
        end
        SYNCHRONIZE:
        begin
            if ( sync == 1'b1 )
            begin
                core_next_state <= ACQ_SAMPLE;
            end
        end
        ACQ_SAMPLE:
        begin
            if(data_rd_ready == 1'b1)
            begin
                core_next_state <= TRANSFER_SAMPLE;
            end
        end
        TRANSFER_SAMPLE:
        begin
          core_next_state <= WRITE_FIFO;
        end
        WRITE_FIFO:
        begin
            if (control_done == 1'b1)
            begin
                core_next_state <= DMA_WRITE;
            end
            else
            begin
                core_next_state <= ACQ_SAMPLE;
            end
        end
        DMA_WRITE:
        begin
            if (dev_total_read_cnt == 0)
            begin
                core_next_state <= IDLE;
            end
            else
            begin
                core_next_state <= ACQ_SAMPLE;
            end
        end
        default:
        begin
            core_next_state <= IDLE;
        end
    endcase
end

//------------------------------------------------------------------------------
//----------- Modules Instantiations -------------------------------------------
//------------------------------------------------------------------------------
write_master #(
    .DATAWIDTH(DATAWIDTH),
    .BYTEENABLEWIDTH(BYTEENABLEWIDTH),
    .ADDRESSWIDTH(ADDRESSWIDTH),
    .FIFODEPTH(FIFODEPTH),
    .FIFODEPTH_LOG2(FIFODEPTH_LOG2),
    .FIFOUSEMEMORY(FIFOUSEMEMORY) 
    ) w_m_i1(
    .clk(clk_i),
    .reset (reset),
    .control_fixed_location(control_fixed_location),
    .control_write_base(control_write_base),
    .control_write_length (control_write_length),
    .control_go(control_go),
    .control_done(control_done),
    .user_write_buffer(user_write_buffer),
    .user_buffer_data(user_buffer_data),
    .user_buffer_full(user_buffer_full),
    .master_address(avalon_master_address_o),
    .master_write(avalon_master_write_o),
    .master_byteenable(avalon_master_byteenable_o),
    .master_writedata(avalon_master_writedata_o),
    .master_waitrequest(avalon_master_waitrequest_i)
    );

    AD7606 ad7606_i1(
    //clock and reset signals
    .fpga_clk_i(clk_i),
    .reset_n_i(~reset),

    //IP control and data interface
    .wr_data_n_i(dut_wr_data_n), 
    .data_i(dut_data_i),
    .data_o(dut_data_o),
    .sync_o(sync),
    .data_rd_ready_o(data_rd_ready),
    .data_wr_ready_o (dut_data_wr_ready),

    //AD7606 control and data interface
    .adc_db_i(adc_db_i),
    .adc_busy_i(adc_busy_i),
    .adc_os_o(adc_os_o),
    .adc_range_o(adc_range_o),
    .adc_cs_n_o(adc_cs_n_o),
    .adc_rd_n_o(adc_rd_n_o),
    .adc_reset_o(adc_reset_o),
    .adc_stdby_o(adc_stdby_o),
    .adc_convst_o(adc_convst_o)
    );

endmodule

