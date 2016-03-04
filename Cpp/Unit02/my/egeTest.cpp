#include <graphics.h>


void mainloop()
{
	int i=10,j=10;
	setcolor(EGERGB(255,255,255));
	setfillcolor(EGERGB(255,255,255));
    for ( ; is_run(); delay_fps(6) )
    {
		cleardevice();
		i+=random(50);
		j+=random(80);
		i-=25;
		j-=40;
		if(i>640||i<=0)
			i=20;
		if(j>480||j<=0)
			j=20;
		fillellipse(i,j,5,5);
    }
}
 
int main()
{
    setinitmode(INIT_ANIMATION);
    initgraph(640,480);
    randomize();
    mainloop();
    ege::getch();
    closegraph();
    return 0;
}
