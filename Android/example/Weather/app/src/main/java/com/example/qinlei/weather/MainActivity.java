package com.example.qinlei.weather;

import android.content.Intent;
import android.graphics.Color;
import android.support.design.widget.AppBarLayout;
import android.support.design.widget.CollapsingToolbarLayout;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.widget.NestedScrollView;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.example.qinlei.adapter.MAdapterForLifeListView;
import com.example.qinlei.adapter.MAdapterForMListView;
import com.example.qinlei.bean.Data;
import com.example.qinlei.http.HttpGetData;
import com.example.qinlei.mInterface.GetDataListener;
import com.example.qinlei.util.AirQualityShowView;
import com.example.qinlei.util.CItyCopyDb;
import com.example.qinlei.util.ChooseImageWeather;
import com.example.qinlei.util.JsonToBean;
import com.example.qinlei.util.SaveDataToPhone;
import com.example.qinlei.util.SaveOrGetCity;
import com.example.qinlei.util.SaveUpdateTime;
import com.example.qinlei.view.MListViewForScrollView;

public class MainActivity extends AppCompatActivity implements SwipeRefreshLayout.OnRefreshListener,AppBarLayout.OnOffsetChangedListener{
    private String cityname;

    private SaveOrGetCity mSaveOrGetCity;
    private CItyCopyDb mCItyCopyDb;
    private JsonToBean jsonToBean;
    private HttpGetData httpGetData;
    private String jsonStr;
    private SaveUpdateTime saveUpdateTime;
    private SaveDataToPhone saveDataToPhone;
    private SwipeRefreshLayout mRefreshLayout;
    private AppBarLayout mAppBarLayout;
    private CollapsingToolbarLayout mCollapsingToolbarLayout;
    private Data mdata;
    private CoordinatorLayout rootView;
    private NestedScrollView mScrollView;
    private FloatingActionButton mFloatingActionButton;
    //futureItem的listview
    private MListViewForScrollView mlistView;
    private MAdapterForMListView mAdapter;
    //life Listview
    private MListViewForScrollView mLifeListView;
    private MAdapterForLifeListView mLifeAdapter;
    //relatimeWeather的View
    private RelativeLayout root;
    private TextView tv;
    private ImageView img;
    private TextView tvCityname;
    private TextView tvdict;
    private TextView tvspeed;
    private TextView tvHumidity;
    private TextView tvWeather;

    private boolean isrefresh=false;

    private int intWeather=-1;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView();
        //复制数据库文件
        mCItyCopyDb=new CItyCopyDb(this);
        mCItyCopyDb.copyCityDatabase();
        jsonToBean=new JsonToBean(this);
        saveUpdateTime=new SaveUpdateTime(this);
        saveDataToPhone=new SaveDataToPhone(this);

