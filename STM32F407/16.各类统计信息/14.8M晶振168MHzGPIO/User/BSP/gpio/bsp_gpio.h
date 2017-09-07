#ifndef __bsp_GPIO_SOPORT_H
#define __bsp_GPIO_SOPORT_H

#include "stm32f4xx.h"
#include "./led/bsp_led.h"  
#include "bsp_usart.h"


#define GPIO1_PIN                  GPIO_Pin_0                 
#define GPIO1_GPIO_PORT            GPIOG                      
#define GPIO1_GPIO_CLK             RCC_AHB1Periph_GPIOG

#define GPIO2_PIN                  GPIO_Pin_0                 
#define GPIO2_GPIO_PORT            GPIOG                      
#define GPIO2_GPIO_CLK             RCC_AHB1Periph_GPIOG

#define GPIO3_PIN                  GPIO_Pin_0                 
#define GPIO3_GPIO_PORT            GPIOG                     
#define GPIO3_GPIO_CLK             RCC_AHB1Periph_GPIOG


#define GPIO4_PIN                  GPIO_Pin_0                 
#define GPIO4_GPIO_PORT            GPIOG                      
#define GPIO4_GPIO_CLK             RCC_AHB1Periph_GPIOG

void CTL_GPIO_Config(void);

#endif

















