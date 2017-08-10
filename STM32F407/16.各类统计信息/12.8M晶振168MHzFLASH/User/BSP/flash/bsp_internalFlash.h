#ifndef __INTERNAL_FLASH_H
#define	__INTERNAL_FLASH_H

#include "stm32f4xx.h"
#include "bsp_usart.h"

struct BLOCK_INFO
{
		unsigned char 				block_number;				//�ֿ��ţ���δʹ����Ϊ0xff��ʹ�þ����ļ����
		unsigned char 				block_state;				//�ֿ�״̬����δʹ����Ϊ0xff���ֿ�Ϊ��ͷ��0x77���ļ�Ϊ�в���0x55���ļ�Ϊ��β��0x44
		unsigned char 				block_prev_number;	//�ֿ�ǰһ����
		unsigned char					block_next_number;	//�ֿ��һ����
		volatile unsigned int	block_head_addr;		//�ֿ�ͷ��ַ
		unsigned char					block_head_data[8];	//�ֿ�ͷ����
		volatile unsigned int	block_addr;					//�ֿ����ڵ�ַ
		unsigned short int 		block_data[512];		//�ֿ�����
};


struct FILE_INFO
{
		unsigned char	 				file_name[5];				//�ļ���������5��ASCII�ַ�
		unsigned char 				file_reserve;				//�����ļ���־�������������ļ�����ֵΪ0x00�������ݲ����뵽�ļ�ͷ����
		unsigned char					file_state;					//�ļ�״̬��ռ��0xab��ɾ��0x00��δռ��0xff
		volatile unsigned int	file_first_addr;		//�ļ�����λ�õ��׵�ַ������
		unsigned char			 		file_head_data[8];	//�ļ�ͷ����
		unsigned char					file_used;					//�ļ�������
		struct BLOCK_INFO			file_block;					//�ļ����ݿ�
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



//int InternalFlash_Test(void);//�����ú���


signed char sector_erase(void);

signed char file_creat( unsigned char file_name[]);
signed char file_delete(void);
signed char file_write( void);

extern struct FILE_INFO file_info;
extern const unsigned int file_state_addr[];



#endif /* __INTERNAL_FLASH_H */