        httpGetData=HttpGetData.getInstance();
        //设置查询天气的城市
        mSaveOrGetCity=new SaveOrGetCity(this);
        cityname=mSaveOrGetCity.getCityName(this);
        if(cityname==""){
            httpGetData.setCityName("北京");
        }else{
            httpGetData.setCityName(cityname);
        }
        //toolbar上设置标签
        mCollapsingToolbarLayout.setTitle("简单天气");
        mCollapsingToolbarLayout.setCollapsedTitleTextColor(Color.WHITE);
        mCollapsingToolbarLayout.setExpandedTitleColor(Color.WHITE);
        ifUpdate();
    }

    public void ifUpdate(){
        //判断是否需要跟新
        if(saveUpdateTime.isUpdate()){
            //需要更新先展示sd卡中的数据然后进行更新
            jsonStr=saveDataToPhone.getJsonStr();
            if(jsonStr!=null&&jsonStr!=""&&jsonStr.length()>100){
                //解析对象
                mdata=jsonToBean.toBean(jsonStr);
                showView();
            }
            getDataFromHttp();
        }else {
            //不需要跟新从sd卡中获取数据
            jsonStr=saveDataToPhone.getJsonStr();
            if(jsonStr!=null&jsonStr!=""){
                //解析并保存对象
                mdata=jsonToBean.toBean(jsonStr);
                showView();
            }
        }
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        cityname=intent.getStringExtra("cityname");
        httpGetData.setCityName(cityname);
        mSaveOrGetCity.setCityName(cityname,MainActivity.this);
        onRefresh();
        //getDataFromHttp();
    }

    private void initView() {
        //RelatimeWeather的view
        tv= (TextView) findViewById(R.id.tv);
        img= (ImageView) findViewById(R.id.img);
        root = (RelativeLayout) findViewById(R.id.root);
        tvCityname= (TextView) findViewById(R.id.tv_cityname);
        tvdict= (TextView) findViewById(R.id.tv_dirct);
        tvHumidity= (TextView) findViewById(R.id.tv_humidity);
        tvspeed= (TextView) findViewById(R.id.tv_speed);
        tvWeather= (TextView) findViewById(R.id.tv_weather);
        mScrollView= (NestedScrollView) findViewById(R.id.nestedscrollView);
        //futureitem的listview
        mlistView = (MListViewForScrollView) findViewById(R.id.future_listview);
        //life ListView
        mLifeListView= (MListViewForScrollView) findViewById(R.id.life_listview);
        //其他view
        mFloatingActionButton= (FloatingActionButton) findViewById(R.id.floatactionbutton);
        rootView= (CoordinatorLayout) findViewById(R.id.root_view);
        mAppBarLayout= (AppBarLayout) findViewById(R.id.app_bar);
        mRefreshLayout = (SwipeRefreshLayout) findViewById(R.id.refresh_layout);
        mRefreshLayout.setOnRefreshListener(this);
        mRefreshLayout.setColorSchemeResources(android.R.color.holo_blue_dark, android.R.color.holo_blue_light, android.R.color.holo_green_dark);
        mCollapsingToolbarLayout = (CollapsingToolbarLayout) findViewById(R.id.toolbar_layout);

        mFloatingActionButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this, CityActivity.class);
                startActivity(i);
            }
        });

        //影藏root
        root.setVisibility(View.INVISIBLE);
    }

    //展示数据
    private void showView() {
        mAdapter=new MAdapterForMListView(mdata.getWeather(),this);
        mLifeAdapter=new MAdapterForLifeListView(mdata.getLife().getInfo(),this);
        //利用Util为air的布局设置数据
        new AirQualityShowView(this,mdata.getPm25());

        tv.setText(mdata.getRealtime().getWeather().getTemperature());
        img.setImageResource(ChooseImageWeather.getImageWeather(mdata.getRealtime().getWeather().getImg()));
        tvCityname.setText(mdata.getRealtime().getCity_name());
        tvdict.setText(mdata.getRealtime().getWind().getDirect());
        tvspeed.setText(mdata.getRealtime().getWind().getPower());
        tvHumidity.setText(mdata.getRealtime().getWeather().getHumidity());
        tvWeather.setText(mdata.getRealtime().getWeather().getInfo());
        //future Adapter
        mlistView.setAdapter(mAdapter);
                //取消listview的焦点
        mlistView.setFocusable(false);
        //life Adapter
        mLifeListView.setAdapter(mLifeAdapter);
                //取消listview的焦点
        mLifeListView.setFocusable(false);

        root.setVisibility(View.VISIBLE);
        //滑动到scorllview的顶部
        mScrollView.smoothScrollTo(0, 0);
        if(isrefresh){
            Snackbar.make(rootView,"更新成功",Snackbar.LENGTH_SHORT).show();
            isrefresh=false;
        }
    }



    //联网获取数据
    private void getDataFromHttp(){
        isrefresh = true;
        try {
            httpGetData.run();
        } catch (Exception e) {
            e.printStackTrace();
        }
        httpGetData.setOngetDataLintener(new GetDataListener() {
            @Override
            public void success() {
                jsonStr = httpGetData.getJsonStr();
                successLink();
                mRefreshLayout.setRefreshing(false);
            }

            @Override
            public void failed() {
                Snackbar.make(rootView, "请求失败", Snackbar.LENGTH_SHORT).show();
                mRefreshLayout.setRefreshing(false);
            }
        });
    }

    //联网请求成功调用
    private void successLink() {
        Log.d("tag", jsonStr);
        if(jsonStr.length()<100){
            Snackbar.make(rootView, "暂时不支持该城市", Snackbar.LENGTH_SHORT).show();
            return;
        }
        saveDataToPhone.saveJsonStr(jsonStr);
        //设置保存时间
        saveUpdateTime.setupdateTime();
        if(jsonStr!=null&jsonStr!=""){
            //解析并保存对象
            mdata=jsonToBean.toBean(jsonStr);
            showView();
        }
    }

    //下拉刷新时调用
    @Override
    public void onRefresh() {
//        mRefreshLayout.setRefreshing(false);
        mRefreshLayout.setRefreshing(true);
        getDataFromHttp();
        isrefresh=true;
    }

    //利用offset动态的设置下拉刷新的可用不可用
    @Override
    protected void onResume() {
        super.onResume();
        mAppBarLayout.addOnOffsetChangedListener(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        mAppBarLayout.removeOnOffsetChangedListener(this);
    }

    @Override
    public void onOffsetChanged(AppBarLayout appBarLayout, int verticalOffset) {
        if (verticalOffset == 0) {
            mRefreshLayout.setEnabled(true);
        } else {
            mRefreshLayout.setEnabled(false);
        }

    }


}
