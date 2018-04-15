package com.example.qinlei.weather;

import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.SectionIndexer;
import android.widget.Toast;

import com.example.qinlei.adapter.MRecycleViewAdapter;
import com.example.qinlei.divider.DividerItemDecoration;
import com.example.qinlei.sql.SelectSqlCity;
import com.example.qinlei.util.StringMatcher;
import com.example.qinlei.view.Indexablelistview;

import java.util.ArrayList;
import java.util.List;

public class CityActivity extends AppCompatActivity {
    private Indexablelistview mListView;
    private ArrayList<String> mDatas;
    private ArrayList<String> mPinYinDatas;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_city);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        toolbar.setTitleTextColor(Color.WHITE);
        toolbar.setTitle("城市");
        setSupportActionBar(toolbar);

        mDatas= SelectSqlCity.selectCity(this);
        mPinYinDatas= SelectSqlCity.selectPinyinCity(this);
        ContentAdpter adapter=new ContentAdpter(this,android.R.layout.simple_list_item_1,mDatas);
        mListView=(Indexablelistview)findViewById(R.id.indexablelistview);
        mListView.setAdapter(adapter);
        mListView.setFastScrollEnabled(true);

        mListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent i=new Intent(CityActivity.this,MainActivity.class);
                i.putExtra("cityname",mDatas.get(position));
                startActivity(i);
            }
        });
    }
    private class ContentAdpter extends ArrayAdapter implements SectionIndexer {


        private String mSections="#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        public ContentAdpter(Context context, int resource, List<String> objects) {
            super(context, resource, objects);
        }

        @Override
        public Object[] getSections() {
            String[] sections=new String[mSections.length()];
            //将每一个section作为单个数组元素放到sections中
            for (int i = 0; i < mSections.length(); i++) {
                //从section中获得每一个字符
                sections[i]=String.valueOf(mSections.charAt(i));

            }
            return sections;
        }

        @Override
        public int getPositionForSection(int sectionIndex) {

            //从当前的section往前查，直到遇到第一个有对应item的位置，否则不进行定位
            for (int i = sectionIndex; i >= 0; i--) {
                for (int j = 0; j < getCount(); j++) {
                    if (i==0){
                        //查询数字
                        for(int k=0;k<=9;k++){
                            //value :iten的首字母
                            if(StringMatcher.match(String.valueOf(String
                                    .valueOf(((String)getItem(j)).charAt(0)))
                                    ,String.valueOf(k))){
                                return j;
                            }
                        }
                    }else{
                        // 查询字母
                        // Toast.makeText(CityActivity.this,""+String.valueOf(mSections.charAt(i)),Toast.LENGTH_SHORT).show();
                        if(StringMatcher.match(String.valueOf(((mPinYinDatas.get(j))).charAt(0)),
                                String.valueOf(mSections.charAt(i)))){
                            return j;
                        }
                    }
                }
            }
            return 0;
        }

        @Override
        public int getSectionForPosition(int position) {
            return 0;
        }
    }
}
