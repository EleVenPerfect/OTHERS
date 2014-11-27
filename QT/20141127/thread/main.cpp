#include <QCoreApplication>
#include "mythread.h"

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    mythread mythread1;
    mythread1.name="ATI1";
    mythread mythread2;
    mythread2.name="ATI2";
    mythread mythread3;
    mythread3.name="ATI3";
    mythread1.start();
    mythread2.start();
    mythread3.start();

    return a.exec();
}
