#include "./lcd/bsp_lcd.h"  


unsigned char TFT480800START   = 0xEE;
										//发送起始标志printf("%c",TFT480800START);
unsigned char TFT480800STOP[4]	= {0xFF,0xFC,0xFF,0xFF};
unsigned char TFT480800STOPUSER[4]	= {0xFF,0xFC,0xFF,0xAE};
										//发送终止标志printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
unsigned char TFT480800STOPPC[4]	= {0xFF,0xFC,0xFF,0xEA};//PC指令集


ADC_SYS_CFG adc_sys_cfg;	//配置信息
OBJ_CFG obj_cfg;					//控件信息
unsigned char display_data[50];

/*自定义指令格式：
起始标志： TFT480800START
在PC、LCD发送过程中，均为TFT480800START作为起始标志，当接收到消息后，单片机内部将PC的起始标志加一；
结束标志：	TFT480800STOPUSER
中间分别为：指令类型2；屏幕号2；控件编号2；空间状态0；控件状态1...
指令类型分:B1 10:组态指令；A1 10：用户指令；
屏幕编号分 十位，个位
空间ID分	十位，个位
unsigned char TFT480800___[4]	= {0xEE,0xxx,0xFF,0xFC,0xFF,0xAE};

0xFF,0xFC,0xFF,0xFF：LCD自带指令集
0xFF,0xFC,0xFF,0xAE：LCD用户指令集
0xFF,0xFC,0xFF,0xEA：PC指令集
*/



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


/*****************************************
打印结构体
******************************************/
void struct_print(ADC_SYS_CFG *adc)
{
		printf("Connect mode: %d\r\n",adc->sys_connect_mode);
		printf("Screen ID: %d\r\n",adc->screen_id);
		printf("Scmpling mode: %d\r\n",adc->sys_sampling_mode);
		printf("Sampling space time: %d\r\n",adc->sys_sampling_analyze_space_time);
		printf("Sampling time： %d\r\n",adc->sys_sampling_analyze_time);
		printf("Sampling mercury delay: %d\r\n",adc->sys_sampling_mercury_delay);
		printf("Samplinganalyse space time: %d\r\n",adc->sys_sampling_analyze_space_time);
		printf("Sorption time: %d\r\n",adc->sys_sorption_time);
		printf("Sorption flux_h: %d\r\n",adc->sys_sorption_flux_h);
		printf("Sorption flux_l: %d\r\n",adc->sys_sorption_flux_l);
	}

	
	
	//更新画面id文字画面
void LCD_refresh_text( unsigned char screen, unsigned char id, unsigned int value_h, unsigned int value_l)
{
		unsigned char a[6] = { 0xB1, 0x10, 0x00, 0x00, 0x00, 0x00};
		printf("%c",TFT480800START);
		a[3] = screen;
		a[5] =id;
		printf("%c%c%c%c%c%c", a[0],a[1],a[2],a[3],a[4],a[5]);
		if(value_h!=0)
		{
				printf("%d",value_h);
		}
		printf("%d",value_l);	
		printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
}

/*
*********************************************************************************************************
*	函 数 名: AD7606_Disp
*	功能说明: 显示采样后的数据
*	形    参：无
*	返 回 值: 无
*********************************************************************************************************
*/
void AD7606_display_screen(unsigned int screen, unsigned int id, unsigned int ch)
{
	unsigned short int iTemp;
	unsigned char a[6] = { 0xB1, 0x10, 0x00, 0x00, 0x00, 0x00};

	/* 打印采集数据 */
	printf("%c",TFT480800START);        
  iTemp = s_volt[ch];	/* uV  */
	a[3] = screen;
	a[5] =id;
	printf("%c%c%c%c%c%c", a[0],a[1],a[2],a[3],a[4],a[5]);
		if (s_dat[ch] < 0)
		{
			iTemp = -iTemp;
      printf("-%d.%d%d%d V", iTemp /1000, (iTemp%1000)/100, (iTemp%100)/10,iTemp%10);
		}
		else
		{
      printf("+%d.%d%d%d V", iTemp /1000, (iTemp%1000)/100, (iTemp%100)/10,iTemp%10);                    
		}
	printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
}






unsigned char signedshoutint2unsignedchar (signed short int dat)
{
		unsigned char i,j;
		if(dat < 0)
		{
				i = 0;
				dat = -dat;
		}
		else 
				i = 1;
		j = 0xff/2;
		if(i==0)
		{
				j -= (dat>>8);/////////////////////////////
		}
		else
		{
				j += (dat>>8);///////////////////////////////
		}	
		return j;
}
	//更新画面曲线
void LCD_refresh_graph( unsigned char screen, unsigned char id, signed short int data)
{
		unsigned char a[9] = { 0xB1, 0x32, 0x00, 0x00, 0x00, 0x00,0,0,1};
		unsigned char show_data;
		printf("%c",TFT480800START);
		a[3] = screen;
		a[5] =id;
		printf("%c%c%c%c%c%c%c%c%c", a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);
		show_data = signedshoutint2unsignedchar(data);
		printf("%c",show_data);
		
		printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
}


	//更新画面文字控件
OBJ_CFG LCD_get_slider_value( unsigned char data[])
{
		OBJ_CFG obj;
	
		obj.screenid = (data[3]<<8) +data[4];
		obj.id			 = (data[5]<<8) +data[6];
		obj.obj_type =  data[7];
		obj.value_h  = (data[8]<<8) +data[9];
		obj.value_l  = (data[10]<<8) +data[11];
	
		return obj;
}

unsigned char * convert_data(unsigned int value_h, unsigned int value_l)
{
		if(value_h==0)
		{
				
		}
		else
		{
		
		}
		return display_data;
}
