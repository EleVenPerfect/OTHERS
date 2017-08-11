#ifndef __USB_DISK_H
#define	__USB_DISK_H

#include "stm32f4xx.h"
#include "bsp_usart.h"

signed char usb_disk_reset(void);
signed char usb_disk_init(void);
signed char usb_disk_creat_file	(unsigned char file_name[5]);
signed char usb_disk_open_file	(unsigned char file_name[5]);
signed char usb_disk_write_file	(unsigned char file_name[5]);
signed char usb_disk_delete_file(unsigned char file_name[5]);

#endif /* __USB_DISK_H */

