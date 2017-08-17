#ifndef __USB_DISK_H
#define	__USB_DISK_H

#include "stm32f4xx.h"
#include "bsp_usart.h"

#define GET_UART_DATA_TIMEOUT 		0xFF		//���ڽ��մ���

#define CMD_RESET_ALL							0x05		//��λ
#define CMD_CHECK_CHIP_EXIST			0x06		//���оƬ�Ƿ���������
#define CMD_SET_USB_MODE					0x15		//����оƬ����ģʽ
#define CMD_SET_USB_MODE_DATA			0x06		//����ģʽ����	
#define	CMD_DISK_CONNECT					0x30		//�������Ƿ�����
#define CMD_DISK_MOUNT						0x31		//�������Ƿ����

#define CMD_SET_FILE_NAME					0x2f		//����Ŀ���ļ�
#define CMD_FILE_CREATE						0x34		//�����ļ�
#define CMD_GET_STATE							0x22		//����ǰ����״̬
#define CMD_FILE_OPEN							0x32		//���ļ�
#define	CMD_BYTE_FILE_WRITE				0x3C		//д���ļ�����
#define CMD_WR_REQ_DATA						0x2D		//д���ļ���ʾ
#define CMD_BYTE_WR_GO						0x3D		//����д���ļ�
#define CMD_FILE_CLOSE						0x36		//�ر��ļ�
#define CMD_FILE_CLOSE_DATA				0x01		//�ر��ļ�����
#define CMD_BYTE_LOCATE 					0x39		//�����ļ�ƫ��

#define CMD_RET_SUCCESS						0x51		//�����ɹ�
#define CMD_RET_ABORT 						0x5F		//����ʧ��

#define	USB_INT_SUCCESS						0x14		// USB������ߴ�������ɹ� 
#define	USB_INT_CONNECT						0x15		// ��⵽USB�豸�����¼�, �����������ӻ��߶Ͽ����������� 
#define	USB_INT_DISCONNECT				0x16		// ��⵽USB�豸�Ͽ��¼� 
#define	USB_INT_BUF_OVER					0x17		// USB��������������������̫�໺������� 
#define	USB_INT_USB_READY					0x18		// USB�豸�Ѿ�����ʼ��(�Ѿ�����USB��ַ) 
#define USB_ERR_MISS_FILE  				0x42		// USBδ�ҵ��ļ�
#define	USB_INT_DISK_READ					0x1D		// USB�洢���������ݶ��� 
#define	USB_INT_DISK_WRITE				0x1E		// USB�洢����������д�� 
#define	USB_INT_DISK_ERR					0x1F		// USB�洢������ʧ�� 

#define	ERR_DISK_DISCON						0x82		// ������δ����,���ܴ����Ѿ��Ͽ�
#define	ERR_FILE_CLOSE						0xB4		// �ļ��Ѿ��ر�,�����Ҫʹ��,Ӧ�����´��ļ�


unsigned char usb_uart_get_data( void);
void usb_disk_reset(void);
unsigned char usb_disk_init(void);
unsigned char usb_disk_connect(void);
void usb_set_file_name(unsigned char name[8]);
unsigned char usb_disk_creat_file	(unsigned char file_name[8]);
unsigned char usb_disk_open_file	(unsigned char file_name[8]);
unsigned char usb_disk_write_file(unsigned char file_name[8],unsigned int locate,unsigned int data_number,unsigned char data[]);
unsigned char usb_disk_delete_file(unsigned char file_name[8]);


extern unsigned char uart3_data;
extern unsigned char uart3_data_state;

#endif /* __USB_DISK_H */

