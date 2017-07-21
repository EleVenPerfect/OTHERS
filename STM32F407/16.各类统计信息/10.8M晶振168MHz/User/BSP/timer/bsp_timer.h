#ifndef __TIMER6_H
#define	__TIMER6_H


#include "stm32f4xx.h"
#include <stdio.h>



/**************************Timer参数定义********************************/
#define BASIC_TIM 								TIM6
#define BASIC_TIM_CLK 						RCC_APB1Periph_TIM6

#define BASIC_TIM_IRQn 						TIM6_DAC_IRQn
#define BASIC_TIM_IRQHandler 			TIM6_DAC_IRQHandler
//此定时器用于ADC采样控制，与DAC无关

void TIMx_Configuration(void);

#endif /* __TIMER6_H_H */

