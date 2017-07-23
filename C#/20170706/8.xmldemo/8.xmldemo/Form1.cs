using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Xml;

namespace _8.xmldemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            string myXMLFilePath = "D:\\MyComputers.xml";
            //生成xml文件
            GenerateXMLFile(myXMLFilePath);
            //遍历xml文件的信息
            GetXMLInformation(myXMLFilePath);
            //修改xml文件的信息
            ModifyXmlInformation(myXMLFilePath);
            //向xml文件添加节点信息
            AddXmlInformation(myXMLFilePath);
            //删除指定节点信息
            //DeleteXmlInformation(myXMLFilePath);
        }
        private static void GenerateXMLFile(string xmlFilePath)
        {
            try
            {
                //初始化一个xml实例
                XmlDocument myXmlDoc = new XmlDocument();
                //创建xml的根节点
                XmlElement rootElement = myXmlDoc.CreateElement("Computers");
                //将根节点加入到xml文件中（AppendChild）
                myXmlDoc.AppendChild(rootElement);

                //初始化第一层的第一个子节点
                XmlElement firstLevelElement1 = myXmlDoc.CreateElement("Computer");
                //填充第一层的第一个子节点的属性值（SetAttribute）
                firstLevelElement1.SetAttribute("ID", "11111111");
                firstLevelElement1.SetAttribute("Description", "Made in China");
                //将第一层的第一个子节点加入到根节点下
                rootElement.AppendChild(firstLevelElement1);
                //初始化第二层的第一个子节点
                XmlElement secondLevelElement11 = myXmlDoc.CreateElement("name");
                //填充第二层的第一个子节点的值（InnerText）
                secondLevelElement11.InnerText = "Lenovo";
                firstLevelElement1.AppendChild(secondLevelElement11);
                XmlElement secondLevelElement12 = myXmlDoc.CreateElement("price");
                secondLevelElement12.InnerText = "5000";
                firstLevelElement1.AppendChild(secondLevelElement12);


                XmlElement firstLevelElement2 = myXmlDoc.CreateElement("Computer");
                firstLevelElement2.SetAttribute("ID", "2222222");
                firstLevelElement2.SetAttribute("Description", "Made in USA");
                rootElement.AppendChild(firstLevelElement2);
                XmlElement secondLevelElement21 = myXmlDoc.CreateElement("name");
                secondLevelElement21.InnerText = "IBM";
                firstLevelElement2.AppendChild(secondLevelElement21);
                XmlElement secondLevelElement22 = myXmlDoc.CreateElement("price");
                secondLevelElement22.InnerText = "10000";
                firstLevelElement2.AppendChild(secondLevelElement22);

                //将xml文件保存到指定的路径下
                myXmlDoc.Save(xmlFilePath);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        private static void GetXMLInformation(string xmlFilePath)
        {
            try
            {
                //初始化一个xml实例
                XmlDocument myXmlDoc = new XmlDocument();
                //加载xml文件（参数为xml文件的路径）
                myXmlDoc.Load(xmlFilePath);
                //获得第一个姓名匹配的节点（SelectSingleNode）：此xml文件的根节点
                XmlNode rootNode = myXmlDoc.SelectSingleNode("Computers");
                //分别获得该节点的InnerXml和OuterXml信息
                string innerXmlInfo = rootNode.InnerXml.ToString();
                string outerXmlInfo = rootNode.OuterXml.ToString();
                //获得该节点的子节点（即：该节点的第一层子节点）
                XmlNodeList firstLevelNodeList = rootNode.ChildNodes;
                foreach (XmlNode node in firstLevelNodeList)
                {
                    //获得该节点的属性集合
                    XmlAttributeCollection attributeCol = node.Attributes;
                    foreach (XmlAttribute attri in attributeCol)
                    {
                        //获取属性名称与属性值
                        string name = attri.Name;
                        string value = attri.Value;
                        Console.WriteLine("{0} = {1}", name, value);
                    }

                    //判断此节点是否还有子节点
                    if (node.HasChildNodes)
                    {
                        //获取该节点的第一个子节点
                        XmlNode secondLevelNode1 = node.FirstChild;
                        //获取该节点的名字
                        string name = secondLevelNode1.Name;
                        //获取该节点的值（即：InnerText）
                        string innerText = secondLevelNode1.InnerText;
                        Console.WriteLine("{0} = {1}", name, innerText);

                        //获取该节点的第二个子节点（用数组下标获取）
                        XmlNode secondLevelNode2 = node.ChildNodes[1];
                        name = secondLevelNode2.Name;
                        innerText = secondLevelNode2.InnerText;
                        Console.WriteLine("{0} = {1}", name, innerText);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        private static void ModifyXmlInformation(string xmlFilePath)
        {
            try
            {
                XmlDocument myXmlDoc = new XmlDocument();
                myXmlDoc.Load(xmlFilePath);
                XmlNode rootNode = myXmlDoc.FirstChild;
                XmlNodeList firstLevelNodeList = rootNode.ChildNodes;
                foreach (XmlNode node in firstLevelNodeList)
                {
                    //修改此节点的属性值
                    if (node.Attributes["Description"].Value.Equals("Made in USA"))
                    {
                        node.Attributes["Description"].Value = "Made in HongKong";
                    }
                }
                //要想使对xml文件所做的修改生效，必须执行以下Save方法
                myXmlDoc.Save(xmlFilePath);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

        }

        private static void AddXmlInformation(string xmlFilePath)
        {
            try
            {
                XmlDocument myXmlDoc = new XmlDocument();
                myXmlDoc.Load(xmlFilePath);
                //添加一个带有属性的节点信息
                foreach (XmlNode node in myXmlDoc.FirstChild.ChildNodes)
                {
                    XmlElement newElement = myXmlDoc.CreateElement("color");
                    newElement.InnerText = "black";
                    newElement.SetAttribute("IsMixed", "Yes");
                    node.AppendChild(newElement);
                }
                //保存更改
                myXmlDoc.Save(xmlFilePath);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        private static void DeleteXmlInformation(string xmlFilePath)
        {
            try
            {
                XmlDocument myXmlDoc = new XmlDocument();
                myXmlDoc.Load(xmlFilePath);
                foreach (XmlNode node in myXmlDoc.FirstChild.ChildNodes)
                {
                    //记录该节点下的最后一个子节点（简称：最后子节点）
                    XmlNode lastNode = node.LastChild;
                    //删除最后子节点下的左右子节点
                    lastNode.RemoveAll();
                    //删除最后子节点
                    node.RemoveChild(lastNode);
                }
                //保存对xml文件所做的修改
                myXmlDoc.Save(xmlFilePath);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }
}
}
