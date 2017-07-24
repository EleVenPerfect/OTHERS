using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace _12.属性窗口
{
    [DefaultPropertyAttribute("SaveOnClose")]
    public class AppCionfigClass //: List<AppCionfigClass>, ICustomTypeDescriptor
    {
        private bool saveOnClose = true;
        private string greetingText = "欢迎使用应用程序！";
        private int maxRepeatRate = 10;
        private int itemsInMRU = 4;
        private bool settingsChanged = false;
        private string appVersion = "1.0";
        [CategoryAttribute("文档设置"), DefaultValueAttribute(true)]
        public bool SaveOnClose
        {
            get { return saveOnClose; }
            set { saveOnClose = value; }
        }
        [CategoryAttribute("全局设置"),ReadOnlyAttribute(true),DefaultValueAttribute("欢迎使用应用程序！")]
        public string GreetingText
        {
            get { return greetingText; }
            set { greetingText = value; }
        }
        [CategoryAttribute("全局设置"),
        DefaultValueAttribute(4)]
        public int ItemsInMRUList
        {
            get { return itemsInMRU; }
            set { itemsInMRU = value; }
        }
        [DescriptionAttribute("以毫秒表示的文本重复率。"),
        CategoryAttribute("全局设置"),
        DefaultValueAttribute(10)]
        public int MaxRepeatRate
        {
            get { return maxRepeatRate; }
            set { maxRepeatRate = value; }
        }
        [BrowsableAttribute(false),
        DefaultValueAttribute(false)]
        public bool SettingsChanged
        {
            get { return settingsChanged; }
            set { settingsChanged = value; }
        }
        [CategoryAttribute("版本"),
        DefaultValueAttribute("1.0"),
        ReadOnlyAttribute(true)]
        public string AppVersion
        {
            get { return appVersion; }
            set { appVersion = value; }
        }
    }
}
