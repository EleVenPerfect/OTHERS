#include <iostream>
using namespace std;

void swap(int &x,int &y)
{
	int temp;
	temp =x;
	x =y;
	y =temp;
}

int main()
{
	int a[5] ={1,2,3,4,5};
	
	swap(a[1],a[3]);
	for(char i=0;i<5;i++)
	{
		cout<<a[i];
	}
	
	return 0;
}