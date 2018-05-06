#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2018/5/6 11:10
# @File     : sum_file.py
# @Version  : Python3.6.3
import os
import time


def getDirList(path):
    ''' 获取指定目录下的所有指定后缀的文件名 '''

    ret_list = []
    f_list = os.listdir(path)
    for i in f_list:
        if i.endswith('.TXT') :
            ret_list.append(i)
    return ret_list

def get_full_data(path_list,path):
    retdata = ""
    output_file_name = os.path.split(path)[1]
    for i in path_list:
        with open(i) as file:
            txt_data = file.read()
            timeArray = time.strptime(i[2:8], "%H%M%S")
            StyleTime = time.strftime("%H:%M:%S", timeArray)
            time_data = output_file_name + '/' + StyleTime
            retdata+=str(time_data + txt_data + "\r\n\r\n")
    return retdata

def main():
    path = os.path.abspath('.')
    path_list = getDirList(path)
    output_file_name = os.path.split(path)[1]
    full_data = get_full_data(path_list, path)
    with open(output_file_name+".TXT", 'w') as file:
        file.write(full_data)

if __name__ == "__main__":
    main()  