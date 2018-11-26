/************************************
�⹦�ܣ�51��Ƭ��18B20���º�����
��Ҫ�����������Ѷ��壺
		#include <reg52.h>
Ӧ�ú�����
			translate(float i,unsigned char r[8])
			read_temper()
�޸���ʷ��
		   	 ���޸��ˡ�   ���޸����ݡ�  ���޸�ʱ�䡯
				��			��			��
����޸�ʱ�䣺2013-02-04
���ߣ� ATIME	��Ȩ����
ʵ������
			#include <reg52.h>
			#include <string.h>
			#include "atime_lcd1602.h"
			#include "atime_18b20.h"
			
			void main()
			{
				unsigned char a[8];
				float i;
				bit j;
				int_lcd1602(rightmove, cursornotdisplay);
				while(1)
				{
					j =int_18b20();
					if(j == 0)
					{
						i =read_temper();
						translate(i,a);
						set1602(clear1602);
						print1602(a,1,3);
						waitms(1000);
					}
					else
					{
						print1602("Please Cheak",1,2);
					}
				}
			}
		
����������ͣ�
	*** WARNING L16: UNCALLED SEGMENT, IGNORED FOR OVERLAY PROCESS	������ĺ�����û�е��ù��ģ�һ����Ժ��Դ˾���
	123.C(7): error C202: 'riht1602': undefined identifier	 ����������ƴд���󣬸���ƴд���󼴿�
	123.C(14): error C214: illegal pointer conversion    ��Ҫ��������ַ���������������ַ�
***************************************/


#ifndef _DS_18B20_H_ 
#define _DS_18B20_H_


/************************************
��ȫ�ֱ�����
***************************************/

sbit  PIN_DQ =P3^7;			//����18B20��DQ��������I/O��

/************************************
�������ܣ���ʼ��18B20
���ݲ�������
����ֵ��0���ɹ���1��ʧ��	
***************************************/
bit int_18b20(void)
{
	bit a;                         //�洢�Ƿ��⵽DS18B20��0���ڣ�1������
	unsigned char i;
	PIN_DQ =1;
	for(i=0; i<2; i++);
	PIN_DQ =0;
	for(i=0; i<200; i++);
	PIN_DQ =1;
	for(i=0; i<10; i++);
	a =PIN_DQ;
	for(i=0; i<200; i++);
	PIN_DQ =1;
	return (a);
}



/************************************
�������ܣ���18B20дһ�ֽ�
���ݲ�����a������������
����ֵ����	
***************************************/
void write_18b20(unsigned char a)
{
	unsigned char i,j;
	for(i=8; i>0; i--)
	{
		PIN_DQ =1;
		for(j=0; j<=0; j++);
		PIN_DQ =0;
		PIN_DQ =a&0x01;
		for(j=0; j<=10; j++);
		PIN_DQ =1;
		for(j=0; j<1; j++);
		a >>=1;
	}
	for(j=0; j<4; j++);
}



/************************************
�������ܣ���18B20��һ�ֽ�
���ݲ�������
����ֵ��a:���ص�����	
***************************************/
unsigned char read_18b20(void)
{
	unsigned char i,j,a =0x00;
	for(i=8; i>0; i--)
	{
		PIN_DQ =1;
		for(j=0; j<=0; j++);
		PIN_DQ =0;
		a >>=1;
		for(j=0; j<=0; j++);
		PIN_DQ =1;
		for(j=0; j<2; j++);
		if(PIN_DQ ==1)
			a =a|0x80;
		for(j=0; j<8; j++);
	}
	return (a);
}



/************************************
�������ܣ���ȡ�¶�
���ݲ�������
����ֵ��������ֵ���¶�ֵ
ע�⣺��ȡ�¶ȹ����в������жϣ������걾�����������Ҫ�ж�����
	  ��Ҫ���¿������жϣ�EA����	
***************************************/
float read_temper(void)
{
	float temper;
	unsigned char high,low;
	unsigned int i;
	EA =0;			 //��ȡ�¶ȹ����в������жϣ���ֹ��ȡ����
	int_18b20();
	write_18b20(0xcc);
	write_18b20(0x44);
	for(i=0; i<6500; i++);

	int_18b20();
	write_18b20(0xcc);
	write_18b20(0xbe);
	
	low =read_18b20();
	high =read_18b20();
/*
serial_int(enable, baud14400, disable);
send_char(high);					//�������Ƿ���ȡ����ϵ���Դ���ͨ��
send_char(low);						//�Ѿ�����14400������11.0592M����
*/
	if(high >248)
	{
		high =~high;
		low =~low;
		temper =(-0.0625)*(low+1+256.0*high);
	}
	else
		temper =0.0625*(low+256.0*high);

	return (temper);
}



/************************************
�������ܣ��Ż���ʾ����
		  ����������ȥ������ǰ����������㡣
���ݲ�����
		a[8]:ת���������洢λ��
����ֵ����
ע�� û��ͨ������ֵ���ؽ����
	 �������ú���������������ԭ�ڴ�ռ���һ����
***************************************/
void zero_better(unsigned char a[8])
{
	unsigned int i;
	i =100*(a[1]-48)+10*(a[2]-48)+(a[3]-48);   //��48��char��תint�ͼ���
	if(i >=100);
	else
	if(i >=10)
	{
		a[1] =a[0];
		a[0] =' ';	
	}
	else
	if(i >=0)
	{
		a[2] =a[0];
		a[1] =' ';
		a[0] =' ';
	}
}



/************************************
�������ܣ�����ת�ַ�����
���ݲ�����
		i:	 ��ת��������
		r[8]:ת���������洢λ��
����ֵ����
ע�� û��ͨ������ֵ���ؽ����
	 �������ú���������������ԭ�ڴ�ռ���һ����
***************************************/
void translate(float i,unsigned char r[8])
{
	unsigned int j;
	if(i >0.0)
		r[0] =' ';
	else 
	{
		r[0] ='-';
		i =(-1)*i;
	}
   	i =i*100;
	j =(int)i;
	r[1] =j/10000+48;
	r[2] =(j%10000)/1000+48;
	r[3] =(j%1000)/100+48;
	r[4] ='.';
	r[5] =(j%100)/10+48;
	r[6] =j%10+48;
	r[7] =0x00;	

	zero_better(r);
}



#endif