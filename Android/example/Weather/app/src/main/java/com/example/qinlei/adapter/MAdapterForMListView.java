package com.example.qinlei.adapter;

import android.content.Context;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.qinlei.bean.Weather;
import com.example.qinlei.util.ChooseImageWeather;
import com.example.qinlei.weather.R;

import java.util.List;

/**
 * Created by qinlei on 2016/4/25.
 */
public class MAdapterForMListView extends BaseAdapter{
    private List<Weather> mData;
    private Context context;

    public MAdapterForMListView(List<Weather> data,Context context) {
        mData=data;
        this.context=context;
    }

    @Override
    public int getCount() {
        return mData.size();
    }

    @Override
    public Object getItem(int position) {
        return mData.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder mViewHolder;
        if(convertView==null){
            convertView=View.inflate(context, R.layout.item_future,null);
            mViewHolder=new ViewHolder();
            mViewHolder.imgWeather= (ImageView) convertView.findViewById(R.id.item_img);
            mViewHolder.tvdes= (TextView) convertView.findViewById(R.id.item_dec);
            mViewHolder.tvDate= (TextView) convertView.findViewById(R.id.item_data);
            mViewHolder.tvTem= (TextView) convertView.findViewById(R.id.item_tem);
            convertView.setTag(mViewHolder);
        }else {
            mViewHolder= (ViewHolder) convertView.getTag();
        }
        mViewHolder.imgWeather.setImageResource(ChooseImageWeather.getImageWeather(mData.get(position).getInfo().getDay().get(0)));
        mViewHolder.tvTem.setText(mData.get(position).getInfo().getNight().get(2)+"°-"+mData.get(position).getInfo().getDay().get(2)+"°");
        switch (position){
            case 0:
                mViewHolder.tvDate.setText("今天");
                break;
            case 1:
                mViewHolder.tvDate.setText("明天");
                break;
            default:
                mViewHolder.tvDate.setText("星期"+mData.get(position).getWeek());
                break;
        }

        mViewHolder.tvdes.setText(mData.get(position).getInfo().getDay().get(1)+"  "+"最高温度"+mData.get(position).getInfo().getDay().get(2)+"°   "+mData.get(position).getInfo().getDay().get(4));

        return convertView;
    }

    class ViewHolder {
        ImageView imgWeather;
        TextView tvDate;
        TextView tvTem;
        TextView tvdes;
    }
}
