#include "./lcd/bsp_lcd.h"  

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

unsigned char TFT480800START   = 0xEE;
										//发送起始标志printf("%c",TFT480800START);
unsigned char TFT480800STOP[4]	= {0xFF,0xFC,0xFF,0xFF};
unsigned char TFT480800STOPUSER[4]	= {0xFF,0xFC,0xFF,0xAE};
										//发送终止标志printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );

/*自定义指令格式：
起始标志： TFT480800START
结束标志：	TFT480800STOPUSER
中间分别为：屏幕号；控件类型；控件编号；空间状态0；控件状态1...
unsigned char TFT480800___[4]	= {0xEE,0xxx,0xFF,0xFC,0xFF,0xAE};
*/

unsigned char TFT480800GOTOOFFLINE[9]	= {0xEE,0x01,0x01,0x00,0x01,0xFF,0xFC,0xFF,0xAE};
unsigned char TFT480800GOTOONLINE[9]	= {0xEE,0x01,0x01,0x01,0x01,0xFF,0xFC,0xFF,0xAE};

void LCD_valtage_show(void)
{
	unsigned short int i;	
	unsigned short int iTemp;
	unsigned char a[6] = {0xB1, 0x10, 0x00, 0x00, 0x00, 0x00};
	unsigned char c[9] = {0xB1, 0x32, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x02};
	unsigned char d,e;
	/* 打印采集数据 */
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

//切换画面
void LCD_screen_show(unsigned char num)
{
		unsigned char a[4] = { 0xB1, 0x00, 0x00};
		printf("%c",TFT480800START);
		a[3] += num;
		printf("%c%c%c%c", a[0],a[1],a[2],a[3]);
		printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
}


/*****************************************
对比字符串
返回0不同
返回1相同
******************************************/
unsigned char str_compare(char a[], unsigned char b[], unsigned char num)
{
		unsigned char i;
		for( i=0; i<num; i++)
		{
				if(a[i]==b[i])
					continue;
				else
					return 0;
		}
		return 1;
}
