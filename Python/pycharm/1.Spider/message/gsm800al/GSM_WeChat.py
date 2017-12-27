#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/24 16:16
# @File     : GSM_WeChat.py
# @Version  : Python2.7.14
# @Version  : Python2.7.14
import itchat
import threading
import ul_gsm as gsm
from sim800al import Sim800al


def WechatSend():
    @itchat.msg_register(itchat.content.TEXT)
    def print_content(msg):
        # print(msg['Text'])
        # print(msg['FromUserName'])
        itchat.send(msg['Text'] + msg['FromUserName'], 'filehelper')
        # itchat.send(msg['Text'], msg['FromUserName'])
        # itchat.send('hhhhh', 'filehelper')

    itchat.auto_login(hotReload=True)
    itchat.run()



def Sim800_run():
    sim = Sim800al()
    while True:

        sms_list = sim.list_all_sms()
        sms_listlen = len(sms_list)
        if sms_listlen != 0:
            print("收到" + str(sms_listlen) + "条新信息：")
            itchat.send("总共接收到" + str(sms_listlen) + "条信息：", 'filehelper')
            for i in sms_list:
                sms = gsm.Sms().decode_in(i)
                sms_reform1 = str(sms.year)+'年'+str(sms.month)+'月'+str(sms.date)+'日'+str(sms.hour)+':'+str(sms.minute)+':'+str(sms.minute)
                sms_reform2 = str(sms.sender)
                sms_reform3 = str(sms.text)
                sms_reform4 = str(i)
                sms_reform = sms_reform1 + "\n" + sms_reform2 + "\n" + sms_reform3+ "\n" + sms_reform4 + "\r\n"
                # print(type(sms_reform))
                # print(str(sms_reform))
                sim.save_to_file(sms_reform)
                itchat.send(sms_reform, 'filehelper')


def main():
    p1 = threading.Thread(target=WechatSend, args=())
    p1.start()
    p2 = threading.Thread(target=Sim800_run, args=())
    p2.start()

    # sim = Sim800al()
    # sms_list = sim.list_all_sms()
    # print(sms_list)
    # sms = gsm.Sms().decode_in(sms_list[0])
    # sms_reform1 = str(sms.year) + '年' + str(sms.month) + '月' + str(sms.date) + '日' + str(sms.hour) + ':' + str(
    # sms.minute) + ':' + str(sms.minute)
    # sms_reform2 = str(sms.sender)
    # sms_reform3 = str(sms.text)
    # sms_reform = sms_reform1 + "\n" + sms_reform2 + "\n" + sms_reform3 + "\r\n"
    # print(sms_reform)
    # sim.save_to_file(sms_reform)


if __name__ == "__main__":
    main()
