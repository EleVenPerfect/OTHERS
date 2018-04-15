package com.example.qinlei.util;

import android.content.Context;
import android.util.Log;
import com.example.qinlei.bean.Data;
import com.example.qinlei.bean.Json;
import com.example.qinlei.bean.Result;
import com.google.gson.Gson;



/**
 * Created by qinlei on 2016/4/11.
 */
public class JsonToBean{
    private Context context;

    public JsonToBean(Context context) {
        this.context = context;
    }

    /**
     * 将jsonStr字符串转化成Data对象
     * @param string
     * @return
     */
    public Data toBean(String string) {
        Gson gson = new Gson();
        Json json = gson.fromJson(string, Json.class);
        Result result = json.getResult();
        Data data = result.getData();
        //Log.d("Tag", data.toString());
        return data;
    }
}
