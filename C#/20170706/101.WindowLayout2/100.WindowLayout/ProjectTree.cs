using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using WeifenLuo.WinFormsUI.Docking;

namespace _100.WindowLayout
{
    public partial class ProjectTree : DockContent
    {
        public ProjectTree()
        {
            InitializeComponent();
            
        }

        private void ProjectTree_Load(object sender, EventArgs e)
        {
            //treeView1.Nodes.Clear();
            //TreeNode tree = new TreeNode("根节点");
            //treeView1.Nodes.Add(tree);
        }

        private void treeView1_AfterSelect(object sender, TreeViewEventArgs e)
        {
            if (e.Node.Text == "节点0") MessageBox.Show("0");
            if (e.Node.Text == "节点1") MessageBox.Show("1");
            if (e.Node.Text == "节点2") MessageBox.Show("2");
            if (e.Node.Text == "节点3") MessageBox.Show("3");
        }
    }
}
