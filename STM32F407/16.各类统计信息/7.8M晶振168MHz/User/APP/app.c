/*
*********************************************************************************************************
*                                              EXAMPLE CODE
*
*                             (c) Copyright 2013; Micrium, Inc.; Weston, FL
*
*                   All rights reserved.  Protected by international copyright laws.
*                   Knowledge of the source code may not be used to write a similar
*                   product.  This file may only be used in accordance with a license
*                   and should not be redistributed in any way.
*********************************************************************************************************
*/

/*
*********************************************************************************************************
*
*                                            EXAMPLE CODE
*
*                                       IAR Development Kits
*                                              on the
*
*                                    STM32F429II-SK KICKSTART KIT
*
* Filename      : app.c
* Version       : V1.00
* Programmer(s) : YS
*                 DC
*********************************************************************************************************
*/

/*
*********************************************************************************************************
*                                             INCLUDE FILES
*********************************************************************************************************
*/

#include <includes.h>
#include <string.h>


/*
*********************************************************************************************************
*                                            LOCAL DEFINES
*********************************************************************************************************
*/

OS_MEM  mem;                    //�����ڴ�������
uint8_t ucArray [ 70 ] [ 4 ];   //�����ڴ������С


/*
*********************************************************************************************************
*                                                 TCB
*********************************************************************************************************
*/

static  OS_TCB   AppTaskStartTCB;    //������ƿ�

OS_TCB           AppTaskUsartTCB;

OS_TCB           AppTaskKey1TCB;
OS_TCB           AppTaskKey2TCB;

static  OS_TCB   AppTaskLedTCB;

static  OS_TCB   AppTaskDac1TCB;
static  OS_TCB   AppTaskDac2TCB;

static  OS_TCB   AppTaskAdceTCB;

static  OS_TCB   AppTaskCmdTCB;

static  OS_TCB   AppTaskWorkTCB;

static  OS_TCB   AppTaskTestTCB;

/*
*********************************************************************************************************
*                                                STACKS
*********************************************************************************************************
*/

static  CPU_STK  AppTaskStartStk[APP_TASK_START_STK_SIZE];       //�����ջ

static  CPU_STK  AppTaskUsartStk [ APP_TASK_USART_STK_SIZE ];

static  CPU_STK  AppTaskKey1Stk   [ APP_TASK_KEY1_STK_SIZE ];
static  CPU_STK  AppTaskKey2Stk   [ APP_TASK_KEY2_STK_SIZE ];

static  CPU_STK  AppTaskLedStk [ APP_TASK_LED_STK_SIZE ];

static  CPU_STK  AppTaskDac1Stk [ APP_TASK_DAC1_STK_SIZE ];
static  CPU_STK  AppTaskDac2Stk [ APP_TASK_DAC2_STK_SIZE ];

static  CPU_STK  AppTaskAdceStk [ APP_TASK_ADCE_STK_SIZE ];

static  CPU_STK  AppTaskCmdStk [ APP_TASK_CMD_STK_SIZE ];

static  CPU_STK  AppTaskWorkStk [ APP_TASK_WORK_STK_SIZE ];

static  CPU_STK  AppTaskTestStk [ APP_TASK_TEST_STK_SIZE ];

/*
*********************************************************************************************************
*                                         FUNCTION PROTOTYPES
*********************************************************************************************************
*/

static  void  AppTaskStart  (void *p_arg);               //����������

static  void  AppTaskUsart  ( void * p_arg );

static  void  AppTaskKey1    ( void * p_arg );
static  void  AppTaskKey2    ( void * p_arg );

static  void  AppTaskLed  ( void * p_arg );

static  void  AppTaskDac1  ( void * p_arg );
static  void  AppTaskDac2  ( void * p_arg );

static  void  AppTaskAdce  ( void * p_arg );

static  void  AppTaskCmd	 ( void * p_arg );

static  void  AppTaskWork	 ( void * p_arg );

static  void  AppTaskTest	 ( void * p_arg );


/*
*********************************************************************************************************
*                                                main()
*
* Description : This is the standard entry point for C code.  It is assumed that your code will call
*               main() once you have performed all necessary initialization.
*
* Arguments   : none
*
* Returns     : none
*********************************************************************************************************
*/

