package com.httpdemo;

import com.rxz.androidhttpdemo.R;
import com.web.WebService;
import com.web.WebServicePost;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.os.Bundle;
import android.os.Handler;
import android.view.Gravity;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class Login extends Activity implements OnClickListener {

	// ��½��ť
	private Button logbtn;
	// �����ı���ע���ı�
	private TextView infotv, regtv;
	// ��ʾ�û���������
	EditText username, password;
	// �����ȴ���
	private ProgressDialog dialog;
	// ���ص�����
	private String info;
	// �������̸߳�������
	private static Handler handler = new Handler();

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.login);

		// ��ȡ�ؼ�
		username = (EditText) findViewById(R.id.user);
		password = (EditText) findViewById(R.id.pass);
		logbtn = (Button) findViewById(R.id.login);
		regtv = (TextView) findViewById(R.id.register);
		infotv = (TextView) findViewById(R.id.info);

		// ���ð�ť������
		logbtn.setOnClickListener(this);
		regtv.setOnClickListener(this);

	}

	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.login:
			// ������� �������õ�Wlan���ԣ����˷���ֻ��������������ֻ���Ƚ�����
//			if (!checkNetwork()) {
//				Toast toast = Toast.makeText(Login.this,"����δ����", Toast.LENGTH_SHORT);
//				toast.setGravity(Gravity.CENTER, 0, 0);
//				toast.show();
//				break;
//			}
			// ��ʾ��
			dialog = new ProgressDialog(this);
			dialog.setTitle("��ʾ");
			dialog.setMessage("���ڵ�½�����Ժ�...");
			dialog.setCancelable(false);
			dialog.show();
			// �������̣߳��ֱ����Get��Post����
			new Thread(new MyThread()).start();
			break;
		case R.id.register:
			Intent regItn = new Intent(Login.this, Register.class);
			// overridePendingTransition(anim_enter);
			startActivity(regItn);
			break;
		}
		;
	}

	// ���߳̽������ݣ����߳��޸�����
	public class MyThread implements Runnable {
		@Override
		public void run() {
			info = WebService.executeHttpGet(username.getText().toString(), password.getText().toString());
			// info =
			// WebServicePost.executeHttpPost(username.getText().toString(),
			// password.getText().toString());
			handler.post(new Runnable() {
				@Override
				public void run() {
					// ��÷���һ���̶���ֵ�����ݼ�ֵ�ж��Ƿ��½�ɹ����м�ֵ�ͱ����info��ת��û��ֵ���Ǵ�����Ϣֱ��toast
					infotv.setText(info);
					dialog.dismiss();
					Toast toast = Toast.makeText(Login.this, info, Toast.LENGTH_SHORT);
					toast.setGravity(Gravity.CENTER, 0, 0);
					toast.show();
				}
			});
		}
	}

	// �������
	private boolean checkNetwork() {
		ConnectivityManager connManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
		if (connManager.getActiveNetworkInfo() != null) {
			return connManager.getActiveNetworkInfo().isAvailable();
		}
		return false;
	}

}
