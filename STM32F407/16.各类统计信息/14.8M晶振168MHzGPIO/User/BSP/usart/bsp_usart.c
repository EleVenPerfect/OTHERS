/**
  ******************************************************************************
  * @file    bsp_usart.c
  * @author  fire
  * @version V1.0
  * @date    2013-xx-xx
  * @brief   usartӦ��bsp
  ******************************************************************************
  * @attention
  *
  * ʵ��ƽ̨:���� STM32 F407 ������ 
  * ��̳    :http://www.firebbs.cn
  * �Ա�    :https://fire-stm32.taobao.com
  *
  ******************************************************************************
  */
  
#include "bsp_usart.h"



// ����USART1�����ж�
static void NVIC_Configuration(void)
{
	NVIC_InitTypeDef NVIC_InitStructure; 
	/* Configure the NVIC Preemption Priority Bits */  
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_0);
	
	/* Enable the USARTy Interrupt */
	NVIC_InitStructure.NVIC_IRQChannel = USART_IRQ;	 
	NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority = 0;
	NVIC_InitStructure.NVIC_IRQChannelSubPriority = 1;
	NVIC_InitStructure.NVIC_IRQChannelCmd = ENABLE;
	NVIC_Init(&NVIC_InitStructure);
	
	
	/* Configure the NVIC Preemption Priority Bits */  
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_0);
	
	/* Enable the USARTy Interrupt */
	NVIC_InitStructure.NVIC_IRQChannel = USART2_IRQ;	 
	NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority = 0;
	NVIC_InitStructure.NVIC_IRQChannelSubPriority = 1;
	NVIC_InitStructure.NVIC_IRQChannelCmd = ENABLE;
	NVIC_Init(&NVIC_InitStructure);
	
		/* Configure the NVIC Preemption Priority Bits */  
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_0);
	
	/* Enable the USARTy Interrupt */
	NVIC_InitStructure.NVIC_IRQChannel = USART3_IRQ;	 
	NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority = 0;
	NVIC_InitStructure.NVIC_IRQChannelSubPriority = 1;
	NVIC_InitStructure.NVIC_IRQChannelCmd = ENABLE;
	NVIC_Init(&NVIC_InitStructure);
}


 /**
  * @brief  USART1 GPIO ����,����ģʽ���á�115200 8-N-1
  * @param  ��
  * @retval ��
  */
