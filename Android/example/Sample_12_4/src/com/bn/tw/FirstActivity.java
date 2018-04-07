package com.bn.tw;//包的名字
//引入相关系统函数
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
	//定义按键控件
	private Button m_Save;
	private Button m_shower;
	private Button m_library;
	private Button m_all;

	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.first);//载入主界面
		//给相关按键控件定义事件监听器
		m_Save=(Button)findViewById(R.id.canten);
		m_Save.setOnTouchListener(OnTouchsaveInfo);
		 m_shower=(Button)findViewById(R.id.shower);
		 m_shower.setOnTouchListener(OnTouchsaveInfo1);
		 m_library=(Button)findViewById(R.id.library);
		 m_library.setOnTouchListener(OnTouchsaveInfo2);
		 m_all=(Button)findViewById(R.id.all);
		 m_all.setOnTouchListener(OnTouchsaveInfo3);
	}
	//"食堂"按键的监听器
	Button.OnTouchListener OnTouchsaveInfo=new Button.OnTouchListener(){
		@Override
		public boolean onTouch(View v,MotionEvent event){
			
	new Handler().postDelayed(new Runnable() { 
        @Override 
        public void run() { 
                Intent mainIntent = new Intent(FirstActivity.this,    Sample_12_4.class); 
                FirstActivity.this.startActivity(mainIntent); 
                FirstActivity.this.finish(); 
//点击按键之后的页面切换，采用类似于苹果系统的页面切换模式
                overridePendingTransition(R.anim.zoomin, 
                        R.anim.zoomout); 
        } 
}, 10); 
			
			return false;
	
		};
	};
	//“浴室”按键的监听器
		Button.OnTouchListener OnTouchsaveInfo1=new Button.OnTouchListener(){
			@Override
			public boolean onTouch(View v,MotionEvent event){
				
				new Handler().postDelayed(new Runnable() { 
			        @Override 
			        public void run() { 
			                Intent mainIntent = new Intent(FirstActivity.this,    Shower.class); 
			                FirstActivity.this.startActivity(mainIntent); 
			                FirstActivity.this.finish(); 
     //页面切换
			                overridePendingTransition(R.anim.zoomin, 
			                        R.anim.zoomout); 
			        } 
			}, 10); 
				return false;
			}
			};
	//“图书馆”按键的事件监听器
			Button.OnTouchListener OnTouchsaveInfo2=new Button.OnTouchListener(){
				@Override
				public boolean onTouch(View v,MotionEvent event){
					
					new Handler().postDelayed(new Runnable() { 
				        @Override 
				        public void run() { 
				                Intent mainIntent = new Intent(FirstActivity.this,    Library.class); 
				                FirstActivity.this.startActivity(mainIntent); 
				                FirstActivity.this.finish(); 
//页面切换
				                overridePendingTransition(R.anim.zoomin,
				                        R.anim.zoomout); 
				        } 
				}, 10); 
					return false;
				}
				};
				//所有场所的事件监听器
				Button.OnTouchListener OnTouchsaveInfo3=new Button.OnTouchListener(){
					@Override
					public boolean onTouch(View v,MotionEvent event){
						
						new Handler().postDelayed(new Runnable() { 
					        @Override 
					        public void run() { 
					                Intent mainIntent = new Intent(FirstActivity.this,    All.class); 
					                FirstActivity.this.startActivity(mainIntent); 
					                FirstActivity.this.finish(); 
//页面切换
					                overridePendingTransition(R.anim.zoomin, 
					                        R.anim.zoomout); 
					        } 
					}, 10); 
						return false;
					}
					};
			//按返回键时推出主程序
				 @Override
					public void onBackPressed() {
				    	
					this.finish();
					
					
					 
					 
				    }
				
					
	}




