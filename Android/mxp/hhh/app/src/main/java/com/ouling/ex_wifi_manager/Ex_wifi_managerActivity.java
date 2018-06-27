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
	private List<ScanResult> mWifi_list;// 扫描列表
	private List<WifiConfiguration> mWifiConfigurations;// 连接列表
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

		// 获取wifiManager对象
		mWifiManager = (WifiManager) getSystemService(Context.WIFI_SERVICE);

		// 设置button显示
		if (mWifiManager.isWifiEnabled()) {
			btn_open.setText("wifi已打开");
		} else {
			btn_open.setText("wifi已关闭");
		}

		// 获取连接信息对象
		mWifiInfo = mWifiManager.getConnectionInfo();
		// 设置连接信息
		tv_wifi_info.setText(mWifiInfo.toString());

		// 打开wifi按钮
		btn_open.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				Open_wifi();
			}
		});

		// 扫描wifi
		btn_scan.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				List<String> scan_infoList = Scan_info();

				// 设置list显示
				list.setAdapter(new ArrayAdapter<String>(context,
						android.R.layout.simple_list_item_1, scan_infoList));
			}
		});

		// 连接wifi
		btn_con.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				/* 设置WifiConfiguration对象 */
				mWifiConfigurations = mWifiManager.getConfiguredNetworks();
				arylistTask = new ArrayList<String>();
				/* 若发现至少1个WiFi无线基地台 */
				if (mWifiConfigurations.size() > 0) {
					/* 尝试打开WiFi服务 */
					if (!mWifiManager.isWifiEnabled()) {
						if (mWifiManager.getWifiState() != WifiManager.WIFI_STATE_ENABLING) {
							mWifiManager.setWifiEnabled(true);
						}
					}

					for (WifiConfiguration amTask : mWifiConfigurations) {
						/* 尝试连接第一个无线网络基地台 */
						int intNetworkID = amTask.networkId;
						/* 通过enableNetwork连接至该无线网络设置 */
						if (mWifiManager.enableNetwork(intNetworkID, true)) {
							Toast.makeText(context, "连接网络成功，编号为"+intNetworkID, 1000).show();
							return;
						}
					}
				}
			}

		});

	}

	// 控制wifi
	private void Open_wifi() {
		if (!mWifiManager.isWifiEnabled()) {
			mWifiManager.setWifiEnabled(true);
			btn_open.setText("wifi已打开");
		} else {
			mWifiManager.setWifiEnabled(false);
			btn_open.setText("wifi已关闭");
		}
	}

	// 查看扫描结果
	private List<String> Scan_info() {
		StringBuilder sBuilder = new StringBuilder();
		List<String> scanList = new ArrayList();
		// 扫描
		mWifiManager.startScan();
		// 得到扫描结果
		mWifi_list = mWifiManager.getScanResults();
		for (int i = 0; i < mWifi_list.size(); i++) {
			sBuilder.append("编号 " + new Integer(i + 1).toString() + " :");
			// scanresult信息
			sBuilder.append((mWifi_list.get(i)).toString());
			scanList.add(sBuilder.toString());
			sBuilder.setLength(0);
		}
		return scanList;
	}

}