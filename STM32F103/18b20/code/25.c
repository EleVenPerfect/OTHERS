
#include <reg52.h>
#include <intrins.h>
#include "ds18b20.h"
//#include "temp.h"
#define uint unsigned int
#define uchar unsigned char
#define delayNOP() {_nop_();_nop_();_nop_();_nop_();}


sbit LCD_RS = P2^0;
sbit LCD_RW = P2^1;
sbit LCD_EN = P2^2;
sbit motor_EN=P3^2;//���ʹ��
sbit motor_A=P3^0;//������ƽ�
sbit motor_B=P3^1;//������ƽ�
sbit key_set=P3^4;//����
sbit key_add=P3^5;//��
sbit key_cl=P3^6; //��
sbit beep=P1^0;//������
bit flag=0;//����ת��־λ��0Ϊ����1Ϊ��
bit key_flag=0;//������־λ��1ʱ�������¶�
uchar code Temp_Disp_Title[]={"Set Temp:"};
uchar Current_Temp_Display_Buffer[]={"Act Temp:"};

int temp_flag=1;//�¶�����ֵ��0Ϊ����1Ϊ��
int Act_temp=0;//ʵ���¶�
int set_temp=25;//�����¶�
float Act_temp_float = 0.0;

void DelayXus(uint x)
{
 	uchar i;
	while(x--)
	{
	 	for(i=0;i<200;i++);
	}
}

void Delay1us(uint x)
{
	while(x--);
}
bit LCD_Busy_Check()
{
 	bit result;
	LCD_RS = 0;
	LCD_RW = 1;
	LCD_EN = 1;
	delayNOP();
	result = (bit)(P0&0x80);
	LCD_EN=0;
	return result;
}

void Write_LCD_Command(uchar cmd)
{
	while(LCD_Busy_Check());
	LCD_RS = 0;
	LCD_RW = 0;
	LCD_EN = 0;
	_nop_();
	_nop_();
	P0 = cmd;
	delayNOP();
	LCD_EN = 1;
	delayNOP();
	LCD_EN = 0;
}

void Write_LCD_Data(uchar dat)
{
	while(LCD_Busy_Check());
	LCD_RS = 1;
	LCD_RW = 0;
	LCD_EN = 0;
	P0 = dat;
	delayNOP();
	LCD_EN = 1;
	delayNOP();
	LCD_EN = 0;
}

void LCD_Initialise()
{
 	Write_LCD_Command(0x01);
	DelayXus(5);
	Write_LCD_Command(0x38);
	DelayXus(5);
	Write_LCD_Command(0x0c);
	DelayXus(5);
	Write_LCD_Command(0x06);
	DelayXus(5);	
}

void Set_LCD_POS(uchar pos)
{
 	Write_LCD_Command(pos|0x80);	
}

void temp_handle()//�¶ȴ���
{
//	int temp;
	float tp;
	unsigned char a[8]; //���û��ֻ������ȥ������
	bit j;
	j =int_18b20();
	tp =read_temper();
//  temp=Ds18b20ReadTemp();//��ȡ�¶�
//	if(temp< 0)				//���¶�ֵΪ����
//  	{

//		//��Ϊ��ȡ���¶���ʵ���¶ȵĲ��룬���Լ�1����ȡ�����ԭ��
//		temp=temp-1;
//		temp=~temp;
//		tp=temp;
//		temp=tp*0.0625*100+0.5;	
//		if(temp%10!=6 )//����
//		if(temp%10!=3 )//����
//		temp_flag=0;
//		//������С�����*100��+0.5���������룬��ΪC���Ը�����ת��Ϊ���͵�ʱ���С����
//		//��������Զ�ȥ���������Ƿ����0.5����+0.5֮�����0.5�ľ��ǽ�1�ˣ�С��0.5�ľ�
//		//�����0.5��������С������档
// 
//  	}
// 	else
//  	{	

//		tp=temp;//��Ϊ���ݴ�����С�������Խ��¶ȸ���һ�������ͱ���
//		//����¶���������ô����ô������ԭ����ǲ���������
//		temp=tp*0.0625*100+0.5;	
//		//������С�����*100��+0.5���������룬��ΪC���Ը�����ת��Ϊ���͵�ʱ���С����
//		//��������Զ�ȥ���������Ƿ����0.5����+0.5֮�����0.5�ľ��ǽ�1�ˣ�С��0.5�ľ�
//		//�����0.5��������С������档
//		if(temp%10!=6 )//����
//		if(temp%10!=3 )//����		
//		temp_flag=1;
//	}
//	if(temp%10!=6 )//����
//	if(temp%10!=3 )//����
	Act_temp=(int)(tp);//ʵ���¶�
	Act_temp_float = tp;
	translate(tp,a);//���û��ֻ������ȥ������
}

