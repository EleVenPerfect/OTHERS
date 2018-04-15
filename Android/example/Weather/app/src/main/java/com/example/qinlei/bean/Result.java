package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/12.
 */
public class Result implements Serializable {
    private Data data;

    public Result(Data data) {
        this.data = data;
    }

    public Data getData() {
        return data;
    }

    public void setData(Data data) {
        this.data = data;
    }

    public Result() {

    }
}
