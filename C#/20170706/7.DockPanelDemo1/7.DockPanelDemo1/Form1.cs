using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace _7.DockPanelDemo1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void dockPanel1_ActiveContentChanged(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Form2 Form2 = new Form2();
            Form2.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockLeft);
            Form3 Form3 = new Form3();
            Form3.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockRight);
            Form4 Form4 = new Form4();
            Form4.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.DockBottom);
            Form5 Form5 = new Form5();
            Form5.Show(this.dockPanel1, WeifenLuo.WinFormsUI.Docking.DockState.Document);
        }
    }
}
