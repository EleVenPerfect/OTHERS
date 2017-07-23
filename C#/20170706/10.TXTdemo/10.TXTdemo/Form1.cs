using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.IO;
using System.Text;

namespace _10.TXTdemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            string path = "D://abc.txt";
            FileStream fs = new FileStream(path, FileMode.Create);
            StreamWriter sw = new StreamWriter(fs);
            //开始写入
            sw.WriteLine("ATIME");
            sw.WriteLine("ATIME2");
            sw.WriteLine("ATIME3");
            //清空缓冲区
            sw.Flush();
            //关闭流
            sw.Close();
            fs.Close();

            string str2 = File.ReadAllText(@"D:\\abc.txt", Encoding.ASCII);
            textBox1.Text = str2;

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
