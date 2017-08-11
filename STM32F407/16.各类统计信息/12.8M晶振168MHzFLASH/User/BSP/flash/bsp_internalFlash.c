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

/*准备写入的测试数据*/
#define DATA_32                 ((unsigned int)0x12345678)
struct FILE_INFO file_info;
unsigned int file_list_addr[7];

const unsigned int file_state_addr[7] = {
						((uint32_t)0x08020007),((uint32_t)0x08040007),((uint32_t)0x08060007),
						((uint32_t)0x08080007),((uint32_t)0x080A0007),((uint32_t)0x080C0007),
						((uint32_t)0x080E0007)};





						
/* Exported types ------------------------------------------------------------*/
/* Exported constants --------------------------------------------------------*/
/* 要擦除内部FLASH的起始地址 */
#define FLASH_USER_START_ADDR   ADDR_FLASH_SECTOR_8   
/* 要擦除内部FLASH的结束地址 */
#define FLASH_USER_END_ADDR     ADDR_FLASH_SECTOR_12  


 
static unsigned int GetSector(unsigned int Address);


/**
  * @brief  InternalFlash_Test,对内部FLASH进行读写测试
  * @param  None
  * @retval None
  */
int InternalFlash_Test(void)
{
	/*要擦除的起始扇区(包含)及结束扇区(不包含)，如8-12，表示擦除8、9、10、11扇区*/
	unsigned int uwStartSector = 0;
	unsigned int uwEndSector = 0;
	
	unsigned int uwAddress = 0;
	unsigned int uwSectorCounter = 0;

	volatile unsigned int uwData32 = 0;
	volatile unsigned int uwMemoryProgramStatus = 0;
	
  /* FLASH 解锁 ********************************/
  /* 使能访问FLASH控制寄存器 */
  FLASH_Unlock();
    
  /* 擦除用户区域 (用户区域指程序本身没有使用的空间，可以自定义)**/
  /* 清除各种FLASH的标志位 */  
  FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
                  FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 


	uwStartSector = GetSector(FLASH_USER_START_ADDR);
	uwEndSector = GetSector(FLASH_USER_END_ADDR);

  /* 开始擦除操作 */
  uwSectorCounter = uwStartSector;
  while (uwSectorCounter <= uwEndSector) 
  {
    /* VoltageRange_3 以“字”的大小进行操作 */ 
    if (FLASH_EraseSector(uwSectorCounter, VoltageRange_3) != FLASH_COMPLETE)
    { 
      /*擦除出错，返回，实际应用中可加入处理 */
			return -1;
    }
    /* 计数器指向下一个扇区 */
    if (uwSectorCounter == FLASH_Sector_11)
    {
      uwSectorCounter += 40;
    } 
    else 
    {
      uwSectorCounter += 8;
    }
  }

  /* 以“字”的大小为单位写入数据 ********************************/
  uwAddress = FLASH_USER_START_ADDR;

  while (uwAddress < FLASH_USER_END_ADDR)
  {
    if (FLASH_ProgramWord(uwAddress, DATA_32) == FLASH_COMPLETE)
    {
      uwAddress = uwAddress + 4;
    }
    else
    { 
      /*写入出错，返回，实际应用中可加入处理 */
			return -1;
    }
  }
	

  /* 给FLASH上锁，防止内容被篡改*/
  FLASH_Lock(); 


  /* 从FLASH中读取出数据进行校验***************************************/
  /*  MemoryProgramStatus = 0: 写入的数据正确
      MemoryProgramStatus != 0: 写入的数据错误，其值为错误的个数 */
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
  /* 数据校验不正确 */
  if(uwMemoryProgramStatus)
  {    
		return -1;
  }
  else /*数据校验正确*/
  { 
		return 0;   
  }
}

/**
  * @brief  根据输入的地址给出它所在的sector
  *					例如：
						uwStartSector = GetSector(FLASH_USER_START_ADDR);
						uwEndSector = GetSector(FLASH_USER_END_ADDR);	
  * @param  Address：地址
  * @retval 地址所在的sector
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
函数功能：擦出指定扇区
传递参数：扇区地址
返回值：擦除结果
注意：	
***************************************/
signed char sector_erase(void)
{
		uint32_t uwAddress = GetSector(file_info.file_first_addr);
	
		/* FLASH 解锁 ********************************/
		/* 使能访问FLASH控制寄存器 */
		FLASH_Unlock();
			
		/* 擦除用户区域 (用户区域指程序本身没有使用的空间，可以自定义)**/
		/* 清除各种FLASH的标志位 */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		/* 开始擦除操作 */
		if (FLASH_EraseSector(uwAddress, VoltageRange_3) != FLASH_COMPLETE)
    { 
					/* 给FLASH上锁，防止内容被篡改*/
					FLASH_Lock(); 
					/*擦除出错，返回，实际应用中可加入处理 */
					return -1;
    }
		/* 给FLASH上锁，防止内容被篡改*/
		FLASH_Lock(); 
		return 0;
}




