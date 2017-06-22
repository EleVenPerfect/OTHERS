#include "./lcd/bsp_lcd.h"  

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

unsigned char TFT480800START   = 0xEE;
										//������ʼ��־printf("%c",TFT480800START);
unsigned char TFT480800STOP[4]	= {0xFF,0xFC,0xFF,0xFF};
unsigned char TFT480800STOPUSER[4]	= {0xFF,0xFC,0xFF,0xAE};
										//������ֹ��־printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );

void LCD_valtage_show(void)
{
	unsigned short int i;	
	unsigned short int iTemp;
	unsigned char a[6] = {0xB1, 0x10, 0x00, 0x00, 0x00, 0x00};
	unsigned char c[9] = {0xB1, 0x32, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x02};
	unsigned char d,e;
	/* ��ӡ�ɼ����� */
	for (i = 0; i < CH_NUM; i++)
	{
			iTemp = s_volt[i];	/* uV  */
			a[5] = i+1;
			printf("%c",TFT480800START);
			printf("%c%c%c%c%c%c", a[0],a[1],a[2],a[3],a[4],a[5]);
			if (s_dat[i] < 0)
			{
						iTemp = -iTemp;
						printf("-%d.%d%d%d", iTemp /1000, (iTemp%1000)/100, (iTemp%100)/10, iTemp%10);
			}
			else
			{
						printf("+%d.%d%d%d", iTemp /1000, (iTemp%1000)/100, (iTemp%100)/10, iTemp%10);                    
			}
			printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
	}
	
	printf("%c",TFT480800START);
	printf("%c%c%c%c%c%c%c%c%c", c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]);
	d = ((s_dat[3]&0xff00)>>8);
	e = (s_dat[3]&0xff);
	printf("%c%c", d, e );
	printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
	
}

//�л�����
void LCD_screen_show(unsigned char num)
{
		unsigned char a[3] = { 0xB1, 0x00, 0x00};
		printf("%c",TFT480800START);
		a[2] += num;
		printf("%c%c%c", a[0],a[1],a[2]);
		printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
}
