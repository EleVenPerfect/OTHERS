package com.example.qinlei.sql;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class MyDatabaseOpenHelper extends SQLiteOpenHelper {

	public static final String TABLE_NAME = "city";
	public static final String ZD_ID = "cityId";
	public static final String ZD_PROVICE = "provice";
	public static final String ZD_PINYIN = "pinyin";
	public static final String ZD_CITY = "city";

	public MyDatabaseOpenHelper(Context context) {
		super(context, "cities", null, 1);
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		db.execSQL("create table city (cityId integer primary key not null,"
				+ "provice text  not null," +"pinyin text  not null,"+ "city text not null)");
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

	}

}
