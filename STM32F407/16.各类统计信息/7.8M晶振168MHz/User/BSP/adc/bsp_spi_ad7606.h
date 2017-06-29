/*
*********************************************************************************************************
*
*	ģ������ : AD7606 ����ģ��(8ͨ��16λADC)
*	�ļ����� : bsp_spi_ad7606.h
*
*	Copyright (C), 2015-2016, ���������� www.armfly.com
*
*********************************************************************************************************
*/
#ifndef _BSP_SPI_AD7606_UCOS_H
#define _BSP_SPI_AD7606_UCOS_H

#include "stm32f4xx.h"
#include "bsp_spi_bus.h"



/* SPI���ߵ�SCK��MOSI��MISO �� bsp_spi_bus.c������  */
/* CSNƬѡ */
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
#define PIN_OS0 	GPIO_Pin_13			//��ʱ����VIO

/* OS1 */
#define RCC_OS1 	RCC_AHB1Periph_GPIOE
#define PORT_OS1 	GPIOE
#define PIN_OS1 	GPIO_Pin_2

/* OS2 */
#define RCC_OS2 	RCC_AHB1Periph_GPIOG
#define PORT_OS2 	GPIOG
#define PIN_OS2 	GPIO_Pin_15



////////////////////////////////////////////////////


/* Ƭѡ */
#define AD_CS_0()						GPIO_ResetBits(PORT_CS, PIN_CS)
#define AD_CS_1()						GPIO_SetBits(PORT_CS, PIN_CS)

/* �������� */
#define AD_RANGE_5V()					GPIO_ResetBits(PORT_RANGE, PIN_RANGE)
#define AD_RANGE_10V()					GPIO_SetBits(PORT_RANGE, PIN_RANGE)	//��1

/* ��λ���� */
#define AD_RESET_LOW()					GPIO_ResetBits(PORT_RESET, PIN_RESET)
#define AD_RESET_HIGH()					GPIO_SetBits(PORT_RESET, PIN_RESET)

/* ��ʼ�ź� */
#define	AD_CONVST_LOW()					GPIO_ResetBits(PORT_CONVST, PIN_CONVST)
#define	AD_CONVST_HIGH()				GPIO_SetBits(PORT_CONVST, PIN_CONVST)


/*�����жϵĺ�*/
#define ENABLE_INT()	__set_PRIMASK(0)	/* ʹ��ȫ���ж� */
#define DISABLE_INT()	__set_PRIMASK(1)	/* �ر�ȫ���ж� */



#define CH_NUM			8				/* �ɼ�8ͨ�� */


typedef struct
{
	unsigned char Range;
}AD7606_T;

void AD7606_Reset(void);		
void AD7606_SetInputRange(unsigned char _ucRange);	/* ����AD7606���� */
void bsp_spi_InitAD7606(void);		/* ��ʼ��AD7606 */
void AD7606_Scan(void); 		/* �˺������밴��ʱ���д */
unsigned short int AD7606_ReadAdc(unsigned char _ch);
void AD7606_SetOS(unsigned char _ucMode);
void PrintfHardInfo(void);
void AD7606_Mak(void);
void AD7606_Disp(void);
	
extern AD7606_T g_tAD7606;
extern signed short int s_volt[8];
extern signed short int s_dat[8];
#endif

/***************************** ���������� www.armfly.com (END OF FILE) *********************************/
