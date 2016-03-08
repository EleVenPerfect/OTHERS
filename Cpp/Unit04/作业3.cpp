#include <cstdlib>
#include <iostream>

using namespace std;

class Screen
{
public:
	Screen(int w,int h)
	{
		exitWhenInvalidScreen(w);
		exitWhenInvalidScreen(h);
		height =h;
		width =w;
		cout << "screen" << endl;
	}
	
	Screen()
	{
		height =480;
		width =640;
		cout << "screen" << endl;
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
			cout << "invalid screen size"; 
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
  cin >> width >> height;
  Screen  screen (width, height);
  
  int leftX, leftY, rightX, rightY;
  cin >> leftX >> leftY >> rightX >> rightY;
  MyRectangle myRectangle1 (leftX, leftY, rightX, rightY, &screen);
  MyRectangle* myRectangles = new MyRectangle[2];
  
  myRectangles[1].setCoordinations(10, 300, 700, 500);
  myRectangles[1].setScreen(screen);
    
  myRectangle1.Draw();
  for (int i = 0; i < 2; i++) {
    myRectangles[i].setScreen(screen);
    (myRectangles+i) -> Draw();
  }
    
  delete [] myRectangles;
   
#ifdef DEBUG
  std::cin.get();
#endif
  return 0;
}