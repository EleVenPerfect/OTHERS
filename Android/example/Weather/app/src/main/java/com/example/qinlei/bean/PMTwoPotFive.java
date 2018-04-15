package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/11.
 */
public class PMTwoPotFive implements Serializable {
    private String cityName;
    private String dateTime;
    private String key;
    private PmTF pm25;
    private int show_desc;

    public PMTwoPotFive(String cityName, String dateTime, String key, PmTF pm25, int show_desc) {
        this.cityName = cityName;
        this.dateTime = dateTime;
        this.key = key;
        this.pm25 = pm25;
        this.show_desc = show_desc;
    }

    public PMTwoPotFive() {
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public PmTF getPm25() {
        return pm25;
    }

    public void setPm25(PmTF pm25) {
        this.pm25 = pm25;
    }

    public int getShow_desc() {
        return show_desc;
    }

    public void setShow_desc(int show_desc) {
        this.show_desc = show_desc;
    }

    @Override
    public String toString() {
        return "PMTwoPotFive{" +
                "cityName='" + cityName + '\'' +
                ", dateTime='" + dateTime + '\'' +
                ", key='" + key + '\'' +
                ", pm25=" + pm25 +
                ", show_desc=" + show_desc +
                '}';
    }
}
