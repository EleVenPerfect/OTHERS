package com.example.qinlei.http;


import android.os.Handler;
import android.os.Message;
import android.util.Log;

import com.example.qinlei.mInterface.GetDataListener;
import com.google.gson.Gson;
import com.squareup.okhttp.Callback;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

import java.io.IOException;

/**
 * Created by qinlei on 2016/4/11.
 */
public class HttpGetData {
    private GetDataListener listener;
    private static HttpGetData mInstance;
    private OkHttpClient mOkHttpClient;
    private Gson mGson;
    private String cityname;
    private String jsonStr;

    private Handler mHandler=new Handler() {
        @Override
        public void handleMessage(Message msg) {
            switch (msg.what){
                case 0:
                    if (listener != null) {
                        listener.failed();
                    }
                    break;
                case 1:
                    jsonStr= (String) msg.obj;
                    if (listener != null) {
                        listener.success();
                    }
                    break;
            }
        }
    };

    private HttpGetData() {
        mOkHttpClient = new OkHttpClient();
        mGson = new Gson();
    }

    /**
     * 单例模式
     *
     * @return
     */
    public static HttpGetData getInstance() {
        if (mInstance == null) {
            mInstance = new HttpGetData();
        }
        return mInstance;
    }

    public void setCityName(String cityname){
        this.cityname=cityname;
    }

    /**
     * 添加会掉
     *
     * @param listener
     */
    public void setOngetDataLintener(GetDataListener listener) {
        this.listener = listener;
    }

    public String getJsonStr(){
        return jsonStr;
    }

    public void run() throws Exception {
        Log.d("tag", cityname);
        Request request = new Request.Builder()
                .url("http://op.juhe.cn/onebox/weather/query?cityname="+cityname+"&key=0e9b475b15ee2c3c5fdf04410f42f3c1")
                .build();
        mOkHttpClient.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Request request, IOException e) {
                mHandler.sendEmptyMessage(0);
            }

            @Override
            //请求成功
            public void onResponse(Response response) throws IOException {
                String json=response.body().string();
                Message msg=new Message();
                msg.what=1;
                msg.obj=json;
                mHandler.sendMessage(msg);
            }
        });
    }
}
