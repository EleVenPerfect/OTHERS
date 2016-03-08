#include <cstdlib>
#include <graphics.h>
#include <iostream>

class Screen
{
public:
	Screen(int w,int h)
	{
		exitWhenInvalidScreen(w);
		exitWhenInvalidScreen(h);
		height =h;
		width =w;
		initgraph(width,height);
//		std::cout << "screen" << std::endl;
	}
	
	Screen()
	{
		height =480;
		width =640;
		initgraph(640,480);
//		std::cout << "screen" << std::endl;
	}
	
	~Screen()
	{
		closegraph();
	}
	
	int getWidth()
	{
		return width;
	}
	
	int getHeight()
	{
		return height;
	}
	
	int setWidth(int width)
	{
		exitWhenInvalidScreen(width);
		Screen::width =width;
	}
	
	int setHeight(int height)
	{
		exitWhenInvalidScreen(height);
		Screen::height =height;
	}
	
private:
	int height;
	int width; 
	char exitWhenInvalidScreen(int num)
	{
		if(num<=0||num>1000)
		{
//			std::cout << "invalid screen size"; 
			exit(0);
		}
		return 1;
	}  
};

class MyRectangle{
public:
	MyRectangle(int x1, int y1, int x2, int y2, Screen* screen)
	{
		x1_=x1;
		y1_=y1;
		x2_=x2;
		y2_=y2;
		screen_=screen;
//		std::cout << "myrectangle" << std::endl;
	}
	
	MyRectangle(Screen* screen)
	{
		x1_=0;
		x2_=0;
		y1_=0;
		y2_=0;
		screen_=screen;
//		std::cout << "myrectangle" << std::endl;
	}
	
	MyRectangle()
	{
		x1_=0;
		x2_=0;
		y1_=0;
		y2_=0;
		screen_=NULL;
//		std::cout << "myrectangle" << std::endl;
	}
	
	void setCoordinations(int x1,int y1,int x2,int y2)
	{
		x1_=x1;
		y1_=y1;
		x2_=x2;
		y2_=y2;
	}
	
	void setScreen(Screen& screen)
	{
		screen_=&screen;
	}
	void Draw()
	{
		if(x2_>=screen_->getWidth()||y2_>=screen_->getHeight()||x1_<=0||y1_<=0||x1_>=x2_||y2_<=y1_||screen_==NULL)
		{
//			std::cout<<"invalid myrectangle"<<std::endl;
			exit(0); 
		}
		else
		{ 
//			std::cout<<x1_<<" "<<y1_<<" "<<x2_-x1_<<" "<<y2_-y1_<<std::endl;
			; 
		} 
		rectangle(x1_,y1_,x2_,y2_,NULL);
		xyprintf(10,this->screen_->getWidth()-200,"screen init ok!");

		xyprintf(10,this->screen_->getWidth()-180,"build rectangle ok!");
		
		char s[5];		//数字转换缓存 
		sprintf(s, "%d", this->x2_ - this->x1_);
		xyprintf(10,this->screen_->getWidth()-160,"Width:");
		xyprintf(80,this->screen_->getWidth()-160,s);
		sprintf(s, "%d", this->y2_ - this->y1_);
		xyprintf(10,this->screen_->getWidth()-140,"Height:");
		xyprintf(80,this->screen_->getWidth()-140,s);
	}

private:
	Screen* screen_;
	int x1_,y1_,x2_,y2_;	
};


void mainloop(MyRectangle &rectangle)
{
	setcolor(EGERGB(255,255,255));
	int temp1,temp2,temp3,temp4;
	cleardevice();
	temp1 =getInteger("Set x1");
    temp2 =getInteger("Set y1");
    temp3 =getInteger("Set x2");
    temp4 =getInteger("Set y2");

    rectangle.setCoordinations(temp1,temp2,temp3,temp4);
    
	for ( ; is_run(); delay_fps(60) )
    {
    	cleardevice();
    	
		rectangle.Draw();
    }
}
 
int main()
{
    setinitmode(INIT_ANIMATION);
    
    Screen  screen (400,300);
    MyRectangle myRectangle1 (&screen);
	
    mainloop(myRectangle1);

    return 0;
}				
/*
#程序功能：
启动程序后建立一个400*300的窗口，
窗口要求输入一个矩形的对角坐标，
输入完成后程序根据坐标画矩形。 
当矩形大小超过窗口范围时立即退出。
*/ 
