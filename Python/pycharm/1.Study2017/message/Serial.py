#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/19 19:41
# @File     : Serial.py
# @Version  : Python2.7.14
import serial

ser = serial.Serial()
ser.baudrate = 9600
ser.port = 'COM4'
ser.open()
ser.write(b"hello")
ser.write(b"hello")
x = ser.read(10)
print(x)
ser.close()