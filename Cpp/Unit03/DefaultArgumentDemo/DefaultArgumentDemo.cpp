#include <iostream>
#include <iomanip>
using namespace std;

int swap(int* x,int* y,int* z)
{
	int temp;
	temp =*x;
	*x =*y;
	*y =*z;
	*z =temp;
	if(*x>*y)
		temp =*x;
	else
		temp =*y;
	if(temp>*z)
		return temp;
	return *z;
}

int swap(int& x,int& y,int& z)
{
	int temp;
	temp =x;
	x =y;
	y =z;
	z =temp;
	if(x>y)
		temp =x;
	else
		temp =y;
	if(temp>z)
		return temp;
	return z;
}

int main()
{
	int a=0, b=0, c=0, max=0;
	cin >> a;
	cin >> b;
	cin >> c;
	
	max =swap(a,b,c);
	cout <<max<<' '<<a<<' '<<b<<' '<<c; 
	
	max =swap(&a,&b,&c);
	cout <<max<<' '<<a<<' '<<b<<' '<<c; 
	
	return 0;
}
