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

OS_MEM  mem;                    //声明内存管理对象
uint8_t ucArray [ 70 ] [ 4 ];   //声明内存分区大小

unsigned short int temp_data[512];
	

/*
*********************************************************************************************************
*                                                 TCB任务控制块
*********************************************************************************************************
*/

static  OS_TCB   AppTaskStartTCB;    //任务控制块

OS_TCB           AppTaskUsart1TCB;
OS_TCB           AppTaskUsart2TCB;
OS_TCB           AppTaskUsart3TCB;

OS_TCB           AppTaskKey1TCB;
OS_TCB           AppTaskKey2TCB;

static  OS_TCB   AppTaskLedTCB;

static  OS_TCB   AppTaskDac1TCB;
static  OS_TCB   AppTaskDac2TCB;

static  OS_TCB   AppTaskAdceTCB;

static  OS_TCB   AppTaskCmdLcdTCB;
static  OS_TCB   AppTaskCmdPcTCB;

static  OS_TCB   AppTaskWorkTCB;

static  OS_TCB   AppTaskTestTCB;

/*
*********************************************************************************************************
*                                                STACKS任务堆栈
*********************************************************************************************************
*/

static  CPU_STK  AppTaskStartStk[APP_TASK_START_STK_SIZE];       //任务堆栈

static  CPU_STK  AppTaskUsart1Stk [ APP_TASK_USART1_STK_SIZE ];
static  CPU_STK  AppTaskUsart2Stk [ APP_TASK_USART2_STK_SIZE ];
static  CPU_STK  AppTaskUsart3Stk [ APP_TASK_USART3_STK_SIZE ];

static  CPU_STK  AppTaskKey1Stk   [ APP_TASK_KEY1_STK_SIZE ];
static  CPU_STK  AppTaskKey2Stk   [ APP_TASK_KEY2_STK_SIZE ];

static  CPU_STK  AppTaskLedStk [ APP_TASK_LED_STK_SIZE ];

static  CPU_STK  AppTaskDac1Stk [ APP_TASK_DAC1_STK_SIZE ];
static  CPU_STK  AppTaskDac2Stk [ APP_TASK_DAC2_STK_SIZE ];

static  CPU_STK  AppTaskAdceStk [ APP_TASK_ADCE_STK_SIZE ];

static  CPU_STK  AppTaskCmdLcdStk [ APP_TASK_CMD_LCD_STK_SIZE ];
static  CPU_STK  AppTaskCmdPcStk [ APP_TASK_CMD_PC_STK_SIZE ];

static  CPU_STK  AppTaskWorkStk [ APP_TASK_WORK_STK_SIZE ];

static  CPU_STK  AppTaskTestStk [ APP_TASK_TEST_STK_SIZE ];

/*
*********************************************************************************************************
*                                         FUNCTION PROTOTYPES任务
*********************************************************************************************************
*/

static  void  AppTaskStart  (void *p_arg);               //任务函数声明

static  void  AppTaskUsart1  ( void * p_arg );
static  void  AppTaskUsart2  ( void * p_arg );
static  void  AppTaskUsart3  ( void * p_arg );

static  void  AppTaskKey1    ( void * p_arg );
static  void  AppTaskKey2    ( void * p_arg );

static  void  AppTaskLed  ( void * p_arg );

static  void  AppTaskDac1  ( void * p_arg );
static  void  AppTaskDac2  ( void * p_arg );

static  void  AppTaskAdce  ( void * p_arg );

