
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
sbit motor_EN=P3^2;//电机使能
sbit motor_A=P3^0;//电机控制脚
sbit motor_B=P3^1;//电机控制脚
sbit key_set=P3^4;//设置
sbit key_add=P3^5;//加
sbit key_cl=P3^6; //减
sbit beep=P1^0;//蜂鸣器
bit flag=0;//正反转标志位，0为正，1为反
bit key_flag=0;//按键标志位，1时可设置温度
uchar code Temp_Disp_Title[]={"Set Temp:"};
uchar Current_Temp_Display_Buffer[]={"Act Temp:"};

int temp_flag=1;//温度正负值，0为负，1为正
int Act_temp=0;//实际温度
int set_temp=25;//设置温度
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

void temp_handle()//温度处理
{
//	int temp;
	float tp;
	unsigned char a[8]; //这句没用只是用来去掉警告
	bit j;
	j =int_18b20();
	tp =read_temper();
//  temp=Ds18b20ReadTemp();//读取温度
//	if(temp< 0)				//当温度值为负数
//  	{

//		//因为读取的温度是实际温度的补码，所以减1，再取反求出原码
//		temp=temp-1;
//		temp=~temp;
//		tp=temp;
//		temp=tp*0.0625*100+0.5;	
//		if(temp%10!=6 )//错误
//		if(temp%10!=3 )//错误
//		temp_flag=0;
//		//留两个小数点就*100，+0.5是四舍五入，因为C语言浮点数转换为整型的时候把小数点
//		//后面的数自动去掉，不管是否大于0.5，而+0.5之后大于0.5的就是进1了，小于0.5的就
//		//算加上0.5，还是在小数点后面。
// 
//  	}
// 	else
//  	{	

//		tp=temp;//因为数据处理有小数点所以将温度赋给一个浮点型变量
//		//如果温度是正的那么，那么正数的原码就是补码它本身
//		temp=tp*0.0625*100+0.5;	
//		//留两个小数点就*100，+0.5是四舍五入，因为C语言浮点数转换为整型的时候把小数点
//		//后面的数自动去掉，不管是否大于0.5，而+0.5之后大于0.5的就是进1了，小于0.5的就
//		//算加上0.5，还是在小数点后面。
//		if(temp%10!=6 )//错误
//		if(temp%10!=3 )//错误		
//		temp_flag=1;
//	}
//	if(temp%10!=6 )//错误
//	if(temp%10!=3 )//错误
	Act_temp=(int)(tp);//实际温度
	Act_temp_float = tp;
	translate(tp,a);//这句没用只是用来去掉警告
}

void Delay(uint x)
{
 	while(--x);
}



void Display_Temperature()
{
 	uchar i;
	Set_LCD_POS(0x00);//显示位置
	for(i=0;i<9;i++)
	{
		Write_LCD_Data(Temp_Disp_Title[i]); //显示Set Temp:	
	}
	Set_LCD_POS(0x0a);//显示位置
	Write_LCD_Data(set_temp/10+0x30); //显示设置温度
	Write_LCD_Data(set_temp%10+0x30);
	Set_LCD_POS(0x0e);
	Write_LCD_Data('C');
	Set_LCD_POS(0x40);
	for(i=0;i<9;i++)
	{
		Write_LCD_Data(Current_Temp_Display_Buffer[i]);//显示Act Temp: 	
	}		
	Set_LCD_POS(0x4A);
	Write_LCD_Data(Act_temp/10%10+0x30);
	Write_LCD_Data(Act_temp%10+0x30);//显示实际温度
	Write_LCD_Data('.');
	Write_LCD_Data(((int)(Act_temp_float*10))%10+0x30);
	Set_LCD_POS(0x4e);
	Write_LCD_Data('C');
}

//温度控制
void ctrl_temp()
{
	if(Act_temp>set_temp+2)//实际温度大于设置温度，制冷，2是区间，
	{
		  motor_EN=1;//使能
		  motor_A=1;
		  flag=0;
		  beep=0;//打开蜂鸣器
	}
	else if(Act_temp<set_temp-2)   //实际温度小于设置温度 ，加热 2是区间，
	{
		 motor_EN=1;//使能
		 motor_B=1;
		 flag=1;
		 beep=0;//打开蜂鸣器
	}
	else
	{
		 motor_EN=0;//关闭
		 beep=1;//关闭蜂鸣器
	}	
}

void key() //按键判断
{
	if(key_set==0)
	{
		Delay1us(10);
		if(key_set==0)
		{
			key_flag=~key_flag;//取反
		}
		while(!key_set);
	}
	if(key_flag)//为1 时响应加减键
	{
		if(key_add==0)
		{
			Delay1us(10);
			if(key_add==0)
			{
				set_temp++;//加
			}
			while(!key_add);
		}
		if(key_cl==0)
		{
			Delay1us(10);
			if(key_cl==0)
			{
				set_temp--;//减
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

 		temp_handle();//读取温度
		Display_Temperature();//显示温度
		ctrl_temp();//温度判断
		key();//按键
		if(flag)//加热，B脚固定，A脚输出Pwm波
		{
			motor_A=0;
			Delay1us(set_temp*150);//温度差越大，速度越快
			motor_A=1;
			Delay1us(10000-set_temp*150);//温度差越大，速度越快
		}
		else  //制冷A脚固定，B脚输出Pwm波
		{
			motor_B=0;
			Delay1us(Act_temp*150);//温度差越大，速度越快
			motor_B=1;
			Delay1us(10000-Act_temp*150);
			//Delay1us(((Act_temp/10-set_temp*10)));//温度差越大，速度越快
		}		
	}

}




