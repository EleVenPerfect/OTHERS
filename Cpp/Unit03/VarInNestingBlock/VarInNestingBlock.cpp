#include <iostream>
using namespace std;

void function1(){
    int x = 1;
    int y = 1;
    for (int i = 1; i < 5; i++){ // OKay 
        x += i;
    }
    for (int i = 1; i < 10; i++){ // OKay
        y += i;
    }
    cout << "x=" << x << "  y=" << y << endl;
}

void function2() {
    int i = 1;
    int sum = 0;
    
    for (int i = 1; i < 10; i++){ // Not good
        sum += i;
    }
    
    cout << "i=" << i << "  sum=" << sum << endl;
}

int main(){
    function1();
    function2();
    
    cin.get();
    return 0;
}

