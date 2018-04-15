package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/11.
 */
public class Realtime implements Serializable {
    private String city_code;
    private String city_name;
    private long dataUptime;
    private String date;
    private String moon;
    private String time;
    private Realtime_Weather weather;
    private int week;
    private Wind wind;

    public Realtime(String city_code, String city_name, long dataUptime, String date, String moon, String time, Realtime_Weather weather, int week, Wind wind) {
        this.city_code = city_code;
        this.city_name = city_name;
        this.dataUptime = dataUptime;
        this.date = date;
        this.moon = moon;
        this.time = time;
        this.weather = weather;
        this.week = week;
        this.wind = wind;
    }

    public Realtime() {
    }

    public String getCity_code() {
        return city_code;
    }

    public void setCity_code(String city_code) {
        this.city_code = city_code;
    }

    public String getCity_name() {
        return city_name;
    }

    public void setCity_name(String city_name) {
        this.city_name = city_name;
    }

    public long getDataUptime() {
        return dataUptime;
    }

    public void setDataUptime(long dataUptime) {
        this.dataUptime = dataUptime;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getMoon() {
        return moon;
    }

    public void setMoon(String moon) {
        this.moon = moon;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Realtime_Weather getWeather() {
        return weather;
    }

    public void setWeather(Realtime_Weather weather) {
        this.weather = weather;
    }

    public int getWeek() {
        return week;
    }

    public void setWeek(int week) {
        this.week = week;
    }

    public Wind getWind() {
        return wind;
    }

    public void setWind(Wind wind) {
        this.wind = wind;
    }

    @Override
    public String toString() {
        return "Realtime{" +
                "city_code='" + city_code + '\'' +
                ", city_name='" + city_name + '\'' +
                ", dataUptime=" + dataUptime +
                ", date='" + date + '\'' +
                ", moon='" + moon + '\'' +
                ", time='" + time + '\'' +
                ", weather=" + weather +
                ", week=" + week +
                ", wind=" + wind +
                '}';
    }
}
