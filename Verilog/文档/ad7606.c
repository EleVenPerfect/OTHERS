/*************************************************************

 * �ļ�����ad_test.c

 * ��  �ܣ�����ad7606�ɼ���ѹ�ź�

 * ˵  ������ad7606ת�������������жϣ������ݽ��ж�ȡ

 ************************************************************/
#include <stdio.h>
#include <string.h>
#include "system.h"                         //����������Ӳ��������Ϣ
#include "altera_avalon_timer_regs.h"       //�����ں˼Ĵ�����ӳ�䣬�ṩ�Եײ�Ӳ���ķ��Ż�����
#include "altera_avalon_pio_regs.h"         //����������I/O����Ϣ 
#include "alt_types.h"                      //Altera�������������
#include "sys/alt_irq.h"                 
#include "sys/alt_alarm.h"                  //ϵͳʱ�ӷ���ͷ�ļ�
#include "priv\alt_busy_sleep.h"            //��ʱ����alt_busy_sleep����


//#define ad_busy  *(volatile unsigned char *) AD_BUSY_BASE
alt_u8 led_state = 0;
alt_u16 ad_code[8];

/***************************************************************
** ��        ��:      uart_SendByte
** ��        ��:      �򴮿ڷ����ֽ�
***************************************************************/
void uart_SendByte (alt_u8 ucDat)
{
    while(!(IORD_ALTERA_AVALON_UART_STATUS(UART_BASE)&0x0040));	//�ȴ����ݷ������
    IOWR_ALTERA_AVALON_UART_TXDATA(UART_BASE,ucDat);                                                     
}
/***************************************************************
 * ���ƣ�uart_SendStr
 * ���ܣ��򴮿ڷ����ַ���
 * ************************************************************/
 void uart_SendStr (alt_u8  const *puiStr)
{
    while (1) {
        if (*puiStr == '\0') {
            break;                          /* �������������˳� */
        }
        uart_SendByte (*puiStr++);
    }
}
/*************************************************************

 * ��    �ƣ�ad_data()

 * ��    �ܣ�����ȡ��������ת������Ӧ�ĵ�ѹֵ

 ************************************************************/
float ad_data(alt_u16 code)
{
    float ad_data;
    if(code<=0x7FFF)
    
        ad_data=code*0.00030517578125;
        
    else if (code>=0x8000)
    
        ad_data=(code*0.00030517578125)-20;
    
    return ad_data;
}
/*************************************************************

 * ��    �ƣ�ad7606_irq_Init()

 * ��    �ܣ���ʼ��ad7606�жϣ����жϣ�����ز���Ĵ���

 * ��ڲ�������

 * ���ڲ�������

 ************************************************************/
void ad7606_irq_Init()
{
    IOWR_ALTERA_AVALON_PIO_IRQ_MASK(AD_BUSY_BASE, 0x01); //��AD_BUSY�ж�
    IOWR_ALTERA_AVALON_PIO_EDGE_CAP(AD_BUSY_BASE, 0x00); //���жϲ���Ĵ���
    alt_irq_register(AD_BUSY_IRQ,0,AD7606_ISR);          //ע���жϺ���
}
/*************************************************************

 * ��    �ƣ�void ad7606_Init()

 * ��    �ܣ���ʼ��ad7606 ��ad7606���и�λ

 * ��ڲ�������

 * ���ڲ�������

 ************************************************************/
void AD7606_Init()
{       
    IOWR_ALTERA_AVALON_PIO_DATA(AD_REST_BASE,1);
    alt_busy_sleep(1);
    IOWR_ALTERA_AVALON_PIO_DATA(AD_REST_BASE,0);
    AD7606_irq_Init();   
}


/*************************************************************

 * ��    �ƣ�AD7606_ISR()

 * ��    �ܣ�AD7606�жϷ������

 ************************************************************/

 void AD7606_ISR(void* context, alt_u32 id)
{
    alt_u8 i;
    char	chars[1];
    float voltage[8];
    
    IOWR_ALTERA_AVALON_PIO_DATA(AD_CONVEST_BASE,0);
    for(i=0;i<8;i++)
    {
        IOWR_ALTERA_AVALON_PIO_DATA(AD_CS_BASE,0);    //ʹ��ad7606
        ad_code[i] = IORD_ALTERA_AVALON_PIO_DATA(AD_DATA_BASE); //��ȡad7606ת��ֵ
        voltage[i] = ad_data(ad_code[i]);             //�õ���ѹֵ
        IOWR_ALTERA_AVALON_PIO_DATA(AD_CS_BASE,1);              
        
    }
    for(i=0;i<8;i++)
    {
        sprintf(chars,"%f",voltage[i]);
        uart_SendStr(chars);													//ͨ�����ڷ���ת������
        uart_SendStr(" ");
    }
    uart_SendStr("\n");
    IOWR_ALTERA_AVALON_PIO_EDGE_CAP(AD_BUSY_BASE, 0x00);//���жϲ���Ĵ���
    
    IOWR_ALTERA_AVALON_PIO_DATA(LED_BASE,led_state);
    led_state=~led_state;
    alt_busy_sleep(1000000);
    IOWR_ALTERA_AVALON_PIO_DATA(AD_CONVEST_BASE,1);     //����ת��
}



/*************************************************************

 * ��    �ƣ�main()

 * ��    �ܣ��ȴ�ad7606�ж�

 ************************************************************/
int main()
{
    ad7606_Init();
    while(1);
    return 0;
}
