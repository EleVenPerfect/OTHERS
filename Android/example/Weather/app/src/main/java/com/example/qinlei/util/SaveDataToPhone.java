package com.example.qinlei.util;

import android.content.Context;
import android.os.Environment;
import android.util.Log;

import com.example.qinlei.bean.Data;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

/**
 * Created by qinlei on 2016/4/13.
 */
public class SaveDataToPhone {
    private Context context;

    public SaveDataToPhone(Context context) {
        this.context = context;
    }

    //保存jsonStr到sd卡上
    public void saveJsonStr(String data) {
        String filePath = null;
        boolean hasSDCard = Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED);
        if (hasSDCard) {
            filePath = Environment.getExternalStorageDirectory().toString()  + "/data.txt";
            Log.d("dir", filePath);
        } else
            filePath = Environment.getDownloadCacheDirectory().toString()  + "/data.txt";

        try {
            File file = new File(filePath);
            if (!file.exists()) {
                File dir = new File(file.getParent());
                dir.mkdirs();
                file.createNewFile();
            }
            FileOutputStream outStream = new FileOutputStream(file);
            outStream.write(data.getBytes());
            outStream.close();
        } catch (Exception e) {
            e.printStackTrace();

        }
    }
    //从sd卡中获取jsonStr
    public String getJsonStr() {
        String filePath = null;
        boolean hasSDCard = Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED);
        if (hasSDCard) {
            filePath = Environment.getExternalStorageDirectory().toString() + "/data.txt";
        } else
            filePath = Environment.getDownloadCacheDirectory().toString() + "/data.txt";

        try {
            File file = new File(filePath);
            if(!file.exists())
            {
                return null;
            }
            FileInputStream inputStream=new FileInputStream(file);
            ByteArrayOutputStream byteArrayOutputStream=new ByteArrayOutputStream();
            byte[] buffer =new byte[1024];
            int length=-1;
            while((length=inputStream.read(buffer))!=-1){
                byteArrayOutputStream.write(buffer,0,length);
            }
            String jsonStr=byteArrayOutputStream.toString();
            byteArrayOutputStream.close();
            return jsonStr;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
