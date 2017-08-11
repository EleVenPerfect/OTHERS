/**
  ******************************************************************************
  * @file    bsp_internalFlash.c
  * @author  atime
  * @version V1.0
  * @date    2017
  ******************************************************************************
  * @attention
  *
  *
  ******************************************************************************
  */
  
#include "./flash/bsp_internalFlash.h"   

/*׼��д��Ĳ�������*/
#define DATA_32                 ((unsigned int)0x12345678)
struct FILE_INFO file_info;
unsigned int file_list_addr[7];

const unsigned int file_state_addr[7] = {
						((uint32_t)0x08020007),((uint32_t)0x08040007),((uint32_t)0x08060007),
						((uint32_t)0x08080007),((uint32_t)0x080A0007),((uint32_t)0x080C0007),
						((uint32_t)0x080E0007)};





						
/* Exported types ------------------------------------------------------------*/
/* Exported constants --------------------------------------------------------*/
/* Ҫ�����ڲ�FLASH����ʼ��ַ */
#define FLASH_USER_START_ADDR   ADDR_FLASH_SECTOR_8   
/* Ҫ�����ڲ�FLASH�Ľ�����ַ */
#define FLASH_USER_END_ADDR     ADDR_FLASH_SECTOR_12  


 
static unsigned int GetSector(unsigned int Address);


/**
  * @brief  InternalFlash_Test,���ڲ�FLASH���ж�д����
  * @param  None
  * @retval None
  */
int InternalFlash_Test(void)
{
	/*Ҫ��������ʼ����(����)����������(������)����8-12����ʾ����8��9��10��11����*/
	unsigned int uwStartSector = 0;
	unsigned int uwEndSector = 0;
	
	unsigned int uwAddress = 0;
	unsigned int uwSectorCounter = 0;

	volatile unsigned int uwData32 = 0;
	volatile unsigned int uwMemoryProgramStatus = 0;
	
  /* FLASH ���� ********************************/
  /* ʹ�ܷ���FLASH���ƼĴ��� */
  FLASH_Unlock();
    
  /* �����û����� (�û�����ָ������û��ʹ�õĿռ䣬�����Զ���)**/
  /* �������FLASH�ı�־λ */  
  FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
                  FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 


	uwStartSector = GetSector(FLASH_USER_START_ADDR);
	uwEndSector = GetSector(FLASH_USER_END_ADDR);

  /* ��ʼ�������� */
  uwSectorCounter = uwStartSector;
  while (uwSectorCounter <= uwEndSector) 
  {
    /* VoltageRange_3 �ԡ��֡��Ĵ�С���в��� */ 
    if (FLASH_EraseSector(uwSectorCounter, VoltageRange_3) != FLASH_COMPLETE)
    { 
      /*�����������أ�ʵ��Ӧ���пɼ��봦�� */
			return -1;
    }
    /* ������ָ����һ������ */
    if (uwSectorCounter == FLASH_Sector_11)
    {
      uwSectorCounter += 40;
    } 
    else 
    {
      uwSectorCounter += 8;
    }
  }

  /* �ԡ��֡��Ĵ�СΪ��λд������ ********************************/
  uwAddress = FLASH_USER_START_ADDR;

  while (uwAddress < FLASH_USER_END_ADDR)
  {
    if (FLASH_ProgramWord(uwAddress, DATA_32) == FLASH_COMPLETE)
    {
      uwAddress = uwAddress + 4;
    }
    else
    { 
      /*д��������أ�ʵ��Ӧ���пɼ��봦�� */
			return -1;
    }
  }
	

  /* ��FLASH��������ֹ���ݱ��۸�*/
  FLASH_Lock(); 


  /* ��FLASH�ж�ȡ�����ݽ���У��***************************************/
  /*  MemoryProgramStatus = 0: д���������ȷ
      MemoryProgramStatus != 0: д������ݴ�����ֵΪ����ĸ��� */
  uwAddress = FLASH_USER_START_ADDR;
  uwMemoryProgramStatus = 0;
  
  while (uwAddress < FLASH_USER_END_ADDR)
  {
    uwData32 = *(volatile unsigned int*)uwAddress;

    if (uwData32 != DATA_32)
    {
      uwMemoryProgramStatus++;  
    }

    uwAddress = uwAddress + 4;
  }  
  /* ����У�鲻��ȷ */
  if(uwMemoryProgramStatus)
  {    
		return -1;
  }
  else /*����У����ȷ*/
  { 
		return 0;   
  }
}