/************************************
函数功能：扫描存储空间可用的第一个位置
传递参数：空
返回值：第一个可用地址
注意：	
***************************************/
unsigned int search_available_sector(void)
{
		unsigned char i;//扫描7个块的删除标志位
		volatile unsigned int data32 = 0;
		for( i=0; i<7; i++)//首先找0xff标志的块，若有，则返回地址
		{
				data32 = *(volatile unsigned int*)file_state_addr[i];
				if((data32&0x0ff) == 0xff)
				{
							//printf("0X%.8x",file_state_addr[i]-7);
							return file_state_addr[i]-7;
				}
		}
		for( i=0; i<7; i++)//再找0x00删除标志的快，若有，则返回地址
		{
				data32 = *(volatile unsigned int*)file_state_addr[i];
				if((data32&0x0ff) == 0x00)
				{
						//printf("0X%.8x",file_state_addr[i]-7);
						return file_state_addr[i]-7;
				}
		}
		//printf("0X%.8x",0);
		return 0;//若全部空间占用，则返回0x00
		
}



/************************************
函数功能：生成文件头数据
传递参数：文件结构体
返回值：处理结果
注意：	
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
函数功能：生成区块头数据
传递参数：文件结构体
返回值：处理结果
注意：	
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
函数功能：文件头数据更新信息
传递参数：文件结构体
返回值：处理结果
注意：	
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
函数功能：区块头数据更新信息
传递参数：文件结构体
返回值：处理结果
注意：	
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
函数功能：创建文件
传递参数：文件结构体
返回值：-1：FLASH写入失败
			 -2：存储空间满
注意：	只需要设置文件名称，无其他参数
***************************************/
signed char file_creat( unsigned char file_name[])
{
		unsigned char i,data8;
		volatile unsigned int addr;
		volatile unsigned int data32 = 0;
	
		addr = search_available_sector();
		if(addr == 0)
				return -2;//创建失败
		file_info.file_first_addr = addr;
		for( i=0; i<5; i++)
				file_info.file_name[i] = file_name[i];//设置文件名
		
		//接下来初始化结构体内的数据
		file_info.file_state = 0xab;//0xab为文件占用标志
		for( i=0; i<8; i++)
				file_info.file_name[i] = file_name[i];
		file_info.file_reserve = 0xff;//初始化搜索标志位
		file_info.file_used = 0x01;		//初始化空间占用为1
		file_info.file_block.block_addr = file_info.file_first_addr;
		file_info.file_block.block_head_addr = file_info.file_first_addr;
		file_info.file_block.block_number = 0;
		file_info.file_block.block_next_number = 0xff;
		file_info.file_block.block_prev_number = 0xff;
		file_info.file_block.block_state = 0xab;//表示文件单独不连接
		generate_file_info_8byte_data(file_name);//更新文件头数据
		
		data32 = *(volatile unsigned int*)addr;
		sector_erase();//一旦新建文件，就会擦出整个文件区域
		
		/* FLASH 解锁 ********************************/
		/* 使能访问FLASH控制寄存器 */
		FLASH_Unlock();
			
		/* 擦除用户区域 (用户区域指程序本身没有使用的空间，可以自定义)**/
		/* 清除各种FLASH的标志位 */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		for( i=0; i<8; i++)//写入对应位置
		{
				if(FLASH_ProgramByte(file_info.file_first_addr + i, file_info.file_head_data[i]) != FLASH_COMPLETE)
					return -1;//写入失败
		}
		
		FLASH_Lock(); //完成写操作，锁定
		for( i=0; i<8; i++)
		{
					data32 = *(volatile unsigned int*)(file_info.file_first_addr + i);
					data8 = 0x0ff&data32;//获取前8位数据
					if(file_info.file_head_data[i]!=data8)
							return -1;//校验失败
		}	
		
		return 0;//返回值为0，表示通过校验，文件创建成功
}



/************************************
函数功能：删除文件
传递参数：文件结构体
返回值：处理结果
注意：	需要设置文件首地址
***************************************/
signed char file_delete(void)
{
		file_info.file_state = 0x00;//首先更新文件结构体信息
		file_info.file_head_data[7] = 0x00;
	
		/* FLASH 解锁 ********************************/
		/* 使能访问FLASH控制寄存器 */
		FLASH_Unlock();
			
		/* 擦除用户区域 (用户区域指程序本身没有使用的空间，可以自定义)**/
		/* 清除各种FLASH的标志位 */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		if(FLASH_ProgramByte(file_info.file_first_addr + 7, file_info.file_head_data[7]) != FLASH_COMPLETE)
					return -1;//写入删除标志位失败
	
		FLASH_Lock(); //完成写操作，锁定
		//修改文件头的删除标志位即可
		return 0;//删除成功
}


