//***************************************************************
// 深圳EU电子出品-版权所有-翻版必究
// EU-热爱嵌入式开发
// http://euse.taobao.com
// 关注 “EU电子” 微信公众号，免费获取最新资料
//***************************************************************
#include "prohead.h"
#include "driver.h" 

/*-------------------------------------------------------------------------------------------------------
*  程序从这里执行												 
-------------------------------------------------------------------------------------------------------*/
int main(void)
{
		//MCU初始化
		Driver_MCU_Init();
		//LED-PWM初始化
		Driver_LightPWMON();
		Driver_LightPWMSet(1);  
		//开启定时中断
		Driver_Time10msON();
		Driver_OpenEA();
		//按键调光 RUN
		while(True);
}

/*-------------------------------------------------------------------------------------------------------
*  10ms定时中断处理										 
-------------------------------------------------------------------------------------------------------*/
void Time_IntHandle(void)
{
		static u8 Num = ZERO;
		if(++Num == 20)
		{
				//----------- 0.2s间隔处理事务 -----------
				//按键调节LED灯光
				static u8 Sta = 1;
				if(Driver_Key1Sta())
				{
						//按键KEY1 调亮
						if(Sta < 9)
							Sta++;
						Driver_LightPWMSet(Sta);
				}
				else if(Driver_Key2Sta())
				{
						//按键KEY2 调暗
						if(Sta > ZERO)
							Sta--;
						Driver_LightPWMSet(Sta);
				}
			  //--------------------------------------
			  Num = ZERO;
		}
}																					



