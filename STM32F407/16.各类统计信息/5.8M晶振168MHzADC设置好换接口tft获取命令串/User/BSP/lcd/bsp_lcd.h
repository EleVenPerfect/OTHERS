#ifndef __bsp_LCD_H
#define __bsp_LCD_H	 

#include "stm32f4xx.h"
#include "bsp_spi_ad7606.h"
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
extern unsigned char TFT480800START;
extern unsigned char TFT480800STOP[4];
extern unsigned char TFT480800STOPUSER[4];


void LCD_valtage_show(void);
void LCD_screen_show(unsigned char num);




#endif

