/************************************
函数功能：更新文件
传递参数：文件结构体
返回值：处理结果
			-1:FLASH写入失败
			-2：此文件存储空间满
注意：	需要设置文件首地址、区块号、数据区
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
		file_info.file_block.block_state = 0xab;//表示文件单独不连接
		generate_block_info_8byte_data();//首先更新文件结构体数据
		file_info.file_block.block_head_addr = file_info.file_first_addr + file_info.file_block.block_number*8;
		file_info.file_block.block_addr = file_info.file_first_addr + file_info.file_block.block_number*1024;
		//printf("\r\n0X%.8x",file_info.file_block.block_head_addr);
		//printf("\r\n0X%.8x",file_info.file_block.block_addr);
	
		/* FLASH 解锁 ********************************/
		/* 使能访问FLASH控制寄存器 */
		FLASH_Unlock();
			
		/* 擦除用户区域 (用户区域指程序本身没有使用的空间，可以自定义)**/
		/* 清除各种FLASH的标志位 */  
		FLASH_ClearFlag(FLASH_FLAG_EOP | FLASH_FLAG_OPERR | FLASH_FLAG_WRPERR | 
										FLASH_FLAG_PGAERR | FLASH_FLAG_PGPERR|FLASH_FLAG_PGSERR); 

		for( i=0; i<8; i++)//写入对应位置
		{
				if(FLASH_ProgramByte(file_info.file_block.block_head_addr + i, file_info.file_block.block_head_data[i]) != FLASH_COMPLETE)
						return -1;//写入失败
				//printf("\r\n正在写入：0X%.8x",file_info.file_block.block_head_addr+i);
		}
		//写入区块头
		for( i=0; i<512; i++)//写入对应位置
		{
				if(FLASH_ProgramHalfWord(file_info.file_block.block_addr + 2*i, file_info.file_block.block_data[i]) != FLASH_COMPLETE)
						return -1;//写入失败
				//printf("\r\n正在写入：0X%.8x",file_info.file_block.block_addr + 2*i);
		}
		//写入区块数据
		FLASH_Lock();
		
		return 0;//写入成功
}







/************************************
函数功能：读取指定文件
传递参数：文件所在地址
返回值：文件头结构体
注意：	需要预先设置好首地址、区块号
***************************************/
signed char file_read( void)
{
		unsigned int i;
		volatile unsigned char  		data8;
		volatile unsigned short int data16;
		volatile unsigned int 			data32;
		//首先根据首地址/文件序号获取文件头数据
		file_info.file_block.block_head_addr = file_info.file_first_addr + file_info.file_block.block_number*8;
		file_info.file_block.block_addr = file_info.file_first_addr+ file_info.file_block.block_number*1024;
		//从该地址读取
	
		for( i=0; i<8; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_first_addr+i);
				data8  = 0xff&data32;
				file_info.file_head_data[i] = data8;
		}//读文件头
		update_file_info_8byte_data();
		
		for( i=0; i<8; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_block.block_head_addr+i);
				data8  = 0xff&data32;
				file_info.file_block.block_head_data[i] = data8;
				//printf("\r\n正在读取：0X%.8x",file_info.file_block.block_head_addr+i);
		}//读数据块头
		update_block_info_8byte_data();
		
		for( i=0; i<512; i++)
		{
				data32 = *(volatile unsigned int*)(file_info.file_block.block_addr+i*2);
				data16  = 0x0ffff&data32;
				file_info.file_block.block_data[i] = data16;
				//printf("\r\n正在读取：0X%.8x",file_info.file_block.block_addr+i*2);
		}//读数据块
		return 0;//成功读取
}



/************************************
函数功能：根据FLASH内容，设置最新文件头信息
					指针指向最后一个有数据的位置
传递参数：文件所在地址
返回值：
				-2：文件满
注意：	从flash读取数据更新文件头，需要设置文件首地址
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
		}//读文件头
		update_file_info_8byte_data();//更新文件头
		
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
		//扫描当前FLASH空间占用
		
		return 0;//成功读取
}



/************************************
函数功能：列出机内文件
传递参数：数组，用于存储文件地址
返回值：空
注意：	通过数组存储已经存在的文件地址，位置和数组位置对应
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
						file_list[i] = file_state_addr[i]-7;//扫描各个文件头删除标志位
				else
						file_list[i] = 0x00;
		}
		//若当前标志位没有删除标志，也没有占用标志，则将对应数组设置为0x0000
}



