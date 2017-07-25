using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace demo
{
    public partial class AboutSoftware : Form
    {
        public AboutSoftware()
        {
            InitializeComponent();
        }

        private void About_Load(object sender, EventArgs e)
        {
            labelAppVersion.Text = typeof(MainForm).Assembly.GetName().Version.ToString();
        }
    }
}
