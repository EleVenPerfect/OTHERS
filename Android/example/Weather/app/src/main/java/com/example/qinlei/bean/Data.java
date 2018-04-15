package com.example.qinlei.bean;

import java.io.Serializable;
import java.util.List;

/**
 * Created by qinlei on 2016/4/11.
 */
public class Data implements Serializable{
    private int isForeign;
    private Life life;
    private PMTwoPotFive pm25;
    private Realtime realtime;
    private List<Weather> weather;

    public Data(int isForeign, Life life, PMTwoPotFive pm25, Realtime realtime, List<Weather> weather) {
        this.isForeign = isForeign;
        this.life = life;
        this.pm25 = pm25;
        this.realtime = realtime;
        this.weather = weather;
    }

    public Data() {
    }

    @Override
    public String toString() {
        return "Data{" +
                "isForeign=" + isForeign +
                ", life=" + life +
                ", pm25=" + pm25 +
                ", realtime=" + realtime +
                ", weather=" + weather +
                '}';
    }

    public int getIsForeign() {
        return isForeign;
    }

    public void setIsForeign(int isForeign) {
        this.isForeign = isForeign;
    }

    public Life getLife() {
        return life;
    }

    public void setLife(Life life) {
        this.life = life;
    }

    public PMTwoPotFive getPm25() {
        return pm25;
    }

    public void setPm25(PMTwoPotFive pm25) {
        this.pm25 = pm25;
    }

    public Realtime getRealtime() {
        return realtime;
    }

    public void setRealtime(Realtime realtime) {
        this.realtime = realtime;
    }

    public List<Weather> getWeather() {
        return weather;
    }

    public void setWeather(List<Weather> weather) {
        this.weather = weather;
    }
}
