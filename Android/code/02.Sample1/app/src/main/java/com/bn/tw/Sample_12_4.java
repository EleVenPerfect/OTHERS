package com.bn.tw;								//声明包语句


import android.app.Activity;
					//引入相关类
import android.content.Intent;
import android.os.Bundle;						//引入相关类
import android.view.View;							//引入相关类
import android.view.Window;						//引入相关类
import android.webkit.URLUtil;					//引入相关类
import android.webkit.WebChromeClient;			//引入相关类
import android.webkit.WebView;				//引入相关类
import android.webkit.WebViewClient;		//引入相关类
import android.widget.EditText;				//引入相关类
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;



public class Sample_12_4 extends Activity {
	
	WebView wview;
    @Override
    public void onCreate(Bundle savedInstanceState) 
    { 
        super.onCreate(savedInstanceState);
        getWindow().requestFeature(Window.FEATURE_PROGRESS);
        setContentView(R.layout.main); 
       
        wview = (WebView)findViewById(R.id.wv);
        wview.setWebChromeClient
        (
        	new WebChromeClient()
        	{//为WebView设置WebChromeClient
				@Override
				public void onProgressChanged(WebView view, int newProgress)
				{//重写onProgressChanged方法
					Sample_12_4.this.setProgress(newProgress*100);
				}
        	}
        ); 
        wview.setWebViewClient
        (
        	new WebViewClient()
        	{//为WebView设置WebViewClient
	        	public void onReceivedError(WebView view, int errorCode, String description, String failingUrl)
	        	{//重写onReceivedError方法
	        		Toast.makeText(Sample_12_4.this, "Sorry!" + description, Toast.LENGTH_SHORT).show();
	        	}
        	}
        );
        TextView website = (TextView)findViewById(R.id.website);		//获得WebView对象
		String url = website.getText().toString().trim();//定义网址
		wview.getSettings().setJavaScriptEnabled(true);//设置js能够运行
			wview.loadUrl(url);//加载网页
		
			
		//前进按键及其监听器	
		ImageButton iBBack = (ImageButton)findViewById(R.id.btnForward);
		iBBack.setOnClickListener
		(
			new View.OnClickListener()
			{
				@Override
				public void onClick(View v)
				{
					if(wview.canGoForward())
					{		//判断是否能够前进   
						wview.goForward();
					}
					else
					{
						Toast.makeText(Sample_12_4.this, "对不起，您现在不能前进！", Toast.LENGTH_SHORT).show();
					}
				}
			}
		);
		//返回按键及其监听器
		ImageButton iBGoOn = (ImageButton)findViewById(R.id.btnBack);
		iBGoOn.setOnClickListener
		(
			new View.OnClickListener()
			{
				@Override
				public void onClick(View v)
				{
					if(wview.canGoBack())
					{		//判断是否能够前进
						wview.goBack();
					}
					else
					{
						Toast.makeText(Sample_12_4.this, "对不起，您现在不能后退！", Toast.LENGTH_SHORT).show();
					}
				}
			}
		);
	}
    //按返回键时回到主界面FirstActivity
    @Override
	public void onBackPressed() {
    	Intent intent=new Intent(Sample_12_4.this,FirstActivity.class);
		startActivity(intent);
		Sample_12_4.this.finish();
		
    }
}