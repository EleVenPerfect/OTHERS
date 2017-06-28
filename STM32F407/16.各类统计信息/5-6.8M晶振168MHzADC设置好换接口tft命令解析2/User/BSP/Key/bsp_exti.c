#include "bsp_exti.h"

 /**
  * @brief  ����Ƕ�������жϿ�����NVIC
  * @param  ��
  * @retval ��
  */
static void NVIC_Configuration(void)
{
  NVIC_InitTypeDef NVIC_InitStructure;
  
	
  // Configure one bit for preemption priority 
  NVIC_PriorityGroupConfig(NVIC_PriorityGroup_1);
  
  // �����ж�Դ 
  NVIC_InitStructure.NVIC_IRQChannel = EXTI_IRQ1;
  NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority = 0;
  NVIC_InitStructure.NVIC_IRQChannelSubPriority = 0;
  NVIC_InitStructure.NVIC_IRQChannelCmd = ENABLE;
  NVIC_Init(&NVIC_InitStructure);
	
	NVIC_InitStructure.NVIC_IRQChannel = EXTI_IRQ2;
	NVIC_Init(&NVIC_InitStructure);
	
}


 /**
  * @brief  ���� PA0 Ϊ���жϿڣ��������ж����ȼ�
  * @param  ��
  * @retval ��
  */
void EXTI_Pxy_Config(void)
{
	GPIO_InitTypeDef GPIO_InitStructure; 
	EXTI_InitTypeDef EXTI_InitStructure;

	 RCC_APB2PeriphClockCmd(RCC_APB2Periph_SYSCFG, ENABLE);
	
	//��������GPIO�ڵ�ʱ��
	RCC_AHB1PeriphClockCmd( EXTI_GPIO_CLK1, ENABLE );

  GPIO_InitStructure.GPIO_Pin = EXTI_GPIO_PIN1;         //ѡ�񰴼������� 
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IN;	          //��������Ϊ����ģʽ 
  GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_DOWN;          //��������Ϊ����
  GPIO_Init(EXTI_GPIO_PORT1, &GPIO_InitStructure);      //ʹ������Ľṹ���ʼ������
	
  
	RCC_AHB1PeriphClockCmd( EXTI_GPIO_CLK2, ENABLE );
	GPIO_InitStructure.GPIO_Pin = EXTI_GPIO_PIN2;         //ѡ�񰴼�������
	GPIO_Init(EXTI_GPIO_PORT2, &GPIO_InitStructure);      //ʹ������Ľṹ���ʼ������
	
	// ���� EXTI �ж�Դ����������
  SYSCFG_EXTILineConfig(EXTI_SOURCE_PORT1, EXTI_SOURCE_PIN1);
	SYSCFG_EXTILineConfig(EXTI_SOURCE_PORT2, EXTI_SOURCE_PIN2);

  // ѡ�� EXTI �ж�Դ
  EXTI_InitStructure.EXTI_Line = EXTI_LINE1;
  EXTI_InitStructure.EXTI_Mode = EXTI_Mode_Interrupt;
  EXTI_InitStructure.EXTI_Trigger = EXTI_Trigger_Rising;  
  EXTI_InitStructure.EXTI_LineCmd = ENABLE;
  EXTI_Init(&EXTI_InitStructure);


	EXTI_InitStructure.EXTI_Line = EXTI_LINE2;
	EXTI_Init(&EXTI_InitStructure);
	// config the NVIC 
	NVIC_Configuration();



}
/*********************************************END OF FILE**********************/
