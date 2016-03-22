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
		setColor(255,255,255);
		cout<<"myrectangle"<<endl;
	}
	
	MyRectangle(MyRectangle *a)
	{
		x1_=a->x1_;
		y1_=a->y1_;
		x2_=a->x2_;
		y2_=a->y2_;
		screen_=a->getScreen()->getInstance();
		r_=g_=b_=255;
		cout<<"myrectangle"<<endl;
	}
	
	MyRectangle()
	{
		x1_=10;
		x2_=10;
		y1_=100;
		y2_=100;
		screen_=NULL;
		setColor(255,255,255);
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
	
	Screen* getScreen()
	{
		return screen_;
	}
	
	void showScreen()
	{
		cout<<screen_->getWidth()<<" "<<screen_->getHeight()<<endl;
	} 
	
	void setColor(int R, int G, int B)
	{
		r_=R;
		g_=G;
		b_=B;
	}
	void Draw()
	{
//		if(x2_>=screen_->getWidth()||y2_>=screen_->getHeight()||x1_<=0||y1_<=0||x1_>=x2_||y2_<=y1_||screen_==NULL)
//			std::cout<<"invalid myrectangle"<<std::endl;
//		else
			std::cout<<x1_<<" "<<y1_<<" "<<x2_-x1_<<" "<<y2_-y1_<<std::endl;
		std::cout<<r_<<" "<<g_<<" "<<b_<<std::endl;
	}
	
private:
	Screen* screen_;
	int x1_,y1_,x2_,y2_;	
	int r_,g_,b_; 
};


class MyCircle{
public:
	MyCircle(int x,int y,int r,Screen* sc)
	{
		x_ =x;
		y_ =y;
		rd_ =r;
		r_=255;
		g_=255;
		b_=255;
		screen_= sc;
		cout<<"mycircle"<<endl;
	}
	
	MyCircle()
	{
		x_ =200;
		y_ =200;
		rd_ =100;
		r_=255;
		g_=255;
		b_=255;
		screen_= NULL;
		cout<<"mycircle"<<endl;
	}
	MyCircle(const MyCircle& a)
	{
		x_ =a.x_;
		y_ =a.y_;
		rd_ =a.rd_;
		r_ =a.r_;
		g_ =a.g_;
		b_ =a.b_;
		screen_= a.screen_;
		cout<<"copy mycircle"<<endl;
	}
	
	void setColor(int R, int G, int B)
	{
		r_=R;
		g_=G;
		b_=B;
	}
 
 	void setCenter(int x, int y)
 	{
 		x_ =x;
 		y_ =y;
 	}
 	
 	void setRadius(int r)
 	{
 		rd_ =r;
 	}
 	
 	void Draw()
 	{
 		cout<<x_<<" "<<y_<<" "<<rd_<<endl;
 		cout<<r_<<" "<<g_<<" "<<b_<<endl;
 	}
 	
	void showScreen()
	{
		cout<<screen_->getWidth()<<" "<<screen_->getHeight()<<endl;
	} 
 	
 	void setScreen(Screen& screen)
	{
		screen_=&screen;
	}
	
private:
	Screen* screen_;
	int r_,g_,b_; 
	int x_,y_,rd_;
};

int main() {
  int width, height;
  cin >> width >> height;
 
  int leftX, leftY, rightX, rightY;
  cin >> leftX >> leftY >> rightX >> rightY;
 
  int centerX, centerY, radius;
  cin >> centerX >> centerY >> radius;
 
  Screen *screen = Screen::getInstance(width, height);
   
  MyRectangle myRectangle(leftX, leftY, rightX, rightY, screen);
  myRectangle.setColor(0, 0, 0xff);
  myRectangle.showScreen();
  myRectangle.Draw();
  
  // 构造圆形对象数组
  //// 第一个元素使用匿名对象（调用带参构造函数）初始化
  //// 第二个元素使用匿名对象（调用默认构造函数）初始化 
  MyCircle myCircles[2] = { MyCircle(centerX, centerY, radius, screen) };
   
  // 设置对象数组中第二个元素的属性。注意访问成员函数的不同方法 
  (myCircles + 1)->setCenter(centerX+10, centerY+20);
  myCircles[1].setRadius(radius+30);
  (*(myCircles+1)).setColor(0x00, 0x00, 0x00);
  myCircles[1].setScreen(*screen);
   
  for(int i=0; i<=1; i++) {
      myCircles[i].showScreen();
      (myCircles+i)->Draw();
  }
  
  // 调用拷贝构造函数以myCircles数组中的第二个元素为模板创建新对象 
  MyCircle yourCircle(myCircles[1]);
 
  yourCircle.showScreen();
  (&yourCircle)->Draw();
   
  screen->deleteInstance();
   
#ifdef DEBUG
  std::cin.get();
#endif
  return 0;
}
