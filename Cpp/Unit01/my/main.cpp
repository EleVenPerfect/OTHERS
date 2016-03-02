#include <iostream>

int main() {
    int i, j;

    for( i=1; i<6; i++){
        for( j=0; j<i; j++){
            std::cout << "*";
        }
        std::cout << std::endl;
    } 
    return 0;
}
