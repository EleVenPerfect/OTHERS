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



#define CH_NUM			8				/* 采集2通道 */


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

#endif

/***************************** 安富莱电子 www.armfly.com (END OF FILE) *********************************/
