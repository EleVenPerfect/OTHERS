package com.ouling.ex_wifi_manager;

import java.util.ArrayList;
import java.util.List;

import android.app.Activity;
import android.content.Context;
import android.net.wifi.ScanResult;
import android.net.wifi.WifiConfiguration;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.net.wifi.WifiManager.WifiLock;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

public class Ex_wifi_managerActivity extends Activity {

	private WifiManager mWifiManager;
	private WifiInfo mWifiInfo;
	private List<ScanResult> mWifi_list;// ɨ���б�
	private List<WifiConfiguration> mWifiConfigurations;// �����б�
	WifiLock mWifiLock;
	private ArrayList<String> arylistTask;

	private Button btn_scan, btn_open, btn_con;
	private TextView tv_wifi_info;
	private ListView list;
	private Context context;

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);

		context = this;
		btn_open = (Button) findViewById(R.id.open);
		btn_scan = (Button) findViewById(R.id.Scan);
		btn_con = (Button) findViewById(R.id.connection);
		tv_wifi_info = (TextView) findViewById(R.id.TextView1);
		list = (ListView) findViewById(R.id.listview);

		// ��ȡwifiManager����
		mWifiManager = (WifiManager) getSystemService(Context.WIFI_SERVICE);

		// ����button��ʾ
		if (mWifiManager.isWifiEnabled()) {
			btn_open.setText("wifi�Ѵ�");
		} else {
			btn_open.setText("wifi�ѹر�");
		}

		// ��ȡ������Ϣ����
		mWifiInfo = mWifiManager.getConnectionInfo();
		// ����������Ϣ
		tv_wifi_info.setText(mWifiInfo.toString());

		// ��wifi��ť
		btn_open.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				Open_wifi();
			}
		});

		// ɨ��wifi
		btn_scan.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				List<String> scan_infoList = Scan_info();

				// ����list��ʾ
				list.setAdapter(new ArrayAdapter<String>(context,
						android.R.layout.simple_list_item_1, scan_infoList));
			}
		});

		// ����wifi
		btn_con.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				/* ����WifiConfiguration���� */
				mWifiConfigurations = mWifiManager.getConfiguredNetworks();
				arylistTask = new ArrayList<String>();
				/* ����������1��WiFi���߻���̨ */
				if (mWifiConfigurations.size() > 0) {
					/* ���Դ�WiFi���� */
					if (!mWifiManager.isWifiEnabled()) {
						if (mWifiManager.getWifiState() != WifiManager.WIFI_STATE_ENABLING) {
							mWifiManager.setWifiEnabled(true);
						}
					}

					for (WifiConfiguration amTask : mWifiConfigurations) {
						/* �������ӵ�һ�������������̨ */
						int intNetworkID = amTask.networkId;
						/* ͨ��enableNetwork�������������������� */
						if (mWifiManager.enableNetwork(intNetworkID, true)) {
							Toast.makeText(context, "��������ɹ������Ϊ"+intNetworkID, 1000).show();
							return;
						}
					}
				}
			}

		});

	}

	// ����wifi
	private void Open_wifi() {
		if (!mWifiManager.isWifiEnabled()) {
			mWifiManager.setWifiEnabled(true);
			btn_open.setText("wifi�Ѵ�");
		} else {
			mWifiManager.setWifiEnabled(false);
			btn_open.setText("wifi�ѹر�");
		}
	}

	// �鿴ɨ����
	private List<String> Scan_info() {
		StringBuilder sBuilder = new StringBuilder();
		List<String> scanList = new ArrayList();
		// ɨ��
		mWifiManager.startScan();
		// �õ�ɨ����
		mWifi_list = mWifiManager.getScanResults();
		for (int i = 0; i < mWifi_list.size(); i++) {
			sBuilder.append("��� " + new Integer(i + 1).toString() + " :");
			// scanresult��Ϣ
			sBuilder.append((mWifi_list.get(i)).toString());
			scanList.add(sBuilder.toString());
			sBuilder.setLength(0);
		}
		return scanList;
	}

}