`timescale 1ns / 1ps

//LED闪烁逻辑产生模块
module led_controller(
			clk,rst_n,
			led
		);
	//时钟和复位接口
input clk;		//25MHz输入时钟	
input rst_n;	//低电平系统复位信号输入	
	//LED指示灯接口
output led;		//用于测试的LED指示灯
		
////////////////////////////////////////////////////		
//计数产生LED闪烁频率	
reg[23:0] cnt;

always @(posedge clk or negedge rst_n)
	if(!rst_n) cnt <= 24'd0;
	else cnt <= cnt+1'b1;

assign led = cnt[23];	
	

endmodule

