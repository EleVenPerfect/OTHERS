package com.example.qinlei.util;

import android.graphics.Color;

/**
 * Created by qinlei on 2016/4/26.
 */
public class ChooseAirQualityColor {

    public static int getColor(String j){
        int i=Integer.parseInt(j);
        if(i>=0&&i<=50){
            return Color.GREEN;
        }else if(i>50&&i<=100){
            return Color.BLUE;
        }
        else if(i>100&&i<=200){
            return Color.YELLOW;
        }
        return Color.RED;
    }


}
