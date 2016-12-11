`timescale 1ns / 1ps

//VIP工程顶层模块
module vip(
			ext_clk,
			ext_rst_n,
			led,
			
			data_o,
			sync_o,
			data_rd_ready_o,
			
    //AD7606 control and data interface
			adc_db,       // ADC parallel data bus
			adc_busy,     // ADC BUSY signal
			adc_os,       // ADC OVERSAMPLING signals
			adc_rage,     // ADC RANGE signal
			adc_cs,       // ADC CS signal
			adc_rd,       // ADC RD signal
			adc_rst,      // ADC RESET signal
			
			adc_cva,      // ADC CONVST signal
			adc_cvb,
			adc_range,
			test
		);
	//外部输入时钟和复位接口
input ext_clk;		//外部25MHz输入时钟	
input ext_rst_n;	//外部低电平复位信号输入	
	//LED指示灯接口
output led;		//用于测试的LED指示灯
		
	input  					adc_range;
	 output  [15:0]	data_o;
	 output 	data_rd_ready_o;
    //AD7606 control and data interface
    input       [15:0]  adc_db;       // ADC parallel data bus
    input               adc_busy;     // ADC BUSY signal
    output      [2:0]   adc_os;       // ADC OVERSAMPLING signals
    output              adc_rage;    // ADC RANGE signal
    output              adc_cs;     // ADC CS signal
    output              adc_rd;     // ADC RD signal
    output              adc_rst;    // ADC RESET signal
	 
    output              adc_cva;   // ADC CONVST signal
    output              adc_cvb;   // ADC CONVST signal
	 output   				sync_o;
	
	output test;
	
reg test;
always@(posedge adc_convst_o)
	test <= !test;
////////////////////////////////////////////////////		
//系统内部时钟和复位产生模块例化
	//PLL输出复位和时钟，用于FPGA内部系统
wire sys_rst_n;	//系统复位信号，低电平有效
wire clk_25m;		//PLL输出25MHz	
wire clk_33m;		//PLL输出33MHz
wire clk_50m;		//PLL输出50MHz
wire clk_65m;		//PLL输出65MHz
wire clk_100m;	//PLL输出100MHz		

sys_ctrl	uut_sys_ctrl(
				.ext_clk(ext_clk),
				.ext_rst_n(ext_rst_n),
				.sys_rst_n(sys_rst_n),
				.clk_25m(clk_25m),
				.clk_33m(clk_33m),
				.clk_50m(clk_50m),
				.clk_65m(clk_65m),
				.clk_100m(clk_100m)
			);
		
////////////////////////////////////////////////////
//LED闪烁逻辑产生模块例化

led_controller		uut_led_controller(
						.clk(clk_50m),
						.rst_n(sys_rst_n),
						.led(led)
					);


					
					

					
wire  adc_init;
wire 	wr_data_n_i;
wire  [15:0] data_i;
wire  sync_o;
wire  [15:0] data_o;
wire  data_rd_ready_o; 
wire 	adc_convst_o;



assign adc_cva=adc_convst_o;
assign adc_cvb=adc_convst_o;	


////////////////////////////////////////////////////
//ADC7606模块例化					
AD7606_ctr ad7606_ctr(
    .led_clk_i(led),
	 
	 .wr_data_n_i(wr_data_n_i),
	 .data_i(data_i),
	 .rst_ctrl_o(adc_init),
	 .adc_range(adc_range)
);


////////////////////////////////////////////////////
//ADC7606模块例化	
AD7606	ad7606_state(
// port map - connection between master ports and signals/registers
    .fpga_clk_i(clk_50m),
    .reset_n_i(adc_init),
	 //fpga内部时钟复位
    .wr_data_n_i(wr_data_n_i),
    .data_i(data_i),
	 //adc控制信号
    .data_o(data_o),
    .sync_o(sync_o),
	 .data_rd_ready_o(data_rd_ready_o),
	 //adc_ip interface

    .adc_db_i(adc_db),
    .adc_busy_i(adc_busy),
	 .adc_os_o(adc_os), 
    .adc_range_o(adc_rage),
    .adc_cs_n_o(adc_cs),
    .adc_rd_n_o(adc_rd),
    .adc_reset_o(adc_rst),
    .adc_convst_o(adc_convst_o)
	 //adc interface
);


endmodule


