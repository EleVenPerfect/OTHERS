#ifndef __bsp_DAC_H
#define __bsp_DAC_H	 

#include "stm32f4xx.h"
//////////////////////////////////////////////////////////////////////////////////	 
//本程序只供学习使用，未经作者许可，不得用于其它任何用途
//ALIENTEK STM32F407开发板
//DAC 驱动代码	   
//正点原子@ALIENTEK
//技术论坛:www.openedv.com
//创建日期:2014/5/6
//版本：V1.0
//版权所有，盗版必究。
//Copyright(C) 广州市星翼电子科技有限公司 2014-2024
//All rights reserved 
////////////////////////////////////////////////////////////////////////////////// 	

void Dac1_Init(void);		//DAC通道1初始化	 	 
void Dac1_Set_Vol(unsigned int vol);	//设置通道1输出电压
#endif

















