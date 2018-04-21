package com.example.song.showindoortemp;

/**
 * Created by song on 2018/4/16.
 */

public class TempBean {

    /**
     * userId : 1
     * id : 室内温度
     * title : 34 ℃
     */

    private int userId;
    private String id;
    private String title;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "TempBean{" +
                "userId=" + userId +
                ", id='" + id + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
