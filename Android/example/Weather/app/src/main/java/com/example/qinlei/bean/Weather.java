package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/11.
 */
public class Weather implements Serializable {
    private String date;
    private Weather_info info;
    private String nongli;
    private String week;

    public Weather() {
    }

    public Weather(String date, Weather_info info, String nongli, String week) {
        this.date = date;
        this.info = info;
        this.nongli = nongli;
        this.week = week;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Weather_info getInfo() {
        return info;
    }

    public void setInfo(Weather_info info) {
        this.info = info;
    }

    public String getNongli() {
        return nongli;
    }

    public void setNongli(String nongli) {
        this.nongli = nongli;
    }

    public String getWeek() {
        return week;
    }

    public void setWeek(String week) {
        this.week = week;
    }

    @Override
    public String toString() {
        return "Weather{" +
                "date='" + date + '\'' +
                ", info=" + info +
                ", nongli='" + nongli + '\'' +
                ", week='" + week + '\'' +
                '}';
    }
}
