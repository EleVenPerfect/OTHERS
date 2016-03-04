#include <iostream>

//TODO: change isAlpha to !isAlpha
//TODO: continuous effect of "boolalpha"
//TODO: noboolalpha

using namespace std;

int main() {
    bool isAlpha;
    isAlpha = false;    
    if (!isAlpha) {
       cout << "isAlpha=" << isAlpha << endl;
       cout << boolalpha <<
               "isAlpha=" << isAlpha << endl;
    }
    return 0;
}

