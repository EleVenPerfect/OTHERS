package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/11.
 */
public class PmTF implements Serializable {
    private String curPm;
    private String des;
    private int level;
    private String pm10;
    private String pm25;
    private String quality;

    public PmTF(String curPm, String des, int level, String pm10, String pm25, String quality) {
        this.curPm = curPm;
        this.des = des;
        this.level = level;
        this.pm10 = pm10;
        this.pm25 = pm25;
        this.quality = quality;
    }

    public PmTF() {
    }

    @Override
    public String toString() {
        return "PmTF{" +
                "curPm='" + curPm + '\'' +
                ", des='" + des + '\'' +
                ", level=" + level +
                ", pm10='" + pm10 + '\'' +
                ", pm25='" + pm25 + '\'' +
                ", quality='" + quality + '\'' +
                '}';
    }

    public String getCurPm() {
        return curPm;
    }

    public void setCurPm(String curPm) {
        this.curPm = curPm;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getPm10() {
        return pm10;
    }

    public void setPm10(String pm10) {
        this.pm10 = pm10;
    }

    public String getPm25() {
        return pm25;
    }

    public void setPm25(String pm25) {
        this.pm25 = pm25;
    }

    public String getQuality() {
        return quality;
    }

    public void setQuality(String quality) {
        this.quality = quality;
    }
}
