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


typedef struct
{
		unsigned char sys_connect_mode;//0联机，1离线
		unsigned char screen_id;
		unsigned char sys_sampling_mode;
		unsigned char sys_sampling_analyze_time;
		unsigned char sys_sampling_space;
		unsigned char sys_sampling_mercury_delay;
		unsigned char sys_sampling_analyze_space_time;
		unsigned char sys_sorption_time;
		unsigned char sys_sorption_flux;
}ADC_SYS_CFG;




extern unsigned char TFT480800START;
extern unsigned char TFT480800STOP[4];
extern unsigned char TFT480800STOPUSER[4];
extern ADC_SYS_CFG adc_sys_cfg;



void LCD_valtage_show(void);
void LCD_screen_show(unsigned char num);
unsigned char str_compare( char a[], unsigned char b[], unsigned char num);
void struct_print(ADC_SYS_CFG *adc);



#endif

