/**
  * @brief  ��������ĵ�ַ���������ڵ�sector
  *					���磺
						uwStartSector = GetSector(FLASH_USER_START_ADDR);
						uwEndSector = GetSector(FLASH_USER_END_ADDR);	
  * @param  Address����ַ
  * @retval ��ַ���ڵ�sector
  */
static unsigned int GetSector(unsigned int Address)
{
  unsigned int sector = 0;
  
  if((Address < ADDR_FLASH_SECTOR_1) && (Address >= ADDR_FLASH_SECTOR_0))
  {
    sector = FLASH_Sector_0;  
  }
  else if((Address < ADDR_FLASH_SECTOR_2) && (Address >= ADDR_FLASH_SECTOR_1))
  {
    sector = FLASH_Sector_1;  
  }
  else if((Address < ADDR_FLASH_SECTOR_3) && (Address >= ADDR_FLASH_SECTOR_2))
  {
    sector = FLASH_Sector_2;  
  }
  else if((Address < ADDR_FLASH_SECTOR_4) && (Address >= ADDR_FLASH_SECTOR_3))
  {
    sector = FLASH_Sector_3;  
  }
  else if((Address < ADDR_FLASH_SECTOR_5) && (Address >= ADDR_FLASH_SECTOR_4))
  {
    sector = FLASH_Sector_4;  
  }
  else if((Address < ADDR_FLASH_SECTOR_6) && (Address >= ADDR_FLASH_SECTOR_5))
  {
    sector = FLASH_Sector_5;  
  }
  else if((Address < ADDR_FLASH_SECTOR_7) && (Address >= ADDR_FLASH_SECTOR_6))
  {
    sector = FLASH_Sector_6;  
  }
  else if((Address < ADDR_FLASH_SECTOR_8) && (Address >= ADDR_FLASH_SECTOR_7))
  {
    sector = FLASH_Sector_7;  
  }
  else if((Address < ADDR_FLASH_SECTOR_9) && (Address >= ADDR_FLASH_SECTOR_8))
  {
    sector = FLASH_Sector_8;  
  }
  else if((Address < ADDR_FLASH_SECTOR_10) && (Address >= ADDR_FLASH_SECTOR_9))
  {
    sector = FLASH_Sector_9;  
  }
  else if((Address < ADDR_FLASH_SECTOR_11) && (Address >= ADDR_FLASH_SECTOR_10))
  {
    sector = FLASH_Sector_10;  
  }
  else /*((Address < FLASH_END_ADDR) && (Address >= ADDR_FLASH_SECTOR_11))*/
  {
    sector = FLASH_Sector_11;  
  }


  return sector;
}




/************************************
�������ܣ�����ָ������
���ݲ�����������ַ
����ֵ���������
ע�⣺	
***************************************/
signed char sector_erase(void)
{
		uint32_t uwAddress = GetSector(file_info.file_first_addr);
	
		/* FLASH ���� ********************************/
		/* ʹ�ܷ���FLASH���ƼĴ��� */
		FLASH_Unlock();
			
		/* �����û����� (�û�����ָ������û��ʹ�õĿռ䣬�����Զ���)**/
		/* �������FLASH�ı�־λ */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		/* ��ʼ�������� */
		if (FLASH_EraseSector(uwAddress, VoltageRange_3) != FLASH_COMPLETE)
    { 
					/* ��FLASH��������ֹ���ݱ��۸�*/
					FLASH_Lock(); 
					/*�����������أ�ʵ��Ӧ���пɼ��봦�� */
					return -1;
    }
		/* ��FLASH��������ֹ���ݱ��۸�*/
		FLASH_Lock(); 
		return 0;
}




