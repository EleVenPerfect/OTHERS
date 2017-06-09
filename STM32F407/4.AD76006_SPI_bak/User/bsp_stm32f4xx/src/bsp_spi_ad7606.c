/*
*********************************************************************************************************
*
*	ģ������ : AD7606 spiģʽ����ģ��(16λADC)
*	�ļ����� : bsp_spi_ad7606.c
*	��    �� : V1.0
*	˵    �� : ad7606ģ���CPU֮�����SPI�ӿڡ�����������֧��Ӳ��SPI�ӿں�����SPI�ӿڡ�
*			  ͨ�����л���
*
*	�޸ļ�¼ :
*		�汾��  ����        ����     ˵��
*		V1.0    2015-11-06  armfly  ��ʽ����
*
*	Copyright (C), 2015-2016, ���������� www.armfly.com
*
*********************************************************************************************************
*/

#include "bsp.h"

/* SPI���ߵ�SCK��MOSI��MISO �� bsp_spi_bus.c������  */
/* CSNƬѡ */
#define RCC_CS 		RCC_AHB1Periph_GPIOE
#define PORT_CS		GPIOE
#define PIN_CS		GPIO_Pin_1

/* RESET */
#define RCC_RESET 	RCC_AHB1Periph_GPIOE
#define PORT_RESET	GPIOE
#define PIN_RESET	GPIO_Pin_0
/* RANGE */		
#define RCC_RANGE 	RCC_AHB1Periph_GPIOB
#define PORT_RANGE 	GPIOB
#define PIN_RANGE 	GPIO_Pin_5

#define RESET_0()	GPIO_ResetBits(PORT_RESET, PIN_RESET)
#define RESET_1()	GPIO_SetBits(PORT_RESET, PIN_RESET)

/* CONVST */		
#define RCC_CONVST 	RCC_AHB1Periph_GPIOB
#define PORT_CONVST	GPIOB
#define PIN_CONVST 	GPIO_Pin_3

/* BUSY */
#define RCC_BUSY 	RCC_AHB1Periph_GPIOD
#define PORT_BUSY 	GPIOD
#define PIN_BUSY 	GPIO_Pin_6

#define BUSY_IS_LOW()				(GPIO_ReadInputDataBit(PORT_BUSY, PIN_BUSY) == Bit_RESET)


/* OS0 */
#define RCC_OS0 	RCC_AHB1Periph_GPIOD
#define PORT_OS0 	GPIOD
#define PIN_OS0 	GPIO_Pin_7

/* OS1 */
#define RCC_OS1 	RCC_AHB1Periph_GPIOE
#define PORT_OS1 	GPIOE
#define PIN_OS1 	GPIO_Pin_2

/* OS2 */
#define RCC_OS2 	RCC_AHB1Periph_GPIOG
#define PORT_OS2 	GPIOG
#define PIN_OS2 	GPIO_Pin_15

static void AD7606_ConfigGPIO(void);
void AD7606_Reset(void);	
void AD7606_SetInputRange(uint8_t _ucRange);
void AD7606_StartConv(void);
void AD7606_CfgSpiHard(void);

static int16_t s_adc_now[8];

AD7606_T g_tAD7606;



/* ֱ�Ӳ����Ĵ����ķ�������IO */
#define	digitalHi(p,i)			 {p->BSRRL=i;}		//����Ϊ�ߵ�ƽ
#define digitalLo(p,i)			 {p->BSRRH=i;}		//����͵�ƽ
#define digitalToggle(p,i)	 {p->ODR ^=i;}		//�����ת״̬

/* �������IO�ĺ� */
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
*	�� �� ��: bsp_InitAD7606
*	����˵��: ��ʼ��AD7606 SPI����
*	��    �Σ���
*	�� �� ֵ: ��
*********************************************************************************************************
*/
void bsp_spi_InitAD7606(void)
{
	AD7606_ConfigGPIO();		/* ����GPIO */
	
#ifdef HARD_SPI
	AD7606_CfgSpiHard();
#endif
	
	AD7606_SetInputRange(g_tAD7606.Range);	/* ���ò������� */

	/* ���ù�����ģʽ */
	//ad7606_SetOS(0);
	AD7606_Reset();				/* Ӳ����λ��AD7606 */
	
	AD_CONVST_HIGH();			/* CONVST������Ϊ�ߵ�ƽ */	
}

