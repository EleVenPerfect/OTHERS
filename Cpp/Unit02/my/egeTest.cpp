#include "graphics.h"

int main() {
    initgraph(320,240);
    
    outtextxy(120,120,"ATIME");
    //line(10,10,300,200);
    for( int i=5; i<200; i+=5)
    circle(i,i,i);

    ege::getch();
    closegraph();
    return 0;
}
