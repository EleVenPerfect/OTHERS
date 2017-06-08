/*--------------------------------------------------------------------------------------
*  @file     Driver.c
*  @author   EU电子 
*  @version  base on stm32f40x   
*  @date     2016.08.19
*  @brief    none
---------------------------------------------------------------------------------------*/
/* 标准C库包含 */
#include <string.h>
#include <stdio.h>
#include <stddef.h> 

/* 类型转换 */
#define  True  1
#define  False 0
typedef unsigned char       bool;
typedef unsigned char       u8;
typedef unsigned short      u16;

//设置一个BIT为1    Example: a |= SETBIT0
enum
{
	SETBIT0 = 0x0001,  SETBIT1 = 0x0002,	SETBIT2 = 0x0004,	 SETBIT3 = 0x0008,
	SETBIT4 = 0x0010,	 SETBIT5 = 0x0020,	SETBIT6 = 0x0040,	 SETBIT7 = 0x0080,
	SETBIT8 = 0x0100,	 SETBIT9 = 0x0200,	SETBIT10 = 0x0400, SETBIT11 = 0x0800,
	SETBIT12 = 0x1000, SETBIT13 = 0x2000,	SETBIT14 = 0x4000, SETBIT15 = 0x8000		
};
//清零一个BIT   Example: a &= CLRBIT0
enum
{
	CLRBIT0 = 0xFFFE,  CLRBIT1 = 0xFFFD,	CLRBIT2 = 0xFFFB,	 CLRBIT3 = 0xFFF7,	
	CLRBIT4 = 0xFFEF,	 CLRBIT5 = 0xFFDF,	CLRBIT6 = 0xFFBF,	 CLRBIT7 = 0xFF7F,
	CLRBIT8 = 0xFEFF,	 CLRBIT9 = 0xFDFF,	CLRBIT10 = 0xFBFF, CLRBIT11 = 0xF7FF,
	CLRBIT12 = 0xEFFF, CLRBIT13 = 0xDFFF,	CLRBIT14 = 0xBFFF, CLRBIT15 = 0x7FFF
};
//选择一个BIT  Example: a = b&CHSBIT0
enum
{
	CHSBIT0 = 0x0001,  CHSBIT1 = 0x0002,	CHSBIT2 = 0x0004,	 CHSBIT3 = 0x0008,
	CHSBIT4 = 0x0010,	 CHSBIT5 = 0x0020,	CHSBIT6 = 0x0040,	 CHSBIT7 = 0x0080,
	CHSBIT8 = 0x0100,	 CHSBIT9 = 0x0200,	CHSBIT10 = 0x0400, CHSBIT11 = 0x0800,
	CHSBIT12 = 0x1000, CHSBIT13 = 0x2000,	CHSBIT14 = 0x4000, CHSBIT15 = 0x8000		
};

/* INCLUDES */
#include "Driver.h"
#include "stm32f4xx_rcc.h"
#include "stm32f4xx_gpio.h"
#include "stm32f4xx_tim.h"
/*-------------------------------------------------------------------------------------------------------
*  内部声明								 
-------------------------------------------------------------------------------------------------------*/


