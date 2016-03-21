#include <cstdlib>
#include <iostream>
#include <string> 
#include <graphics.h>

using namespace std;

class Screen
{
public:
	Screen(int w,int h)
	{
		enter.assign("enter screen");
		leave.assign("leave screen");
		cout << enter << endl;
		exitWhenInvalidScreen(w);
		exitWhenInvalidScreen(h);
		height =h;
		width =w;
		initgraph(width,height);		//初始化窗口 
	}
	
		
	~Screen()
	{
		closegraph();					//关闭窗口 
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
	static Screen* getInstance(int width=640, int height=480)
	{
		if(instance==0)
		{
			Screen *addr =new Screen( width, height);
			instance =addr;
			return instance;
		}
		else
			return instance; 
	}
	
private:
	int height;
	int width; 
	static Screen* instance;
	string enter;
	string leave;
	void exitWhenInvalidScreen(int num)
	{
		if(num<=0||num>1000)
		{
			cout << "invalid screen size"; 
			exit(0);
		}
	}  
};
Screen *Screen::instance = NULL;

class MyRectangle{
public:
	MyRectangle(int x1, int y1, int x2, int y2, Screen* screen)
	{
		x1_=x1;
		y1_=y1;
		x2_=x2;
		y2_=y2;
		screen_=screen;
		cout<<"myrectangle"<<endl;
	}
	MyRectangle()
	{
		x1_=0;
		x2_=0;
		y1_=0;
		y2_=0;
		screen_=NULL;
		cout<<"myrectangle"<<endl;
	}
	MyRectangle(Screen* screen)
	{
		x1_=0;
		x2_=0;
		y1_=0;
		y2_=0;
		screen_=screen;
		cout<<"myrectangle"<<endl;
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
			std::cout<<"invalid myrectangle"<<std::endl;
		else
			std::cout<<x1_<<" "<<y1_<<" "<<x2_-x1_<<" "<<y2_-y1_<<std::endl;
		rectangle(x1_,y1_,x2_,y2_,NULL);
	}

private:
	Screen* screen_;
	int x1_,y1_,x2_,y2_;	
};


void mainloop(Screen &screen)
{
	setcolor(EGERGB(255,255,255));
	
	MyRectangle tempreg(100,100,200,300,&screen);
	
	cleardevice();

	
    
	for ( ; is_run(); delay_fps(60) )
    {
    	cleardevice();
		tempreg.Draw(); 

    }
}
 
int main()
{
    setinitmode(INIT_ANIMATION);
    
    Screen  screen (640,480);
    MyRectangle myRectangle1 (&screen);
	
    mainloop(screen);

    return 0;
}				
/*
#程序功能：

*/ 
