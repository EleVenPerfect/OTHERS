#ifndef __EXTI_H
#define	__EXTI_H



#include "stm32f4xx.h"



/************************** EXIT 参数定义 ********************************/
#define             EXTI_GPIO_CLK1                        RCC_AHB1Periph_GPIOA     
#define             EXTI_GPIO_PORT1                       GPIOA   
#define             EXTI_GPIO_PIN1                        GPIO_Pin_0
#define             EXTI_SOURCE_PORT1                     EXTI_PortSourceGPIOA
#define             EXTI_SOURCE_PIN1                      EXTI_PinSource0
#define             EXTI_LINE1                            EXTI_Line0
#define             EXTI_IRQ1                             EXTI0_IRQn
#define             EXTI_INT_FUNCTION1                    EXTI0_IRQHandler

#define             EXTI_GPIO_CLK2                        RCC_AHB1Periph_GPIOF     
#define             EXTI_GPIO_PORT2                       GPIOF   
#define             EXTI_GPIO_PIN2                        GPIO_Pin_11
#define             EXTI_SOURCE_PORT2                     EXTI_PortSourceGPIOF
#define             EXTI_SOURCE_PIN2                      EXTI_PinSource11
#define             EXTI_LINE2                            EXTI_Line11
#define             EXTI_IRQ2                             EXTI15_10_IRQn
#define             EXTI_INT_FUNCTION2                    EXTI15_10_IRQHandler


/************************** EXIT 函数声明 ********************************/
void EXTI_Pxy_Config(void);


#endif /* __EXTI_H */

