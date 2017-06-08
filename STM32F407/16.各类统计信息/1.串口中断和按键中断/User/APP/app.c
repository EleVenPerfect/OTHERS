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


/*
*********************************************************************************************************
*                                                 TCB
*********************************************************************************************************
*/

static  OS_TCB   AppTaskStartTCB;    //任务控制块

OS_TCB           AppTaskUsartTCB;
OS_TCB           AppTaskKeyTCB;

static  OS_TCB   AppTaskLed1TCB;
static  OS_TCB   AppTaskLed2TCB;

static  OS_TCB   AppTaskDac1TCB;
static  OS_TCB   AppTaskDac2TCB;

/*
*********************************************************************************************************
*                                                STACKS
*********************************************************************************************************
*/

static  CPU_STK  AppTaskStartStk[APP_TASK_START_STK_SIZE];       //任务堆栈

static  CPU_STK  AppTaskUsartStk [ APP_TASK_USART_STK_SIZE ];
static  CPU_STK  AppTaskKeyStk   [ APP_TASK_KEY_STK_SIZE ];

static  CPU_STK  AppTaskLed1Stk [ APP_TASK_LED1_STK_SIZE ];
static  CPU_STK  AppTaskLed2Stk [ APP_TASK_LED2_STK_SIZE ];

static  CPU_STK  AppTaskDac1Stk [ APP_TASK_DAC1_STK_SIZE ];
static  CPU_STK  AppTaskDac2Stk [ APP_TASK_DAC2_STK_SIZE ];

/*
*********************************************************************************************************
*                                         FUNCTION PROTOTYPES
*********************************************************************************************************
*/

static  void  AppTaskStart  (void *p_arg);               //任务函数声明

static  void  AppTaskUsart  ( void * p_arg );
static  void  AppTaskKey    ( void * p_arg );

static  void  AppTaskLed1  ( void * p_arg );
static  void  AppTaskLed2  ( void * p_arg );

static  void  AppTaskDac1  ( void * p_arg );
static  void  AppTaskDac2  ( void * p_arg );


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
								 (OS_MEM_QTY   )70,               //内存分区中内存块数目
								 (OS_MEM_SIZE  )4,                //内存块的字节数目
								 (OS_ERR      *)&err);            //返回错误类型
							 
							 
		/* 创建 AppTaskUsart 任务 */
    OSTaskCreate((OS_TCB     *)&AppTaskUsartTCB,                            //任务控制块地址
                 (CPU_CHAR   *)"App Task Usart",                            //任务名称
                 (OS_TASK_PTR ) AppTaskUsart,                               //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_USART_PRIO,                        //任务的优先级
                 (CPU_STK    *)&AppTaskUsartStk[0],                         //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_USART_STK_SIZE / 10,               //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_USART_STK_SIZE,                    //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 50u,                                        //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型
								 
								 
		/* 创建 AppTaskKey 任务 */
    OSTaskCreate((OS_TCB     *)&AppTaskKeyTCB,                              //任务控制块地址
                 (CPU_CHAR   *)"App Task Key",                              //任务名称
                 (OS_TASK_PTR ) AppTaskKey,                                 //任务函数
                 (void       *) 0,                                          //传递给任务函数（形参p_arg）的实参
                 (OS_PRIO     ) APP_TASK_KEY_PRIO,                          //任务的优先级
                 (CPU_STK    *)&AppTaskKeyStk[0],                           //任务堆栈的基地址
                 (CPU_STK_SIZE) APP_TASK_KEY_STK_SIZE / 10,                 //任务堆栈空间剩下1/10时限制其增长
                 (CPU_STK_SIZE) APP_TASK_KEY_STK_SIZE,                      //任务堆栈空间（单位：sizeof(CPU_STK)）
                 (OS_MSG_QTY  ) 50u,                                        //任务可接收的最大消息数
                 (OS_TICK     ) 0u,                                         //任务的时间片节拍数（0表默认值OSCfg_TickRate_Hz/10）
                 (void       *) 0,                                          //任务扩展（0表不扩展）
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR), //任务选项
                 (OS_ERR     *)&err);                                       //返回错误类型

	 /* 创建 LED1 任务 */
	 OSTaskCreate((OS_TCB     *)&AppTaskLed1TCB,                /* Create the Led1 task                                */
                 (CPU_CHAR   *)"App Task Led1",
                 (OS_TASK_PTR ) AppTaskLed1,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_LED1_PRIO,
                 (CPU_STK    *)&AppTaskLed1Stk[0],
                 (CPU_STK_SIZE) APP_TASK_LED1_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_LED1_STK_SIZE,
                 (OS_MSG_QTY  ) 5u,
                 (OS_TICK     ) 0u,
                 (void       *) 0,
                 (OS_OPT      )(OS_OPT_TASK_STK_CHK | OS_OPT_TASK_STK_CLR),
                 (OS_ERR     *)&err);

  	 /* 创建 LED1 任务 */								 
    OSTaskCreate((OS_TCB     *)&AppTaskLed2TCB,                /* Create the Led2 task                                */
                 (CPU_CHAR   *)"App Task Led2",
                 (OS_TASK_PTR ) AppTaskLed2,
                 (void       *) 0,
                 (OS_PRIO     ) APP_TASK_LED2_PRIO,
                 (CPU_STK    *)&AppTaskLed2Stk[0],
                 (CPU_STK_SIZE) APP_TASK_LED2_STK_SIZE / 10,
                 (CPU_STK_SIZE) APP_TASK_LED2_STK_SIZE,
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

								 
		OSTaskDel ( 0, & err );                     //删除起始任务本身，该任务不再运行
		
		
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
	CPU_SR_ALLOC();
	
	char * pMsg;

	(void)p_arg;

					 
	while (DEF_TRUE) {                                           //任务体
		/* 阻塞任务，等待任务消息 */
		pMsg = OSTaskQPend ((OS_TICK        )0,                    //无期限等待
											  (OS_OPT         )OS_OPT_PEND_BLOCKING, //没有消息就阻塞任务
											  (OS_MSG_SIZE   *)&msg_size,            //返回消息长度
											  (CPU_TS        *)0,                    //返回消息被发布的时间戳
											  (OS_ERR        *)&err);                //返回错误类型

		OS_CRITICAL_ENTER();                                       //进入临界段，避免串口打印被打断

		printf ( "%c", * pMsg );                                   //打印消息内容
		
		if(*pMsg == '1')
			printf("############");							//如果是1则发送状态
		OS_CRITICAL_EXIT();                                        //退出临界段
		
		/* 退还内存块 */
		OSMemPut ((OS_MEM  *)&mem,                                 //指向内存管理对象
							(void    *)pMsg,                                 //内存块的首地址
							(OS_ERR  *)&err);		                             //返回错误类型
		
	}
	
}


