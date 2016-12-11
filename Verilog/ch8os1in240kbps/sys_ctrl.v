`timescale 1ns / 1ps

//ϵͳ�ڲ�ʱ�Ӻ͸�λ����ģ��
module sys_ctrl(
			ext_clk,ext_rst_n,
			sys_rst_n,clk_25m,clk_33m,clk_50m,clk_65m,clk_100m
		);

	//FPGA�ⲿ����ʱ�Ӻ͸�λ	
input ext_clk;		//�ⲿ25MHz����ʱ��	
input ext_rst_n;	//�ⲿ�͵�ƽ��λ�ź�����
	//PLL�����λ��ʱ�ӣ�����FPGA�ڲ�ϵͳ
output reg sys_rst_n;	//ϵͳ��λ�źţ��͵�ƽ��Ч
output clk_25m;		//PLL���25MHz	
output clk_33m;		//PLL���33MHz
output clk_50m;		//PLL���50MHz
output clk_65m;		//PLL���65MHz
output clk_100m;	//PLL���100MHz

////////////////////////////////////////////////////
//PLL��λ�źŲ���������Ч
//�첽��λ��ͬ���ͷ�

reg rst_r1,rst_r2;

always @(posedge ext_clk or negedge ext_rst_n)
	if(!ext_rst_n) rst_r1 <= 1'b0;
	else rst_r1 <= 1'b1;

always @(posedge ext_clk or negedge ext_rst_n)
	if(!ext_rst_n) rst_r2 <= 1'b0;
	else rst_r2 <= rst_r1;

////////////////////////////////////////////////////
//PLLģ������
wire locked;	//PLL�������״̬���ߵ�ƽ��Ч

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
//ϵͳ��λ�����߼�
reg sys_rst_nr;

always @(posedge clk_100m)
	if(!locked) sys_rst_nr <= 1'b0;
	else sys_rst_nr <= 1'b1;

always @(posedge clk_100m or negedge sys_rst_nr)
	if(!sys_rst_nr) sys_rst_n <= 1'b0;
	else sys_rst_n <= sys_rst_nr;


endmodule