/************************************
�������ܣ�ɨ��洢�ռ���õĵ�һ��λ��
���ݲ�������
����ֵ����һ�����õ�ַ
ע�⣺	
***************************************/
unsigned int search_available_sector(void)
{
		unsigned char i;//ɨ��7�����ɾ����־λ
		volatile unsigned int data32 = 0;
		for( i=0; i<7; i++)//������0xff��־�Ŀ飬���У��򷵻ص�ַ
		{
				data32 = *(volatile unsigned int*)file_state_addr[i];
				if((data32&0x0ff) == 0xff)
				{
							//printf("0X%.8x",file_state_addr[i]-7);
							return file_state_addr[i]-7;
				}
		}
		for( i=0; i<7; i++)//����0x00ɾ����־�Ŀ죬���У��򷵻ص�ַ
		{
				data32 = *(volatile unsigned int*)file_state_addr[i];
				if((data32&0x0ff) == 0x00)
				{
						//printf("0X%.8x",file_state_addr[i]-7);
						return file_state_addr[i]-7;
				}
		}
		//printf("0X%.8x",0);
		return 0;//��ȫ���ռ�ռ�ã��򷵻�0x00
		
}



/************************************
�������ܣ������ļ�ͷ����
���ݲ������ļ��ṹ��
����ֵ��������
ע�⣺	
***************************************/
void generate_block_info_8byte_data(void)
{
		file_info.file_block.block_head_data[0] = file_info.file_block.block_number;
		file_info.file_block.block_head_data[1] = file_info.file_block.block_state;
		file_info.file_block.block_head_data[2] = file_info.file_block.block_prev_number;
		file_info.file_block.block_head_data[3] = file_info.file_block.block_next_number;
		file_info.file_block.block_head_data[4] = 0xff;
		file_info.file_block.block_head_data[5] = 0xff;
		file_info.file_block.block_head_data[6] = 0xff;
		file_info.file_block.block_head_data[7] = 0xff;
}


/************************************
�������ܣ���������ͷ����
���ݲ������ļ��ṹ��
����ֵ��������
ע�⣺	
***************************************/
void generate_file_info_8byte_data(unsigned char file_name[])
{
		file_info.file_head_data[0] = file_name[0];
		file_info.file_head_data[1] = file_name[1];
		file_info.file_head_data[2] = file_name[2];
		file_info.file_head_data[3] = file_name[3];
		file_info.file_head_data[4] = file_name[4];
		file_info.file_head_data[5] = '\0';
		file_info.file_head_data[6]	= 0xff;
		file_info.file_head_data[7] = 0xab;
}




/************************************
�������ܣ��ļ�ͷ���ݸ�����Ϣ
���ݲ������ļ��ṹ��
����ֵ��������
ע�⣺	
***************************************/
void update_block_info_8byte_data( void)
{
		file_info.file_block.block_number = file_info.file_block.block_head_data[0];
		file_info.file_block.block_state  = file_info.file_block.block_head_data[1];
		file_info.file_block.block_prev_number = file_info.file_block.block_head_data[2];
		file_info.file_block.block_next_number = file_info.file_block.block_head_data[3];
	
		file_info.file_used = file_info.file_block.block_number;
}


/************************************
�������ܣ�����ͷ���ݸ�����Ϣ
���ݲ������ļ��ṹ��
����ֵ��������
ע�⣺	
***************************************/
void update_file_info_8byte_data( void)
{
		file_info.file_name[0] = file_info.file_head_data[0];
		file_info.file_name[1] = file_info.file_head_data[1];
		file_info.file_name[2] = file_info.file_head_data[2];
		file_info.file_name[3] = file_info.file_head_data[3];
		file_info.file_name[4] = file_info.file_head_data[4];
		file_info.file_state 	=	file_info.file_head_data[7];
}