/*
*********************************************************************************************************
*                                          KEY TASK
*********************************************************************************************************
*/
static  void  AppTaskKey ( void * p_arg )
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

		printf ( "串口任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskUsartTCB.CPUUsage / 100, AppTaskUsartTCB.CPUUsage % 100 );
						 
		printf ( "串口任务的CPU最大使用率：%d.%d%%\r\n", 
		         AppTaskUsartTCB.CPUUsageMax / 100, AppTaskUsartTCB.CPUUsageMax % 100 ); 

		printf ( "按键任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskKeyTCB.CPUUsage / 100, AppTaskKeyTCB.CPUUsage % 100 );  
						 
		printf ( "按键任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskKeyTCB.CPUUsageMax / 100, AppTaskKeyTCB.CPUUsageMax % 100 ); 
		
		printf ( "DAC1任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskDac1TCB.CPUUsage / 100, AppTaskDac1TCB.CPUUsage % 100 );  
						 
		printf ( "DAC1任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskDac1TCB.CPUUsageMax / 100, AppTaskDac1TCB.CPUUsageMax % 100 ); 

		printf ( "DAC2任务的CPU使用率：%d.%d%%\r\n", 
		         AppTaskDac2TCB.CPUUsage / 100, AppTaskDac2TCB.CPUUsage % 100 );  
						 
		printf ( "DAC2任务的CPU最大使用率：%d.%d%%    \r\n", 
		         AppTaskDac2TCB.CPUUsageMax / 100, AppTaskDac2TCB.CPUUsageMax % 100 ); 
						 
    printf ( "串口任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskUsartTCB.StkUsed, AppTaskUsartTCB.StkFree ); 
		
    printf ( "DAC1任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskDac1TCB.StkUsed, AppTaskDac1TCB.StkFree ); 
						 
		printf ( "DAC2任务的已用和空闲堆栈大小分别为：%d,%d\r\n", 
		         AppTaskDac2TCB.StkUsed, AppTaskDac2TCB.StkFree ); 
						 

		
		OS_CRITICAL_EXIT();                               //退出临界段
		
	}
	
}


/*
*********************************************************************************************************
*                                          LED1 TASK
*********************************************************************************************************
*/

static  void  AppTaskLed1 ( void * p_arg )
{
    OS_ERR      err;
   (void)p_arg;


    while (DEF_TRUE) {                                          /* Task body, always written as an infinite loop.       */
			LED1_TOGGLE;
			OSTimeDly ( 1000, OS_OPT_TIME_DLY, & err );
    }
		
		
}


/*
*********************************************************************************************************
*                                          LED2 TASK
*********************************************************************************************************
*/

static  void  AppTaskLed2 ( void * p_arg )
{
    OS_ERR      err;
   (void)p_arg;


    while (DEF_TRUE) {                                          /* Task body, always written as an infinite loop.       */
			LED2_TOGGLE;
			OSTimeDly ( 1000, OS_OPT_TIME_DLY, & err );
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

	
		NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);//设置系统中断优先级分组2
		Dac1_Init();		 		//DAC通道1初始化	
		DAC_SetChannel1Data(DAC_Align_12b_R,i);//初始值为0	
		
		while (DEF_TRUE) 
		{                                          /* Task body, always written as an infinite loop.       */
				Dac1_Set_Vol(i);
				if(i>3290)
						i = 0;
				i+=5;
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
		int i = 3290;
		(void)p_arg;

	
		NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);//设置系统中断优先级分组2
		Dac2_Init();		 		//DAC通道1初始化	
		DAC_SetChannel2Data(DAC_Align_12b_R,i);//初始值为0	
		
		while (DEF_TRUE) 
		{                                          /* Task body, always written as an infinite loop.       */
				Dac2_Set_Vol(i);
				if(i < 10)
						i = 3290;
				i-=5;
				OSTimeDly ( 10, OS_OPT_TIME_DLY, & err );
		}
}


