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
extern unsigned char TFT480800START;
extern unsigned char TFT480800STOP[4];
extern unsigned char TFT480800STOPUSER[4];
extern unsigned char TFT480800GOTOONLINE[9];
extern unsigned char TFT480800GOTOOFFLINE[9];


void LCD_valtage_show(void);
void LCD_screen_show(unsigned char num);
unsigned char str_compare( char a[], unsigned char b[], unsigned char num);




#endif

















