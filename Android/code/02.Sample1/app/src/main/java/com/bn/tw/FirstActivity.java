package com.bn.tw;//��������
//�������ϵͳ����
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;

@SuppressLint("NewApi")
public class FirstActivity extends Activity {
	//���尴���ؼ�
	private Button m_Save;
	private Button m_shower;
	private Button m_library;
	private Button m_all;

	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.first);//����������
		//����ذ����ؼ������¼�������
		m_Save=(Button)findViewById(R.id.canten);
		m_Save.setOnTouchListener(OnTouchsaveInfo);
		 m_shower=(Button)findViewById(R.id.shower);
		 m_shower.setOnTouchListener(OnTouchsaveInfo1);
		 m_library=(Button)findViewById(R.id.library);
		 m_library.setOnTouchListener(OnTouchsaveInfo2);
		 m_all=(Button)findViewById(R.id.all);
		 m_all.setOnTouchListener(OnTouchsaveInfo3);
	}
	//"ʳ��"�����ļ�����
	Button.OnTouchListener OnTouchsaveInfo=new Button.OnTouchListener(){
		@Override
		public boolean onTouch(View v,MotionEvent event){
			
	new Handler().postDelayed(new Runnable() { 
        @Override 
        public void run() { 
                Intent mainIntent = new Intent(FirstActivity.this,    Sample_12_4.class); 
                FirstActivity.this.startActivity(mainIntent); 
                FirstActivity.this.finish(); 
//�������֮���ҳ���л�������������ƻ��ϵͳ��ҳ���л�ģʽ
                overridePendingTransition(R.anim.zoomin, 
                        R.anim.zoomout); 
        } 
}, 10); 
			
			return false;
	
		};
	};
	//��ԡ�ҡ������ļ�����
		Button.OnTouchListener OnTouchsaveInfo1=new Button.OnTouchListener(){
			@Override
			public boolean onTouch(View v,MotionEvent event){
				
				new Handler().postDelayed(new Runnable() { 
			        @Override 
			        public void run() { 
			                Intent mainIntent = new Intent(FirstActivity.this,    Shower.class); 
			                FirstActivity.this.startActivity(mainIntent); 
			                FirstActivity.this.finish(); 
     //ҳ���л�
			                overridePendingTransition(R.anim.zoomin, 
			                        R.anim.zoomout); 
			        } 
			}, 10); 
				return false;
			}
			};
	//��ͼ��ݡ��������¼�������
			Button.OnTouchListener OnTouchsaveInfo2=new Button.OnTouchListener(){
				@Override
				public boolean onTouch(View v,MotionEvent event){
					
					new Handler().postDelayed(new Runnable() { 
				        @Override 
				        public void run() { 
				                Intent mainIntent = new Intent(FirstActivity.this,    Library.class); 
				                FirstActivity.this.startActivity(mainIntent); 
				                FirstActivity.this.finish(); 
//ҳ���л�
				                overridePendingTransition(R.anim.zoomin,
				                        R.anim.zoomout); 
				        } 
				}, 10); 
					return false;
				}
				};
				//���г������¼�������
				Button.OnTouchListener OnTouchsaveInfo3=new Button.OnTouchListener(){
					@Override
					public boolean onTouch(View v,MotionEvent event){
						
						new Handler().postDelayed(new Runnable() { 
					        @Override 
					        public void run() { 
					                Intent mainIntent = new Intent(FirstActivity.this,    All.class); 
					                FirstActivity.this.startActivity(mainIntent); 
					                FirstActivity.this.finish(); 
//ҳ���л�
					                overridePendingTransition(R.anim.zoomin, 
					                        R.anim.zoomout); 
					        } 
					}, 10); 
						return false;
					}
					};
			//�����ؼ�ʱ�Ƴ�������
				 @Override
					public void onBackPressed() {
				    	
					this.finish();
					
					
					 
					 
				    }
				
					
	}