/*-------------------------------------------------------------------------------------------------------
*  资源定义											 
-------------------------------------------------------------------------------------------------------*/
static u8 Driver_PWMSta;
/*-------------------------------------------------------------------------------------------------------
*  函数声明												 
-------------------------------------------------------------------------------------------------------*/
void Driver_MCU_Init(void);
void Driver_LedCont(u8 Num, bool sta);
/*-------------------------------------------------------------------------------------------------------
*  执行代码													 
-------------------------------------------------------------------------------------------------------*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++  平台驱动 +++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/********************************************************************************************************
*  Function: Driver_MCU_Init						                                                           
*  Object: MCU初始化               
*  输入： 无
*  输出： 无								                         	                                     
*  备注： 时钟配置 MCU启动的一些配置                                      
********************************************************************************************************/
void Driver_MCU_Init(void)
{

		#define PLL_M      8
		#define PLL_N      336	
		#define PLL_P      2	
		#define PLL_Q      7	
  	//--------------------------- CLK INIT, HSE PLL ----------------------------
		ErrorStatus HSEStartUpStatus;
		//RCC reset
		RCC_DeInit();
		//Enable HSE
		RCC_HSEConfig(RCC_HSE_ON); 
		//Wait HSE is ready
		HSEStartUpStatus = RCC_WaitForHSEStartUp();
		//If HSE start fail, wail and wail.
		while(HSEStartUpStatus == ERROR);
		//Set bus clock
		RCC_HCLKConfig(RCC_SYSCLK_Div1);	//(HCLK=SYSCLK)=168MHz
		RCC_PCLK1Config(RCC_HCLK_Div4);		//(PCLK1=SYSCLK/4)=42MHz
		RCC_PCLK2Config(RCC_HCLK_Div2);		//(PCLK2=SYSCLK/2)=84MHz
		//HSE 8M PLL-> 168M	
		//PLL=8MHz * N/ (M*P)=8MHz* 336 /(8*2) = 168MHz
		RCC_PLLConfig(RCC_PLLSource_HSE,PLL_M ,PLL_N ,PLL_P,PLL_Q);
		RCC_PLLCmd(ENABLE); 
		while(RCC_GetFlagStatus(RCC_FLAG_PLLRDY) == RESET);
		//Select PLL as system clock source
		RCC_SYSCLKConfig(RCC_SYSCLKSource_PLLCLK);
		while(RCC_GetSYSCLKSource() != 0x08);
		
		

		//----------------------------- CLOSE HSI ---------------------------
		RCC_HSICmd(DISABLE);

		//--------------------------- OPEN GPIO CLK -------------------------
		RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOA, ENABLE);
		RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOC, ENABLE);
		RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOD, ENABLE);
		RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOF, ENABLE);

		//---------------------------- INT CONFIG ---------------------------
		//2-level interrupt 
		//NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
			
		//---------------------------- JTAG CONFIG ---------------------------
		//JTAG/SWD disable
		//GPIO_PinRemapConfig(GPIO_Remap_SWJ_JTAGDisable, ENABLE);
		//GPIO_PinRemapConfig(GPIO_Remap_SWJ_Disable, ENABLE);
}		   

/********************************************************************************************************
*  Function: Driver_OpenEA					                                                           
*  Object: MCU开总中断           
*  输入： 无
*  输出： 无								                         	                                     
*  备注： 无	                                         
********************************************************************************************************/
void Driver_OpenEA(void)
{
		//开中断
		__enable_irq(); 
}

/********************************************************************************************************
*  Function: Driver_Time10msON					                                                           
*  Object: 10ms定时初始化启动
*  输入： 无
*  输出： 无								                         	                                     
*  备注： 无                    
********************************************************************************************************/
void Driver_Time10msON(void)
{	
		//set 10ms interrupt  (1/100)s = 10ms   
		SysTick_Config(168000000 / 100);
}

/********************************************************************************************************
*  Function: Driver_10ms_Interrupt					                                                           
*  Object: 10ms定时中断
*  输入： 无
*  输出： 无								                         	                                     
*  备注： 无   	                                  
********************************************************************************************************/
void Driver_10ms_Interrupt(void)
{
	  extern void Time_IntHandle(void);
		Time_IntHandle();
}
/********************************************************************************************************
*  Function: Driver_LedCont						                                                           
*  Object: 	LED控制
*  输入： True, 打开;  False, 关闭;
*  输出： 无	                                     
*  备注： PB10                
********************************************************************************************************/
void Driver_LedCont(u8 Num, bool sta)
{
		static bool StartFlag = True;
		if(StartFlag)
		{
			GPIO_InitTypeDef GPIO_InitStructure;
			//initial LED1(PC0)
			GPIO_InitStructure.GPIO_Pin   = GPIO_Pin_0 ;
			GPIO_InitStructure.GPIO_Mode  = GPIO_Mode_OUT;  	
			GPIO_InitStructure.GPIO_Speed = GPIO_Speed_100MHz;  
			GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;		//推挽输出
			GPIO_InitStructure.GPIO_PuPd  = GPIO_PuPd_UP;								//上拉输入
			GPIO_Init(GPIOC, &GPIO_InitStructure);
			
			// initial LED2(PD3)
			GPIO_InitStructure.GPIO_Pin = GPIO_Pin_3;
			GPIO_InitStructure.GPIO_Mode  = GPIO_Mode_OUT;  	
			GPIO_InitStructure.GPIO_Speed = GPIO_Speed_100MHz;  
			GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;		//推挽输出
			GPIO_InitStructure.GPIO_PuPd  = GPIO_PuPd_UP;								//上拉输入
			GPIO_Init(GPIOD, &GPIO_InitStructure);
			StartFlag = False;
		}	
		switch(Num)
		{
				case 0: if(!sta) GPIO_SetBits(GPIOC, GPIO_Pin_0);	else GPIO_ResetBits(GPIOC, GPIO_Pin_0);	 break;
				case 1: if(!sta) GPIO_SetBits(GPIOD, GPIO_Pin_3);	else GPIO_ResetBits(GPIOD, GPIO_Pin_3);	 break;
		}
}
/********************************************************************************************************
*  Function: Driver_LightPWMON				                                                           
*  Object: PWM调光 初始化
*  输入： 无
*  输出： 无                                     
*  备注： 采用定时器快速中断处理                   
********************************************************************************************************/
void Driver_LightPWMON(void)
{ 
		TIM_TimeBaseInitTypeDef TIM_TimeBaseStructure;
		NVIC_InitTypeDef NVIC_InitStructure;
		//开启定时器外设时钟
		RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM3, ENABLE);
		//配置定时器参数
		TIM_DeInit(TIM3); 
		TIM_TimeBaseStructure.TIM_Period = 20; 								     //20us中断一次
		TIM_TimeBaseStructure.TIM_Prescaler = (84000000/1000000 - 1);              
		TIM_TimeBaseStructure.TIM_ClockDivision = TIM_CKD_DIV1;     
		TIM_TimeBaseStructure.TIM_CounterMode = TIM_CounterMode_Up; 
		TIM_TimeBaseStructure.TIM_RepetitionCounter = 0;
		TIM_TimeBaseInit(TIM3, &TIM_TimeBaseStructure);	
		//中断配置
		NVIC_InitStructure.NVIC_IRQChannel = TIM3_IRQn;
		NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority = 2;  //抢占优先级2 低优先级别中断 
		NVIC_InitStructure.NVIC_IRQChannelSubPriority = 0;		  	 //响应优先级0 高级别的响应中断
		NVIC_InitStructure.NVIC_IRQChannelCmd = ENABLE;	
		NVIC_Init(&NVIC_InitStructure);	  
		//开中断
		TIM_ClearFlag(TIM3, TIM_FLAG_Update);					  
		TIM_ITConfig(TIM3, TIM_IT_Update, ENABLE); 
		//开启定时器			 
		TIM_Cmd(TIM3, ENABLE); 
		//熄灭LED1-2
		Driver_LedCont(0, 0);
		Driver_LedCont(1, 0);
}

