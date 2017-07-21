/*
*********************************************************************************************************
*
*	模块名称 : AD7606 spi模式驱动模块(16位ADC)
*	文件名称 : bsp_spi_ad7606.c
*	版    本 : V1.0
*	说    明 : ad7606模块和CPU之间采用SPI接口。本驱动程序支持硬件SPI接口和软件SPI接口。
*			  通过宏切换。
*
*	修改记录 :
*		版本号  日期        作者     说明
*		V1.0    2015-11-06  armfly  正式发布
*
*	Copyright (C), 2015-2016, 安富莱电子 www.armfly.com
*
*********************************************************************************************************
*/
#include "./adc/bsp_spi_ad7606.h" 



static void AD7606_ConfigGPIO(void);
void AD7606_Reset(void);	
void AD7606_SetInputRange(unsigned char _ucRange);
void AD7606_StartConv(void);
void AD7606_CfgSpiHard(void);

static unsigned short int s_adc_now[8];

AD7606_T g_tAD7606;
signed short int s_volt[8];
signed short int s_dat[8];



/* 直接操作寄存器的方法控制IO */
#define	digitalHi(p,i)			 {p->BSRRL=i;}		//设置为高电平
#define digitalLo(p,i)			 {p->BSRRH=i;}		//输出低电平
#define digitalToggle(p,i)	 {p->ODR ^=i;}		//输出反转状态

/* 定义控制IO的宏 */
#define ADC_OS0_TOGGLE		digitalToggle(PORT_OS0,PIN_OS0)
#define ADC_OS0_OFF				digitalHi(PORT_OS0,PIN_OS0)
#define ADC_OS0_ON				digitalLo(PORT_OS0,PIN_OS0)

#define ADC_OS1_TOGGLE		digitalToggle(PORT_OS1,PIN_OS1)
#define ADC_OS1_OFF				digitalHi(PORT_OS1,PIN_OS1)
#define ADC_OS1_ON				digitalLo(PORT_OS1,PIN_OS1)

#define ADC_OS2_TOGGLE		digitalToggle(PORT_OS2,PIN_OS2)
#define ADC_OS2_OFF				digitalHi(PORT_OS2,PIN_OS2)
#define ADC_OS2_ON				digitalLo(PORT_OS2,PIN_OS2)


/*
*********************************************************************************************************
*	函 数 名: bsp_InitAD7606
*	功能说明: 初始化AD7606 SPI口线
*	形    参：无
*	返 回 值: 无
*********************************************************************************************************
*/
void bsp_spi_InitAD7606(void)
{
	AD7606_ConfigGPIO();		/* 配置GPIO */
	
#ifdef HARD_SPI
	AD7606_CfgSpiHard();
#endif
	
	AD7606_SetInputRange(g_tAD7606.Range);	/* 设置采样量程 */

	/* 设置过采样模式 */
	//ad7606_SetOS(0);
	AD7606_Reset();				/* 硬件复位复AD7606 */
	
	AD_CONVST_HIGH();			/* CONVST脚设置为高电平 */	
	
	RESET_1();
	RESET_1();
	RESET_1();
	RESET_1();
	RESET_1();
	RESET_0();
	RESET_0();
	RESET_0();
	RESET_0();
}

