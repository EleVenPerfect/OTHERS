using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace _11.Wizarddemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void wizardControl1_FinishButtonClick(object sender, EventArgs e)
        {
            MessageBox.Show("Finishing the wizard.");
            Close();
        }

        private void wizardControl1_CancelButtonClick(object sender, EventArgs e)
        {
            if (MessageBox.Show("Are you sure you want to exit.", Application.ProductName, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
            {
                Close();
            }
        }

        private void wizardControl1_HelpButtonClick(object sender, EventArgs e)
        {
            if (MessageBox.Show("Are you sure you want to exit.", Application.ProductName, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
            {
                Close();
            }
        }

        private void startStep1_Click(object sender, EventArgs e)
        {

        }

        private void intermediateStep1_Click(object sender, EventArgs e)
        {

        }
    }
}
