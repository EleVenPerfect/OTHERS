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
// FILE NAME : AD7606.v
// MODULE NAME : AD7606
// AUTHOR : acostina
// AUTHOR’S EMAIL : adrian.costina@analog.com
// -----------------------------------------------------------------------------
// SVN REVISION: 1420
// -----------------------------------------------------------------------------
// KEYWORDS : AD7606
// -----------------------------------------------------------------------------
// PURPOSE : Driver for the AD7606 8-Channel, 200 KSPS, 16-Bit Parallel ADCs
// -----------------------------------------------------------------------------
// REUSE ISSUES
// Reset Strategy      : Active low reset signal
// Clock Domains       : The design considered an 48 MHz input clock. The
// FPGA_CLOCK_FREQ parameter must be adjusted if the input clock is changed.
// Critical Timing     : N/A
// Test Features       : N/A
// Asynchronous I/F    : N/A
// Instantiations      : N/A
// Synthesizable (y/n) : Y
// Target Device       : AD7606
// Other               : The driver reads data from the ADC in word mode.The
//                      result is forwarded to the upper module.The upper
//                      module or the software needs to know what channels are
//                      forwarded.
//                      If more than one channel is acquired, the upper module
//                      must be able to support the activation of data_rd_ready_o 
//                      signal every 4 clock cycles
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