int  main (void)
{
    OS_ERR  err;

	
    OSInit(&err);                                                           //��ʼ�� uC/OS-III

	  /* ������ʼ���� */
    OSTaskCreate((OS_TCB     *)&AppTaskStartTCB,                            //������ƿ��ַ
                 (CPU_CHAR   *)"App Task Start",                            //��������
                 (OS_TASK_PTR ) AppTaskStart,                               //������
                 (void       *) 0,                                          //���ݸ����������β�p_arg����ʵ��
                 (OS_PRIO     ) APP_TASK_START_PRIO,                        //��������ȼ�
                 (CPU_STK    *)&AppTaskStartStk[0],                         //�����ջ�Ļ���ַ
                 (CPU_STK_SIZE) APP_TASK_START_STK_SIZE / 10,               //�����ջ�ռ�ʣ��1/10ʱ����������
                 (CPU_STK_SIZE) APP_TASK_START_STK_SIZE,                    //�����ջ�ռ䣨��λ��sizeof(CPU_STK)��
                 (OS_MSG_QTY  ) 5u,                                         //����ɽ��յ������Ϣ��
                 (OS_TICK     ) 0u,                                         //�����ʱ��Ƭ��������0��Ĭ��ֵOSCfg_TickRate_Hz/10��
                 (void       *) 0,                                          //������չ��0����չ��
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //����ѡ��
                 (OS_ERR     *)&err);                                       //���ش�������

    OSStart(&err);                                                          //�����������������uC/OS-III���ƣ�

}


/*
*********************************************************************************************************
*                                          STARTUP TASK
*
* Description : This is an example of a startup task.  As mentioned in the book's text, you MUST
*               initialize the ticker only once multitasking has started.
*
* Arguments   : p_arg   is the argument passed to 'AppTaskStart()' by 'OSTaskCreate()'.
*
* Returns     : none
*
* Notes       : 1) The first line of code is used to prevent a compiler warning because 'p_arg' is not
*                  used.  The compiler should not generate any code for this statement.
*********************************************************************************************************
*/

