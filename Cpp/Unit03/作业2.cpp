#include <iostream>
#include <iomanip>
using namespace std;


int main()
{
	int a;
	double b;
	cin >> a;
	cin >> b;
	
	cout <<a/static_cast<int>(b)<<' ';
	cout <<fixed<<setprecision(3)<<static_cast<double>(a)/b<<' ';
	cout <<fixed<<setprecision(3)<<static_cast<double>(a)/static_cast<double>(static_cast<int>(b))<<setprecision(2);

	return 0;
}