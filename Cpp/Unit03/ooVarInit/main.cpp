#include <iostream>

int main() {
  int x = 1;
  int y(2);
  int z(3); //error!

  std::cout<< "  x=" << x <<
              "\ty=" << y << std::endl;

  std::cin.get();
  return 0;
}

