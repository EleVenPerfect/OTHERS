using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;
using System.Windows.Forms;
using WeifenLuo.WinFormsUI.Docking;

namespace demo
{
    public partial class MainForm : Form
    {
        //配置是否需要保存
        private bool IsSave = true;
        private DeserializeDockContent m_deserializeDockContent;
        //工具栏
        private ToolsBox m_ToolsBox = new ToolsBox();
        //属性栏
        private PropertyWindow m_PropertyWindow = new PropertyWindow();

        public MainForm()
        {
            InitializeComponent();
            m_deserializeDockContent = new DeserializeDockContent(GetContentFromPersistString);
        }

        private IDockContent GetContentFromPersistString(string persistString)
        {
            if (persistString == typeof(PropertyWindow).ToString())
                return m_PropertyWindow;
            else if (persistString == typeof(ToolsBox).ToString())
                return m_ToolsBox;
            else
            {
                string[] parsedStrings = persistString.Split(new char[] { ',' });
                if (parsedStrings.Length != 3)
                    return null;

                if (parsedStrings[0] != typeof(Doc).ToString())
                    return null;

                Doc doc = new Doc();
                if (parsedStrings[1] != string.Empty)
                    doc.FileName = parsedStrings[1];
                if (parsedStrings[2] != string.Empty)
                    doc.Text = parsedStrings[2];

                return doc;
            }
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void aboutSoftwareToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AboutSoftware about = new AboutSoftware();
            about.ShowDialog(this);
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            string configFile = Path.Combine(Path.GetDirectoryName(Application.ExecutablePath), "DockPanel.config");

            if (File.Exists(configFile))
                dockPanel.LoadFromXml(configFile, m_deserializeDockContent);

            m_ToolsBox.Show(this.dockPanel);
            m_ToolsBox.DockTo(this.dockPanel, DockStyle.Left);

            m_PropertyWindow.Show(this.dockPanel);
            m_PropertyWindow.DockTo(this.dockPanel, DockStyle.Right);
        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            string configFile = Path.Combine(Path.GetDirectoryName(Application.ExecutablePath), "SystemTools.config");
            if (IsSave)
                dockPanel.SaveAsXml(configFile);
            else if (File.Exists(configFile))
                File.Delete(configFile);
        }

        private void exitWithoutSavingToolStripMenuItem_Click(object sender, EventArgs e)
        {
            IsSave = false;
            Close();
            IsSave = true;
        }

        private void closetoolStripMenuItem_Click(object sender, EventArgs e)
        {
            //关闭DocN文件
            if (dockPanel.DocumentStyle == DocumentStyle.SystemMdi)
                ActiveMdiChild.Close();
            else if (dockPanel.ActiveDocument != null)
                dockPanel.ActiveDocument.DockHandler.Close();
        }

        private void newToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Doc doc = CreateNewDocument();
            if (dockPanel.DocumentStyle == DocumentStyle.SystemMdi)
            {
                doc.MdiParent = this;
                doc.Show();
            }
            else
                doc.Show(dockPanel);
        }

        private Doc CreateNewDocument()
        {
            Doc doc = new Doc();

            int count = 1;
            string text = "Doc" + count.ToString();
            while (FindDocument(text) != null)
            {
                count++;
                text = "Doc" + count.ToString();
            }
            doc.Text = text;
            return doc;
        }

        private Doc CreateNewDocument(string text)
        {
            Doc doc = new Doc();
            doc.Text = text;
            return doc;
        }

        private IDockContent FindDocument(string text)
        {
            if (dockPanel.DocumentStyle == DocumentStyle.SystemMdi)
            {
                foreach (Form form in MdiChildren)
                    if (form.Text == text)
                        return form as IDockContent;

                return null;
            }
            else
            {
                foreach (IDockContent content in dockPanel.Documents)
                    if (content.DockHandler.TabText == text)
                        return content;

                return null;
            }
        }

        private void closeAllToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (dockPanel.DocumentStyle == DocumentStyle.SystemMdi)
            {
                foreach (Form form in MdiChildren)
                    form.Close();
            }
            else
            {
                IDockContent[] documents = dockPanel.DocumentsToArray();
                foreach (IDockContent content in documents)
                    content.DockHandler.Close();
            }
        }

        private void toolBarToolStripMenuItem_Click(object sender, EventArgs e)
        {
            toolStrip1.Visible = toolBarToolStripMenuItem.Checked = !toolBarToolStripMenuItem.Checked;
        }

        private void newWindowToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MainForm newWindow = new MainForm();
            newWindow.Text = newWindow.Text + " - New";
            newWindow.Show();
        }

        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFile = new OpenFileDialog();

            openFile.InitialDirectory = Application.ExecutablePath;
            openFile.Filter = "rtf files (*.rtf)|*.rtf|txt files (*.txt)|*.txt|All files (*.*)|*.*";
            openFile.FilterIndex = 1;
            openFile.RestoreDirectory = true;

            if (openFile.ShowDialog() == DialogResult.OK)
            {
                string fullName = openFile.FileName;
                string fileName = Path.GetFileName(fullName);

                if (FindDocument(fileName) != null)
                {
                    MessageBox.Show("The document: " + fileName + " has already opened!");
                    return;
                }

                Doc doc = new Doc();
                doc.Text = fileName;
                doc.Show(dockPanel);
                try
                {
                    doc.FileName = fullName;
                }
                catch (Exception exception)
                {
                    doc.Close();
                    MessageBox.Show(exception.Message);
                }

            }
        }

        private void toolStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            if (e.ClickedItem == toolStripButtonNew)
                newToolStripMenuItem_Click(null, null);
            else if (e.ClickedItem == toolStripButtonOpen)
                openToolStripMenuItem_Click(null, null);
        }

        private void toolsBoxToolStripMenuItem_Click(object sender, EventArgs e)
        {
            m_ToolsBox.Show(dockPanel);
        }
    }
}
