#include <QCoreApplication>
#include <QFile>
#include <QString>
#include <QDebug>
#include <QTextStream>

void Write(QString mfile)
{
    QFile mFile(mfile);
    if(!mFile.open(QFile::WriteOnly|QFile::Text))
    {
        qDebug()<<"Could not";\
        return;
    }

   QTextStream out(&mFile);
   out <<"HELLO";

   mFile.flush();
   mFile.close();
}


void Read(QString file)
{
    QFile mFile(file);
    if(!mFile.open(QFile::ReadOnly|QFile::Text))
    {
        qDebug()<<"Could not";\
        return;
    }

   QTextStream in(&mFile);
   QString mText =in.readAll();

   qDebug() << mText;

   mFile.close();
}


int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    QString filename ="E:/STUDY/123.txt";
    Write(filename);
    Read(filename);
    return a.exec();
}