/*
*********************************************************************************************************
*	函 数 名: AD7606_ConfigGPIO
*	功能说明: 配置GPIO。 不包括 SCK  MOSI  MISO 共享的SPI总线。
*	形    参: 无
*	返 回 值: 无
*********************************************************************************************************
*/
static void AD7606_ConfigGPIO(void)
{
	GPIO_InitTypeDef GPIO_InitStructure;

	/* 打开GPIO时钟 */
	RCC_AHB1PeriphClockCmd(RCC_CS | RCC_RANGE | RCC_BUSY | RCC_RESET | RCC_CONVST | RCC_OS0 | RCC_OS1 | RCC_OS2 , ENABLE);

	/* 配置几个推完输出IO */
	GPIO_InitStructure.GPIO_Mode = GPIO_Mode_OUT;		/* 设为输出口 */
	GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;		/* 设为推挽模式 */
	GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_NOPULL;	/* 上下拉电阻不使能 */
	GPIO_InitStructure.GPIO_Speed = GPIO_Speed_100MHz;	/* IO口最大速度 */

	GPIO_InitStructure.GPIO_Pin = PIN_RESET;
	GPIO_Init(PORT_RESET, &GPIO_InitStructure);

	GPIO_InitStructure.GPIO_Pin = PIN_CONVST;
	GPIO_Init(PORT_CONVST, &GPIO_InitStructure);
	
	GPIO_InitStructure.GPIO_Pin = PIN_RANGE;
	GPIO_Init(PORT_RANGE, &GPIO_InitStructure);
	
	GPIO_InitStructure.GPIO_Pin = PIN_CS;
	GPIO_Init(PORT_CS, &GPIO_InitStructure);
	
	GPIO_InitStructure.GPIO_Pin = PIN_OS0;
	GPIO_Init(PORT_OS0, &GPIO_InitStructure);
	
	GPIO_InitStructure.GPIO_Pin = PIN_OS1;
	GPIO_Init(PORT_OS1, &GPIO_InitStructure);
	
	GPIO_InitStructure.GPIO_Pin = PIN_OS2;
	GPIO_Init(PORT_OS2, &GPIO_InitStructure);


	ADC_OS0_ON	;			//临时用于VIO输出引脚
	ADC_OS1_ON	;			//临时用于G12输出引脚
	
	/* 配置GPIO为浮动输入模式(实际上CPU复位后就是输入状态) */
	GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IN;		/* 设为输入口 */
	GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;		/* 设为推挽模式 */
	GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_NOPULL;	/* 无需上下拉电阻 */
	GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;	/* IO口最大速度 */

	GPIO_InitStructure.GPIO_Pin = PIN_BUSY;
	GPIO_Init(PORT_BUSY, &GPIO_InitStructure);
}

/*
*********************************************************************************************************
*	函 数 名: AD7606_CfgSpiHard
*	功能说明: 配置STM32内部SPI硬件的工作模式、速度等参数，用于访问AD7606
*	形    参:  无
*	返 回 值: 无
*********************************************************************************************************
*/
void AD7606_CfgSpiHard(void)
{
	SPI_InitTypeDef  SPI_InitStructure;

	/* 配置SPI硬件参数 */
	SPI_InitStructure.SPI_Direction = SPI_Direction_2Lines_FullDuplex;	/* 数据方向：2线全双工 */
	SPI_InitStructure.SPI_Mode = SPI_Mode_Master;		/* STM32的SPI工作模式 ：主机模式 */
	SPI_InitStructure.SPI_DataSize = SPI_DataSize_8b;	/* 数据位长度 ： 8位 */
	/* SPI_CPOL和SPI_CPHA结合使用决定时钟和数据采样点的相位关系、
	   本例配置: 总线空闲是高电平,第2个边沿（上升沿采样数据)
	*/
	SPI_InitStructure.SPI_CPOL = SPI_CPOL_High;			/* 时钟上升沿采样数据 */
	SPI_InitStructure.SPI_CPHA = SPI_CPHA_2Edge;		/* 时钟的第2个边沿采样数据 */
	SPI_InitStructure.SPI_NSS = SPI_NSS_Soft;			/* 片选控制方式：软件控制 */

	/* 设置波特率预分频系数 SPI_BaudRatePrescaler_64 实测SCK周期 800ns ，12.5MHz */
	SPI_InitStructure.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_64;

	SPI_InitStructure.SPI_FirstBit = SPI_FirstBit_MSB;	/* 数据位传输次序：高位先传 */
	SPI_InitStructure.SPI_CRCPolynomial = 7;			/* CRC多项式寄存器，复位后为7。本例程不用 */
	SPI_Init(SPI1, &SPI_InitStructure);

	SPI_Cmd(SPI1, ENABLE);				/* 使能SPI  */
}

