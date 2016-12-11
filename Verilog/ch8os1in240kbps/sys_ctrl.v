`timescale 1ns / 1ps

//系统内部时钟和复位产生模块
module sys_ctrl(
			ext_clk,ext_rst_n,
			sys_rst_n,clk_25m,clk_33m,clk_50m,clk_65m,clk_100m
		);

	//FPGA外部输入时钟和复位	
input ext_clk;		//外部25MHz输入时钟	
input ext_rst_n;	//外部低电平复位信号输入
	//PLL输出复位和时钟，用于FPGA内部系统
output reg sys_rst_n;	//系统复位信号，低电平有效
output clk_25m;		//PLL输出25MHz	
output clk_33m;		//PLL输出33MHz
output clk_50m;		//PLL输出50MHz
output clk_65m;		//PLL输出65MHz
output clk_100m;	//PLL输出100MHz

////////////////////////////////////////////////////
//PLL复位信号产生，高有效
//异步复位，同步释放

reg rst_r1,rst_r2;

always @(posedge ext_clk or negedge ext_rst_n)
	if(!ext_rst_n) rst_r1 <= 1'b0;
	else rst_r1 <= 1'b1;

always @(posedge ext_clk or negedge ext_rst_n)
	if(!ext_rst_n) rst_r2 <= 1'b0;
	else rst_r2 <= rst_r1;

////////////////////////////////////////////////////
//PLL模块例化
wire locked;	//PLL输出锁定状态，高电平有效

pll_controller	pll_controller_inst (
					.areset ( !rst_r2 ),
					.inclk0 ( ext_clk ),
					.c0 ( clk_25m ),
					.c1 ( clk_33m ),
					.c2 ( clk_50m ),
					.c3 ( clk_65m ),
					.c4 ( clk_100m ),
					.locked ( locked )
				);


//----------------------------------------------
//系统复位处理逻辑
reg sys_rst_nr;

always @(posedge clk_100m)
	if(!locked) sys_rst_nr <= 1'b0;
	else sys_rst_nr <= 1'b1;

always @(posedge clk_100m or negedge sys_rst_nr)
	if(!sys_rst_nr) sys_rst_n <= 1'b0;
	else sys_rst_n <= sys_rst_nr;


endmodule

