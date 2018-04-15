package com.example.qinlei.util;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by qinlei on 2016/4/13.
 */
public class SaveOrGetCity {
    private String cityname;
    private Context context;

    public SaveOrGetCity(Context context) {
        this.context = context;
    }

    /**
     * 储存cityname
     * @param cityName
     * @param context
     */
    public void setCityName(String cityName,Context context){
        SharedPreferences sp =context.getSharedPreferences("CITY", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor=sp.edit();
        editor.putString("CityName", cityName);
        editor.commit();
    }

    /**
     * 返回cityname用于下次进入直接从内存中得到cityname,如果为空则进行定位
     * @param context
     * @return
     */
    public String getCityName(Context context){
        SharedPreferences sp =context.getSharedPreferences("CITY", Context.MODE_PRIVATE);
        cityname= sp.getString("CityName", "");

        //如果cityname==null,调用GPS定位功能进行定位

        return cityname;
    }
}
