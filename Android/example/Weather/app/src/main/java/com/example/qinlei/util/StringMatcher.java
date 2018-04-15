package com.example.qinlei.util;

import android.util.Log;
import android.widget.Toast;

/**
 * Created by ql on 2016/6/1.
 */
public class StringMatcher {

    //value: item文本
    //keyword：索引列表的字母
    public static boolean match(String value,String keyword){
        // value和keyword参数的值不能为空
        value=value.toUpperCase();
        Log.d("tag", value+"match: "+keyword);
        if(value==null||keyword==null){
            return false;
        }
        if(keyword.length()>value.length()){
            return false;
        }
        int i=0/*value的指针*/,j=0;/*keyword的指针*/
        do{
            if(keyword.charAt(j)==value.charAt(i)){
                j++;
                i++;
            }else{
                i++;
            }
        }while (i<value.length()&&j<keyword.length());
        return (j==keyword.length())?true:false;
    }
}
