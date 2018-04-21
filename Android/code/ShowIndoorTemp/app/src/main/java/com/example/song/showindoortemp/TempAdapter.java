package com.example.song.showindoortemp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.List;

/**
 * Created by song on 2018/4/16.
 */

public class TempAdapter extends BaseAdapter {
    private Context context;
    private List<TempBean> data;

    public TempAdapter(Context context, List<TempBean> data) {
        this.context = context;
        this.data = data;
    }

    @Override
    public int getCount() {
        return data==null?0:data.size();
    }

    @Override
    public Object getItem(int position) {
        return data.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder;
        if (convertView == null) {
            convertView = LayoutInflater.from(context).inflate(R.layout.temp_item, parent, false);
            holder=new ViewHolder(convertView);
            convertView.setTag(holder);
        }else {
            holder= (ViewHolder) convertView.getTag();
        }
        holder.type.setText("类型:"+data.get(position).getId());
        holder.data.setText("数据:"+data.get(position).getTitle());
        return convertView;
    }
    public void addAll(List<? extends TempBean> list){
        data.clear();
        data.addAll(list);
        notifyDataSetChanged();
    }
    class ViewHolder{
        public TextView type , data;
        public ViewHolder(View v){
            type = v.findViewById(R.id.text_type);
            data = v.findViewById(R.id.text_data);
        }
    }
}
