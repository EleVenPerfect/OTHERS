using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Xml;
using System.Windows.Forms;

namespace _100.WindowLayout
{

    public partial class MainForm : Form
    {
        public AppSetting AppSetting = new AppSetting();
        public DataShow DataShow = new DataShow();
        public ProjectTree ProjectTree = new ProjectTree();
        public SerialInfo SerialInfo = new SerialInfo();
        public MainForm()
        {
            InitializeComponent();
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Maximized;//窗口最大化
            
            AppSetting.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockRight);
            ProjectTree.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockLeft);
            SerialInfo.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockBottom);
        }

        private void 项目窗口ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (ProjectTree.IsHidden)
            {
                ProjectTree.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockTop);//有bug需要先换位置显示然后再显示
                ProjectTree.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockLeft);
            }
            else
            {
                ProjectTree.Hide();
            }
        }

        private void 信息窗口ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (SerialInfo.IsHidden)
            {
                SerialInfo.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockTop);//有bug需要先换位置显示然后再显示
                SerialInfo.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockBottom);
            }
            else
            {
                SerialInfo.Hide();
            }
        }

        private void 设置窗口ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (AppSetting.IsHidden)
            {
                AppSetting.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockTop);//有bug需要先换位置显示然后再显示
                AppSetting.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockRight);
            }
            else
            {
                AppSetting.Hide();
            }
        }

        private void 测量工程ToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "工程文件|*.project|所有文件|*.*";
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string strFileName = openFileDialog1.FileName;
                SerialInfo.richTextBox1.AppendText(strFileName+"\n");
            }
        }

        private void 数据文件ToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "数据文件|*.xls;*.xlsx|所有文件|*.*";
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string strFileName = openFileDialog1.FileName;
                SerialInfo.richTextBox1.AppendText(strFileName + "\n");
            }
        }

        private void 校准文件ToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "校准文件|*.adjust|所有文件|*.*";
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string strFileName = openFileDialog1.FileName;
                SerialInfo.richTextBox1.AppendText(strFileName + "\n");
            }
        }

        private void 测试报告ToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "测试报告|*.txt|所有文件|*.*";
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string strFileName = openFileDialog1.FileName;
                SerialInfo.richTextBox1.AppendText(strFileName + "\n");
            }
        }

        private void 测量工程ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveFileDialog1.Filter = "工程文件|*.project|所有文件|*.*";
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string SavePath = saveFileDialog1.FileName;
                try
                {
                    XmlDocument myXmlDoc = new XmlDocument();
                    XmlElement rootElement = myXmlDoc.CreateElement("Computers");
                    myXmlDoc.AppendChild(rootElement);
                    myXmlDoc.Save(SavePath);
                    SerialInfo.richTextBox1.AppendText("创建工程成功！\n");
                }
                catch
                {
                    SerialInfo.richTextBox1.AppendText("创建工程失败！\n");
                }
            }
        }

        private void 数据文件ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveFileDialog1.Filter = "数据文件|*.xls;*.xlsx|所有文件|*.*";
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string SavePath = saveFileDialog1.FileName;
                SerialInfo.richTextBox1.AppendText(SavePath + "\n");
            }
        }

        private void 校准文件ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveFileDialog1.Filter = "校准文件|*.adjust|所有文件|*.*";
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string SavePath = saveFileDialog1.FileName;
                SerialInfo.richTextBox1.AppendText(SavePath + "\n");
            }
        }

        private void 测试报告ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveFileDialog1.Filter = "测试报告|*.txt|所有文件|*.*";
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string SavePath = saveFileDialog1.FileName;
                try
                {
                    
                    SerialInfo.richTextBox1.AppendText("创建测试报告成功！");
                }
                catch
                {
                    SerialInfo.richTextBox1.AppendText("创建测试报告失败！");
                }
            }
        }
    }
}
