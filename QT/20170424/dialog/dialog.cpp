#include "dialog.h"
#include "ui_dialog.h"

const static double PI =3.141593;

Dialog::Dialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Dialog)
{
    ui->setupUi(this);
}

Dialog::~Dialog()
{
    delete ui;
}

void Dialog::on_pushButton_clicked()
{
    bool ok;
    QString tempStr;
    QString valueStr = ui->lineEdit->text();
    int valueInt = valueStr.toInt(&ok);
    double area = valueInt*valueInt*PI;
    ui->label_3->setText(tempStr.setNum(area));
}