/*
*********************************************************************************************************
*	函 数 名: ad7606_SetOS
*	功能说明: 设置过采样模式（数字滤波，硬件求平均值)
*	形    参：_ucMode : 0-6  0表示无过采样，1表示2倍，2表示4倍，3表示8倍，4表示16倍
*				5表示32倍，6表示64倍
*	返 回 值: 无
*********************************************************************************************************
*/
#if 0
void AD7606_SetOS(unsigned char _ucMode)
{
	if (_ucMode == 1)
	{
		AD_OS2_0();
		AD_OS1_0();
		AD_OS0_1();
	}
	else if (_ucMode == 2)
	{
		AD_OS2_0();
		AD_OS1_1();
		AD_OS0_0();
	}
	else if (_ucMode == 3)
	{
		AD_OS2_0();
		AD_OS1_1();
		AD_OS0_1();
	}
	else if (_ucMode == 4)
	{
		AD_OS2_1();
		AD_OS1_0();
		AD_OS0_0();
	}
	else if (_ucMode == 5)
	{
		AD_OS2_1();
		AD_OS1_0();
		AD_OS0_1();
	}
	else if (_ucMode == 6)
	{
		AD_OS2_1();
		AD_OS1_1();
		AD_OS0_0();
	}
	else	/* 按0处理 */
	{
		AD_OS2_0();
		AD_OS1_0();
		AD_OS0_0();
	}
}
#endif

/*
*********************************************************************************************************
*	函 数 名: AD7606_SetInputRange
*	功能说明: 配置AD7606模拟信号输入量程。
*	形    参: _ucRange : 0 表示正负5V   1表示正负10V
*	返 回 值: 无
*********************************************************************************************************
*/
void AD7606_SetInputRange(unsigned char _ucRange)
{
	if (_ucRange == 0)
	{
		AD_RANGE_5V();	/* 设置为正负5V */
	}
	else
	{
		AD_RANGE_10V();	/* 设置为正负10V */
	}
}

/*
*********************************************************************************************************
*	函 数 名: AD7606_RESET
*	功能说明: 硬件复位
*	形    参：无
*	返 回 值: 无
*********************************************************************************************************
*/
void AD7606_Reset(void)
{
	/* CS  SCLK拉高 */
#ifdef SOFT_SPI
		AD_CS_1();
		//SCK_1();
#endif

 	/* AD7606是高电平复位，要求最小脉宽50ns */
	AD_RESET_LOW();
	
	AD_RESET_HIGH();
	AD_RESET_HIGH();
	AD_RESET_HIGH();
	AD_RESET_HIGH();
	
	AD_RESET_LOW();
}
/*
*********************************************************************************************************
*	函 数 名: ad7606_StartConv
*	功能说明: 启动AD7606的ADC转换
*	形    参：无
*	返 回 值: 无
*********************************************************************************************************
*/
void AD7606_StartConv(void)
{
	/* 上升沿开始转换，低电平持续时间至少25ns  */
	AD_CONVST_LOW();
	AD_CONVST_LOW();
	AD_CONVST_LOW();	/* 连续执行2次，低电平约50ns */
	
	AD_CONVST_HIGH();
}

/*
*********************************************************************************************************
*	函 数 名: AD7606_scan
*	功能说明: 扫描调用本函数，用于读取AD转换器数据
*	形    参：无
*	返 回 值: 无
*********************************************************************************************************
*/
void AD7606_Scan(void) 		/* 此函数代码按照时序编写 */
{
	unsigned char i;			

	/* BUSY = 0 时.ad7606处于空闲状态ad转换结束 */	
	if (BUSY_IS_LOW())	   
    {
		AD_CS_0(); /* SPI片选 = 0 */
	
		for (i = 0; i < CH_NUM; i++)
		{
			s_adc_now[i] = bsp_spiRead1();
			
			s_adc_now[i] = s_adc_now[i] * 256 + bsp_spiRead1(); /* 读数据 */	
		}
	
		AD_CS_1(); /* SPI片选 = 1 */

		AD7606_StartConv();	/* 给开始信号 */	
	}
}	  