static  void  AppTaskStart (void *p_arg)
{
    CPU_INT32U  cpu_clk_freq;
    CPU_INT32U  cnts;
    OS_ERR      err;


    (void)p_arg;

    CPU_Init();                                                 //��ʼ�� CPU �����ʱ��������ж�ʱ���������������
    BSP_Init();                                                 //�弶��ʼ��

    cpu_clk_freq = BSP_CPU_ClkFreq();                           //��ȡ CPU �ں�ʱ��Ƶ�ʣ�SysTick ����ʱ�ӣ�
    cnts = cpu_clk_freq / (CPU_INT32U)OSCfg_TickRate_Hz;        //�����û��趨��ʱ�ӽ���Ƶ�ʼ��� SysTick ��ʱ���ļ���ֵ
    OS_CPU_SysTickInit(cnts);                                   //���� SysTick ��ʼ�����������ö�ʱ������ֵ��������ʱ��

    Mem_Init();                                                 //��ʼ���ڴ������������ڴ�غ��ڴ�ر�

#if OS_CFG_STAT_TASK_EN > 0u                                    //���ʹ�ܣ�Ĭ��ʹ�ܣ���ͳ������
    OSStatTaskCPUUsageInit(&err);                               //����û��Ӧ������ֻ�п�����������ʱ CPU �ģ����
#endif                                                          //���������� OS_Stat_IdleCtrMax ��ֵ��Ϊ������� CPU 
                                                                //ʹ����ʹ�ã���
#ifdef CPU_CFG_INT_DIS_MEAS_EN
    CPU_IntDisMeasMaxCurReset();                                //��λ�����㣩��ǰ�����ж�ʱ��
#endif

    
    /* ����ʱ��Ƭ��ת���� */		
    OSSchedRoundRobinCfg((CPU_BOOLEAN   )DEF_ENABLED,          //ʹ��ʱ��Ƭ��ת����
		                     (OS_TICK       )0,                    //�� OSCfg_TickRate_Hz / 10 ��ΪĬ��ʱ��Ƭֵ
												 (OS_ERR       *)&err );               //���ش�������


		/* �����ڴ������� mem */
		OSMemCreate ((OS_MEM      *)&mem,             //ָ���ڴ�������
								 (CPU_CHAR    *)"Mem For Test",   //�����ڴ�������
								 (void        *)ucArray,          //�ڴ�������׵�ַ
								 (OS_MEM_QTY   )70,              //�ڴ�������ڴ����Ŀ
								 (OS_MEM_SIZE  )4,                //�ڴ����ֽ���Ŀ
								 (OS_ERR      *)&err);            //���ش�������
							 
							 
		/* ���� AppTaskUsart ���� */
    OSTaskCreate((OS_TCB     *)&AppTaskUsartTCB,                            //������ƿ��ַ
                 (CPU_CHAR   *)"App Task Usart",                            //��������
                 (OS_TASK_PTR ) AppTaskUsart,                               //������
                 (void       *) 0,                                          //���ݸ����������β�p_arg����ʵ��
                 (OS_PRIO     ) APP_TASK_USART_PRIO,                        //��������ȼ�
                 (CPU_STK    *)&AppTaskUsartStk[0],                         //�����ջ�Ļ���ַ
                 (CPU_STK_SIZE) APP_TASK_USART_STK_SIZE / 10,               //�����ջ�ռ�ʣ��1/10ʱ����������
                 (CPU_STK_SIZE) APP_TASK_USART_STK_SIZE,                    //�����ջ�ռ䣨��λ��sizeof(CPU_STK)��
                 (OS_MSG_QTY  ) 50u,                                        //����ɽ��յ������Ϣ��
                 (OS_TICK     ) 0u,                                         //�����ʱ��Ƭ��������0��Ĭ��ֵOSCfg_TickRate_Hz/10��
                 (void       *) 0,                                          //������չ��0����չ��
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //����ѡ��
                 (OS_ERR     *)&err);                                       //���ش�������
								 
								 
		/* ���� AppTaskKey1 ���� */
    OSTaskCreate((OS_TCB     *)&AppTaskKey1TCB,                              //������ƿ��ַ
                 (CPU_CHAR   *)"App Task Key1",                              //��������
                 (OS_TASK_PTR ) AppTaskKey1,                                 //������
                 (void       *) 0,                                          //���ݸ����������β�p_arg����ʵ��
                 (OS_PRIO     ) APP_TASK_KEY1_PRIO,                          //��������ȼ�
                 (CPU_STK    *)&AppTaskKey1Stk[0],                           //�����ջ�Ļ���ַ
                 (CPU_STK_SIZE) APP_TASK_KEY1_STK_SIZE / 10,                 //�����ջ�ռ�ʣ��1/10ʱ����������
                 (CPU_STK_SIZE) APP_TASK_KEY1_STK_SIZE,                      //�����ջ�ռ䣨��λ��sizeof(CPU_STK)��
                 (OS_MSG_QTY  ) 50u,                                        //����ɽ��յ������Ϣ��
                 (OS_TICK     ) 0u,                                         //�����ʱ��Ƭ��������0��Ĭ��ֵOSCfg_TickRate_Hz/10��
                 (void       *) 0,                                          //������չ��0����չ��
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //����ѡ��
                 (OS_ERR     *)&err);                                       //���ش�������


		/* ���� AppTaskKey2 ���� */ 
    OSTaskCreate((OS_TCB     *)&AppTaskKey2TCB,                              //������ƿ��ַ
                 (CPU_CHAR   *)"App Task Key2",                              //��������
                 (OS_TASK_PTR ) AppTaskKey2,                                 //������
                 (void       *) 0,                                          //���ݸ����������β�p_arg����ʵ��
                 (OS_PRIO     ) APP_TASK_KEY2_PRIO,                          //��������ȼ�
                 (CPU_STK    *)&AppTaskKey2Stk[0],                           //�����ջ�Ļ���ַ
                 (CPU_STK_SIZE) APP_TASK_KEY2_STK_SIZE / 10,                 //�����ջ�ռ�ʣ��1/10ʱ����������
                 (CPU_STK_SIZE) APP_TASK_KEY2_STK_SIZE,                      //�����ջ�ռ䣨��λ��sizeof(CPU_STK)��
                 (OS_MSG_QTY  ) 50u,                                        //����ɽ��յ������Ϣ��
                 (OS_TICK     ) 0u,                                         //�����ʱ��Ƭ��������0��Ĭ��ֵOSCfg_TickRate_Hz/10��
                 (void       *) 0,                                          //������չ��0����չ��
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //����ѡ��
                 (OS_ERR     *)&err);                                       //���ش�������
		
								 
	 /* ���� LED ���� */
	 OSTaskCreate((OS_TCB     *)&AppTaskLedTCB,                /* Create the Led1 task                                */
                 (CPU_CHAR   *)"App Task Led",
                 (OS_TASK_PTR ) AppTaskLed,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_LED_PRIO,
                 (CPU_STK    *)&AppTaskLedStk[0],
                 (CPU_STK_SIZE) APP_TASK_LED_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_LED_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);



		/* ���� DAC1 ���� */								 
    OSTaskCreate((OS_TCB     *)&AppTaskDac1TCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task Dac1",
                 (OS_TASK_PTR ) AppTaskDac1,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_DAC1_PRIO,
                 (CPU_STK    *)&AppTaskDac1Stk[0],
                 (CPU_STK_SIZE) APP_TASK_DAC1_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_DAC1_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);
								 
		/* ���� DAC2 ���� */								 
    OSTaskCreate((OS_TCB     *)&AppTaskDac2TCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task Dac2",
                 (OS_TASK_PTR ) AppTaskDac2,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_DAC2_PRIO,
                 (CPU_STK    *)&AppTaskDac2Stk[0],
                 (CPU_STK_SIZE) APP_TASK_DAC2_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_DAC2_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);

		/* ���� ADC extern ���� */								 
    OSTaskCreate((OS_TCB     *)&AppTaskAdceTCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task Adce",
                 (OS_TASK_PTR ) AppTaskAdce,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_ADCE_PRIO,
                 (CPU_STK    *)&AppTaskAdceStk[0],
                 (CPU_STK_SIZE) APP_TASK_ADCE_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_ADCE_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);

		/* ���� CMD ���� */								 
    OSTaskCreate((OS_TCB     *)&AppTaskCmdTCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task Cmd",
                 (OS_TASK_PTR ) AppTaskCmd,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_CMD_PRIO,
                 (CPU_STK    *)&AppTaskCmdStk[0],
                 (CPU_STK_SIZE) APP_TASK_CMD_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_CMD_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);
								 								 
								 
		/* ���� TEST ���� */								 
    OSTaskCreate((OS_TCB     *)&AppTaskTestTCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task TEST",
                 (OS_TASK_PTR ) AppTaskTest,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_TEST_PRIO,
                 (CPU_STK    *)&AppTaskTestStk[0],
                 (CPU_STK_SIZE) APP_TASK_TEST_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_TEST_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);
								 
		OSTaskDel ( 0, & err );                     //ɾ����ʼ������������������
		
		
}

