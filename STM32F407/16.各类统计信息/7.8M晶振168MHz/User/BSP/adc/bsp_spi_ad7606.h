/*
*********************************************************************************************************
*
*	模块名称 : AD7606 驱动模块(8通道16位ADC)
*	文件名称 : bsp_spi_ad7606.h
*
*	Copyright (C), 2015-2016, 安富莱电子 www.armfly.com
*
*********************************************************************************************************
*/
#ifndef _BSP_SPI_AD7606_UCOS_H
#define _BSP_SPI_AD7606_UCOS_H

#include "stm32f4xx.h"
#include "bsp_spi_bus.h"



/* SPI总线的SCK、MOSI、MISO 在 bsp_spi_bus.c中配置  */
/* CSN片选 */
#define RCC_CS 		RCC_AHB1Periph_GPIOE
#define PORT_CS		GPIOE
#define PIN_CS		GPIO_Pin_15

/* RESET */
#define RCC_RESET 	RCC_AHB1Periph_GPIOD
#define PORT_RESET	GPIOD
#define PIN_RESET	GPIO_Pin_9
/* RANGE */		
#define RCC_RANGE 	RCC_AHB1Periph_GPIOB
#define PORT_RANGE 	GPIOB
#define PIN_RANGE 	GPIO_Pin_0

#define RESET_0()	GPIO_ResetBits(PORT_RESET, PIN_RESET)
#define RESET_1()	GPIO_SetBits(PORT_RESET, PIN_RESET)

/* CONVST */		
#define RCC_CONVST 	RCC_AHB1Periph_GPIOD
#define PORT_CONVST	GPIOD
#define PIN_CONVST 	GPIO_Pin_10

/* BUSY */
#define RCC_BUSY 	RCC_AHB1Periph_GPIOE
#define PORT_BUSY 	GPIOE
#define PIN_BUSY 	GPIO_Pin_14

#define BUSY_IS_LOW()				(GPIO_ReadInputDataBit(PORT_BUSY, PIN_BUSY) == Bit_RESET)


/* OS0 */
#define RCC_OS0 	RCC_AHB1Periph_GPIOE
#define PORT_OS0 	GPIOE
#define PIN_OS0 	GPIO_Pin_13			//临时用于VIO

/* OS1 */
#define RCC_OS1 	RCC_AHB1Periph_GPIOE
#define PORT_OS1 	GPIOE
#define PIN_OS1 	GPIO_Pin_2

/* OS2 */
#define RCC_OS2 	RCC_AHB1Periph_GPIOG
#define PORT_OS2 	GPIOG
#define PIN_OS2 	GPIO_Pin_15



////////////////////////////////////////////////////


/* 片选 */
#define AD_CS_0()						GPIO_ResetBits(PORT_CS, PIN_CS)
#define AD_CS_1()						GPIO_SetBits(PORT_CS, PIN_CS)

/* 设置量程 */
#define AD_RANGE_5V()					GPIO_ResetBits(PORT_RANGE, PIN_RANGE)
#define AD_RANGE_10V()					GPIO_SetBits(PORT_RANGE, PIN_RANGE)	//置1

/* 复位引脚 */
#define AD_RESET_LOW()					GPIO_ResetBits(PORT_RESET, PIN_RESET)
#define AD_RESET_HIGH()					GPIO_SetBits(PORT_RESET, PIN_RESET)

/* 起始信号 */
#define	AD_CONVST_LOW()					GPIO_ResetBits(PORT_CONVST, PIN_CONVST)
#define	AD_CONVST_HIGH()				GPIO_SetBits(PORT_CONVST, PIN_CONVST)


/*开关中断的宏*/
#define ENABLE_INT()	__set_PRIMASK(0)	/* 使能全局中断 */
#define DISABLE_INT()	__set_PRIMASK(1)	/* 关闭全局中断 */



#define CH_NUM			8				/* 采集8通道 */


typedef struct
{
	unsigned char Range;
}AD7606_T;

void AD7606_Reset(void);		
void AD7606_SetInputRange(unsigned char _ucRange);	/* 设置AD7606量程 */
void bsp_spi_InitAD7606(void);		/* 初始化AD7606 */
void AD7606_Scan(void); 		/* 此函数代码按照时序编写 */
unsigned short int AD7606_ReadAdc(unsigned char _ch);
void AD7606_SetOS(unsigned char _ucMode);
void PrintfHardInfo(void);
void AD7606_Mak(void);
void AD7606_Disp(void);
	
extern AD7606_T g_tAD7606;
extern signed short int s_volt[8];
extern signed short int s_dat[8];
#endif

/***************************** 安富莱电子 www.armfly.com (END OF FILE) *********************************/