static  void  AppTaskCmdLcd	 ( void * p_arg );
static  void  AppTaskCmdPc	 ( void * p_arg );

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

	
    OSInit(&err);                                                           //初始化 uC/OS-III

	  /* 创建起始任务 */
    OSTaskCreate((OS_TCB     *)&AppTaskStartTCB,                            //任务控制块地址
                 (CPU_CHAR   *)"App Task Start",                            //任务名称
                 (OS_TASK_PTR ) AppTaskStart,                               //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_START_PRIO,                        //任务的优先级
                 (CPU_STK    *)&AppTaskStartStk[0],                         //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_START_STK_SIZE / 10,               //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_START_STK_SIZE,                    //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 5u,                                         //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型

    OSStart(&err);                                                          //启动多任务管理（交由uC/OS-III控制）

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

    CPU_Init();                                                 //初始化 CPU 组件（时间戳、关中断时间测量和主机名）
    BSP_Init();                                                 //板级初始化

    cpu_clk_freq = BSP_CPU_ClkFreq();                           //获取 CPU 内核时钟频率（SysTick 工作时钟）
    cnts = cpu_clk_freq / (CPU_INT32U)OSCfg_TickRate_Hz;        //根据用户设定的时钟节拍频率计算 SysTick 定时器的计数值
    OS_CPU_SysTickInit(cnts);                                   //调用 SysTick 初始化函数，设置定时器计数值和启动定时器

    Mem_Init();                                                 //初始化内存管理组件（堆内存池和内存池表）

#if OS_CFG_STAT_TASK_EN > 0u                                    //如果使能（默认使能）了统计任务
    OSStatTaskCPUUsageInit(&err);                               //计算没有应用任务（只有空闲任务）运行时 CPU 的（最大）
#endif                                                          //容量（决定 OS_Stat_IdleCtrMax 的值，为后面计算 CPU 
                                                                //使用率使用）。
#ifdef CPU_CFG_INT_DIS_MEAS_EN
    CPU_IntDisMeasMaxCurReset();                                //复位（清零）当前最大关中断时间
#endif

    
    /* 配置时间片轮转调度 */		
    OSSchedRoundRobinCfg((CPU_BOOLEAN   )DEF_ENABLED,          //使能时间片轮转调度
		                     (OS_TICK       )0,                    //把 OSCfg_TickRate_Hz / 10 设为默认时间片值
												 (OS_ERR       *)&err );               //返回错误类型


		/* 创建内存管理对象 mem */
		OSMemCreate ((OS_MEM      *)&mem,             //指向内存管理对象
								 (CPU_CHAR    *)"Mem For Test",   //命名内存管理对象
								 (void        *)ucArray,          //内存分区的首地址
								 (OS_MEM_QTY   )70,              //内存分区中内存块数目
								 (OS_MEM_SIZE  )4,                //内存块的字节数目
								 (OS_ERR      *)&err);            //返回错误类型
							 
							 
		/* 创建 AppTaskUsart1 任务 */
    OSTaskCreate((OS_TCB     *)&AppTaskUsart1TCB,                            //任务控制块地址
                 (CPU_CHAR   *)"App Task Usart1",                            //任务名称
                 (OS_TASK_PTR ) AppTaskUsart1,                               //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_USART1_PRIO,                        //任务的优先级
                 (CPU_STK    *)&AppTaskUsart1Stk[0],                         //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_USART1_STK_SIZE / 10,               //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_USART1_STK_SIZE,                    //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 50u,                                        //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型
		
		/* 创建 AppTaskUsart2 任务 */
    OSTaskCreate((OS_TCB     *)&AppTaskUsart2TCB,                            //任务控制块地址
                 (CPU_CHAR   *)"App Task Usart2",                            //任务名称
                 (OS_TASK_PTR ) AppTaskUsart2,                               //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_USART2_PRIO,                        //任务的优先级
                 (CPU_STK    *)&AppTaskUsart2Stk[0],                         //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_USART2_STK_SIZE / 10,               //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_USART2_STK_SIZE,                    //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 50u,                                        //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型
								 								 
		/* 创建 AppTaskUsart3 任务 */
    OSTaskCreate((OS_TCB     *)&AppTaskUsart3TCB,                            //任务控制块地址
                 (CPU_CHAR   *)"App Task Usart3",                            //任务名称
                 (OS_TASK_PTR ) AppTaskUsart3,                               //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_USART3_PRIO,                        //任务的优先级
                 (CPU_STK    *)&AppTaskUsart3Stk[0],                         //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_USART3_STK_SIZE / 10,               //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_USART3_STK_SIZE,                    //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 50u,                                        //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型
								 
		/* 创建 AppTaskKey1 任务 */
    OSTaskCreate((OS_TCB     *)&AppTaskKey1TCB,                              //任务控制块地址
                 (CPU_CHAR   *)"App Task Key1",                              //任务名称
                 (OS_TASK_PTR ) AppTaskKey1,                                 //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_KEY1_PRIO,                          //任务的优先级
                 (CPU_STK    *)&AppTaskKey1Stk[0],                           //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_KEY1_STK_SIZE / 10,                 //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_KEY1_STK_SIZE,                      //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 50u,                                        //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型


		/* 创建 AppTaskKey2 任务 */ 
    OSTaskCreate((OS_TCB     *)&AppTaskKey2TCB,                              //任务控制块地址
                 (CPU_CHAR   *)"App Task Key2",                              //任务名称
                 (OS_TASK_PTR ) AppTaskKey2,                                 //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_KEY2_PRIO,                          //任务的优先级
                 (CPU_STK    *)&AppTaskKey2Stk[0],                           //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_KEY2_STK_SIZE / 10,                 //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_KEY2_STK_SIZE,                      //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 50u,                                        //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型
		
								 
	 /* 创建 LED 任务 */
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



		/* 创建 DAC1 任务 */								 
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
								 
		/* 创建 DAC2 任务 */								 
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

		/* 创建 ADC extern 任务 */								 
    //OSTaskCreate((OS_TCB     *)&AppTaskAdceTCB,                /* Create the Led2 task                                */
    //             (CPU_CHAR   *)"App Task Adce",
    //             (OS_TASK_PTR ) AppTaskAdce,
    //             (void       *) 0,
    //             (OS_PRIO     ) APP_TASK_ADCE_PRIO,
    //             (CPU_STK    *)&AppTaskAdceStk[0],
    //             (CPU_STK_SIZE) APP_TASK_ADCE_STK_SIZE / 10,
    //             (CPU_STK_SIZE) APP_TASK_ADCE_STK_SIZE,
    //             (OS_MSG_QTY  ) 5u,
    //             (OS_TICK     ) 0u,
    //             (void       *) 0,
    //             (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
    //             (OS_ERR     *)&err);

		/* 创建 CMD 任务 */								 
    OSTaskCreate((OS_TCB     *)&AppTaskCmdLcdTCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task Cmd Lcd",
                 (OS_TASK_PTR ) AppTaskCmdLcd,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_CMD_LCD_PRIO,
                 (CPU_STK    *)&AppTaskCmdLcdStk[0],
                 (CPU_STK_SIZE) APP_TASK_CMD_LCD_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_CMD_LCD_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);
								 								 
				/* 创建 CMD 任务 */								 
    OSTaskCreate((OS_TCB     *)&AppTaskCmdPcTCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task Cmd Pc",
                 (OS_TASK_PTR ) AppTaskCmdPc,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_CMD_PC_PRIO,
                 (CPU_STK    *)&AppTaskCmdPcStk[0],
                 (CPU_STK_SIZE) APP_TASK_CMD_PC_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_CMD_PC_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);
								 								 
								 
		/* 创建 TEST 任务 */								 
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
								 
		OSTaskDel ( 0, & err );                     //删除起始任务本身，该任务不再运行
		
		
}

/*
*********************************************************************************************************
*                                          USART1 TASK
*********************************************************************************************************
*/
static  void  AppTaskUsart1 ( void * p_arg )
{
	OS_ERR         err;
	OS_MSG_SIZE    msg_size;
	
	
	char * pMsg;
	char cmd_dat[100];//用于存储命令的缓存
	unsigned char ptr = 0;
	unsigned char flag[4];//用于存储检测结束标志的缓存
	unsigned char state = 0;//用于指示是否处于接收指令状态
	
	(void)p_arg;

					 
	while (DEF_TRUE) {                                           //任务体
		/* 阻塞任务，等待任务消息 */
		pMsg = OSTaskQPend ((OS_TICK        )0,                    //无期限等待
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //没有消息就阻塞任务
											  (OS_MSG_SIZE   *)&msg_size,            //返回消息长度
											  (CPU_TS        *)0,                    //返回消息被发布的时间戳
											  (OS_ERR        *)&err);                //返回错误类型

		//printf("%c",pMsg[0]);                                      //进入临界段，避免串口打印被打断
		if(pMsg[0] == TFT480800START )
		{
				state = 1;
		}												//如果是起始信号，准备接受新的指令

		if(state == 1)
		{
				cmd_dat[ptr] = pMsg[0];
				ptr++;							//存储新接收到的指令数据
			
			
				if(pMsg[0]==TFT480800STOP[0])//定系统023标志位
				{
						flag[0] = 0xFF;
						if(flag[1]==0xFC && flag[2]==0xFF)
						{
								flag[3] = 0xFF;
								state = 0;
								cmd_dat[ptr++] = 0;
								//到达结束为止，发送消息
						
						}
						else
						{
								if(flag[1] == 0xFC)
								{
										flag[2] = 0xFF;	//说明是2标志位
										flag[3] = 0x00;
								}
								else
								{
										flag[0] = 0xFF;//说明是0标志位
										flag[1] = 0x00;
										flag[2] = 0x00;
										flag[3] = 0x00;
								}
						}
				}
				if(pMsg[0]==TFT480800STOP[1])//定1标志位
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
				if(pMsg[0]==TFT480800STOPUSER[3])//定用户3标志位
				{
						if( flag[0]==0xFF && flag[1]==0xFC && flag[2]==0xFF)
						{
								flag[3] = 0xFF;
								state = 0;
								cmd_dat[ptr++] = 0;
								//到达结束位置，设置标志位准备发送消息
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
								flag[3] = 0x0;	//先将状态清除
					
						//printf("%s",cmd_dat);
						OSTaskQPost ((OS_TCB      *)&AppTaskCmdLcdTCB,       //目标任务的控制块
												 (void        *)cmd_dat,             				//消息内容的首地址
												 (OS_MSG_SIZE  )ptr,                      //消息长度
												 (OS_OPT       )OS_OPT_POST_FIFO,      //发布到任务消息队列的入口端
												 (OS_ERR      *)&err);                 //返回错误类型
								 
																//发送消息出来
						ptr = 0;						//恢复指针位置
						state = 0;

				}//确定时结束标志位可以将数据发送出来
		}	
		
		/* 退还内存块 */
		OSMemPut ((OS_MEM  *)&mem,                                 //指向内存管理对象
							(void    *)pMsg,                                 //内存块的首地址
							(OS_ERR  *)&err);		                             //返回错误类型
		
		
	}
	
}





/*
*********************************************************************************************************
*                                          USART2 TASK
*********************************************************************************************************
*/
static  void  AppTaskUsart2 ( void * p_arg )
{
	OS_ERR         err;
	OS_MSG_SIZE    msg_size;
	
	
	char * pMsg;
	char cmd_dat[100];//用于存储命令的缓存
	unsigned char ptr = 0;
	unsigned char flag[4];//用于存储检测结束标志的缓存
	unsigned char state = 0;//用于指示是否处于接收指令状态
	
	(void)p_arg;

					 
	while (DEF_TRUE) {                                           //任务体
		/* 阻塞任务，等待任务消息 */
		pMsg = OSTaskQPend ((OS_TICK        )0,                    //无期限等待
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //没有消息就阻塞任务
											  (OS_MSG_SIZE   *)&msg_size,            //返回消息长度
											  (CPU_TS        *)0,                    //返回消息被发布的时间戳
											  (OS_ERR        *)&err);                //返回错误类型

		//printf("%c",pMsg[0]);                                      //进入临界段，避免串口打印被打断
		if( pMsg[0] == TFT480800START )
		{
				state = 1;
		}												//如果是起始信号，准备接受新的指令

		if(state == 1)
		{
				cmd_dat[ptr] = pMsg[0];
				ptr++;							//存储新接收到的指令数据
			
			
				if(pMsg[0]==TFT480800STOP[0])//定系统023标志位
				{
						flag[0] = 0xFF;
						if(flag[1]==0xFC && flag[2]==0xFF)
						{
								flag[3] = 0xFF;
								state = 0;
								cmd_dat[ptr++] = 0;
								//到达结束为止，发送消息
						
						}
						else
						{
								if(flag[1] == 0xFC)
								{
										flag[2] = 0xFF;	//说明是2标志位
										flag[3] = 0x00;
								}
								else
								{
										flag[0] = 0xFF;//说明是0标志位
										flag[1] = 0x00;
										flag[2] = 0x00;
										flag[3] = 0x00;
								}
						}
				}
				if(pMsg[0]==TFT480800STOP[1])//定1标志位
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
				
				if(pMsg[0]==TFT480800STOPPC[3])//定PC3标志位
				{
						if( flag[0]==0xFF && flag[1]==0xFC && flag[2]==0xFF)
						{
								flag[3] = 0xFF;
								state = 0;
								cmd_dat[ptr++] = 0;
								cmd_dat[0] += 0x01; //设置PC指令集标志为0xEF
								//到达结束位置，设置标志位准备发送消息
						}
						else
						{
								flag[0] = 0x0;
								flag[1] = 0x0;
								flag[2] = 0x0;
								flag[3] = 0x0;						
						}
				}
				
				
				if(!(pMsg[0]==TFT480800STOP[0] || pMsg[0]==TFT480800STOP[1] || pMsg[0]==TFT480800STOPPC[3]))
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
								flag[3] = 0x0;	//先将状态清除
					
						//printf("%s",cmd_dat);
						OSTaskQPost ((OS_TCB      *)&AppTaskCmdPcTCB,       //目标任务的控制块
												 (void        *)cmd_dat,             				//消息内容的首地址
												 (OS_MSG_SIZE  )ptr,                      //消息长度
												 (OS_OPT       )OS_OPT_POST_FIFO,      //发布到任务消息队列的入口端
												 (OS_ERR      *)&err);                 //返回错误类型
								 
																//发送消息出来
						ptr = 0;						//恢复指针位置
						state = 0;

				}//确定时结束标志位可以将数据发送出来
		}	
		
		/* 退还内存块 */
		OSMemPut ((OS_MEM  *)&mem,                                 //指向内存管理对象
							(void    *)pMsg,                                 //内存块的首地址
							(OS_ERR  *)&err);		                             //返回错误类型
		
		
	}
	
}







/*
*********************************************************************************************************
*                                          USART3 TASK
*********************************************************************************************************
*/
static  void  AppTaskUsart3 ( void * p_arg )
{
	OS_ERR         err;
	OS_MSG_SIZE    msg_size;
	
	char * pMsg;
	
	(void)p_arg;
					 
	while (DEF_TRUE) {                                           //任务体
		/* 阻塞任务，等待任务消息 */
		pMsg = OSTaskQPend ((OS_TICK        )0,                    //无期限等待
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //没有消息就阻塞任务
											  (OS_MSG_SIZE   *)&msg_size,            //返回消息长度
											  (CPU_TS        *)0,                    //返回消息被发布的时间戳
											  (OS_ERR        *)&err);                //返回错误类型

		USART_SendData(USART3x, (uint8_t) pMsg[0]);
		while (USART_GetFlagStatus(USART3x, USART_FLAG_TXE) == RESET);

		/* 退还内存块 */
		OSMemPut ((OS_MEM  *)&mem,                                 //指向内存管理对象
							(void    *)pMsg,                                 //内存块的首地址
							(OS_ERR  *)&err);		                             //返回错误类型
		
		
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

	version = OSVersion(&err);                          //获取uC/OS版本号
	
  cpu_clk_freq = BSP_CPU_ClkFreq();                   //获取CPU时钟，时间戳是以该时钟计数

	
	while (DEF_TRUE) {                                  //任务体
		/* 阻塞任务，直到KEY1被单击 */
		OSTaskSemPend ((OS_TICK   )0,                     //无期限等待
									 (OS_OPT    )OS_OPT_PEND_BLOCKING,  //如果信号量不可用就等待
									 (CPU_TS   *)0,                     //获取信号量被发布的时间戳
									 (OS_ERR   *)&err);                 //返回错误类型
		
		ts_int = CPU_IntDisMeasMaxGet ();                 //获取最大关中断时间

		OS_CRITICAL_ENTER();                              //进入临界段，避免串口打印被打断

    printf ( "\r\nuC/OS版本号：V%d.%02d.%02d\r\n",
             version / 10000, version % 10000 / 100, version % 100 );
    
		printf ( "CPU主频：%d MHz\r\n", cpu_clk_freq / 1000000 );  
		
		printf ( "最大中断时间：%d us\r\n", 
						ts_int / ( cpu_clk_freq / 1000000 ) ); 

    printf ( "最大锁调度器时间：%d us\r\n", 
		         OSSchedLockTimeMax / ( cpu_clk_freq / 1000000 ) );		

		printf ( "任务切换总次数：%d\r\n", OSTaskCtxSwCtr ); 	
		
		printf ( "CPU使用率：%d.%d%%\r\n",
             OSStatTaskCPUUsage / 100, OSStatTaskCPUUsage % 100 );  
		
		printf ( "CPU最大使用率：%d.%d%%\r\n", 
		         OSStatTaskCPUUsageMax / 100, OSStatTaskCPUUsageMax % 100 );

		printf ( "串口1任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskUsart1TCB.CPUUsage / 100, AppTaskUsart1TCB.CPUUsage % 100 );
						 
		printf ( "串口1任务的CPU最大使用率：%d.%d%%\r\n", 
		         AppTaskUsart1TCB.CPUUsageMax / 100, AppTaskUsart1TCB.CPUUsageMax % 100 ); 

		printf ( "串口2任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskUsart2TCB.CPUUsage / 100, AppTaskUsart2TCB.CPUUsage % 100 );
						 
		printf ( "串口2任务的CPU最大使用率：%d.%d%%\r\n", 
		         AppTaskUsart2TCB.CPUUsageMax / 100, AppTaskUsart2TCB.CPUUsageMax % 100 ); 
				
		printf ( "串口3任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskUsart3TCB.CPUUsage / 100, AppTaskUsart3TCB.CPUUsage % 100 );
						 
		printf ( "串口3任务的CPU最大使用率：%d.%d%%\r\n", 
		         AppTaskUsart3TCB.CPUUsageMax / 100, AppTaskUsart3TCB.CPUUsageMax % 100 ); 
						 
		printf ( "按键1任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskKey1TCB.CPUUsage / 100, AppTaskKey1TCB.CPUUsage % 100 );  
						 
		printf ( "按键1任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskKey1TCB.CPUUsageMax / 100, AppTaskKey1TCB.CPUUsageMax % 100 );

		printf ( "按键2任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskKey2TCB.CPUUsage / 100, AppTaskKey2TCB.CPUUsage % 100 );  
						 
		printf ( "按键2任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskKey2TCB.CPUUsageMax / 100, AppTaskKey2TCB.CPUUsageMax % 100 );
						 
		printf ( "LED任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskLedTCB.CPUUsage / 100, AppTaskLedTCB.CPUUsage % 100 );  
						 
		printf ( "LED任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskLedTCB.CPUUsageMax / 100, AppTaskLedTCB.CPUUsageMax % 100 );  
		
		printf ( "DAC1任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskDac1TCB.CPUUsage / 100, AppTaskDac1TCB.CPUUsage % 100 );  
						 
		printf ( "DAC1任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskDac1TCB.CPUUsageMax / 100, AppTaskDac1TCB.CPUUsageMax % 100 ); 

		printf ( "DAC2任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskDac2TCB.CPUUsage / 100, AppTaskDac2TCB.CPUUsage % 100 );  
						 
		printf ( "DAC2任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskDac2TCB.CPUUsageMax / 100, AppTaskDac2TCB.CPUUsageMax % 100 ); 
						 
		printf ( "ADC ext任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskAdceTCB.CPUUsage / 100, AppTaskAdceTCB.CPUUsage % 100 );  
		
		printf ( "ADC ext任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskAdceTCB.CPUUsageMax / 100, AppTaskAdceTCB.CPUUsageMax % 100 ); 		

		printf ( "CMD LCD解析任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskCmdLcdTCB.CPUUsage / 100, AppTaskCmdLcdTCB.CPUUsage % 100 );  
		
		printf ( "CMD LCD解析任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskCmdLcdTCB.CPUUsageMax / 100, AppTaskCmdLcdTCB.CPUUsageMax % 100 ); 
						 
		printf ( "CMD PC解析任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskCmdPcTCB.CPUUsage / 100, AppTaskCmdPcTCB.CPUUsage % 100 );  
		
		printf ( "CMD PC解析任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskCmdPcTCB.CPUUsageMax / 100, AppTaskCmdPcTCB.CPUUsageMax % 100 ); 
						 
    printf ( "串口1任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskUsart1TCB.StkUsed, AppTaskUsart1TCB.StkFree ); 
		
		printf ( "串口2任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskUsart2TCB.StkUsed, AppTaskUsart2TCB.StkFree );
						 
		printf ( "串口3任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskUsart3TCB.StkUsed, AppTaskUsart3TCB.StkFree );
						 
		printf ( "按键1任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskKey1TCB.StkUsed, AppTaskKey1TCB.StkFree ); 	
						 
		printf ( "按键2任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskKey2TCB.StkUsed, AppTaskKey2TCB.StkFree ); 	
						 
		printf ( "LED任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskLedTCB.StkUsed, AppTaskLedTCB.StkFree );

    printf ( "DAC1任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskDac1TCB.StkUsed, AppTaskDac1TCB.StkFree ); 
						 
		printf ( "DAC2任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskDac2TCB.StkUsed, AppTaskDac2TCB.StkFree ); 
		
		printf ( "ADC ext任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskAdceTCB.StkUsed, AppTaskAdceTCB.StkFree );		

		
		printf ( "CMD LCD解析任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskCmdLcdTCB.StkUsed, AppTaskCmdLcdTCB.StkFree );	
							
		printf ( "CMD PC解析任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskCmdPcTCB.StkUsed, AppTaskCmdPcTCB.StkFree );
		//struct_print(&adc_sys_cfg);
		//AD7606_Disp();
		OS_CRITICAL_EXIT();                               //退出临界段
		
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
					/* 阻塞任务，直到KEY2被单击 */
					OSTaskSemPend ((OS_TICK   )0,                     //无期限等待
												 (OS_OPT    )OS_OPT_PEND_BLOCKING,  //如果信号量不可用就等待
												 (CPU_TS   *)0,                     //获取信号量被发布的时间戳
												 (OS_ERR   *)&err);                 //返回错误类型
			
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
			AD7606_display_screen(5,5,0);//AD7606_Disp();//AD7606_display_screen(5,5,7);//LCD_valtage_show();
			LCD_refresh_graph(5,6,s_volt[0]);
			//AD7606_Disp();
  		OS_CRITICAL_EXIT();			
			                               //退出临界段

			OSTimeDly ( 10, DEF_BIT_NONE, & err );
		}
}




/*
*********************************************************************************************************
*                                          Command  TASK LCD
*********************************************************************************************************
*/
static  void  AppTaskCmdLcd ( void * p_arg )
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
			
			pMsg = OSTaskQPend ((OS_TICK        )0,                    //无期限等待
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //没有消息就阻塞任务
											  (OS_MSG_SIZE   *)&msg_size,            //返回消息长度
											  (CPU_TS        *)0,                    //返回消息被发布的时间戳
											  (OS_ERR        *)&err);                //返回错误类型
			
			printf("%s",pMsg);
			//printf("%d",msg_size);
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
								if(pMsg[6] == 2)
								{
										adc_sys_cfg.sys_sampling_analyze_time = (pMsg[10]<<8) + pMsg[11];
										LCD_refresh_text( 4, pMsg[6]+1, 0, adc_sys_cfg.sys_sampling_analyze_time);
								}
								if(pMsg[6] == 4)
								{
										adc_sys_cfg.sys_sampling_space = (pMsg[10]<<8) + pMsg[11];
										LCD_refresh_text( 4, pMsg[6]+1, 0, adc_sys_cfg.sys_sampling_space);
								}
								if(pMsg[6] == 6)
								{
										adc_sys_cfg.sys_sampling_mercury_delay = (pMsg[10]<<8) + pMsg[11];
										LCD_refresh_text( 4, pMsg[6]+1, 0,adc_sys_cfg.sys_sampling_mercury_delay);
								}
								if(pMsg[6] == 8)
								{
										adc_sys_cfg.sys_sampling_analyze_space_time = (pMsg[10]<<8) + pMsg[11];
										LCD_refresh_text( 4, pMsg[6]+1, 0, adc_sys_cfg.sys_sampling_analyze_space_time);
								}
								if(pMsg[6] == 10)
								{
										adc_sys_cfg.sys_sorption_time = (pMsg[10]<<8) + pMsg[11];
										LCD_refresh_text( 4, pMsg[6]+1, 0, adc_sys_cfg.sys_sorption_time );
								}
								if(pMsg[6] == 12)
								{
										adc_sys_cfg.sys_sorption_flux_l = (pMsg[10]<<8) + pMsg[11];
										adc_sys_cfg.sys_sorption_flux_h = (pMsg[8]<<8)  + pMsg[9];
										LCD_refresh_text( 4, pMsg[6]+1, adc_sys_cfg.sys_sorption_flux_h,adc_sys_cfg.sys_sorption_flux_l);						
								}
								
								break;
					}
					case 5:
					{
								if(pMsg[6] == 0)
								{
										LCD_refresh_text(5,4,0,0);	
										/* 创建 TEST 任务	*/					 
										OSTaskCreate((OS_TCB     *)&AppTaskAdceTCB,                // Create the Led2 task 
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
								}
								if(pMsg[6] == 1)
								{
										LCD_refresh_text(5,4,0,100);	
										OSTaskDel ( (OS_TCB     *)&AppTaskAdceTCB, 
																(OS_ERR     *)& err );                     //删除起始任务本身，该任务不再运行
								}
								
								break;	
					}
					case 6:
					{
								/* 创建 TEST 任务	*/					 
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

			/* 退还内存块 */
			OSMemPut ((OS_MEM  *)&mem,                                 //指向内存管理对象
							(void    *)pMsg,                                 //内存块的首地址
							(OS_ERR  *)&err);		                             //返回错误类型
		}
}




/*
*********************************************************************************************************
*                                          Command  TASK PC
*********************************************************************************************************
*/
static  void  AppTaskCmdPc ( void * p_arg )
{
    OS_ERR      err;
		char * pMsg;
		OS_MSG_SIZE    msg_size;

		//CPU_SR_ALLOC();
		(void)p_arg;
		
		while (DEF_TRUE) 
		{
                                         // Task body, always written as an infinite loop.       
			
			pMsg = OSTaskQPend ((OS_TICK        )0,                    //无期限等待
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //没有消息就阻塞任务
											  (OS_MSG_SIZE   *)&msg_size,            //返回消息长度
											  (CPU_TS        *)0,                    //返回消息被发布的时间戳
											  (OS_ERR        *)&err);                //返回错误类型
			
			printf("%s",pMsg);
			//printf("%d",msg_size);
			

			/* 退还内存块 */
			OSMemPut ((OS_MEM  *)&mem,                                 //指向内存管理对象
							(void    *)pMsg,                                 //内存块的首地址
							(OS_ERR  *)&err);		                             //返回错误类型
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
		unsigned char temp;
		unsigned char name[6] = {"TIME"};
		unsigned char data[400] = {"ATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIMEATIME"};
		unsigned char data1[1] = {" "};
			
		
		CPU_SR_ALLOC();
		(void)p_arg;
		
	
		while (DEF_TRUE) 
		{

				OS_CRITICAL_ENTER();
				usb_disk_init();
				temp = usb_disk_connect();
				if( temp== USB_INT_SUCCESS	 )
				{
						usb_disk_creat_file(name);
						usb_disk_write_file(name,0,1,data1);
						temp = usb_disk_add_file(name,2,txt_data3);
						//OSTimeDly ( 1000, OS_OPT_TIME_DLY, & err );
						temp = usb_disk_add_file(name,get_string_length(txt_data2),txt_data2);
						temp = usb_disk_add_file(name,2,txt_data3);
						temp = usb_disk_add_file(name,255,data);
						temp = usb_disk_add_file(name,2,txt_data3);
						temp = usb_disk_add_file(name,255,data);
						temp = usb_disk_add_file(name,2,txt_data3);
						temp = usb_disk_add_file(name,get_string_length(txt_data1),txt_data1);
						if(temp==USB_INT_SUCCESS	)
								printf("FILECREATED!\r\n");
						else
								printf("ERROR!\r\n");
				}
				else
				{
					printf("\r\nDISCONNECT!\r\nCODE: %02X\r\n",temp);
				}
				OS_CRITICAL_EXIT();     
				OSTimeDly ( 100000, OS_OPT_TIME_DLY, & err );
		}
}