/*
*********************************************************************************************************
*                                          USART TASK
*********************************************************************************************************
*/
static  void  AppTaskUsart ( void * p_arg )
{
	OS_ERR         err;
	OS_MSG_SIZE    msg_size;
	
	
	char * pMsg;
	char cmd_dat[100];//���ڴ洢����Ļ���
	unsigned char ptr = 0;
	unsigned char flag[4];//���ڴ洢��������־�Ļ���
	unsigned char state = 0;//����ָʾ�Ƿ��ڽ���ָ��״̬
	
	(void)p_arg;

					 
	while (DEF_TRUE) {                                           //������
		/* �������񣬵ȴ�������Ϣ */
		pMsg = OSTaskQPend ((OS_TICK        )0,                    //�����޵ȴ�
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //û����Ϣ����������
											  (OS_MSG_SIZE   *)&msg_size,            //������Ϣ����
											  (CPU_TS        *)0,                    //������Ϣ��������ʱ���
											  (OS_ERR        *)&err);                //���ش�������

		//printf("%c",pMsg[0]);                                      //�����ٽ�Σ����⴮�ڴ�ӡ�����
		if(pMsg[0] == TFT480800START )
		{
				state = 1;
		}												//�������ʼ�źţ�׼�������µ�ָ��

		if(state == 1)
		{
				cmd_dat[ptr] = pMsg[0];
				ptr++;							//�洢�½��յ���ָ������
			
			
				if(pMsg[0]==TFT480800STOP[0])//��ϵͳ023��־λ
				{
						flag[0] = 0xFF;
						if(flag[1]==0xFC && flag[2]==0xFF)
						{
								flag[3] = 0xFF;
								state = 0;
								//�������Ϊֹ��������Ϣ
						
						}
						else
						{
								if(flag[1] == 0xFC)
								{
										flag[2] = 0xFF;	//˵����2��־λ
										flag[3] = 0x00;
								}
								else
								{
										flag[0] = 0xFF;//˵����0��־λ
										flag[1] = 0x00;
										flag[2] = 0x00;
										flag[3] = 0x00;
								}
						}
				}
				if(pMsg[0]==TFT480800STOP[1])//��1��־λ
				{
						if(flag[0]==0xFF)
						{
								flag[1] = 0xFC;
						}
						else
						{
								flag[0] = 0x0;
								flag[1] = 0x0;
								flag[2] = 0x0;
								flag[3] = 0x0;
						}
				}
				if(pMsg[0]==TFT480800STOPUSER[3])//���û�3��־λ
				{
						if( flag[0]==0xFF && flag[1]==0xFC && flag[2]==0xFF)
						{
								flag[3] = 0xFF;
								state = 0;
								//�������λ�ã����ñ�־λ׼��������Ϣ
						}
						else
						{
								flag[0] = 0x0;
								flag[1] = 0x0;
								flag[2] = 0x0;
								flag[3] = 0x0;						
						}
				}
				
				
				
				if(!(pMsg[0]==TFT480800STOP[0] || pMsg[0]==TFT480800STOP[1] || pMsg[0]==TFT480800STOPUSER[3]))
				{
								flag[0] = 0x0;
								flag[1] = 0x0;
								flag[2] = 0x0;
								flag[3] = 0x0;			
				}
				
				
				
				if(flag[3] == 0xFF)
				{
								flag[0] = 0x0;
								flag[1] = 0x0;
								flag[2] = 0x0;
								flag[3] = 0x0;	//�Ƚ�״̬���
					
						//printf("%s",cmd_dat);
						OSTaskQPost ((OS_TCB      *)&AppTaskCmdTCB,       //Ŀ������Ŀ��ƿ�
												 (void        *)cmd_dat,             				//��Ϣ���ݵ��׵�ַ
												 (OS_MSG_SIZE  )ptr,                      //��Ϣ����
												 (OS_OPT       )OS_OPT_POST_FIFO,      //������������Ϣ���е���ڶ�
												 (OS_ERR      *)&err);                 //���ش�������
								 
																//������Ϣ����
						ptr = 0;						//�ָ�ָ��λ��

				}//ȷ��ʱ������־λ���Խ����ݷ��ͳ���
		}	
		
		/* �˻��ڴ�� */
		OSMemPut ((OS_MEM  *)&mem,                                 //ָ���ڴ�������
							(void    *)pMsg,                                 //�ڴ����׵�ַ
							(OS_ERR  *)&err);		                             //���ش�������
		
		
	}
	
}


