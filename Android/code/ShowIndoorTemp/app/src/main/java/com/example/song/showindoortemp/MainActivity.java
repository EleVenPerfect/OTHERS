package com.example.song.showindoortemp;

import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ListView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;


public class MainActivity extends AppCompatActivity implements SwipeRefreshLayout.OnRefreshListener {
//    String jsonData="[{\"userId\":1,\"id\":\"\\u5ba4\\u5185\\u6e29\\u5ea6\",\"title\":\"34 \\u2103\"},{\"userId\":2,\"id\":\"\\u5ba4\\u5185\\u6e7f\\u5ea6\",\"title\":\"25 %\"},{\"userId\":3,\"id\":\"\\u5ba2\\u5385\\u6e29\\u5ea6\",\"title\":\"34 \\u2103\"},{\"userId\":4,\"id\":\"\\u5ba2\\u5385\\u6e7f\\u5ea6\",\"title\":\"12 %\"},{\"userId\":5,\"id\":\"\\u5b89\\u5168\\u4fe1\\u606f\",\"title\":\"\\u4e00\\u5207\\u6b63\\u5e38\"}]";
    private List<TempBean> temps;
    private ListView list;
    private SwipeRefreshLayout swipe;
    private TempAdapter adapter;
    private Thread thread;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        list = (ListView) findViewById(R.id.list);
        swipe = (SwipeRefreshLayout) findViewById(R.id.swipe);
        temps=new LinkedList<>();
        adapter = new TempAdapter(this, temps);
        list.setAdapter(adapter);
        thread= new Thread(runnable);
        thread.start();
        swipe.setOnRefreshListener(this);
    }
    Runnable runnable = new Runnable() {
        @Override
        public void run() {
            try {
                URL url = new URL("http://api.atime.net.cn/");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.connect();
                final StringBuffer buffer = new StringBuffer();
                if (conn.getResponseCode()==200) {
                    InputStream is = conn.getInputStream();
                    int len = 0 ;
                    byte[] buf = new byte[1024];
                    while ((len = is.read(buf))!=-1){
                        buffer.append(new String(buf, 0, len));
                    }
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            formatGson(buffer.toString());
                        }
                    });
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    };

    private void formatGson(String jsonData){
        Log.i("jsonData", "formatGson: "+jsonData);
        Type listType = new TypeToken<LinkedList<TempBean>>(){}.getType();
        Gson gson = new Gson();
        LinkedList<TempBean> users = gson.fromJson(jsonData, listType);
        for (Iterator iterator = users.iterator(); iterator.hasNext();) {
            TempBean tempBean = (TempBean) iterator.next();
        }
        adapter.addAll(users);
        if (swipe.isRefreshing()) {
            swipe.setRefreshing(false);
        }
    }

    @Override
    public void onRefresh() {
        if (thread==null|| !thread.isAlive()) {
            thread=new Thread(runnable);
            thread.start();
        }
    }
}