`timescale 1 ns / 100 ps //Use a timescale that is best for simulation.

//------------------------------------------------------------------------------
//----------- Module Declaration -----------------------------------------------
//------------------------------------------------------------------------------

module AD7606
//----------- Ports Declarations -----------------------------------------------
(
    //clock and reset signals
    input               fpga_clk_i,      //system clock
    input               reset_n_i,       //active low reset signal

    //IP control and data interface
    input               wr_data_n_i,     // active low signal to initiate a data write to the ADC
    input       [15:0]  data_i,          // channel[7:5], os[4:2],standby[1],range[0]
    output reg  [15:0]  data_o,          // data read from the ADC
    output reg          data_rd_ready_o, // when set to high the data read from the ADC is available on the data_o bus
    output reg          data_wr_ready_o, // used to signal the status of an ADC write: 0 - write in progress, 1 - write complete
    output reg          sync_o,          // used to signal the first channel

    //AD7606 control and data interface
    input       [15:0]  adc_db_i,       // ADC parallel data bus
    input               adc_busy_i,     // ADC BUSY signal
    output      [2:0]   adc_os_o,       // ADC OVERSAMPLING signals
    output              adc_range_o,    // ADC RANGE signal
    output  reg         adc_cs_n_o,     // ADC CS signal
    output  reg         adc_rd_n_o,     // ADC RD signal
    output  reg         adc_reset_o,    // ADC RESET signal
    output              adc_stdby_o,    // ADC STAND BY signal
    output  reg         adc_convst_o    // ADC CONVST signal
);

//------------------------------------------------------------------------------
//----------- Wire Declarations ------------------------------------------------
//------------------------------------------------------------------------------
wire [2:0] channel;     // used to configure the number of channels to be read

//------------------------------------------------------------------------------
//----------- Registers Declarations -------------------------------------------
//------------------------------------------------------------------------------

reg [7:0]   adc_state;              // current state for the ADC control state machine
reg [7:0]   adc_next_state;         // next state for the ADC control state machine
reg [15:0]  data_i_s ;              // ADC write data;
reg [31:0]  cycle_cnt;              // cycle time
reg [2:0]   channel_read;           // used to count the number of channels already read
reg         delay_cs;               // used for increasing the time between CS Low and reading data
//------------------------------------------------------------------------------
//----------- Local Parameters -------------------------------------------------
//------------------------------------------------------------------------------

//ADC states
parameter ADC_IDLE_STATE            = 8'b00000001; // Default state
parameter ADC_START_CONV_STATE      = 8'b00000010; // Togle conversion signal
parameter ADC_WAIT_BUSY_HIGH_STATE  = 8'b00000100; // Wait for the Busy signal to go High
parameter ADC_WAIT_BUSY_LOW_STATE   = 8'b00001000; // Wait for the Busy signal to go Low
parameter ADC_CS_RD_LOW_STATE       = 8'b00010000; // Bring CS and RD signals Low
parameter ADC_READDATA_STATE        = 8'b00100000; // Reads data from the ADC
parameter ADC_TRANSFER_DATA_STATE   = 8'b01000000; // Sends data to the upper module
parameter ADC_WAIT_END_STATE        = 8'b10000000; // Waits for the cycle time to end

//ADC timing
parameter real FPGA_CLOCK_FREQ      = 48;   // FPGA clock frequency [MHz]
parameter real ADC_CYCLE_TIME       = 5;    // minimum time between two ADC conversions (Tcyc) [us]

parameter [31:0] ADC_CYCLE_CNT_NO_OS= FPGA_CLOCK_FREQ * ADC_CYCLE_TIME - 2;
parameter [31:0] ADC_CYCLE_CNT_OS2  = 2 * FPGA_CLOCK_FREQ * ADC_CYCLE_TIME - 2;
parameter [31:0] ADC_CYCLE_CNT_OS4  = 4 * FPGA_CLOCK_FREQ * ADC_CYCLE_TIME - 2;
parameter [31:0] ADC_CYCLE_CNT_OS8  = 8 * FPGA_CLOCK_FREQ * ADC_CYCLE_TIME - 2;
parameter [31:0] ADC_CYCLE_CNT_OS16 = 16 * FPGA_CLOCK_FREQ * ADC_CYCLE_TIME - 2;
parameter [31:0] ADC_CYCLE_CNT_OS32 = 32 * FPGA_CLOCK_FREQ * ADC_CYCLE_TIME - 2;
parameter [31:0] ADC_CYCLE_CNT_OS64 = 64 * FPGA_CLOCK_FREQ * ADC_CYCLE_TIME - 2;

//------------------------------------------------------------------------------
//----------- Assign/Always Blocks ---------------------------------------------
//------------------------------------------------------------------------------

assign adc_range_o  = data_i_s[0];
assign adc_stdby_o  = data_i_s[1];
assign adc_os_o     = data_i_s[4:2];
assign channel      = data_i_s[7:5];

//update the ADC timing counters count
always @(posedge fpga_clk_i)
begin
    if(reset_n_i == 0)
    begin
        cycle_cnt       <= ADC_CYCLE_CNT_NO_OS;
    end
    else
    begin
        //update the cycle timer
        if(adc_state == ADC_IDLE_STATE)
        begin
            case(adc_os_o)
                3'h0:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_NO_OS;
                end
                3'h1:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_OS2;
                end
                3'h2:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_OS4;
                end
                3'h3:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_OS8;
                end
                3'h4:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_OS16;
                end
                3'h5:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_OS32;
                end
                3'h6:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_OS64;
                end
                default:
                begin
                    cycle_cnt   <= ADC_CYCLE_CNT_NO_OS;
                end
            endcase
        end
        else if (cycle_cnt != 0)
        begin
            cycle_cnt   <= cycle_cnt - 32'h1;
        end
    end
end

//update the ADC current state and the control signals
always @(posedge fpga_clk_i)
begin
    if(reset_n_i == 0)
    begin
        adc_state   <= ADC_IDLE_STATE;
        adc_reset_o <= 1'b1;
        data_i_s    <= 16'h2;       // By default, the ADC is not in standby
    end
    else
    begin
        adc_state <= adc_next_state;
        case (adc_state)
            ADC_IDLE_STATE:
            begin
                if(wr_data_n_i == 1'b0)
                begin
                    data_i_s        <= data_i;
                    data_wr_ready_o <= 1'b1;
                end
                adc_cs_n_o      <= 1'b1;
                adc_rd_n_o      <= 1'b1;
                adc_convst_o    <= 1'b1;
                data_rd_ready_o <= 1'b0;
                adc_reset_o     <= 1'b0;
                channel_read    <= 3'h0;
                sync_o          <= 1'h1;
                delay_cs        <= 1'h0;
            end
        //ADC write states
            ADC_START_CONV_STATE:
            begin
                adc_cs_n_o      <= 1'b1;
                adc_rd_n_o      <= 1'b1;
                adc_convst_o    <= 1'b0;
                data_wr_ready_o <= 1'b0;
                data_rd_ready_o <= 1'b0;
                adc_reset_o     <= 1'b0;
                sync_o          <= 1'h1;
                delay_cs        <= 1'h0;
            end
            ADC_WAIT_BUSY_HIGH_STATE:
            begin
                adc_cs_n_o      <= 1'b1;
                adc_rd_n_o      <= 1'b1;
                adc_convst_o    <= 1'b1;
                data_wr_ready_o <= 1'b0;
                data_rd_ready_o <= 1'b0;
                adc_reset_o     <= 1'b0;
                sync_o          <= 1'h0;
                delay_cs        <= 1'h0;
            end
            ADC_WAIT_BUSY_LOW_STATE:
            begin
                adc_cs_n_o      <= 1'b1;
                adc_rd_n_o      <= 1'b1;
                adc_convst_o    <= 1'b1;
                data_wr_ready_o <= 1'b0;
                data_rd_ready_o <= 1'b0;
                adc_reset_o     <= 1'b0;
                sync_o          <= 1'h0;
                delay_cs        <= 1'h0;
            end
            ADC_CS_RD_LOW_STATE:
            begin
                adc_cs_n_o      <= 1'b0;
                adc_rd_n_o      <= 1'b0;
                adc_convst_o    <= 1'b1;
                data_wr_ready_o <= 1'b0;
                data_rd_ready_o <= 1'b0;
                adc_reset_o     <= 1'b0;
                sync_o          <= 1'h0;
                delay_cs        <= 1'h1;
            end
            ADC_READDATA_STATE:
            begin
                adc_cs_n_o      <= 1'b0;
                adc_rd_n_o      <= 1'b0;
                adc_convst_o    <= 1'b1;
                data_o          <= adc_db_i;
                data_wr_ready_o <= 1'b0;
                data_rd_ready_o <= 1'b0;
                adc_reset_o     <= 1'b0;
                sync_o          <= 1'h0;
                delay_cs        <= 1'h0;
            end
            ADC_TRANSFER_DATA_STATE:
            begin
                adc_cs_n_o      <= 1'b1;
                adc_rd_n_o      <= 1'b1;
                adc_convst_o    <= 1'b1;
                data_wr_ready_o <= 1'b0;
                data_rd_ready_o <= 1'b1;
                adc_reset_o     <= 1'b0;
                sync_o          <= 1'h0;
                channel_read    <= channel_read + 3'h1;
                delay_cs        <= 1'h0;
            end
            ADC_WAIT_END_STATE:
            begin
                adc_cs_n_o      <= 1'b1;
                adc_rd_n_o      <= 1'b1;
                adc_convst_o    <= 1'b1;
                data_wr_ready_o <= 1'b0;
                data_rd_ready_o <= 1'b0;
                adc_reset_o     <= 1'b0;
                sync_o          <= 1'h0;
                delay_cs        <= 1'h0;
            end
        endcase
    end
end

//update the ADC next state
always @(adc_state, adc_busy_i, cycle_cnt, channel, channel_read, adc_range_o, adc_stdby_o, delay_cs )
begin
    adc_next_state <= adc_state;
    case (adc_state)
    //ADC IDLE state
        ADC_IDLE_STATE:
        begin
            if(adc_stdby_o != 1'b0 )
            begin
                adc_next_state <= ADC_START_CONV_STATE;
            end
        end
    //ADC write states
        ADC_START_CONV_STATE:
        begin
            adc_next_state <= ADC_WAIT_BUSY_HIGH_STATE;
        end
        ADC_WAIT_BUSY_HIGH_STATE:
        begin
            if (adc_busy_i == 1'b1)
            begin
                adc_next_state <= ADC_WAIT_BUSY_LOW_STATE;
            end
        end
        ADC_WAIT_BUSY_LOW_STATE:
        begin
            if ( adc_busy_i == 1'b0 )
            begin
                adc_next_state <= ADC_CS_RD_LOW_STATE;
            end
        end
        ADC_CS_RD_LOW_STATE:
        begin
            if( delay_cs == 1'h1 ) // extend the delay between CS and data read with one clock cycle
            begin
                adc_next_state <= ADC_READDATA_STATE;
            end
        end
        ADC_READDATA_STATE:
        begin
            adc_next_state <= ADC_TRANSFER_DATA_STATE;
        end
        ADC_TRANSFER_DATA_STATE:
        begin
            if( channel == channel_read )
            begin
                adc_next_state <= ADC_WAIT_END_STATE;
            end
            else
            begin
                adc_next_state  <= ADC_CS_RD_LOW_STATE;
            end
        end
        ADC_WAIT_END_STATE:
        begin
            if ( cycle_cnt == 32'b0 )
            begin
                adc_next_state <= ADC_IDLE_STATE;
            end
        end
    //default action
        default:
        begin
            adc_next_state <= ADC_IDLE_STATE;
        end
    endcase
end

endmodule
