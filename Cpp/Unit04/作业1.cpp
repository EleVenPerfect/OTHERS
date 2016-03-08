#include <iostream>
using namespace std;

class Screen
{
public:
	Screen(int w,int h)
	{
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
		Screen::width =width;
	}
	
	int setHeight(int height)
	{
		Screen::height =height;
	}
	
private:
	int height;
	int width;   
};

int main() {
  int width, height;
  std::cin >> width >> height;
  Screen screen1 (width, height);
  Screen screen2;
   
  screen2.setWidth(800);
  screen2.setHeight(600);
   
  std::cout << screen1.getWidth() << ' ' << screen1.getHeight() << std::endl;
  std::cout << screen2.getWidth() << ' ' << screen2.getHeight();
   
#ifdef DEBUG
  std::cin.get();
#endif
  return 0;
}
