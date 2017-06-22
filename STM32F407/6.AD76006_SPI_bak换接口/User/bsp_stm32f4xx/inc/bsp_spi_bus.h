/*
*********************************************************************************************************
*
*	模块名称 : SPI总线驱动
*	文件名称 : bsp_spi_bus.h
*	版    本 : V1.0
*	说    明 : 头文件
*
*	Copyright (C), 2014-2015, 安富莱电子 www.armfly.com
*
*********************************************************************************************************
*/

#ifndef __BSP_SPI_BUS_H
#define __BSP_SPI_BUS_H

#define SOFT_SPI		/* 定义此行表示使用GPIO模拟SPI接口 */
//#define HARD_SPI		/* 定义此行表示使用CPU的硬件SPI接口 */

#ifdef SOFT_SPI		/* 软件SPI */
	/* 定义GPIO端口 */
	#define RCC_SCK 	RCC_AHB1Periph_GPIOD
	#define PORT_SCK	GPIOD
	#define PIN_SCK		GPIO_Pin_8

	#define RCC_MOSI 	RCC_AHB1Periph_GPIOC
	#define PORT_MOSI	GPIOC
	#define PIN_MOSI	GPIO_Pin_2		//临时用于设置输入功能

	#define RCC_MISO 	RCC_AHB1Periph_GPIOD
	#define PORT_MISO	GPIOD
	#define PIN_MISO	GPIO_Pin_15

	#define SCK_0()		GPIO_ResetBits(PORT_SCK, PIN_SCK)
	#define SCK_1()		GPIO_SetBits(PORT_SCK, PIN_SCK)

	#define MOSI_0()	GPIO_ResetBits(PORT_MOSI, PIN_MOSI)
	#define MOSI_1()	GPIO_SetBits(PORT_MOSI, PIN_MOSI)

	#define MISO_IS_HIGH()	(GPIO_ReadInputDataBit(PORT_MISO, PIN_MISO) == Bit_SET)
#endif


#define CH_NUM			8				/* 采集2通道 */

/*
	【SPI时钟最快是2分频，不支持不分频】
	如果是SPI1，2分频时SCK时钟 = 42M，4分频时SCK时钟 = 21M
	如果是SPI3, 2分频时SCK时钟 = 21M
*/
#define SPI_SPEED_42M		SPI_BaudRatePrescaler_2
#define SPI_SPEED_21M		SPI_BaudRatePrescaler_4
#define SPI_SPEED_5_2M		SPI_BaudRatePrescaler_8
#define SPI_SPEED_2_6M		SPI_BaudRatePrescaler_16
#define SPI_SPEED_1_3M		SPI_BaudRatePrescaler_32
#define SPI_SPEED_0_6M		SPI_BaudRatePrescaler_64

void bsp_InitSPIBus(void);

void bsp_spiWrite0(uint8_t _ucByte);
uint8_t bsp_spiRead0(void);

void bsp_spiWrite1(uint8_t _ucByte);
uint8_t bsp_spiRead1(void);

uint8_t bsp_SpiBusBusy(void);

void bsp_SPI_Init(uint16_t _cr1);

void bsp_SpiBusEnter(void);
void bsp_SpiBusExit(void);
uint8_t bsp_SpiBusBusy(void);
void bsp_SetSpiSck(uint8_t _data);

#endif

/***************************** 安富莱电子 www.armfly.com (END OF FILE) *********************************/