void Delay(uint x)
{
 	while(--x);
}



void Display_Temperature()
{
 	uchar i;
	Set_LCD_POS(0x00);//��ʾλ��
	for(i=0;i<9;i++)
	{
		Write_LCD_Data(Temp_Disp_Title[i]); //��ʾSet Temp:	
	}
	Set_LCD_POS(0x0a);//��ʾλ��
	Write_LCD_Data(set_temp/10+0x30); //��ʾ�����¶�
	Write_LCD_Data(set_temp%10+0x30);
	Set_LCD_POS(0x0e);
	Write_LCD_Data('C');
	Set_LCD_POS(0x40);
	for(i=0;i<9;i++)
	{
		Write_LCD_Data(Current_Temp_Display_Buffer[i]);//��ʾAct Temp: 	
	}		
	Set_LCD_POS(0x4A);
	Write_LCD_Data(Act_temp/10%10+0x30);
	Write_LCD_Data(Act_temp%10+0x30);//��ʾʵ���¶�
	Write_LCD_Data('.');
	Write_LCD_Data(((int)(Act_temp_float*10))%10+0x30);
	Set_LCD_POS(0x4e);
	Write_LCD_Data('C');
}

//�¶ȿ���
void ctrl_temp()
{
	if(Act_temp>set_temp+2)//ʵ���¶ȴ��������¶ȣ����䣬2�����䣬
	{
		  motor_EN=1;//ʹ��
		  motor_A=1;
		  flag=0;
		  beep=0;//�򿪷�����
	}
	else if(Act_temp<set_temp-2)   //ʵ���¶�С�������¶� ������ 2�����䣬
	{
		 motor_EN=1;//ʹ��
		 motor_B=1;
		 flag=1;
		 beep=0;//�򿪷�����
	}
	else
	{
		 motor_EN=0;//�ر�
		 beep=1;//�رշ�����
	}	
}

void key() //�����ж�
{
	if(key_set==0)
	{
		Delay1us(10);
		if(key_set==0)
		{
			key_flag=~key_flag;//ȡ��
		}
		while(!key_set);
	}
	if(key_flag)//Ϊ1 ʱ��Ӧ�Ӽ���
	{
		if(key_add==0)
		{
			Delay1us(10);
			if(key_add==0)
			{
				set_temp++;//��
			}
			while(!key_add);
		}
		if(key_cl==0)
		{
			Delay1us(10);
			if(key_cl==0)
			{
				set_temp--;//��
			}
			while(!key_cl);
		}
	}	
}
void main()
{
	bit j;
 	LCD_Initialise();
	j = int_18b20();
	while(j == 1)
	{
			j = int_18b20();
	}
	Act_temp_float=read_temper();

	Delay(50000);
	while(1)
	{

 		temp_handle();//��ȡ�¶�
		Display_Temperature();//��ʾ�¶�
		ctrl_temp();//�¶��ж�
		key();//����
		if(flag)//���ȣ�B�Ź̶���A�����Pwm��
		{
			motor_A=0;
			Delay1us(set_temp*150);//�¶Ȳ�Խ���ٶ�Խ��
			motor_A=1;
			Delay1us(10000-set_temp*150);//�¶Ȳ�Խ���ٶ�Խ��
		}
		else  //����A�Ź̶���B�����Pwm��
		{
			motor_B=0;
			Delay1us(Act_temp*150);//�¶Ȳ�Խ���ٶ�Խ��
			motor_B=1;
			Delay1us(10000-Act_temp*150);
			//Delay1us(((Act_temp/10-set_temp*10)));//�¶Ȳ�Խ���ٶ�Խ��
		}		
	}

}




