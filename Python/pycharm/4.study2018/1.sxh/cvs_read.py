#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2018/4/21 18:46
# @File     : cvs_read.py
# @Version  : Python3.6.3
import csv

FILE_NAME = 'euploid20.csv'     #设置读取文件名称
# FILE_NAME = 'test.csv'        #测试设置读取文件名称
MIN_NUM = 35                    #设置范围值
MAX_NUM = 60                    #设置范围值

def read_csv():
    # 读取打印
    # with open(FILE_NAME, encoding="utf-8") as fr:
    #     csvfr = csv.reader(fr)
    #     for row in csvfr:
    #         print(", ".join(row))

    # 读取后，返回列表
    with open(FILE_NAME, encoding="utf-8") as fr:
        csvfr = csv.reader(fr)
        rows = [row for row in csvfr]
    print("读取文件成功！")
    print(str(len(rows)) + "行")
    print(str(len(rows[0])) + "列")
    return rows

def sum_column(datas, column_num):
    sum = 0
    for i in range(1, len(datas)):
        # print(datas[i][column_num])
        sum = sum + int(datas[i][column_num])
    return sum

def count_fit_num(datas, column_num):
    sum = 0
    for i in range(1, len(datas)):
        if( int(datas[i][1]) >= MIN_NUM and int(datas[i][1]) <= MAX_NUM ):
            # print(datas[i][column_num])
            sum = sum + int(datas[i][column_num])
    return sum


def main():
    csv_list = read_csv()                           #原始表格对应数组
    for i in range(2, len(csv_list[1])):
        sum1 = sum_column(csv_list, i)               #计算第i列数据之和
        sum2 = count_fit_num(csv_list, i)            #计算第i列合范围数据之和
        print("第" + str(i) + "列和为：" + str(sum1))
        print("第" + str(i) + "列范围和为：" + str(sum2))
        print("第" + str(i) + "列概率为：" + str(sum2/sum1))


if __name__ == "__main__":
    main()  