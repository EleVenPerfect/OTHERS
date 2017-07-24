namespace _11.Wizarddemo
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.wizardControl1 = new WizardBase.WizardControl();
            this.startStep1 = new WizardBase.StartStep();
            this.intermediateStep1 = new WizardBase.IntermediateStep();
            this.finishStep1 = new WizardBase.FinishStep();
            this.SuspendLayout();
            // 
            // wizardControl1
            // 
            this.wizardControl1.BackButtonEnabled = true;
            this.wizardControl1.BackButtonVisible = true;
            this.wizardControl1.CancelButtonEnabled = true;
            this.wizardControl1.CancelButtonVisible = true;
            this.wizardControl1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.wizardControl1.HelpButtonEnabled = true;
            this.wizardControl1.HelpButtonVisible = true;
            this.wizardControl1.Location = new System.Drawing.Point(0, 0);
            this.wizardControl1.Name = "wizardControl1";
            this.wizardControl1.NextButtonEnabled = true;
            this.wizardControl1.NextButtonVisible = true;
            this.wizardControl1.Size = new System.Drawing.Size(547, 352);
            this.wizardControl1.WizardSteps.Add(this.startStep1);
            this.wizardControl1.WizardSteps.Add(this.intermediateStep1);
            this.wizardControl1.WizardSteps.Add(this.finishStep1);
            this.wizardControl1.CancelButtonClick += new System.EventHandler(this.wizardControl1_CancelButtonClick);
            this.wizardControl1.FinishButtonClick += new System.EventHandler(this.wizardControl1_FinishButtonClick);
            this.wizardControl1.HelpButtonClick += new System.EventHandler(this.wizardControl1_HelpButtonClick);
            
            // 
            // startStep1
            // 
            this.startStep1.BindingImage = ((System.Drawing.Image)(resources.GetObject("startStep1.BindingImage")));
            this.startStep1.Icon = ((System.Drawing.Image)(resources.GetObject("startStep1.Icon")));
            this.startStep1.Name = "startStep1";
            this.startStep1.SubtitleFont = new System.Drawing.Font("Microsoft Sans Serif", 8.25F);
            this.startStep1.Title = "Welcome to the DemoWizard.";
            this.startStep1.TitleFont = new System.Drawing.Font("Verdana", 12F, System.Drawing.FontStyle.Bold);
            this.startStep1.Click += new System.EventHandler(this.startStep1_Click);
            // 
            // intermediateStep1
            // 
            this.intermediateStep1.BindingImage = ((System.Drawing.Image)(resources.GetObject("intermediateStep1.BindingImage")));
            this.intermediateStep1.Name = "intermediateStep1";
            this.intermediateStep1.SubtitleFont = new System.Drawing.Font("Microsoft Sans Serif", 8.25F);
            this.intermediateStep1.Title = "New WizardControl step.";
            this.intermediateStep1.TitleFont = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold);
            this.intermediateStep1.Click += new System.EventHandler(this.intermediateStep1_Click);
            // 
            // finishStep1
            // 
            this.finishStep1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("finishStep1.BackgroundImage")));
            this.finishStep1.Name = "finishStep1";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(547, 352);
            this.Controls.Add(this.wizardControl1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);

        }

        #endregion

        private WizardBase.WizardControl wizardControl1;
        private WizardBase.StartStep startStep1;
        private WizardBase.IntermediateStep intermediateStep1;
        private WizardBase.FinishStep finishStep1;
    }
}