/************************************
�������ܣ������ļ�
���ݲ������ļ��ṹ��
����ֵ��-1��FLASHд��ʧ��
			 -2���洢�ռ���
ע�⣺	ֻ��Ҫ�����ļ����ƣ�����������
***************************************/
signed char file_creat( unsigned char file_name[])
{
		unsigned char i,data8;
		volatile unsigned int addr;
		volatile unsigned int data32 = 0;
	
		addr = search_available_sector();
		if(addr == 0)
				return -2;//����ʧ��
		file_info.file_first_addr = addr;
		for( i=0; i<5; i++)
				file_info.file_name[i] = file_name[i];//�����ļ���
		
		//��������ʼ���ṹ���ڵ�����
		file_info.file_state = 0xab;//0xabΪ�ļ�ռ�ñ�־
		for( i=0; i<8; i++)
				file_info.file_name[i] = file_name[i];
		file_info.file_reserve = 0xff;//��ʼ��������־λ
		file_info.file_used = 0x01;		//��ʼ���ռ�ռ��Ϊ1
		file_info.file_block.block_addr = file_info.file_first_addr;
		file_info.file_block.block_head_addr = file_info.file_first_addr;
		file_info.file_block.block_number = 0;
		file_info.file_block.block_next_number = 0xff;
		file_info.file_block.block_prev_number = 0xff;
		file_info.file_block.block_state = 0xab;//��ʾ�ļ�����������
		generate_file_info_8byte_data(file_name);//�����ļ�ͷ����
		
		data32 = *(volatile unsigned int*)addr;
		sector_erase();//һ���½��ļ����ͻ���������ļ�����
		
		/* FLASH ���� ********************************/
		/* ʹ�ܷ���FLASH���ƼĴ��� */
		FLASH_Unlock();
			
		/* �����û����� (�û�����ָ������û��ʹ�õĿռ䣬�����Զ���)**/
		/* �������FLASH�ı�־λ */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		for( i=0; i<8; i++)//д���Ӧλ��
		{
				if(FLASH_ProgramByte(file_info.file_first_addr + i, file_info.file_head_data[i]) != FLASH_COMPLETE)
					return -1;//д��ʧ��
		}
		
		FLASH_Lock(); //���д����������
		for( i=0; i<8; i++)
		{
					data32 = *(volatile unsigned int*)(file_info.file_first_addr + i);
					data8 = 0x0ff&data32;//��ȡǰ8λ����
					if(file_info.file_head_data[i]!=data8)
							return -1;//У��ʧ��
		}	
		
		return 0;//����ֵΪ0����ʾͨ��У�飬�ļ������ɹ�
}



/************************************
�������ܣ�ɾ���ļ�
���ݲ������ļ��ṹ��
����ֵ��������
ע�⣺	��Ҫ�����ļ��׵�ַ
***************************************/
signed char file_delete(void)
{
		file_info.file_state = 0x00;//���ȸ����ļ��ṹ����Ϣ
		file_info.file_head_data[7] = 0x00;
	
		/* FLASH ���� ********************************/
		/* ʹ�ܷ���FLASH���ƼĴ��� */
		FLASH_Unlock();
			
		/* �����û����� (�û�����ָ������û��ʹ�õĿռ䣬�����Զ���)**/
		/* �������FLASH�ı�־λ */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		if(FLASH_ProgramByte(file_info.file_first_addr + 7, file_info.file_head_data[7]) != FLASH_COMPLETE)
					return -1;//д��ɾ����־λʧ��
	
		FLASH_Lock(); //���д����������
		//�޸��ļ�ͷ��ɾ����־λ����
		return 0;//ɾ���ɹ�
}


/************************************
�������ܣ������ļ�
���ݲ������ļ��ṹ��
����ֵ��������
			-1:FLASHд��ʧ��
			-2�����ļ��洢�ռ���
ע�⣺	��Ҫ�����ļ��׵�ַ������š�������
***************************************/
signed char file_write( void)
{
		unsigned int i;
		file_info.file_used += 1;
		file_info.file_block.block_number += 1;
		if(file_info.file_block.block_number >= 128)
				return -2;
		file_info.file_block.block_next_number = 0xff;
		file_info.file_block.block_prev_number = 0xff;
		file_info.file_block.block_state = 0xab;//��ʾ�ļ�����������
		generate_block_info_8byte_data();//���ȸ����ļ��ṹ������
		file_info.file_block.block_head_addr = file_info.file_first_addr + file_info.file_block.block_number*8;
		file_info.file_block.block_addr = file_info.file_first_addr + file_info.file_block.block_number*1024;
		//printf("\r\n0X%.8x",file_info.file_block.block_head_addr);
		//printf("\r\n0X%.8x",file_info.file_block.block_addr);
	
		/* FLASH ���� ********************************/
		/* ʹ�ܷ���FLASH���ƼĴ��� */
		FLASH_Unlock();
			
		/* �����û����� (�û�����ָ������û��ʹ�õĿռ䣬�����Զ���)**/
		/* �������FLASH�ı�־λ */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		for( i=0; i<8; i++)//д���Ӧλ��
		{
				if(FLASH_ProgramByte(file_info.file_block.block_head_addr + i, file_info.file_block.block_head_data[i]) != FLASH_COMPLETE)
						return -1;//д��ʧ��
				//printf("\r\n����д�룺0X%.8x",file_info.file_block.block_head_addr+i);
		}
		//д������ͷ
		for( i=0; i<512; i++)//д���Ӧλ��
		{
				if(FLASH_ProgramHalfWord(file_info.file_block.block_addr + 2*i, file_info.file_block.block_data[i]) != FLASH_COMPLETE)
						return -1;//д��ʧ��
				//printf("\r\n����д�룺0X%.8x",file_info.file_block.block_addr + 2*i);
		}
		//д����������
		FLASH_Lock();
		
		return 0;//д��ɹ�
}







