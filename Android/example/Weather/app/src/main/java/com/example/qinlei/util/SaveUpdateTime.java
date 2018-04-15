package com.example.qinlei.util;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import java.util.Date;

/**
 * Created by qinlei on 2016/4/13.
 */
public class SaveUpdateTime {
    private long updateTime;

    private Context context;

    public SaveUpdateTime(Context context) {
        this.context = context;
    }

    /**
     * 利用sharePreference将更新的事件储存在本地；
     */
    public void setupdateTime(){
        Date date=new Date();
        SharedPreferences sp =context.getSharedPreferences("TIME", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor=sp.edit();
        editor.putLong("UpdateTime", date.getTime());
        editor.commit();
    }
    private Long getupdateTime(){
        SharedPreferences sp =context.getSharedPreferences("TIME", Context.MODE_PRIVATE);
        updateTime= sp.getLong("UpdateTime", 0);
        return updateTime;
    }

    /**
     * 根据上次跟新的时间返回是否更新
     * @return
     */
    public boolean isUpdate(){
        Date date=new Date();
        Long oldTime=getupdateTime();
        Log.d("updatetime", date.getTime()-oldTime+"");
        //过一小时跟新
        if(oldTime==0||date.getTime()-oldTime>3600000){
            return true;
        }
        return false;
    }
}
