package com.example.qinlei.bean;

import com.example.qinlei.weather.R;

import java.io.Serializable;
import java.util.List;

/**
 * Created by qinlei on 2016/4/11.
 */
public class Info implements Serializable {
    private List<String> chuanyi;
    private List<String> ganmao;
    private List<String> kongtiao;
    private List<String> wuran;
    private List<String> xiche;
    private List<String> yundong;
    private List<String> ziwaixian;

    public List<String> getChuanyi() {
        return chuanyi;
    }

    public void setChuanyi(List<String> chuanyi) {
        this.chuanyi = chuanyi;
    }

    public List<String> getGanmao() {
        return ganmao;
    }

    public void setGanmao(List<String> ganmao) {
        this.ganmao = ganmao;
    }

    public List<String> getKongtiao() {
        return kongtiao;
    }

    public void setKongtiao(List<String> kongtiao) {
        this.kongtiao = kongtiao;
    }

    public List<String> getWuran() {
        return wuran;
    }

    public void setWuran(List<String> wuran) {
        this.wuran = wuran;
    }

    public List<String> getXiche() {
        return xiche;
    }

    public void setXiche(List<String> xiche) {
        this.xiche = xiche;
    }

    public List<String> getYundong() {
        return yundong;
    }

    public void setYundong(List<String> yundong) {
        this.yundong = yundong;
    }

    public List<String> getZiwaixian() {
        return ziwaixian;
    }

    public void setZiwaixian(List<String> ziwaixian) {
        this.ziwaixian = ziwaixian;
    }

    public Info(List<String> chuanyi, List<String> ganmao, List<String> kongtiao, List<String> wuran, List<String> xiche, List<String> yundong, List<String> ziwaixian) {
        this.chuanyi = chuanyi;
        this.ganmao = ganmao;
        this.kongtiao = kongtiao;
        this.wuran = wuran;
        this.xiche = xiche;
        this.yundong = yundong;
        this.ziwaixian = ziwaixian;
    }

    public Info() {
    }

    @Override
    public String toString() {
        return "Info{" +
                "chuanyi=" + chuanyi +
                ", ganmao=" + ganmao +
                ", kongtiao=" + kongtiao +
                ", wuran=" + wuran +
                ", xiche=" + xiche +
                ", yundong=" + yundong +
                ", ziwaixian=" + ziwaixian +
                '}';
    }


    public List<String> getlist(int i){

        switch (i){
            case 0:
                return chuanyi;
            case 1:
                return ganmao;
            case 2:
                return kongtiao;
            case 3:
                return xiche;
            case 4:
                return yundong;
            case 5:
                return ziwaixian;
        }
        return null;
    }
    public int getlifeImg(int i){

        switch (i){
            case 0:
                return R.mipmap.dress;
            case 1:
                return R.mipmap.hospital;
            case 2:
                return R.mipmap.temperature;
            case 3:
                return R.mipmap.car;
            case 4:
                return R.mipmap.run;
            case 5:
                return R.mipmap.umbrella;
        }
        return -1;
    }

    public String getlife(int i){

        switch (i){
            case 0:
                return "穿衣指数";
            case 1:
                return "感冒指数";
            case 2:
                return "空调指数";
            case 3:
                return "洗车指数";
            case 4:
                return "运动指数";
            case 5:
                return "紫外线指数";
        }
        return "";
    }
}

