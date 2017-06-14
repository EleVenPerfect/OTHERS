#ifndef __EXTI_H
#define	__EXTI_H



#include "stm32f4xx.h"



/************************** EXIT 参数定义 ********************************/
#define             EXTI_GPIO_CLK                        RCC_AHB1Periph_GPIOA     
#define             EXTI_GPIO_PORT                       GPIOA   
#define             EXTI_GPIO_PIN                        GPIO_Pin_0
#define             EXTI_SOURCE_PORT                     EXTI_PortSourceGPIOA
#define             EXTI_SOURCE_PIN                      EXTI_PinSource0
#define             EXTI_LINE                            EXTI_Line0
#define             EXTI_IRQ                             EXTI0_IRQn
#define             EXTI_INT_FUNCTION                    EXTI0_IRQHandler



/************************** EXIT 函数声明 ********************************/
void EXTI_Pxy_Config(void);



#endif /* __EXTI_H */

