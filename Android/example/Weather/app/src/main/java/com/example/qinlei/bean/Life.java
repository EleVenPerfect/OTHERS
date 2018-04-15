package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/11.
 */
public class Life implements Serializable {
    private String date;
    private Info info;

    @Override
    public String toString() {
        return "Life{" +
                "life_data='" + date + '\'' +
                ", info=" + info +
                '}';
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Info getInfo() {
        return info;
    }

    public void setInfo(Info info) {
        this.info = info;
    }
}
