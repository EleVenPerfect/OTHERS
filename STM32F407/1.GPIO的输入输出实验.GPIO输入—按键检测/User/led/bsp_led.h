#ifndef __LED_H
#define	__LED_H

#include "stm32f4xx.h"

//���Ŷ���
/*******************************************************/
//R ��ɫ��
#define LED1_PIN                  GPIO_Pin_0                 
#define LED1_GPIO_PORT            GPIOC                      
#define LED1_GPIO_CLK             RCC_AHB1Periph_GPIOC

//G ��ɫ��
#define LED2_PIN                  GPIO_Pin_3                 
#define LED2_GPIO_PORT            GPIOD                      
#define LED2_GPIO_CLK             RCC_AHB1Periph_GPIOD


/************************************************************/


/** ����LED������ĺ꣬
	* LED�͵�ƽ��������ON=0��OFF=1
	* ��LED�ߵ�ƽ�����Ѻ����ó�ON=1 ��OFF=0 ����
	*/
#define ON  0
#define OFF 1

/* ���κ꣬��������������һ��ʹ�� */
#define LED1(a)	if (a)	\
					GPIO_SetBits(LED1_GPIO_PORT,LED1_PIN);\
					else		\
					GPIO_ResetBits(LED1_GPIO_PORT,LED1_PIN)

#define LED2(a)	if (a)	\
					GPIO_SetBits(LED2_GPIO_PORT,LED2_PIN);\
					else		\
					GPIO_ResetBits(LED2_GPIO_PORT,LED2_PIN)



/* ֱ�Ӳ����Ĵ����ķ�������IO */
#define	digitalHi(p,i)			 {p->BSRRL=i;}		//����Ϊ�ߵ�ƽ
#define digitalLo(p,i)			 {p->BSRRH=i;}		//����͵�ƽ
#define digitalToggle(p,i)	 {p->ODR ^=i;}		//�����ת״̬

/* �������IO�ĺ� */
#define LED1_TOGGLE		digitalToggle(LED1_GPIO_PORT,LED1_PIN)
#define LED1_OFF			digitalHi(LED1_GPIO_PORT,LED1_PIN)
#define LED1_ON				digitalLo(LED1_GPIO_PORT,LED1_PIN)

#define LED2_TOGGLE		digitalToggle(LED2_GPIO_PORT,LED2_PIN)
#define LED2_OFF			digitalHi(LED2_GPIO_PORT,LED2_PIN)
#define LED2_ON				digitalLo(LED2_GPIO_PORT,LED2_PIN)



/* ������ɫ������߼��÷�ʹ��PWM�ɻ��ȫ����ɫ,��Ч������ */

//��
#define LED_RED  \
					LED1_ON;\
					LED2_OFF

//��
#define LED_GREEN		\
					LED1_OFF;\
					LED2_ON

//��
#define LED_BLUE	\
					LED1_OFF;\
					LED2_OFF
					
//��(��+��)					
#define LED_YELLOW	\
					LED1_ON;\
					LED2_ON
					
//��(��+��)
#define LED_PURPLE	\
					LED1_ON;\
					LED2_OFF
					

//��(��+��)
#define LED_CYAN \
					LED1_OFF;\
					LED2_ON
					
					
//��(��+��+��)
#define LED_WHITE	\
					LED1_ON;\
					LED2_ON
					
					
//��(ȫ���ر�)
#define LED_RGBOFF	\
					LED1_OFF;\
					LED2_OFF
					




void LED_GPIO_Config(void);

#endif /* __LED_H */
