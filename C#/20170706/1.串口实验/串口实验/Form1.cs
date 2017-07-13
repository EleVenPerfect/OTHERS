using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

using System.IO.Ports;
namespace 串口实验
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            System.Windows.Forms.Control.CheckForIllegalCrossThreadCalls = false;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            comboBox2.Text = "115200";//波特率默认值

            button2.Enabled = true;//打开串口按钮可用
            button3.Enabled = false;//关闭串口按钮不可用
            /*****************非常重要************************/
            string[] portList = System.IO.Ports.SerialPort.GetPortNames();
            for (int i = 0; i < portList.Length; ++i)
            {
                string name = portList[i];
                comboBox1.Items.Add(name);
                comboBox1.Text = name;//串口号多额默认值
            }
            //serialPort1.DataReceived += new SerialDataReceivedEventHandler(serialPort1_DataReceived);//必须手动添加事件处理程序

        }

        private void 打开配置ToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        private void 关于ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBox.Show("时间到了!!!", "提示!!");//弹出提示框
        }

        private void printDocument1_PrintPage(object sender, System.Drawing.Printing.PrintPageEventArgs e)
        {

        }

        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            string a;

            a = textBox2.Text;
            try//防止出错
            {
                //serialPort1.Open();
                serialPort1.Write(a);
                //serialPort1.Close();
            }
            catch
            {//如果出错就执行此块代码
                if (serialPort1.IsOpen)
                {
                    serialPort1.Close();//如果是写数据时出错，此时窗口状态为开，就应关闭串口，防止下次不能使用，串口是不能重复打开和关闭的
                    MessageBox.Show("端口错误", "串口已打开");
                }
                MessageBox.Show("端口错误", "错误");
            }
            //textBox1.AppendText(a);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void serialPort1_DataReceived(object sender, SerialDataReceivedEventArgs e)
        {
            string str = serialPort1.ReadExisting();
            textBox1.AppendText(str);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            try
            {
                serialPort1.Close();//关闭串口
                button2.Enabled = true;//打开串口按钮可用
                button3.Enabled = false;//关闭串口按钮不可用
            }
            catch (Exception err)//一般情况下关闭串口不会出错，所以不需要加处理程序
            {

            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                serialPort1.PortName = comboBox1.Text;
                serialPort1.BaudRate = Convert.ToInt32(comboBox2.Text, 10);//十进制数据转换
                serialPort1.DataBits = 8;
                serialPort1.Handshake = Handshake.None;
                serialPort1.Open();
                button2.Enabled = false;//打开串口按钮不可用
                button3.Enabled = true;//关闭串口
            }
            catch
            {
                MessageBox.Show("端口错误,请检查串口", "错误");
            }
        }

        private void comboBox2_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
