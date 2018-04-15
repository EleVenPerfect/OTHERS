package com.example.qinlei.adapter;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.qinlei.bean.Info;
import com.example.qinlei.weather.R;

import java.util.List;

/**
 * Created by qinlei on 2016/4/26.
 */
public class MAdapterForLifeListView extends BaseAdapter{
    private Info mData;
    private Context context;

    public MAdapterForLifeListView(Info mData,Context context) {
        this.mData = mData;
        this.context=context;
    }

    @Override
    public int getCount() {
        return 6;
    }

    @Override
    public Object getItem(int position) {
        return mData.getlist(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        MViewHolder mViewHolder;
        if(convertView==null){
            convertView=View.inflate(context, R.layout.item_life,null);
            mViewHolder=new MViewHolder();
            mViewHolder.lifeImageView= (ImageView) convertView.findViewById(R.id.life_img);
            mViewHolder.lifeSum= (TextView) convertView.findViewById(R.id.life_sum);
            mViewHolder.lifeText= (TextView) convertView.findViewById(R.id.life_text);
            convertView.setTag(mViewHolder);
        }else{
            mViewHolder= (MViewHolder) convertView.getTag();
        }
        mViewHolder.lifeImageView.setImageResource(mData.getlifeImg(position));
        mViewHolder.lifeText.setText(mData.getlist(position).get(1));
        mViewHolder.lifeSum.setText(mData.getlife(position)+":"+mData.getlist(position).get(0));
        return convertView;
    }

    class MViewHolder{
        ImageView lifeImageView;
        TextView lifeSum;
        TextView lifeText;
    }
}
