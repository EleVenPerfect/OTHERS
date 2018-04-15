package com.example.qinlei.util;

import android.content.Context;
import android.os.Environment;
import android.util.Log;

import com.example.qinlei.sql.SelectSqlCity;
import com.example.qinlei.weather.R;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * Created by qinlei on 2016/4/28.
 */

public class CItyCopyDb {
    private File dir;
    private final int BUFFER_SIZE = 10000;
    public static final String DB_NAME = "cities"; //保存的数据库文件名
    public static final String PACKAGE_NAME = "com.example.qinlei.weather";//工程包名
    public static final String DB_PATH = "/data"
            + Environment.getDataDirectory().getAbsolutePath() + "/"
            + PACKAGE_NAME+"/databases";  //在手机里存放数据库的位置
    private Context context;

    public CItyCopyDb(Context context) {
        this.context = context;
    }

    //判断不存在时到入数据
    public void copyCityDatabase(){
        File dir=new File(DB_PATH);
        if(!dir.exists()){
            Log.d("tag", "不存在");
            dir.mkdir();
            copyDatabase();
        }else{
            Log.d("tag", "存在");
            SelectSqlCity.selectCity(context);
        }
    }

    //复制数据
    private void copyDatabase() {
        String dbfile=DB_PATH + "/" + DB_NAME ;
        Log.d("tag", dbfile);
        try {
            //执行数据库导入
            InputStream is = this.context.getResources().openRawResource(R.raw.cities); //欲导入的数据库
            FileOutputStream fos = new FileOutputStream(dbfile);
            byte[] buffer = new byte[BUFFER_SIZE];
            int count = 0;
            while ((count = is.read(buffer)) > 0) {
                fos.write(buffer, 0, count);
            }
            fos.close();//关闭输出流
            is.close();//关闭输入流
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
