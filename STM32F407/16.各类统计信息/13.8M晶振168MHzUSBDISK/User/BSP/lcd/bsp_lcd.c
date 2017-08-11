#include "./lcd/bsp_lcd.h"  


unsigned char TFT480800START   = 0xEE;
										//������ʼ��־printf("%c",TFT480800START);
unsigned char TFT480800STOP[4]	= {0xFF,0xFC,0xFF,0xFF};
unsigned char TFT480800STOPUSER[4]	= {0xFF,0xFC,0xFF,0xAE};
										//������ֹ��־printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
unsigned char TFT480800STOPPC[4]	= {0xFF,0xFC,0xFF,0xEA};//PCָ�


ADC_SYS_CFG adc_sys_cfg;	//������Ϣ
OBJ_CFG obj_cfg;					//�ؼ���Ϣ
unsigned char display_data[50];

/*�Զ���ָ���ʽ��
��ʼ��־�� TFT480800START
��PC��LCD���͹����У���ΪTFT480800START��Ϊ��ʼ��־�������յ���Ϣ�󣬵�Ƭ���ڲ���PC����ʼ��־��һ��
������־��	TFT480800STOPUSER
�м�ֱ�Ϊ��ָ������2����Ļ��2���ؼ����2���ռ�״̬0���ؼ�״̬1...
ָ�����ͷ�:B1 10:��ָ̬�A1 10���û�ָ�
��Ļ��ŷ� ʮλ����λ
�ռ�ID��	ʮλ����λ
unsigned char TFT480800___[4]	= {0xEE,0xxx,0xFF,0xFC,0xFF,0xAE};

0xFF,0xFC,0xFF,0xFF��LCD�Դ�ָ�
0xFF,0xFC,0xFF,0xAE��LCD�û�ָ�
0xFF,0xFC,0xFF,0xEA��PCָ�
*/



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
		unsigned char a[4] = { 0xB1, 0x00, 0x00};
		printf("%c",TFT480800START);
		a[3] += num;
		printf("%c%c%c%c", a[0],a[1],a[2],a[3]);
		printf("%c%c%c%c",TFT480800STOP[0],TFT480800STOP[1],TFT480800STOP[2],TFT480800STOP[3] );
}


/*****************************************
�Ա��ַ���
����0��ͬ
����1��ͬ
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
��ӡ�ṹ��
******************************************/
void struct_print(ADC_SYS_CFG *adc)
{
		printf("Connect mode: %d\r\n",adc->sys_connect_mode);
		printf("Screen ID: %d\r\n",adc->screen_id);
		printf("Scmpling mode: %d\r\n",adc->sys_sampling_mode);
		printf("Sampling space time: %d\r\n",adc->sys_sampling_analyze_space_time);
		printf("Sampling time�� %d\r\n",adc->sys_sampling_analyze_time);
		printf("Sampling mercury delay: %d\r\n",adc->sys_sampling_mercury_delay);
		printf("Samplinganalyse space time: %d\r\n",adc->sys_sampling_analyze_space_time);
		printf("Sorption time: %d\r\n",adc->sys_sorption_time);
		printf("Sorption flux_h: %d\r\n",adc->sys_sorption_flux_h);
		printf("Sorption flux_l: %d\r\n",adc->sys_sorption_flux_l);
	}

	
	
	//���»���id���ֻ���
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
*	�� �� ��: AD7606_Disp
*	����˵��: ��ʾ�����������
*	��    �Σ���
*	�� �� ֵ: ��
*********************************************************************************************************
*/
void AD7606_display_screen(unsigned int screen, unsigned int id, unsigned int ch)
{
	unsigned short int iTemp;
	unsigned char a[6] = { 0xB1, 0x10, 0x00, 0x00, 0x00, 0x00};

	/* ��ӡ�ɼ����� */
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
	//���»�������
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


	//���»������ֿؼ�
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
