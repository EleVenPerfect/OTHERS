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



#define CH_NUM			8				/* �ɼ�2ͨ�� */


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

#endif

/***************************** ���������� www.armfly.com (END OF FILE) *********************************/
