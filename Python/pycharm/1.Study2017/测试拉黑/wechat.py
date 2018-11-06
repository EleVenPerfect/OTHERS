#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/18 21:29
# @File     : wechat.py
# @Version  : Python2.7.14
import itchat
import time
import os, sys
from threading import Thread,currentThread,activeCount

friend1 = '@237cd129b2aab275a62645f08b7bcaf456c531286d86aed8ccc0ce503db35c96'
friend2 = '@8e267c3844a5203ca828bb0546a011e43bd84a01336638420b6a80f15c54a1ce'# 我
friend3 = '@a32e38145f4feea2bdfbb91af50b481237d6ebe075a60212987f0a2c244599f6'# 我187
test_message = 'lhl?'

def main():
    @itchat.msg_register(itchat.content.TEXT)
    def print_content(msg):
        if(msg['FromUserName'] == friend1 ):
            itchat.send(test_message, friend1)
            itchat.send(test_message, friend2)
            itchat.send("已取消拉黑", 'filehelper')
            os._exit(1)



    itchat.auto_login(hotReload=True)
    Thread(target=itchat.run).start()

    while 1:
        print("测试中")
        itchat.send(test_message, friend1)
        time.sleep(10)




if __name__ == "__main__":
    main()