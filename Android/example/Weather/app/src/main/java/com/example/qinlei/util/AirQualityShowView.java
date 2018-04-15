package com.example.qinlei.util;

import android.content.Context;
import android.graphics.Color;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.example.qinlei.bean.PMTwoPotFive;
import com.example.qinlei.weather.MainActivity;
import com.example.qinlei.weather.R;

/**
 * Created by qinlei on 2016/4/26.
 */
public class AirQualityShowView {
    private PMTwoPotFive mData;
    private Context context;
    //pm2.5的view
    private TextView mTvAirQuality;
    private TextView mTvAirDes;
    private TextView mTvAirSum;
    private TextView mTvAir25;
    private TextView mTvAir10;
    private ProgressBar mProAir25;
    private ProgressBar mProAir10;
    private TextView mTvAirTextDes;

    private int mColor;

    public AirQualityShowView(MainActivity context,PMTwoPotFive mData) {
        this.mData=mData;
        this.context=context;
        //air_quality的view
        mTvAirQuality= (TextView) context.findViewById(R.id.air_quality);
        mTvAirDes= (TextView) context.findViewById(R.id.air_dec);
        mTvAirSum= (TextView) context.findViewById(R.id.air_dec_sum);
        mTvAir10= (TextView) context.findViewById(R.id.air_tv_10);
        mTvAir25= (TextView) context.findViewById(R.id.air_tv_25);
        mTvAirTextDes= (TextView) context.findViewById(R.id.air_tv_text);
        mProAir10= (ProgressBar) context.findViewById(R.id.air_progressBar10);
        mProAir25= (ProgressBar) context.findViewById(R.id.air_progressBar25);

        if(mData.getPm25().getCurPm()!=""){
            mColor=ChooseAirQualityColor.getColor(mData.getPm25().getCurPm());
            setColorView();
            showView();
        }else{
            show();
        }
    }

    private void show() {
        mTvAirDes.setText("暂无");
        mTvAirSum.setText("");
        mTvAir10.setText("0");
        mTvAir25.setText("0");
        mProAir10.setProgress(0);
        mProAir25.setProgress(0);
        mTvAirTextDes.setText("");
    }

    private void setColorView() {
        mTvAirQuality.setTextColor(mColor);
        mTvAirSum.setTextColor(mColor);
        mTvAirDes.setTextColor(mColor);
    }

    private void showView() {
        mTvAirDes.setText(mData.getPm25().getQuality());
        mTvAirSum.setText(mData.getPm25().getCurPm());
        mTvAir10.setText(mData.getPm25().getPm10());
        mTvAir25.setText(mData.getPm25().getPm25());
        mProAir10.setProgress(Integer.parseInt(mData.getPm25().getPm10()));
        mProAir25.setProgress(Integer.parseInt(mData.getPm25().getPm25()));
        mTvAirTextDes.setText(mData.getPm25().getDes());
    }

}
