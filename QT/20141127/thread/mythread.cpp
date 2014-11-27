#include "mythread.h"
#include <QtCore>
#include <QDebug>

mythread::mythread()
{
}
void  mythread::run()
{

    for(int i =0; i<1000; i++)
    {
        qDebug()<<this->name<<i<<" running";
    }
}