/************************************
�������ܣ���ȡָ���ļ�
���ݲ������ļ����ڵ�ַ
����ֵ���ļ�ͷ�ṹ��
ע�⣺	��ҪԤ�����ú��׵�ַ�������
***************************************/
signed char file_read( void)
{
		unsigned int i;
		volatile unsigned char  		data8;
		volatile unsigned short int data16;
		volatile unsigned int 			data32;
		//���ȸ����׵�ַ/�ļ���Ż�ȡ�ļ�ͷ����
		file_info.file_block.block_head_addr = file_info.file_first_addr + file_info.file_block.block_number*8;
		file_info.file_block.block_addr = file_info.file_first_addr+ file_info.file_block.block_number*1024;
		//�Ӹõ�ַ��ȡ
	
		for( i=0; i<8; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_first_addr+i);
				data8  = 0xff&data32;
				file_info.file_head_data[i] = data8;
		}//���ļ�ͷ
		update_file_info_8byte_data();
		
		for( i=0; i<8; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_block.block_head_addr+i);
				data8  = 0xff&data32;
				file_info.file_block.block_head_data[i] = data8;
				//printf("\r\n���ڶ�ȡ��0X%.8x",file_info.file_block.block_head_addr+i);
		}//�����ݿ�ͷ
		update_block_info_8byte_data();
		
		for( i=0; i<512; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_block.block_addr+i*2);
				data16  = 0x0ffff&data32;
				file_info.file_block.block_data[i] = data16;
				//printf("\r\n���ڶ�ȡ��0X%.8x",file_info.file_block.block_addr+i*2);
		}//�����ݿ�
		return 0;//�ɹ���ȡ
}



/************************************
�������ܣ�����FLASH���ݣ����������ļ�ͷ��Ϣ
					ָ��ָ�����һ�������ݵ�λ��
���ݲ������ļ����ڵ�ַ
����ֵ��
				-2���ļ���
ע�⣺	��flash��ȡ���ݸ����ļ�ͷ����Ҫ�����ļ��׵�ַ
***************************************/
signed char file_update( void)
{
		unsigned int i;
		volatile unsigned char  		data8;
		volatile unsigned short int data16;
		volatile unsigned int 			data32;
		
		for( i=0; i<8; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_first_addr+i);
				data8  = 0xff&data32;
				file_info.file_head_data[i] = data8;
		}//���ļ�ͷ
		update_file_info_8byte_data();//�����ļ�ͷ
		
		for( i=1; i<128; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_first_addr+i*8);
				data8  = 0xff&data32;
				if( data8==0xff )
				{
						i -=1;
						file_info.file_used = i;
						file_info.file_block.block_number = i;
						file_info.file_block.block_addr = file_info.file_first_addr + i*8;
						file_info.file_block.block_head_addr = file_info.file_first_addr + i*1024;
						break;
				}
		}
		if(i == 128)
		{
				return -2;
		}
		//ɨ�赱ǰFLASH�ռ�ռ��
		
		return 0;//�ɹ���ȡ
}



/************************************
�������ܣ��г������ļ�
���ݲ��������飬���ڴ洢�ļ���ַ
����ֵ����
ע�⣺	ͨ������洢�Ѿ����ڵ��ļ���ַ��λ�ú�����λ�ö�Ӧ
***************************************/
void file_list(unsigned int file_list[7])
{
		unsigned char i;
		volatile unsigned char  		data8;
		volatile unsigned int 			data32;
		for( i=0; i<7; i++)
		{
				data32 = *(volatile unsigned int*)(file_state_addr[i]);
				data8  = 0xff&data32;
				if(	data8==0xab )
						file_list[i] = file_state_addr[i]-7;//ɨ������ļ�ͷɾ����־λ
				else
						file_list[i] = 0x00;
		}
		//����ǰ��־λû��ɾ����־��Ҳû��ռ�ñ�־���򽫶�Ӧ��������Ϊ0x0000
}



