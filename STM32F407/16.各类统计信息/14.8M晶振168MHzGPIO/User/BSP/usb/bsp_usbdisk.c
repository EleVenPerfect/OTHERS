/**
  ******************************************************************************
  * @file    bsp_usbdisk.c
  * @author  atime
  * @version V1.0
  * @date    2017
  ******************************************************************************
  * @attention
  *
  *
  ******************************************************************************
  */
  
#include "./usb/bsp_usbdisk.h"   

unsigned char uart3_data;
unsigned char uart3_data_state;

unsigned char txt_data1[]={"总计测量样品数："};
unsigned char txt_data2[]={"当前样品号："};

unsigned char txt_data3[]={0x0D,0x0A,'\0'};

/************************************
函数功能：发送一条指令
传递参数：
返回值：
注意：	
***************************************/
void usb_uart_send_cmd( unsigned char cmd)
{
		uart3putchar(0x57);
		uart3putchar(0xab);
		uart3putchar(cmd);
}



/************************************
函数功能：发送一条数据
传递参数：
返回值：
注意：	
***************************************/
void usb_uart_send_data( unsigned char data)
{
		uart3putchar(data);
}



/************************************
函数功能：获取串口返回值
传递参数：
返回值：
注意：	
***************************************/
unsigned char usb_uart_get_data( void)
{
		unsigned int i = 0,j = 0;
		unsigned char data;
	
		while( USART_GetFlagStatus ( USART3x, USART_IT_RXNE ) == RESET )
		{
				i++;
				if(i>60000)
				{
						j++;
						i = 0;
						if(j>60000)
						{
								j = 0;
								printf("\n\rRX:%02X\r\n",GET_UART_DATA_TIMEOUT);//调试用
								return GET_UART_DATA_TIMEOUT;
						}
				}
		}
		data = USART_ReceiveData ( USART3x );     //获取接收到的数据
		printf("\n\rRX:%02X\r\n",data);//调试用
		return data;
}




/************************************
函数功能：U盘是否连接
传递参数：
返回值：
注意：	
***************************************/
unsigned char usb_get_status(void)
{
		usb_uart_send_cmd(CMD_GET_STATE);
		return usb_uart_get_data();
}



/************************************
函数功能：U盘复位
传递参数：
返回值：
注意：	此函数执行后需要手动延时35ms等待
***************************************/
void usb_disk_reset( void)
{
		usb_uart_send_cmd(CMD_RESET_ALL);
}




/************************************
函数功能：U盘上电初始化
传递参数：
返回值：
注意：	
***************************************/
unsigned char usb_disk_init(void)
{
		usb_uart_send_cmd(CMD_CHECK_CHIP_EXIST);
		usb_uart_send_data(~CMD_RET_SUCCESS);
		if(usb_uart_get_data()!=CMD_RET_SUCCESS)
		{
				//printf("%02X",0xdd);
				return GET_UART_DATA_TIMEOUT;
		}
		usb_uart_send_cmd(CMD_SET_USB_MODE);
		usb_uart_send_data(CMD_SET_USB_MODE_DATA);
		if(usb_uart_get_data()!=CMD_RET_SUCCESS)
		{
				//printf("%02X",0xee);
				return GET_UART_DATA_TIMEOUT;
		}
		//printf("%02X",0xaa);
		return 0;
}



/************************************
函数功能：U盘是否连接
传递参数：
返回值：
注意：	
***************************************/
unsigned char usb_disk_connect(void)
{
		unsigned char temp;
	
		usb_uart_send_cmd(CMD_DISK_CONNECT);
		temp = usb_uart_get_data();
		//printf("\r\n%02X",temp);
	
		if(temp !=CMD_RET_SUCCESS && temp !=USB_INT_SUCCESS && temp !=USB_INT_CONNECT)
		{
				//printf("%02X",temp);
				return GET_UART_DATA_TIMEOUT;
		}//若连接U盘成功，则挂载U盘
		temp = usb_get_status();
		if(temp !=USB_INT_SUCCESS && temp !=USB_INT_CONNECT)
		{
				//printf("%02X",temp);
				return GET_UART_DATA_TIMEOUT;
		}//若连接U盘成功，则挂载U盘
		usb_uart_send_cmd(CMD_DISK_MOUNT);
		temp = usb_uart_get_data();
		if(temp !=USB_INT_SUCCESS && temp !=USB_INT_CONNECT)
		{
				//printf("%02X",temp);
				return GET_UART_DATA_TIMEOUT;
		}//U盘初始化不成功，则退出
		
		temp = usb_get_status();
		if(temp !=USB_INT_SUCCESS && temp !=USB_INT_CONNECT)
		{
				//printf("%02X",temp);
				return GET_UART_DATA_TIMEOUT;
		}//若连接U盘成功，则挂载U盘
		
		return temp;
}





/************************************
函数功能：设置操作文件
传递参数：
返回值：
注意：	默认设置为保存在根目录，文件后缀.TXT
***************************************/
void usb_set_file_name(unsigned char name[8])
{
		unsigned char i;
		usb_uart_send_cmd(CMD_SET_FILE_NAME);
		usb_uart_send_data('\\');
		for( i=0; name[i]!='\0'; i++)//需要再修改，确定结束标识符
		{
				if(i>7)
						break;
				usb_uart_send_data(name[i]);	
		}
		usb_uart_send_data('.');
		usb_uart_send_data('T');
		usb_uart_send_data('X');
		usb_uart_send_data('T');
		usb_uart_send_data('\0');
}