void USARTx_Config(void)
{
	GPIO_InitTypeDef GPIO_InitStructure;
	USART_InitTypeDef USART_InitStructure;
	
	/* config USART1 clock */
	USART_xClock_FUN(USART_CLK, ENABLE);
	USART_GPIO_xClock_FUN(USART_GPIO_CLK, ENABLE);
	
  /* Connect PXx to USARTx_Tx*/
  GPIO_PinAFConfig(USART_TX_PORT, USART_TX_SOURCE, USART_TX_AF);

  /* Connect PXx to USARTx_Rx*/
  GPIO_PinAFConfig(USART_RX_PORT, USART_RX_SOURCE, USART_RX_AF);	
	
	/* USART1 GPIO config */
	/* Configure USART1 Tx (PA.09) as alternate function push-pull */
  GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;
  GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_UP;
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF;
  GPIO_InitStructure.GPIO_Pin = USART_TX_PIN  ;
  GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
  GPIO_Init(USART_TX_PORT, &GPIO_InitStructure);

	/* Configure USART1 Rx (PA.10) as input floating */
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF;
  GPIO_InitStructure.GPIO_Pin = USART_RX_PIN;
  GPIO_Init(USART_RX_PORT, &GPIO_InitStructure);	

	/* USART1 mode config */
	USART_InitStructure.USART_BaudRate = USART_BAUD_RATE;
	USART_InitStructure.USART_WordLength = USART_WordLength_8b;
	USART_InitStructure.USART_StopBits = USART_StopBits_1;
	USART_InitStructure.USART_Parity = USART_Parity_No ;
	USART_InitStructure.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
	USART_InitStructure.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;
	USART_Init(USARTx, &USART_InitStructure);
	
	/* ʹ�ܴ���1�����ж� */
	NVIC_Configuration();
	USART_ITConfig(USARTx, USART_IT_RXNE, ENABLE);
	
	USART_Cmd(USARTx, ENABLE);
	
	
		/* config USART2 clock */
	USART2_xClock_FUN(USART2_CLK, ENABLE);
	USART2_GPIO_xClock_FUN(USART2_GPIO_CLK, ENABLE);
	
  /* Connect PXx to USARTx_Tx*/
  GPIO_PinAFConfig(USART2_TX_PORT, USART2_TX_SOURCE, USART2_TX_AF);

  /* Connect PXx to USARTx_Rx*/
  GPIO_PinAFConfig(USART2_RX_PORT, USART2_RX_SOURCE, USART2_RX_AF);	
	
	/* USART1 GPIO config */
	/* Configure USART1 Tx (PA.09) as alternate function push-pull */
  GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;
  GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_UP;
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF;
  GPIO_InitStructure.GPIO_Pin = USART2_TX_PIN  ;
  GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
  GPIO_Init(USART2_TX_PORT, &GPIO_InitStructure);

	/* Configure USART1 Rx (PA.10) as input floating */
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF;
  GPIO_InitStructure.GPIO_Pin = USART2_RX_PIN;
  GPIO_Init(USART2_RX_PORT, &GPIO_InitStructure);	

	/* USART1 mode config */
	USART_InitStructure.USART_BaudRate = USART2_BAUD_RATE;
	USART_InitStructure.USART_WordLength = USART_WordLength_8b;
	USART_InitStructure.USART_StopBits = USART_StopBits_1;
	USART_InitStructure.USART_Parity = USART_Parity_No ;
	USART_InitStructure.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
	USART_InitStructure.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;
	USART_Init(USART2x, &USART_InitStructure);
	
	/* ʹ�ܴ���2�����ж� */
	NVIC_Configuration();
	USART_ITConfig(USART2x, USART_IT_RXNE, ENABLE);
	
	USART_Cmd(USART2x, ENABLE);
	
		/* config USART3 clock */
	USART3_xClock_FUN(USART3_CLK, ENABLE);
	USART3_GPIO_xClock_FUN(USART3_GPIO_CLK, ENABLE);
	
  /* Connect PXx to USARTx_Tx*/
  GPIO_PinAFConfig(USART3_TX_PORT, USART3_TX_SOURCE, USART3_TX_AF);

  /* Connect PXx to USARTx_Rx*/
  GPIO_PinAFConfig(USART3_RX_PORT, USART3_RX_SOURCE, USART3_RX_AF);	
	
	/* USART1 GPIO config */
	/* Configure USART1 Tx (PA.09) as alternate function push-pull */
  GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;
  GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_UP;
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF;
  GPIO_InitStructure.GPIO_Pin = USART3_TX_PIN  ;
  GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
  GPIO_Init(USART3_TX_PORT, &GPIO_InitStructure);

	/* Configure USART1 Rx (PA.10) as input floating */
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF;
  GPIO_InitStructure.GPIO_Pin = USART3_RX_PIN;
  GPIO_Init(USART3_RX_PORT, &GPIO_InitStructure);	

	/* USART3 mode config */
	USART_InitStructure.USART_BaudRate = USART3_BAUD_RATE;
	USART_InitStructure.USART_WordLength = USART_WordLength_8b;
	USART_InitStructure.USART_StopBits = USART_StopBits_1;
	USART_InitStructure.USART_Parity = USART_Parity_No ;
	USART_InitStructure.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
	USART_InitStructure.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;
	USART_Init(USART3x, &USART_InitStructure);
	
	/* ʹ�ܴ���2�����ж� */
	NVIC_Configuration();
	//USART_ITConfig(USART3x, USART_IT_RXNE, ENABLE);
	
	USART_Cmd(USART3x, ENABLE);
}


/// �ض���c�⺯��printf��USART1
int fputc(int ch, FILE *f)
{
		/* ����һ���ֽ����ݵ�USART1 */
		USART_SendData(USARTx, (uint8_t) ch);
		
		/* �ȴ�������� */
		while (USART_GetFlagStatus(USARTx, USART_FLAG_TXE) == RESET);		
	
		return (ch);
}

/// �ض���c�⺯��scanf��USART1
int fgetc(FILE *f)
{
		// �ȴ�����1��������
		while (USART_GetFlagStatus(USARTx, USART_FLAG_RXNE) == RESET);

		return (int)USART_ReceiveData(USARTx);
}



void uart3putchar(unsigned char data)
{
		printf("\n\rTX:%02X",data);//������
		USART_SendData( USART3x, data);
		/* �ȴ�������� */
		while (USART_GetFlagStatus(USART3x, USART_FLAG_TXE) == RESET);		
}
/*********************************************END OF FILE**********************/


