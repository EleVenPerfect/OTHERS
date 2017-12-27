#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/27 13:43
# @File     : sim800al.py
# @Version  : Python3.6.3
import re
import time
import codecs
import serial
import threading


class Sim800al(object):

    def __init__(self, com_num='4', baudrate=115200):
        self.datetime = time.strftime("%Y-%m-%d", time.localtime(time.time()))
        self.com_data = ''
        self.ser = serial.Serial()
        self.ser.baudrate = baudrate
        self.serial_num = com_num
        self.ser.port = 'COM'+ str(self.serial_num)
        try:
            self.ser.open()
            print("串口"+self.ser.port+"开启成功")
            p1 = threading.Thread(target=self.com_serve, args=())
            p1.start()
        except:
            print("串口"+self.ser.port+"开启失败")
            exit()

        self.check_model()
        self.wait_creg()
        self.set_mode()


    def __del__(self):
        self.ser.close()
        print("串口"+self.ser.port+"关闭")

    def com_serve(self):
        while True:
            num = self.ser.inWaiting()
            text = self.ser.read(num)
            self.com_data += text.decode('utf-8')

    def send_order(self, order, timedelay):
        data = order.encode('utf-8')
        self.ser.write(b'AT')
        self.ser.write(data)
        self.ser.write(b'\r\n')
        time.sleep(timedelay)
        return self.get()

    def get(self):
        data = self.com_data
        state = "WRONG"
        print(data)
        pattern = re.compile('\r\n[0-9a-fA-F]+\r\n', re.S)
        feature = re.findall(pattern, data)
        if len(feature)!=0:
            state = "OK"
        feature = str(feature)
        return feature, state

    def check_model(self):
        response, state = self.send_order(' ', 0.1)
        print(response)
        pattern = re.compile('OK', re.S)
        feature = re.findall(pattern, response)
        if feature[0] == 'OK':
            print("模块连接成功" + time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())))
        else:
            print("模块连接失败" + time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())))
            exit()

    def wait_creg(self):
        while True:
            response, state = self.send_order('+CREG?',1)
            # print(response)
            pattern = re.compile('1,1', re.S)
            feature = re.findall(pattern, response)
            # print(feature)
            try:
                if feature[0] == '1,1':
                    print("网络注册成功")
                    return "注册成功"
            except:
                print("网络注册中。。。")

    def set_mode(self):
        self.send_order('+CMGF=0', 0.5)
        self.send_order('+CMGF=0', 0.5)

    def run(self):
        pass