/*
*********************************************************************************************************
*	�� �� ��: AD7606_ConfigGPIO
*	����˵��: ����GPIO�� ������ SCK  MOSI  MISO ������SPI���ߡ�
*	��    ��: ��
*	�� �� ֵ: ��
*********************************************************************************************************
*/
static void AD7606_ConfigGPIO(void)
{
	GPIO_InitTypeDef GPIO_InitStructure;

	/* ��GPIOʱ�� */
	RCC_AHB1PeriphClockCmd(RCC_CS | RCC_RANGE | RCC_BUSY | RCC_RESET | RCC_CONVST | RCC_OS0 | RCC_OS1 | RCC_OS2 , ENABLE);

	/* ���ü����������IO */
	GPIO_InitStructure.GPIO_Mode = GPIO_Mode_OUT;		/* ��Ϊ����� */
	GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;		/* ��Ϊ����ģʽ */
	GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_NOPULL;	/* ���������費ʹ�� */
	GPIO_InitStructure.GPIO_Speed = GPIO_Speed_100MHz;	/* IO������ٶ� */

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


	ADC_OS0_OFF	;
	ADC_OS1_ON	;
	ADC_OS2_ON	;
	/* ����GPIOΪ��������ģʽ(ʵ����CPU��λ���������״̬) */
	GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IN;		/* ��Ϊ����� */
	GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;		/* ��Ϊ����ģʽ */
	GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_NOPULL;	/* �������������� */
	GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;	/* IO������ٶ� */

	GPIO_InitStructure.GPIO_Pin = PIN_BUSY;
	GPIO_Init(PORT_BUSY, &GPIO_InitStructure);
}

/*
*********************************************************************************************************
*	�� �� ��: AD7606_CfgSpiHard
*	����˵��: ����STM32�ڲ�SPIӲ���Ĺ���ģʽ���ٶȵȲ��������ڷ���AD7606
*	��    ��:  ��
*	�� �� ֵ: ��
*********************************************************************************************************
*/
void AD7606_CfgSpiHard(void)
{
	SPI_InitTypeDef  SPI_InitStructure;

	/* ����SPIӲ������ */
	SPI_InitStructure.SPI_Direction = SPI_Direction_2Lines_FullDuplex;	/* ���ݷ���2��ȫ˫�� */
	SPI_InitStructure.SPI_Mode = SPI_Mode_Master;		/* STM32��SPI����ģʽ ������ģʽ */
	SPI_InitStructure.SPI_DataSize = SPI_DataSize_8b;	/* ����λ���� �� 8λ */
	/* SPI_CPOL��SPI_CPHA���ʹ�þ���ʱ�Ӻ����ݲ��������λ��ϵ��
	   ��������: ���߿����Ǹߵ�ƽ,��2�����أ������ز�������)
	*/
	SPI_InitStructure.SPI_CPOL = SPI_CPOL_High;			/* ʱ�������ز������� */
	SPI_InitStructure.SPI_CPHA = SPI_CPHA_2Edge;		/* ʱ�ӵĵ�2�����ز������� */
	SPI_InitStructure.SPI_NSS = SPI_NSS_Soft;			/* Ƭѡ���Ʒ�ʽ���������� */

	/* ���ò�����Ԥ��Ƶϵ�� SPI_BaudRatePrescaler_64 ʵ��SCK���� 800ns ��12.5MHz */
	SPI_InitStructure.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_64;

	SPI_InitStructure.SPI_FirstBit = SPI_FirstBit_MSB;	/* ����λ������򣺸�λ�ȴ� */
	SPI_InitStructure.SPI_CRCPolynomial = 7;			/* CRC����ʽ�Ĵ�������λ��Ϊ7�������̲��� */
	SPI_Init(SPI1, &SPI_InitStructure);

	SPI_Cmd(SPI1, ENABLE);				/* ʹ��SPI  */
}

