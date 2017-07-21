/*
*********************************************************************************************************
*                                              uC/OS-II
*                                        The Real-Time Kernel
*
*                             (c) Copyright 2012; Micrium, Inc.; Weston, FL
*
*               All rights reserved.  Protected by international copyright laws.
*
*               uC/OS-II is provided in source form for FREE evaluation, for educational
*               use or peaceful research.  If you plan on using uC/OS-II in a commercial
*               product you need to contact Micrium to properly license its use in your
*               product.  We provide ALL the source code for your convenience and to
*               help you experience uC/OS-II.  The fact that the source code is provided
*               does NOT mean that you can use it without paying a licensing fee.
*
*               Knowledge of the source code may NOT be used to develop a similar product.
*
*               Please help us continue to provide the Embedded community with the finest
*               software available.  Your honesty is greatly appreciated.
*********************************************************************************************************
*/

/*
*********************************************************************************************************
*
*                                       APPLICATION CONFIGURATION
*
*                                       IAR Development Kits
*                                              on the
*
*                                    STM32F429II-SK KICKSTART KIT
*
* Filename      : app_cfg.h
* Version       : V1.00
* Programmer(s) : FT
*********************************************************************************************************
*/

#ifndef  APP_CFG_MODULE_PRESENT
#define  APP_CFG_MODULE_PRESENT


/*
*********************************************************************************************************
*                                       ADDITIONAL uC/MODULE ENABLES
*********************************************************************************************************
*/


/*
*********************************************************************************************************
*                                            TASK PRIORITIES
*********************************************************************************************************
*/

#define  APP_TASK_START_PRIO                        2u            //任务优先级

#define  APP_TASK_USART1_PRIO                       4u
#define  APP_TASK_USART2_PRIO                       4u

#define  APP_TASK_CMD_LCD_PRIO                      4u						//此优先级不可以高于USART的，否则解析错误
#define  APP_TASK_CMD_PC_PRIO                       4u						//此优先级不可以高于USART的，否则解析错误

#define  APP_TASK_KEY1_PRIO                         10u
#define  APP_TASK_KEY2_PRIO                         10u

#define  APP_TASK_LED_PRIO                         	10u

#define  APP_TASK_DAC1_PRIO                         3u
#define  APP_TASK_DAC2_PRIO                         3u

#define  APP_TASK_ADCE_PRIO                         6u

#define  APP_TASK_WORK_PRIO                         4u

#define  APP_TASK_TEST_PRIO                         10u

/*
*********************************************************************************************************
*                                            TASK STACK SIZES
*********************************************************************************************************
*/

#define  APP_TASK_START_STK_SIZE                    512u          //任务堆栈空间（单位：sizeof(CPU_STK)）

#define  APP_TASK_USART1_STK_SIZE                   512u 
#define  APP_TASK_USART2_STK_SIZE                   512u 

#define  APP_TASK_CMD_LCD_STK_SIZE                  512u
#define  APP_TASK_CMD_PC_STK_SIZE                   512u

#define  APP_TASK_KEY1_STK_SIZE                     256u 
#define  APP_TASK_KEY2_STK_SIZE                     256u 

#define  APP_TASK_LED_STK_SIZE                     	128u

#define  APP_TASK_DAC1_STK_SIZE                     256u
#define  APP_TASK_DAC2_STK_SIZE                     256u

#define  APP_TASK_ADCE_STK_SIZE                     512u



#define  APP_TASK_WORK_STK_SIZE                     512u

#define  APP_TASK_TEST_STK_SIZE                     256u


/*
*********************************************************************************************************
*                                            TASK STACK SIZES LIMIT
*********************************************************************************************************
*/


/*
*********************************************************************************************************
*                                       TRACE / DEBUG CONFIGURATION
*********************************************************************************************************
*/

#ifndef  TRACE_LEVEL_OFF
#define  TRACE_LEVEL_OFF                0
#endif

#ifndef  TRACE_LEVEL_INFO
#define  TRACE_LEVEL_INFO               1
#endif

#ifndef  TRACE_LEVEL_DBG
#define  TRACE_LEVEL_DBG                2
#endif

#define  APP_CFG_TRACE_LEVEL             TRACE_LEVEL_OFF
#define  APP_CFG_TRACE                   printf

#define  BSP_CFG_TRACE_LEVEL             TRACE_LEVEL_OFF
#define  BSP_CFG_TRACE                   printf

#define  APP_TRACE_INFO(x)               ((APP_CFG_TRACE_LEVEL >= TRACE_LEVEL_INFO)  ? (void)(APP_CFG_TRACE x) : (void)0)
#define  APP_TRACE_DBG(x)                ((APP_CFG_TRACE_LEVEL >= TRACE_LEVEL_DBG)   ? (void)(APP_CFG_TRACE x) : (void)0)

#define  BSP_TRACE_INFO(x)               ((BSP_CFG_TRACE_LEVEL  >= TRACE_LEVEL_INFO) ? (void)(BSP_CFG_TRACE x) : (void)0)
#define  BSP_TRACE_DBG(x)                ((BSP_CFG_TRACE_LEVEL  >= TRACE_LEVEL_DBG)  ? (void)(BSP_CFG_TRACE x) : (void)0)

#endif
