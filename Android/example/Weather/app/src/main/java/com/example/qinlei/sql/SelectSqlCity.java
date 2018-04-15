package com.example.qinlei.sql;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by qinlei on 2016/4/28.
 */
public class SelectSqlCity {
    private static MyDatabaseOpenHelper databaseOpenHelper;
    private static SQLiteDatabase dbDatabase;

    public static ArrayList<String> selectCity(Context context) {
        databaseOpenHelper = new MyDatabaseOpenHelper(context);
        dbDatabase = databaseOpenHelper.getReadableDatabase();
        String sql = "select city from city order by pinyin";
        Cursor cursor = dbDatabase.rawQuery(sql,new String[]{});
        ArrayList<String> cities = new ArrayList<String>();
        while (cursor.moveToNext()) {
            String city = cursor.getString(cursor.getColumnIndex("city"));
            cities.add(city);
        }
        Log.d("tag",cities.toString());
        return cities;
    }
    public static ArrayList<String> selectPinyinCity(Context context) {
        databaseOpenHelper = new MyDatabaseOpenHelper(context);
        dbDatabase = databaseOpenHelper.getReadableDatabase();
        String sql = "select pinyin from city order by pinyin";
        Cursor cursor = dbDatabase.rawQuery(sql,new String[]{});
        ArrayList<String> pinyincities = new ArrayList<String>();
        while (cursor.moveToNext()) {
            String city = cursor.getString(cursor.getColumnIndex("pinyin"));
            pinyincities.add(city);
        }
        Log.d("tag",pinyincities.toString());
        return pinyincities;
    }
}
