#include "sys.h"
#include "delay.h"
#include "usart.h"
#include "led.h"
#include "lcd.h"
#include "adc.h"
#include "dac.h"
#include "key.h"


//ALIENTEK 探索者STM32F407开发板 实验21
//DAC实验-库函数版本
//技术支持：www.openedv.com
//淘宝店铺：http://eboard.taobao.com  
//广州市星翼电子科技有限公司  
//作者：正点原子 @ALIENTEK


int main(void)
{ 
	u16 i = 0;
	
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);//设置系统中断优先级分组2
	delay_init(168);      //初始化延时函数
	uart_init(115200);		//初始化串口波特率为115200
	
	Dac1_Init();		 		//DAC通道1初始化	
		 
  DAC_SetChannel1Data(DAC_Align_12b_R,i);//初始值为0	
	
	
	while(1)
	{
		Dac1_Set_Vol(i);
		if(i>3200)
			i = 0;
		i+=5;
		delay_ms(20);
	}
}

