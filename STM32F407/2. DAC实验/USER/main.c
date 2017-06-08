#include "sys.h"
#include "delay.h"
#include "usart.h"
#include "led.h"
#include "lcd.h"
#include "adc.h"
#include "dac.h"
#include "key.h"


//ALIENTEK ̽����STM32F407������ ʵ��21
//DACʵ��-�⺯���汾
//����֧�֣�www.openedv.com
//�Ա����̣�http://eboard.taobao.com  
//������������ӿƼ����޹�˾  
//���ߣ�����ԭ�� @ALIENTEK


int main(void)
{ 
	u16 i = 0;
	
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);//����ϵͳ�ж����ȼ�����2
	delay_init(168);      //��ʼ����ʱ����
	uart_init(115200);		//��ʼ�����ڲ�����Ϊ115200
	
	Dac1_Init();		 		//DACͨ��1��ʼ��	
		 
  DAC_SetChannel1Data(DAC_Align_12b_R,i);//��ʼֵΪ0	
	
	
	while(1)
	{
		Dac1_Set_Vol(i);
		if(i>3200)
			i = 0;
		i+=5;
		delay_ms(20);
	}
}