/************************************
函数功能：设置文件偏移
传递参数：
返回值：
***************************************/
unsigned char usb_set_file_locate(unsigned int locate)
{
		usb_uart_send_cmd(CMD_BYTE_LOCATE);
		usb_uart_send_data(locate&0xff);
		usb_uart_send_data((locate>>8)&0xff);
		usb_uart_send_data((locate>>16)&0xff);
		usb_uart_send_data((locate>>24)&0xff);
		usb_get_status();
		return usb_get_status();
}



/************************************
函数功能：创建文件
传递参数：
返回值：
注意：	默认设置为保存在根目录，文件后缀.TXT
***************************************/
unsigned char usb_disk_creat_file(unsigned char file_name[8])
{
		usb_set_file_name(file_name);
		usb_uart_send_cmd(CMD_FILE_CREATE);
		return usb_get_status();
}






/************************************
函数功能：打开文件
传递参数：
返回值：
注意：	
***************************************/
unsigned char usb_disk_open_file(unsigned char file_name[8])
{
		usb_set_file_name(file_name);
		usb_uart_send_cmd(CMD_FILE_OPEN);
		return usb_get_status();
}






/************************************
函数功能：写入文件
传递参数：
返回值：
注意：	一次最多写256个数据，第一次写需要用这个
***************************************/
unsigned char usb_disk_write_file(unsigned char file_name[8],unsigned int locate,unsigned int data_number,unsigned char data[])
{
		unsigned char temp;
		unsigned int i;
		usb_disk_open_file(file_name);
		usb_set_file_locate(locate);
		usb_uart_send_cmd(CMD_BYTE_FILE_WRITE);
		usb_uart_send_data(data_number&0xff);
		usb_uart_send_data((data_number>>8)&0xff);
		usb_uart_send_data(0x00);
		temp = usb_get_status();
		temp = usb_get_status();
		if( temp == USB_INT_DISK_WRITE)
		{
				usb_uart_send_cmd(CMD_WR_REQ_DATA);
				for( i=0; i<data_number; i++)
				{
							usb_uart_send_data(data[i]);
				}
				usb_uart_send_data('\0');
				//temp = usb_uart_get_data();
				//if(data_number>255)
				//		temp = usb_uart_get_data();
				
				usb_uart_send_cmd(CMD_BYTE_WR_GO);
				for( i=0; i<data_number; i++)
				{
							usb_uart_send_data(data[i]);
				}
				usb_uart_send_data('\0');
				usb_uart_send_cmd(CMD_BYTE_WR_GO);
				temp = usb_get_status();
				temp = usb_get_status();
				temp = usb_get_status();
				//usb_set_file_name(file_name);
				usb_uart_send_cmd(CMD_FILE_CLOSE);
				usb_uart_send_data(CMD_FILE_CLOSE_DATA);
				temp = usb_get_status();
				temp = usb_get_status();
		}
		else
		{
				return GET_UART_DATA_TIMEOUT;
		}
		return temp;
}









/************************************
函数功能：删除文件
传递参数：
返回值：
注意：	
***************************************/
unsigned char usb_disk_delete_file(unsigned char file_name[8])
{
		unsigned char temp;
		usb_disk_open_file(file_name);
		usb_uart_send_cmd(0x35);
		temp = usb_get_status();
		return temp;
}








/************************************
函数功能：追加写入文件
传递参数：
返回值：
注意：	一次最多写256个数据，不可以用于第一次写
***************************************/
unsigned char usb_disk_add_file(unsigned char file_name[8],unsigned int data_number,unsigned char data[])
{
		unsigned char temp;
		unsigned int i;
		usb_disk_open_file(file_name);
		usb_set_file_locate(0xFFFFFFFF);
		usb_uart_send_cmd(CMD_BYTE_FILE_WRITE);
		usb_uart_send_data(data_number&0xff);
		usb_uart_send_data((data_number>>8)&0xff);
		usb_uart_send_data(0x00);
		temp = usb_get_status();
		temp = usb_get_status();
		if( temp == USB_INT_DISK_WRITE)
		{
				usb_uart_send_cmd(CMD_WR_REQ_DATA);
				for( i=0; i<data_number; i++)
				{
							usb_uart_send_data(data[i]);
				}
				usb_uart_send_data('\0');
				//temp = usb_uart_get_data();
				//if(data_number>255)
				//		temp = usb_uart_get_data();
				
				usb_uart_send_cmd(CMD_BYTE_WR_GO);
				for( i=0; i<data_number; i++)
				{
							usb_uart_send_data(data[i]);
				}
				usb_uart_send_data('\0');
				usb_uart_send_cmd(CMD_BYTE_WR_GO);
				temp = usb_get_status();
				temp = usb_get_status();
				temp = usb_get_status();
				//usb_set_file_name(file_name);
				usb_uart_send_cmd(CMD_FILE_CLOSE);
				usb_uart_send_data(CMD_FILE_CLOSE_DATA);
				temp = usb_get_status();
				temp = usb_get_status();
		}
		else
		{
				return GET_UART_DATA_TIMEOUT;
		}
		return temp;
}


unsigned int get_string_length(unsigned char data[])
{
		unsigned int i;
		for( i=0; data[i]!='\0'; i++);
		return i;
}

