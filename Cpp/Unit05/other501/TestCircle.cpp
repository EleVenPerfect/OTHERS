#include<iostream>
#include<cstdlib>
#include<string>
#include<cstdio>
using namespace std;
class Screen
{
private:
	int x_;
	int y_;
	string enter;
	string leave;
	static Screen * instance;

	void exitWhenInvalidScreen(int x = 640, int y = 480)
	{

		if (x > 0 && y > 0 && x <= 1000 && y <= 1000)
		{
			/*x_ = x;
			y_ = y;;*/
		}
		else
		{
			std::cout << "invalid screen size";
			exit(0);
		}

	}
public:
	Screen(int x, int y)
	{
		x_ = x;
		y_ = y;
		enter = "enter screen";
		leave = "leave screen";
		cout << enter<<std::endl;
		exitWhenInvalidScreen(x, y);

	}

	
	int getWidth() {
		return x_;

	}
	int getHeight() {
		return y_;
	}


	int setWidth(int width) {
		exitWhenInvalidScreen(width, y_);
		x_ = width;

		return x_;

	}
	int setHeight(int height) {
		exitWhenInvalidScreen(x_, height);
		y_ = height;


		return y_;

	}
	static Screen * getInstance(int width=640, int height=480)
	{
		if (instance == 0)
		{
		Screen* new_screen = new Screen(width, height);
		instance = new_screen;
		}
			return instance;

	}
};
Screen* Screen::instance = NULL;
int main()
{
	string s;

	int width, height;
	Screen *screen1, *screen2;

	std::cin >> width >> height;

	screen1 = Screen::getInstance(width, height);
	screen2 = Screen::getInstance();

	std::cout << screen1->getWidth() << ' ' << screen1->getHeight() << std::endl;
	std::cout << screen2->getWidth() << ' ' << screen2->getHeight();

#ifdef DEBUG
	std::cin.get();
#endif
	return 0;

}

