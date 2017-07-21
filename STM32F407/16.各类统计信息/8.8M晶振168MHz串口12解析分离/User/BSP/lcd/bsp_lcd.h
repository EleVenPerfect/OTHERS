#ifndef __bsp_LCD_H
#define __bsp_LCD_H	 

#include "stm32f4xx.h"
#include "bsp_spi_ad7606.h"
//////////////////////////////////////////////////////////////////////////////////	 
//������ֻ��ѧϰʹ�ã�δ��������ɣ��������������κ���;
//ALIENTEK STM32F407������
//DAC ��������	   
//����ԭ��@ALIENTEK
//������̳:www.openedv.com
//��������:2014/5/6
//�汾��V1.0
//��Ȩ���У�����ؾ���
//Copyright(C) ������������ӿƼ����޹�˾ 2014-2024
//All rights reserved 
////////////////////////////////////////////////////////////////////////////////// 	


typedef struct
{
		unsigned int sys_connect_mode;//0������1����
		unsigned int screen_id;
		unsigned int sys_sampling_mode;
		unsigned int sys_sampling_analyze_time;
		unsigned int sys_sampling_space;
		unsigned int sys_sampling_mercury_delay;
		unsigned int sys_sampling_analyze_space_time;
		unsigned int sys_sorption_time;
		unsigned int sys_sorption_flux_h;
		unsigned int sys_sorption_flux_l;
}ADC_SYS_CFG;


typedef struct
{
		unsigned int  screenid;
		unsigned int  id;
		unsigned char obj_type;
		unsigned int 	value_h;
		unsigned int  value_l;
}OBJ_CFG;



extern unsigned char TFT480800START;
extern unsigned char TFT480800STOP[4];
extern unsigned char TFT480800STOPUSER[4];
extern unsigned char TFT480800STOPPC[4];
extern ADC_SYS_CFG adc_sys_cfg;
extern OBJ_CFG obj_cfg;
extern unsigned char display_data[];


void LCD_valtage_show(void);
void LCD_screen_show(unsigned char num);
unsigned char str_compare( char a[], unsigned char b[], unsigned char num);
void struct_print(ADC_SYS_CFG *adc);
void AD7606_display_screen(unsigned int screen, unsigned int id, unsigned int ch);
void LCD_refresh_text( unsigned char screen, unsigned char id, unsigned int value_h, unsigned int value_l);
void LCD_refresh_graph( unsigned char screen, unsigned char id, signed short int data);
#endif

