/*
*********************************************************************************************************
*	函 数 名: GetAdcFormFifo
*	功能说明: 从FIFO中读取一个ADC值
*	形    参：_usReadAdc : 存放ADC结果的变量指针
*	返 回 值: 1 表示OK，0表示暂无数据
*********************************************************************************************************
*/
unsigned short int AD7606_ReadAdc(unsigned char _ch)
{
	unsigned short int sAdc;
	
	DISABLE_INT();	
	sAdc = s_adc_now[_ch];
	ENABLE_INT();

	return sAdc;
}


/*
*********************************************************************************************************
*	函 数 名: PrintfHardInfo
*	功能说明: 打印硬件接线信息
*	形    参：无
*	返 回 值: 无
*********************************************************************************************************
*/
void PrintfHardInfo(void)
{
	printf("接线方法: \r\n");
	printf("AD7606模块       	spi模式 \r\n");
  printf("  +5V       <------   5.0V      5V供电\r\n");
  printf("  GND       -------   GND       地\r\n");
	printf("  CS        <------   PD6       SPI_CS\r\n");
	printf("  RD/SCLK   <------   PB3       SPI_SCLK\r\n");
	printf("  DB7/DOUT  ------>   PB4       SPI_MISO\r\n");
	printf("  RAGE      <------   PB8       模拟信号输入量程\r\n");
	printf("  RST       <------   PE0      复位信号\r\n");
	printf("  CVA CVB   <------   PE13       启动AD转换\r\n");
	printf("  OS0       <------   GND       过采样引脚0(默认接地)\r\n");
	printf("  OS1       <------   GND       过采样引脚1(默认接地)\r\n");
	printf("  OS2       <------   GND       过采样引脚2(默认接地)\r\n");
	printf("  BUSY      ------>   PD7       BUSY信号\r\n");
	printf("打印采集数据: \r\n");
}

void AD7606_Mak(void)
{
	unsigned char i;
	unsigned short int adc;

	for (i = 0;i < CH_NUM; i++)
	{	
		s_dat[i] = AD7606_ReadAdc(i);
	/* 
		32767 = 5V , 这是理论值，实际可以根据5V基准的实际值进行公式矫正 
		volt[i] = ((int16_t)dat[i] * 5000) / 32767;	计算实际电压值（近似估算的），如需准确，请进行校准            
		volt[i] = dat[i] * 0.3051850947599719
	*/
		
		if(s_dat[i]>=0)
		{
				adc = s_dat[i];
				if (g_tAD7606.Range == 0)
				{
					s_volt[i] = (adc * 5000) / 32767;
				}
				else
				{
					s_volt[i] = (adc * 10000) / 32767;
				}
		}
		else
		{
				adc = -s_dat[i];
				if (g_tAD7606.Range == 0)
				{
					s_volt[i] = -(adc * 5000) / 32767;
				}
				else
				{
					s_volt[i] = -(adc * 10000) / 32767;
				}
		}
	}
}
 
/*
*********************************************************************************************************
*	函 数 名: AD7606_Disp
*	功能说明: 显示采样后的数据
*	形    参：无
*	返 回 值: 无
*********************************************************************************************************
*/
void AD7606_Disp(void)
{
	unsigned short int i;	
	unsigned short int iTemp;

	/* 打印采集数据 */
	for (i = 0; i < CH_NUM; i++)
	{                
   		iTemp = s_volt[i];	/* uV  */
		
		if (s_dat[i] < 0)
		{
			iTemp = -iTemp;
      printf(" CH%d = %6d,0x%04X (-%d.%d%d%d V) \r\n", i+1, s_dat[i], (unsigned short int)s_dat[i], iTemp /1000, (iTemp%1000)/100, (iTemp%100)/10,iTemp%10);
		}
		else
		{
      printf(" CH%d = %6d,0x%04X ( %d.%d%d%d V) \r\n", i+1, s_dat[i], s_dat[i] , iTemp /1000, (iTemp%1000)/100, (iTemp%100)/10,iTemp%10);                    
		}
	}
	printf("\33[%dA", (int)CH_NUM);  /* 光标上移n行 */		
}





/***************************** 安富莱电子 www.armfly.com (END OF FILE) *********************************/
