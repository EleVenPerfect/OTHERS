package com.example.qinlei.util;

import com.example.qinlei.weather.R;

/**
 * Created by qinlei on 2016/4/25.
 */
public class ChooseImageWeather {
    private static int mimageWeather=-1;

    public static int getImageWeather(String i) {
        int j=Integer.parseInt(i);
        switch (j) {
            case 0:
                mimageWeather= R.mipmap.w0;
                break;
            case 1:
                mimageWeather= R.mipmap.w1;
                break;
            case 2:
                mimageWeather= R.mipmap.w2;
                break;
            case 3:
            case 4:
            case 5:
                mimageWeather= R.mipmap.w3;
                break;
            case 6:
                mimageWeather= R.mipmap.w6;
                break;
            case 7:
                mimageWeather= R.mipmap.w4;
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                mimageWeather= R.mipmap.w5;
                break;
            case 13:
                mimageWeather= R.mipmap.w7;
                break;
            case 14:
                mimageWeather= R.mipmap.w6;
                break;
            case 15:
            case 16:
            case 17:
                mimageWeather= R.mipmap.w7;
                break;
            case 18:
                mimageWeather= R.mipmap.w18;
                break;
            case 19:
                mimageWeather= R.mipmap.w9;
                break;
            case 20:
            case 31:
                mimageWeather= R.mipmap.w20;
                break;
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
                mimageWeather= R.mipmap.w5;
                break;
            case 26:
            case 27:
            case 28:
                mimageWeather= R.mipmap.w7;
                break;
            case 29:
            case 30:
            case 32:
            case 33:
                mimageWeather= R.mipmap.w29;
                break;
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
                mimageWeather= R.mipmap.ic_launcher;
                break;

        }
        return mimageWeather;
    }
}
