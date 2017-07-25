using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
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
            
            DataShow.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.Document);
            
            ProjectTree.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockLeft);

            SerialInfo.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockBottom);
        }

        private void 项目窗口ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            ProjectTree ProjectTree = new ProjectTree();
            ProjectTree.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockLeft);
        }
    }
}
