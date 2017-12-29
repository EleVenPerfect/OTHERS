#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/24 16:29
# @File     : sim800al.py
# @Version  : Python2.7.14
import re
import time
import codecs
import serial
import ul_gsm as gsm



class Sim800al(object):

    def __init__(self):
        self.FILE_NAME = time.strftime("%Y-%m-%d", time.localtime(time.time()))
        self.FILE_NAME_SMS = self.FILE_NAME + str(".bak")
        print(self.FILE_NAME_SMS)
        self.ser = serial.Serial()
        self.ser.baudrate = 115200
        self.serial_num = input("请输入串口号：")
        self.ser.port = 'COM'+ str(self.serial_num)
        print(self.ser.port)
        try:
            self.ser.open()
            print("串口开启成功")
        except:
            print("串口开启失败")
            exit()
        self.check_model()
        self.wait_creg()
        self.set_text_mode()
        self.set_pdu_mode()


    def __del__(self):
        self.ser.close()
        print("串口关闭")


    def send_order(self, order, timedelay):
        data = order.encode('utf-8')
        self.ser.write(b'AT')
        self.ser.write(data)
        self.ser.write(b'\r\n')
        return self.get(timedelay)


    def get(self, timedelay):
        while True:
            time.sleep(timedelay)
            if self.ser.isOpen() and self.ser.inWaiting():
                num = self.ser.inWaiting()
                # print(num)
                text = self.ser.read(num)
                # print(self.ser.inWaiting())
                try:
                    decode_data = text.decode('utf-8')
                except:
                    decode_data = u"OK收到新短信"
                finally:
                    return decode_data

    def wait_creg(self):
        while True:
            response = self.send_order('+CREG?',1)
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

    def check_model(self):
        response = self.send_order(' ', 0.1)
        pattern = re.compile('OK', re.S)
        feature = re.findall(pattern, response)
        try:
            if feature[0] == 'OK':
                print("模块连接成功" + time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())))
        except:
            print("模块连接失败" + time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())))
            exit()


    def set_text_mode(self):
        pattern = re.compile('OK', re.S)
        response = self.send_order("E0", 0.1)
        feature = re.findall(pattern, response)
        try:
            if feature[0] == 'OK':
                print("关闭回显成功")
        except:
            print("关闭回显失败")
            exit()
        response = self.send_order("+CMGF=0", 0.1)
        feature = re.findall(pattern, response)
        try:
            if feature[0] == 'OK':
                print("设置短信PDU模式成功")
        except:
            print("设置短信PDU模式失败")
            exit()

    def set_pdu_mode(self):
        response = self.send_order('+CMGF=0', 0.1)
        return response

    def list_all_sms(self):
        self.check_model()
        self.set_pdu_mode()
        response = self.send_order("+CMGL=4", 1)
        # print(response)
        pattern = re.compile('[0-9a-fA-F]+', re.S)
        feature = re.findall(pattern, response)
        # print(feature)
        print(response)
        smsdata = [] #需要考虑删除前面短信，后面列表不连续情况
        for i in range(0, int(len(feature)/5)):
            smsdata.append(feature[i*5+4])
            if i == 0:
                self.save_to_file_bak(response)
        for i in range(0, int(len(feature)/5)):
            self.delete_sms(feature[i*5+1])
            print("删除短信"+str(i+1))
        return smsdata


    def delete_all_sms(self):
        response = self.send_order("+CMGD=1,4", 2)
        return response

    def delete_sms(self, num):
        self.check_model()
        self.set_pdu_mode()
        response = self.send_order("+CMGD="+str(num)+",0", 2)
        return response


    def check_new_message(self, timedelay):
        time.sleep(timedelay)
        if self.ser.isOpen() and self.ser.inWaiting():
            num = self.ser.inWaiting()
            # print(num)
            text = self.ser.read(num)
            # print(self.ser.inWaiting())
            return text.decode('utf-8')
        else:
            return None

    def run(self, timedelay):
        while True:
            message = self.check_new_message(timedelay)
            if message:
                print(message)
            else:
                pass

    def read(self, num, timedelay):
        response = self.send_order('+CMGR='+str(num), timedelay)
        # print(response)
        pattern = re.compile('[0-9a-fA-F]+', re.S)
        feature = re.findall(pattern, response)
        # print(feature)
        return feature[3]


    def pdudecode(self, pdudata):
        sms = gsm.Sms().decode_in(pdudata)
        print(sms.smsc, sms.smscType, sms.firstOctet, sms.senderLen, sms.senderType, sms.sender, sms.tpPID, sms.tpDCS)
        print(sms.year, sms.month, sms.date, sms.hour, sms.minute, sms.second, sms.tz)
        print(sms.textLen, sms.textBytes, sms.text)

    def save_to_file(self, song_name):
        global FILE_NAME
        with codecs.open(self.FILE_NAME, 'a', 'utf-8') as fp:  # 写入Unicode字符
            # fp.write('\n')
            fp.write(song_name)

    def save_to_file_bak(self, song_name):
        global FILE_NAME
        with codecs.open(self.FILE_NAME_SMS, 'a', 'utf-8') as fp:  # 写入Unicode字符
            # fp.write('\n')
            fp.write(song_name)


