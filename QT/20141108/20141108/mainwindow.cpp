#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    //ui->listWidget->addItem("Hello");
    for(int i =0; i<9; i++)
    {
        ui->listWidget->addItem(QString::number(i) + "item here,hhhhhhhhhhhhhhhhhhhhhhhhhhh");
    }
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_clicked()
{
   QListWidgetItem *itm = ui->listWidget->currentItem();
   itm->setText("ppppp");
   itm->setTextColor(Qt::red);
}
