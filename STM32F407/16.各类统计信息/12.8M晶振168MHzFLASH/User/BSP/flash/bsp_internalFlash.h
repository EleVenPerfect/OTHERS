#ifndef __INTERNAL_FLASH_H
#define	__INTERNAL_FLASH_H

#include "stm32f4xx.h"
#include "bsp_usart.h"

struct BLOCK_INFO
{
		unsigned char 				block_number;				//分块编号，若未使用则为0xff，使用就是文件序号
		unsigned char 				block_state;				//分块状态，若未使用则为0xff，分块为开头：0x77，文件为中部：0x55，文件为结尾：0x44
		unsigned char 				block_prev_number;	//分块前一块编号
		unsigned char					block_next_number;	//分块后一块编号
		volatile unsigned int	block_head_addr;		//分块头地址
		unsigned char					block_head_data[8];	//分块头数据
		volatile unsigned int	block_addr;					//分块所在地址
		unsigned short int 		block_data[512];		//分块数据
};


struct FILE_INFO
{
		unsigned char	 				file_name[5];				//文件名，限制5个ASCII字符
		unsigned char 				file_reserve;				//搜索文件标志，若搜索不到文件，则值为0x00，此数据不进入到文件头数据
		unsigned char					file_state;					//文件状态，占用0xab，删除0x00，未占用0xff
		volatile unsigned int	file_first_addr;		//文件所在位置的首地址，主键
		unsigned char			 		file_head_data[8];	//文件头数据
		unsigned char					file_used;					//文件已用数
		struct BLOCK_INFO			file_block;					//文件数据块
};



/* Base address of the Flash sectors */ 
#define ADDR_FLASH_SECTOR_0     ((uint32_t)0x08000000) /* Base address of Sector 0, 16 Kbytes   */
#define ADDR_FLASH_SECTOR_1     ((uint32_t)0x08004000) /* Base address of Sector 1, 16 Kbytes   */
#define ADDR_FLASH_SECTOR_2     ((uint32_t)0x08008000) /* Base address of Sector 2, 16 Kbytes   */
#define ADDR_FLASH_SECTOR_3     ((uint32_t)0x0800C000) /* Base address of Sector 3, 16 Kbytes   */
#define ADDR_FLASH_SECTOR_4     ((uint32_t)0x08010000) /* Base address of Sector 4, 64 Kbytes   */
#define ADDR_FLASH_SECTOR_5     ((uint32_t)0x08020000) /* Base address of Sector 5, 128 Kbytes  */
#define ADDR_FLASH_SECTOR_6     ((uint32_t)0x08040000) /* Base address of Sector 6, 128 Kbytes  */
#define ADDR_FLASH_SECTOR_7     ((uint32_t)0x08060000) /* Base address of Sector 7, 128 Kbytes  */
#define ADDR_FLASH_SECTOR_8     ((uint32_t)0x08080000) /* Base address of Sector 8, 128 Kbytes  */
#define ADDR_FLASH_SECTOR_9     ((uint32_t)0x080A0000) /* Base address of Sector 9, 128 Kbytes  */
#define ADDR_FLASH_SECTOR_10    ((uint32_t)0x080C0000) /* Base address of Sector 10, 128 Kbytes */
#define ADDR_FLASH_SECTOR_11    ((uint32_t)0x080E0000) /* Base address of Sector 11, 128 Kbytes */

#define ADDR_FLASH_SECTOR_12     ((uint32_t)0x08100000) /* Base address of Sector 12, 16 Kbytes  */



//int InternalFlash_Test(void);//测试用函数


signed char sector_erase(void);

signed char file_creat( unsigned char file_name[]);
signed char file_delete(void);
signed char file_write( void);

extern struct FILE_INFO file_info;
extern const unsigned int file_state_addr[];



#endif /* __INTERNAL_FLASH_H */