/*
*********************************************************************************************************
*                                          KEY1 TASK
*********************************************************************************************************
*/
static  void  AppTaskKey1 ( void * p_arg )
{
	OS_ERR         err;
	CPU_TS_TMR     ts_int;
	CPU_INT16U     version;
	CPU_INT32U     cpu_clk_freq;
	CPU_SR_ALLOC();

	(void)p_arg;

	version = OSVersion(&err);                          //��ȡuC/OS�汾��
	
  cpu_clk_freq = BSP_CPU_ClkFreq();                   //��ȡCPUʱ�ӣ�ʱ������Ը�ʱ�Ӽ���

	
	while (DEF_TRUE) {                                  //������
		/* ��������ֱ��KEY1������ */
		OSTaskSemPend ((OS_TICK   )0,                     //�����޵ȴ�
									 (OS_OPT    )OS_OPT_PEND_BLOCKING,  //����ź��������þ͵ȴ�
									 (CPU_TS   *)0,                     //��ȡ�ź�����������ʱ���
									 (OS_ERR   *)&err);                 //���ش�������
		
		ts_int = CPU_IntDisMeasMaxGet ();                 //��ȡ�����ж�ʱ��

		OS_CRITICAL_ENTER();                              //�����ٽ�Σ����⴮�ڴ�ӡ�����

    printf ( "\r\nuC/OS�汾�ţ�V%d.%02d.%02d\r\n",
             version / 10000, version % 10000 / 100, version % 100 );
    
		printf ( "CPU��Ƶ��%d MHz\r\n", cpu_clk_freq / 1000000 );  
		
		printf ( "����ж�ʱ�䣺%d us\r\n", 
						ts_int / ( cpu_clk_freq / 1000000 ) ); 

    printf ( "�����������ʱ�䣺%d us\r\n", 
		         OSSchedLockTimeMax / ( cpu_clk_freq / 1000000 ) );		

		printf ( "�����л��ܴ�����%d\r\n", OSTaskCtxSwCtr ); 	
		
		printf ( "CPUʹ���ʣ�%d.%d%%\r\n",
             OSStatTaskCPUUsage / 100, OSStatTaskCPUUsage % 100 );  
		
		printf ( "CPU���ʹ���ʣ�%d.%d%%\r\n", 
		         OSStatTaskCPUUsageMax / 100, OSStatTaskCPUUsageMax % 100 );

		printf ( "���������CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskUsartTCB.CPUUsage / 100, AppTaskUsartTCB.CPUUsage % 100 );
						 
		printf ( "���������CPU���ʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskUsartTCB.CPUUsageMax / 100, AppTaskUsartTCB.CPUUsageMax % 100 ); 

		printf ( "����1�����CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskKey1TCB.CPUUsage / 100, AppTaskKey1TCB.CPUUsage % 100 );  
						 
		printf ( "����1�����CPU���ʹ���ʣ�%d.%d%%    \r\n", 
		         AppTaskKey1TCB.CPUUsageMax / 100, AppTaskKey1TCB.CPUUsageMax % 100 );

		printf ( "����2�����CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskKey2TCB.CPUUsage / 100, AppTaskKey2TCB.CPUUsage % 100 );  
						 
		printf ( "����2�����CPU���ʹ���ʣ�%d.%d%%    \r\n", 
		         AppTaskKey2TCB.CPUUsageMax / 100, AppTaskKey2TCB.CPUUsageMax % 100 );
						 
		printf ( "LED�����CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskLedTCB.CPUUsage / 100, AppTaskLedTCB.CPUUsage % 100 );  
						 
		printf ( "LED�����CPU���ʹ���ʣ�%d.%d%%    \r\n", 
		         AppTaskLedTCB.CPUUsageMax / 100, AppTaskLedTCB.CPUUsageMax % 100 );  
		
		printf ( "DAC1�����CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskDac1TCB.CPUUsage / 100, AppTaskDac1TCB.CPUUsage % 100 );  
						 
		printf ( "DAC1�����CPU���ʹ���ʣ�%d.%d%%    \r\n", 
		         AppTaskDac1TCB.CPUUsageMax / 100, AppTaskDac1TCB.CPUUsageMax % 100 ); 

		printf ( "DAC2�����CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskDac2TCB.CPUUsage / 100, AppTaskDac2TCB.CPUUsage % 100 );  
						 
		printf ( "DAC2�����CPU���ʹ���ʣ�%d.%d%%    \r\n", 
		         AppTaskDac2TCB.CPUUsageMax / 100, AppTaskDac2TCB.CPUUsageMax % 100 ); 
						 
		printf ( "ADC ext�����CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskAdceTCB.CPUUsage / 100, AppTaskAdceTCB.CPUUsage % 100 );  
		
		printf ( "ADC ext�����CPU���ʹ���ʣ�%d.%d%%    \r\n", 
		         AppTaskAdceTCB.CPUUsageMax / 100, AppTaskAdceTCB.CPUUsageMax % 100 ); 		

		printf ( "CMD���������CPUʹ���ʣ�%d.%d%%\r\n", 
		         AppTaskCmdTCB.CPUUsage / 100, AppTaskCmdTCB.CPUUsage % 100 );  
		
		printf ( "CMD���������CPU���ʹ���ʣ�%d.%d%%    \r\n", 
		         AppTaskCmdTCB.CPUUsageMax / 100, AppTaskCmdTCB.CPUUsageMax % 100 ); 
						 
    printf ( "������������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskUsartTCB.StkUsed, AppTaskUsartTCB.StkFree ); 
						 
		printf ( "����1��������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskKey1TCB.StkUsed, AppTaskKey1TCB.StkFree ); 	
						 
		printf ( "����2��������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskKey2TCB.StkUsed, AppTaskKey2TCB.StkFree ); 	
						 
		printf ( "LED��������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskLedTCB.StkUsed, AppTaskLedTCB.StkFree );

		
    printf ( "DAC1��������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskDac1TCB.StkUsed, AppTaskDac1TCB.StkFree ); 
						 
		printf ( "DAC2��������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskDac2TCB.StkUsed, AppTaskDac2TCB.StkFree ); 
		
		printf ( "ADC ext��������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskAdceTCB.StkUsed, AppTaskAdceTCB.StkFree );		

		
		printf ( "CMD������������úͿ��ж�ջ��С�ֱ�Ϊ��%d,%d\r\n", 
		         AppTaskCmdTCB.StkUsed, AppTaskCmdTCB.StkFree );	
							
		//struct_print(&adc_sys_cfg);
		//AD7606_Disp();
		OS_CRITICAL_EXIT();                               //�˳��ٽ��
		
	}
	
}



/*
*********************************************************************************************************
*                                         KEY2  TASK
*********************************************************************************************************
*/
static  void  AppTaskKey2 ( void * p_arg )
{
    OS_ERR      err;

		CPU_SR_ALLOC();

		(void)p_arg;
	
	
		while (DEF_TRUE) 
		{                                  
					/* ��������ֱ��KEY2������ */
					OSTaskSemPend ((OS_TICK   )0,                     //�����޵ȴ�
												 (OS_OPT    )OS_OPT_PEND_BLOCKING,  //����ź��������þ͵ȴ�
												 (CPU_TS   *)0,                     //��ȡ�ź�����������ʱ���
												 (OS_ERR   *)&err);                 //���ش�������
			
					OS_CRITICAL_ENTER();     
					struct_print(&adc_sys_cfg);
					AD7606_Disp();
					OS_CRITICAL_EXIT();   
		}
}



/*
*********************************************************************************************************
*                                          LED TASK
*********************************************************************************************************
*/

static  void  AppTaskLed ( void * p_arg )
{
    OS_ERR      err;
   (void)p_arg;

	
    while (DEF_TRUE) 
		{                                          /* Task body, always written as an infinite loop.       */
			LED1_TOGGLE;
			LED2_TOGGLE;
			OSTimeDly ( 500, OS_OPT_TIME_DLY, & err );
    }
		
		
}




/*
*********************************************************************************************************
*                                          DAC1 TASK
*********************************************************************************************************
*/
static  void  AppTaskDac1 ( void * p_arg )
{
    OS_ERR      err;
		int i = 0;
		(void)p_arg;


		while (DEF_TRUE) 
		{                                          /* Task body, always written as an infinite loop.       */
				Dac1_Set_Vol(i);
				if(i>3200)
						i = 0;
				i+=50;
				OSTimeDly ( 10, OS_OPT_TIME_DLY, & err );
		}
}


/*
*********************************************************************************************************
*                                          DAC2 TASK
*********************************************************************************************************
*/
static  void  AppTaskDac2 ( void * p_arg )
{
    OS_ERR      err;
		int i = 3200;
		(void)p_arg;

	
		while (DEF_TRUE) 
		{                                          /* Task body, always written as an infinite loop.       */
				Dac2_Set_Vol(i);
				if(i < 10)
						i = 3200;
				i-=50;
				OSTimeDly ( 10, OS_OPT_TIME_DLY, & err );
		}
}

/*
*********************************************************************************************************
*                                          ADC extern TASK
*********************************************************************************************************
*/
static  void  AppTaskAdce ( void * p_arg )
{
    OS_ERR      err;
	
		CPU_SR_ALLOC();
		(void)p_arg;
		
	
		while (DEF_TRUE) 
		{                                          /* Task body, always written as an infinite loop.       */
			
			OS_CRITICAL_ENTER();
			g_tAD7606.Range = 1;	/* 10V */
			AD7606_Scan();
			AD7606_Mak();
			//AD7606_Disp();//LCD_valtage_show();
  		OS_CRITICAL_EXIT();			
			                               //�˳��ٽ��

			OSTimeDly ( 100, DEF_BIT_NONE, & err );
		}
}




/*
*********************************************************************************************************
*                                          Command  TASK
*********************************************************************************************************
*/
static  void  AppTaskCmd ( void * p_arg )
{
    OS_ERR      err;
		char * pMsg;
		OS_MSG_SIZE    msg_size;
	
		CPU_SR_ALLOC();
		(void)p_arg;
		
		LCD_screen_show(1);
	
	
		while (DEF_TRUE) 
		{
                                         // Task body, always written as an infinite loop.       
			
			pMsg = OSTaskQPend ((OS_TICK        )0,                    //�����޵ȴ�
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //û����Ϣ����������
											  (OS_MSG_SIZE   *)&msg_size,            //������Ϣ����
											  (CPU_TS        *)0,                    //������Ϣ��������ʱ���
											  (OS_ERR        *)&err);                //���ش�������
			
			//printf("%s",pMsg);
			adc_sys_cfg.screen_id = 10*pMsg[3] + pMsg[4];
			switch(adc_sys_cfg.screen_id)
			{
					case 1:
					{
								if(pMsg[6]==0)
								{
											OS_CRITICAL_ENTER();
											LCD_screen_show(3);
											OS_CRITICAL_EXIT();			
											adc_sys_cfg.sys_connect_mode = 1;
								}
								if(pMsg[6]==1)
								{
											OS_CRITICAL_ENTER();
											LCD_screen_show(2);
											OS_CRITICAL_EXIT();			
											adc_sys_cfg.sys_connect_mode = 0;
								}
								
								break;
					}
					case 2:{break;}
					case 3:
					{
								adc_sys_cfg.sys_sampling_mode = pMsg[6];
								
								OS_CRITICAL_ENTER();
								LCD_screen_show(4);
								OS_CRITICAL_EXIT();			
							
								break;
					}
					case 4:
					{
								if(pMsg[6] == 1)
										adc_sys_cfg.sys_sampling_analyze_time =pMsg[11];
								if(pMsg[6] == 2)
										adc_sys_cfg.sys_sampling_space =pMsg[11];
								if(pMsg[6] == 3)
										adc_sys_cfg.sys_sampling_mercury_delay =pMsg[11];
								if(pMsg[6] == 4)
										adc_sys_cfg.sys_sampling_analyze_space_time =pMsg[11];
								if(pMsg[6] == 5)
										adc_sys_cfg.sys_sorption_time =pMsg[11];
								if(pMsg[6] == 6)
										adc_sys_cfg.sys_sorption_flux =pMsg[11];
								break;
					}
					case 5:
					{
								/* ���� TEST ����	*/					 
								OSTaskCreate((OS_TCB     *)&AppTaskWorkTCB,                // Create the Led2 task 
														 (CPU_CHAR   *)"App Task Work",
														 (OS_TASK_PTR ) AppTaskWork,
														 (void       *) 0,
														 (OS_PRIO     ) APP_TASK_WORK_PRIO,
														 (CPU_STK    *)&AppTaskWorkStk[0],
														 (CPU_STK_SIZE) APP_TASK_WORK_STK_SIZE / 10,
														 (CPU_STK_SIZE) APP_TASK_WORK_STK_SIZE,
														 (OS_MSG_QTY  ) 5u,
														 (OS_TICK     ) 0u,
														 (void       *) 0,
														 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
														 (OS_ERR     *)&err);
															 
					}
					default:{}
			}

			/* �˻��ڴ�� */
			OSMemPut ((OS_MEM  *)&mem,                                 //ָ���ڴ�������
							(void    *)pMsg,                                 //�ڴ����׵�ַ
							(OS_ERR  *)&err);		                             //���ش�������
		}
}


/*
*********************************************************************************************************
*                                         WORK  TASK
*********************************************************************************************************
*/
static  void  AppTaskWork ( void * p_arg )
{
    OS_ERR      err;

		(void)p_arg;
	
	
		while (DEF_TRUE) 
		{
				
				OSTimeDly ( 1000, OS_OPT_TIME_DLY, & err );
		}
}


/*
*********************************************************************************************************
*                                         TEST  TASK
*********************************************************************************************************
*/
static  void  AppTaskTest ( void * p_arg )
{
    OS_ERR      err;

		(void)p_arg;
	
	
		while (DEF_TRUE) 
		{
				
				OSTimeDly ( 1000, OS_OPT_TIME_DLY, & err );
		}
}

