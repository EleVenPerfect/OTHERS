package com.bn.tw;								//���������


import android.app.Activity;
					//���������
import android.content.Intent;
import android.os.Bundle;						//���������
import android.view.View;							//���������
import android.view.Window;						//���������
import android.webkit.URLUtil;					//���������
import android.webkit.WebChromeClient;			//���������
import android.webkit.WebView;				//���������
import android.webkit.WebViewClient;		//���������
import android.widget.EditText;				//���������
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
        	{//ΪWebView����WebChromeClient
				@Override
				public void onProgressChanged(WebView view, int newProgress)
				{//��дonProgressChanged����
					Sample_12_4.this.setProgress(newProgress*100);
				}
        	}
        ); 
        wview.setWebViewClient
        (
        	new WebViewClient()
        	{//ΪWebView����WebViewClient
	        	public void onReceivedError(WebView view, int errorCode, String description, String failingUrl)
	        	{//��дonReceivedError����
	        		Toast.makeText(Sample_12_4.this, "Sorry!" + description, Toast.LENGTH_SHORT).show();
	        	}
        	}
        );
        TextView website = (TextView)findViewById(R.id.website);		//���WebView����
		String url = website.getText().toString().trim();//������ַ
		wview.getSettings().setJavaScriptEnabled(true);//����js�ܹ�����
			wview.loadUrl(url);//������ҳ
		
			
		//ǰ���������������	
		ImageButton iBBack = (ImageButton)findViewById(R.id.btnForward);
		iBBack.setOnClickListener
		(
			new View.OnClickListener()
			{
				@Override
				public void onClick(View v)
				{
					if(wview.canGoForward())
					{		//�ж��Ƿ��ܹ�ǰ��   
						wview.goForward();
					}
					else
					{
						Toast.makeText(Sample_12_4.this, "�Բ��������ڲ���ǰ����", Toast.LENGTH_SHORT).show();
					}
				}
			}
		);
		//���ذ������������
		ImageButton iBGoOn = (ImageButton)findViewById(R.id.btnBack);
		iBGoOn.setOnClickListener
		(
			new View.OnClickListener()
			{
				@Override
				public void onClick(View v)
				{
					if(wview.canGoBack())
					{		//�ж��Ƿ��ܹ�ǰ��
						wview.goBack();
					}
					else
					{
						Toast.makeText(Sample_12_4.this, "�Բ��������ڲ��ܺ��ˣ�", Toast.LENGTH_SHORT).show();
					}
				}
			}
		);
	}
    //�����ؼ�ʱ�ص�������FirstActivity
    @Override
	public void onBackPressed() {
    	Intent intent=new Intent(Sample_12_4.this,FirstActivity.class);
		startActivity(intent);
		Sample_12_4.this.finish();
		
    }
}