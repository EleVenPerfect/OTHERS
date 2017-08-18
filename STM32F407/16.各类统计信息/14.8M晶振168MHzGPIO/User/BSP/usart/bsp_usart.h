#ifndef __USART1_H
#define	__USART1_H


#include "stm32f4xx.h"
#include <stdio.h>



/**************************USART参数定义********************************/
#define             USARTx                                USART1
#define             USART_BAUD_RATE                       115200
#define             USART_xClock_FUN                      RCC_APB2PeriphClockCmd
#define             USART_CLK                             RCC_APB2Periph_USART1

#define             USART_GPIO_xClock_FUN                 RCC_AHB1PeriphClockCmd
#define             USART_GPIO_CLK                        RCC_AHB1Periph_GPIOA     
#define             USART_TX_PORT                         GPIOA   
#define             USART_TX_PIN                          GPIO_Pin_9
#define             USART_TX_AF                           GPIO_AF_USART1
#define             USART_TX_SOURCE                       GPIO_PinSource9
#define             USART_RX_PORT                         GPIOA 
#define             USART_RX_PIN                          GPIO_Pin_10
#define             USART_RX_AF                           GPIO_AF_USART1
#define             USART_RX_SOURCE                       GPIO_PinSource10

#define             USART_IRQ                             USART1_IRQn
#define             USART_INT_FUN                         USART1_IRQHandler




#define             USART2x                                USART2
#define             USART2_BAUD_RATE                       115200
#define             USART2_xClock_FUN                      RCC_APB1PeriphClockCmd
#define             USART2_CLK                             RCC_APB1Periph_USART2

#define             USART2_GPIO_xClock_FUN                 RCC_AHB1PeriphClockCmd
#define             USART2_GPIO_CLK                        RCC_AHB1Periph_GPIOA     
#define             USART2_TX_PORT                         GPIOA   
#define             USART2_TX_PIN                          GPIO_Pin_2
#define             USART2_TX_AF                           GPIO_AF_USART2
#define             USART2_TX_SOURCE                       GPIO_PinSource2
#define             USART2_RX_PORT                         GPIOA 
#define             USART2_RX_PIN                          GPIO_Pin_3
#define             USART2_RX_AF                           GPIO_AF_USART2
#define             USART2_RX_SOURCE                       GPIO_PinSource3

#define             USART2_IRQ                             USART2_IRQn
#define             USART2_INT_FUN                         USART2_IRQHandler

#define             USART3x                                USART3
#define             USART3_BAUD_RATE                       9600
#define             USART3_xClock_FUN                      RCC_APB1PeriphClockCmd
#define             USART3_CLK                             RCC_APB1Periph_USART3

#define             USART3_GPIO_xClock_FUN                 RCC_AHB1PeriphClockCmd
#define             USART3_GPIO_CLK                        RCC_AHB1Periph_GPIOB     
#define             USART3_TX_PORT                         GPIOB   
#define             USART3_TX_PIN                          GPIO_Pin_10
#define             USART3_TX_AF                           GPIO_AF_USART3
#define             USART3_TX_SOURCE                       GPIO_PinSource10
#define             USART3_RX_PORT                         GPIOB
#define             USART3_RX_PIN                          GPIO_Pin_11
#define             USART3_RX_AF                           GPIO_AF_USART3
#define             USART3_RX_SOURCE                       GPIO_PinSource11

#define             USART3_IRQ                             USART3_IRQn
#define             USART3_INT_FUN                         USART3_IRQHandler


void                USARTx_Config                           ( void );

void uart3putchar(unsigned char data);

#endif /* __USART1_H */

