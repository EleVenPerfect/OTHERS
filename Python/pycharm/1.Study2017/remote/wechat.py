#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/18 21:29
# @File     : wechat.py
# @Version  : Python2.7.14
import itchat


def main():
    @itchat.msg_register(itchat.content.TEXT)
    def print_content(msg):
        print(msg['Text'])
        print(msg['FromUserName'])
        itchat.send(msg['Text'], 'filehelper')
        #itchat.send(msg['Text'], msg['FromUserName'])

    itchat.auto_login(hotReload=True, enableCmdQR=1)
    itchat.run()


if __name__ == "__main__":
    main()
