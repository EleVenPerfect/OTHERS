package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/11.
 */
public class Wind implements Serializable {
    private String direct;
    private String power;
    private String windspeed;

    public Wind() {
    }

    public Wind(String direct, String power, String windspeed) {
        this.direct = direct;
        this.power = power;
        this.windspeed = windspeed;
    }

    public String getDirect() {
        return direct;
    }

    public void setDirect(String direct) {
        this.direct = direct;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getWindspeed() {
        return windspeed;
    }

    public void setWindspeed(String windspeed) {
        this.windspeed = windspeed;
    }

    @Override
    public String toString() {
        return "Wind{" +
                "direct='" + direct + '\'' +
                ", power='" + power + '\'' +
                ", windspeed='" + windspeed + '\'' +
                '}';
    }
}
