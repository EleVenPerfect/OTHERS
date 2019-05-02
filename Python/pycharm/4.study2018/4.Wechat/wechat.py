#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/18 21:29
# @File     : wechat.py
# @Version  : Python2.7.14
import itchat
import random

user_name = "@f364c4c592a39b629a185b5a8978a11ab803c45a3e693ca6a2ba80693f8bf983"
my_name = '@06797e610569750242af02b719e015cdf33a7b7c28c51025b79b19986af1dff7'

work_states = 'off'
start_tag = "晚安"
stop_tag = "早上好"

def main():

    @itchat.msg_register(itchat.content.TEXT)
    def print_content(msg):
        global work_states
        get_text = msg['Text']
        get_user = msg['FromUserName']
        if(get_user == user_name):
            if(work_states == 'on'):
                itchat.send('喵'*(int)(random.random()*9+1), user_name)
        if(get_user==my_name):
            if(get_text==start_tag):
                work_states = 'on'
                itchat.send('开启自动回复~', 'filehelper')
            if (get_text == stop_tag):
                work_states = 'off'
                itchat.send('关闭自动回复', 'filehelper')


    itchat.auto_login(hotReload=True)
    itchat.run()


if __name__ == "__main__":
    main()
