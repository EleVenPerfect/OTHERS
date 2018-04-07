package com.bn.tw;								//���������
import android.app.Activity;					//���������
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
import android.widget.Toast;				//���������
public class Library extends Activity {
	WebView wview;
    @Override
    public void onCreate(Bundle savedInstanceState) 
    { 
        super.onCreate(savedInstanceState);
        getWindow().requestFeature(Window.FEATURE_PROGRESS);
        setContentView(R.layout.library); 
       
        wview = (WebView)findViewById(R.id.wv_library);
        wview.setWebChromeClient
        (
        	new WebChromeClient()
        	{//ΪWebView����WebChromeClient
				@Override
				public void onProgressChanged(WebView view, int newProgress)
				{//��дonProgressChanged����
					Library.this.setProgress(newProgress*100);
				}
        	}
        ); 
        wview.setWebViewClient
        (
        	new WebViewClient()
        	{//ΪWebView����WebViewClient
	        	public void onReceivedError(WebView view, int errorCode, String description, String failingUrl)
	        	{//��дonReceivedError����
	        		Toast.makeText(Library.this, "Sorry!" + description, Toast.LENGTH_SHORT).show();
	        	}
        	}
        );
        TextView website = (TextView)findViewById(R.id.website_library);		//���WebView����
		String url = website.getText().toString().trim();//��ȡ��ַ
		wview.getSettings().setJavaScriptEnabled(true);
			wview.loadUrl(url);//������ҳ
		
		//����ǰ����ť
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
						Toast.makeText(Library.this, "�Բ��������ڲ���ǰ����", Toast.LENGTH_SHORT).show();
					}
				}
			}
		);
		//���ú��˰���
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
						Toast.makeText(Library.this, "�Բ��������ڲ��ܺ��ˣ�", Toast.LENGTH_SHORT).show();
					}
				}
			}
		);
	}
    //������ؼ�ʱ�ص�������
    public void onBackPressed() {
       	Intent intent=new Intent(Library.this,FirstActivity.class);
   		startActivity(intent);
   		Library.this.finish();
  
       }
}