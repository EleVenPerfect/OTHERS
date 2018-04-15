package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/11.
 */
public class Realtime_Weather implements Serializable {
    private String humidity;
    private String img;
    private String info;
    private String temperature;

    public Realtime_Weather(String humidity, String img, String info, String temperature) {
        this.humidity = humidity;
        this.img = img;
        this.info = info;
        this.temperature = temperature;
    }

    public Realtime_Weather() {

    }

    public String getHumidity() {
        return humidity;
    }

    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    @Override
    public String toString() {
        return "Realtime_Weather{" +
                "humidity='" + humidity + '\'' +
                ", img='" + img + '\'' +
                ", info='" + info + '\'' +
                ", temperature='" + temperature + '\'' +
                '}';
    }
}