/********************************************************************************************************
*  Function: Driver_LightPWMSet				                                                           
*  Object: PWM调光 
*  输入： 0~9  亮度从暗到亮
*  输出： 无                                     
*  备注： 采用定时器快速中断处理 模拟PWM变化                  
********************************************************************************************************/
void Driver_LightPWMSet(u8 sta)
{
		Driver_PWMSta = sta;
}

/********************************************************************************************************
*  Function: DriverLightPWMIntHandle				                                                           
*  Object: 模拟PWM定时中断处理
*  输入: 无
*  输出: 无                                   
*  备注: 输出占空比可调方波
********************************************************************************************************/
void DriverLightPWMIntHandle(void)
{
		//清中断标识
		TIM_ClearFlag(TIM3, TIM_FLAG_Update);
		//---------------- 中断处理  ---------------------
		{
				static u8 Step = 0;
			  Step++;
				if(Step == 10)
					Step = 0;
				//模拟PWM变化
				if(Step < Driver_PWMSta)
					Driver_LedCont(0, 1);
				else
					Driver_LedCont(0, 0);
		}
}

/********************************************************************************************************
*  Function: Driver_Key1Sta						                                                           
*  Object: 按键1状态
*  输入: 无
*  输出: 1/0                                 
*  备注: 无                         
********************************************************************************************************/
bool Driver_Key1Sta(void)
{
		static bool StartFlag = True;
		if(StartFlag)
		{	
			GPIO_InitTypeDef GPIO_InitStructure;
			GPIO_InitStructure.GPIO_Pin = GPIO_Pin_0;
			GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IN;
			GPIO_InitStructure.GPIO_Speed = GPIO_Speed_100MHz;	 
			GPIO_InitStructure.GPIO_PuPd	= GPIO_PuPd_DOWN;
			GPIO_Init(GPIOA, &GPIO_InitStructure);
			StartFlag = False;
		}
		return GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0) ;
}

/********************************************************************************************************
*  Function: Driver_Key2Sta						                                                           
*  Object: 按键2状态
*  输入: 无
*  输出: 1/0                                 
*  备注: 无                              
********************************************************************************************************/
bool Driver_Key2Sta(void)
{
		static bool StartFlag = True;
		if(StartFlag)
		{	
			GPIO_InitTypeDef GPIO_InitStructure;
			GPIO_InitStructure.GPIO_Pin = GPIO_Pin_11;
			GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IN;
			GPIO_InitStructure.GPIO_Speed = GPIO_Speed_100MHz;	 
			GPIO_InitStructure.GPIO_PuPd	= GPIO_PuPd_DOWN;
			GPIO_Init(GPIOF, &GPIO_InitStructure);
			StartFlag = False;
		}
		return GPIO_ReadInputDataBit(GPIOF, GPIO_Pin_11);
}
