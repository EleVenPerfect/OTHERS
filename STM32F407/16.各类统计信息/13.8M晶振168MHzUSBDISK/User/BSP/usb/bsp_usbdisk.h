#ifndef __USB_DISK_H
#define	__USB_DISK_H

#include "stm32f4xx.h"
#include "bsp_usart.h"

#define GET_UART_DATA_TIMEOUT 		0xFF		//串口接收错误

#define CMD_RESET_ALL							0x05		//复位
#define CMD_CHECK_CHIP_EXIST			0x06		//检测芯片是否正常运行
#define CMD_SET_USB_MODE					0x15		//设置芯片工作模式
#define CMD_SET_USB_MODE_DATA			0x06		//工作模式设置	
#define	CMD_DISK_CONNECT					0x30		//检测磁盘是否连接
#define CMD_DISK_MOUNT						0x31		//检测磁盘是否挂载

#define CMD_SET_FILE_NAME					0x2f		//设置目标文件
#define CMD_FILE_CREATE						0x34		//创建文件
#define CMD_GET_STATE							0x22		//请求当前操作状态
#define CMD_FILE_OPEN							0x32		//打开文件
#define	CMD_BYTE_FILE_WRITE				0x3C		//写入文件命令
#define CMD_WR_REQ_DATA						0x2D		//写入文件提示
#define CMD_BYTE_WR_GO						0x3D		//继续写入文件
#define CMD_FILE_CLOSE						0x36		//关闭文件
#define CMD_FILE_CLOSE_DATA				0x01		//关闭文件数据
#define CMD_BYTE_LOCATE 					0x39		//设置文件偏移

#define CMD_RET_SUCCESS						0x51		//操作成功
#define CMD_RET_ABORT 						0x5F		//操作失败

#define	USB_INT_SUCCESS						0x14		// USB事务或者传输操作成功 
#define	USB_INT_CONNECT						0x15		// 检测到USB设备连接事件, 可能是新连接或者断开后重新连接 
#define	USB_INT_DISCONNECT				0x16		// 检测到USB设备断开事件 
#define	USB_INT_BUF_OVER					0x17		// USB传输的数据有误或者数据太多缓冲区溢出 
#define	USB_INT_USB_READY					0x18		// USB设备已经被初始化(已经分配USB地址) 
#define USB_ERR_MISS_FILE  				0x42		// USB未找到文件
#define	USB_INT_DISK_READ					0x1D		// USB存储器请求数据读出 
#define	USB_INT_DISK_WRITE				0x1E		// USB存储器请求数据写入 
#define	USB_INT_DISK_ERR					0x1F		// USB存储器操作失败 

#define	ERR_DISK_DISCON						0x82		// 磁盘尚未连接,可能磁盘已经断开
#define	ERR_FILE_CLOSE						0xB4		// 文件已经关闭,如果需要使用,应该重新打开文件


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

