﻿using System;
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
    public partial class AppSetting : DockContent
    {
        public AppSetting()
        {
            InitializeComponent();
            propertyGrid1.SelectedObject = this;
        }
    }
}