/*
*********************************************************************************************************
*	�� �� ��: ad7606_SetOS
*	����˵��: ���ù�����ģʽ�������˲���Ӳ����ƽ��ֵ)
*	��    �Σ�_ucMode : 0-6  0��ʾ�޹�������1��ʾ2����2��ʾ4����3��ʾ8����4��ʾ16��
*				5��ʾ32����6��ʾ64��
*	�� �� ֵ: ��
*********************************************************************************************************
*/
#if 0
void AD7606_SetOS(uint8_t _ucMode)
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
	else	/* ��0���� */
	{
		AD_OS2_0();
		AD_OS1_0();
		AD_OS0_0();
	}
}
#endif

/*
*********************************************************************************************************
*	�� �� ��: AD7606_SetInputRange
*	����˵��: ����AD7606ģ���ź��������̡�
*	��    ��: _ucRange : 0 ��ʾ����5V   1��ʾ����10V
*	�� �� ֵ: ��
*********************************************************************************************************
*/
void AD7606_SetInputRange(uint8_t _ucRange)
{
	if (_ucRange == 0)
	{
		AD_RANGE_5V();	/* ����Ϊ����5V */
	}
	else
	{
		AD_RANGE_10V();	/* ����Ϊ����10V */
	}
}

/*
*********************************************************************************************************
*	�� �� ��: AD7606_RESET
*	����˵��: Ӳ����λ
*	��    �Σ���
*	�� �� ֵ: ��
*********************************************************************************************************
*/
void AD7606_Reset(void)
{
	/* CS  SCLK���� */
#ifdef SOFT_SPI
		AD_CS_1();
		//SCK_1();
#endif

 	/* AD7606�Ǹߵ�ƽ��λ��Ҫ����С����50ns */
	AD_RESET_LOW();
	
	AD_RESET_HIGH();
	AD_RESET_HIGH();
	AD_RESET_HIGH();
	AD_RESET_HIGH();
	
	AD_RESET_LOW();
}
/*
*********************************************************************************************************
*	�� �� ��: ad7606_StartConv
*	����˵��: ����AD7606��ADCת��
*	��    �Σ���
*	�� �� ֵ: ��
*********************************************************************************************************
*/
void AD7606_StartConv(void)
{
	/* �����ؿ�ʼת�����͵�ƽ����ʱ������25ns  */
	AD_CONVST_LOW();
	AD_CONVST_LOW();
	AD_CONVST_LOW();	/* ����ִ��2�Σ��͵�ƽԼ50ns */
	
	AD_CONVST_HIGH();
}

/*
*********************************************************************************************************
*	�� �� ��: AD7606_scan
*	����˵��: ɨ����ñ����������ڶ�ȡADת��������
*	��    �Σ���
*	�� �� ֵ: ��
*********************************************************************************************************
*/
void AD7606_Scan(void) 		/* �˺������밴��ʱ���д */
{
	uint8_t i;			

	/* BUSY = 0 ʱ.ad7606���ڿ���״̬adת������ */	
	if (BUSY_IS_LOW())	   
    {
		AD_CS_0(); /* SPIƬѡ = 0 */
	
		for (i = 0; i < CH_NUM; i++)
		{
			s_adc_now[i] = bsp_spiRead1();
			
			s_adc_now[i] = s_adc_now[i] * 256 + bsp_spiRead1(); /* ������ */	
		}
	
		AD_CS_1(); /* SPIƬѡ = 1 */

		AD7606_StartConv();	/* ����ʼ�ź� */	
	}
}	  

/*
*********************************************************************************************************
*	�� �� ��: GetAdcFormFifo
*	����˵��: ��FIFO�ж�ȡһ��ADCֵ
*	��    �Σ�_usReadAdc : ���ADC����ı���ָ��
*	�� �� ֵ: 1 ��ʾOK��0��ʾ��������
*********************************************************************************************************
*/
int16_t AD7606_ReadAdc(uint8_t _ch)
{
	int16_t sAdc;
	
	DISABLE_INT();	
	sAdc = s_adc_now[_ch];
	ENABLE_INT();

	return sAdc;
}

/***************************** ���������� www.armfly.com (END OF FILE) *********************************/