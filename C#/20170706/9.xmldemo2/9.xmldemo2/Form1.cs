using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Xml;

namespace _9.xmldemo2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            string xmlFilePath = "D:\\MyComputers.xml";
            XmlDocument myXmlDoc = new XmlDocument();
            XmlElement rootElement = myXmlDoc.CreateElement("ATIME");
            myXmlDoc.AppendChild(rootElement);
            XmlElement firstElement = myXmlDoc.CreateElement("ELEVEN");
            firstElement.SetAttribute("ID", "11111111");
            firstElement.SetAttribute("Description", "Made in China");
            firstElement.InnerText = "perfect";
            rootElement.AppendChild(firstElement);

            XmlElement secondElement = myXmlDoc.CreateElement("ELEVEN");
            secondElement.SetAttribute("ID", "2222");
            secondElement.SetAttribute("Description", "Made in China222");
            secondElement.InnerText = "p222t";
            rootElement.AppendChild(secondElement);

            XmlNode rootNode = myXmlDoc.FirstChild;
            XmlNodeList firstLevelNodeList = rootNode.ChildNodes;
            foreach (XmlNode node in firstLevelNodeList)
            {
                //修改此节点的属性值
                if (node.Attributes["Description"].Value.Equals("Made in China222"))
                {
                    node.InnerText = "Made in HongKong";
                }
            }
            foreach (XmlNode node in myXmlDoc.ChildNodes)
            {
                //记录该节点下的最后一个子节点（简称：最后子节点）
                XmlNode lastNode = node.LastChild;
                //删除最后子节点下的左右子节点
                lastNode.RemoveAll();
                //删除最后子节点
                node.RemoveChild(lastNode);

            }
            myXmlDoc.Save(xmlFilePath);
        }
    }
}
