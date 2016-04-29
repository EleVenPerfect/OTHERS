#include <cstdlib>
#include <iostream>
#include <string> 

using namespace std;

class Screen
{
public:
	
	int getWidth()
	{
		return width;
	}
	
	int getHeight()
	{
		return height;
	}
	
//	int setWidth(int width)
//	{
//		exitWhenInvalidScreen(width);
//		Screen::width =width;
//	}
//	
//	int setHeight(int height)
//	{
//		exitWhenInvalidScreen(height);
//		Screen::height =height;
//	}
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
	
	void deleteInstance()
	{
		delete instance;
		instance =NULL;
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
	
	Screen(int w,int h)
	{
		enter.assign("enter screen");
		leave.assign("leave screen");
		cout << enter << endl;
		exitWhenInvalidScreen(w);
		exitWhenInvalidScreen(h);
		height =h;
		width =w;

	}
	
	~Screen()
	{
		cout << leave << endl;
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
	}

private:
	Screen* screen_;
	int x1_,y1_,x2_,y2_;	
};


int main() {
  int width, height;
  Screen *screen1, *screen2;
 
  std::cin >> width >> height;
   
  screen1 = Screen::getInstance(width, height);
  screen2 = Screen::getInstance();
  if (screen1 != screen2 ) {
      std::cout << "two instances" << std::endl;
  }
 
  std::cout << screen2->getWidth() << ' ' << screen2->getHeight() << std::endl;
  screen2->deleteInstance();
   
  screen1 = Screen::getInstance(2*width, 2*height);
  std::cout << screen1->getWidth() << ' ' << screen1->getHeight() << std::endl;
  screen1->deleteInstance();
   
#ifdef DEBUG
  std::cin.get();
#endif
  return 0;
}
