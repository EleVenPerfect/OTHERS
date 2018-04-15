package com.example.qinlei.bean;

import java.io.Serializable;

/**
 * Created by qinlei on 2016/4/12.
 */
public class Json implements Serializable {
    private int error_code;
    private String reason;
    private Result result;

    public Json() {
    }

    public int getError_code() {

        return error_code;
    }

    public void setError_code(int error_code) {
        this.error_code = error_code;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public Json(int error_code, String reason, Result result) {

        this.error_code = error_code;
        this.reason = reason;
        this.result = result;
    }
}
