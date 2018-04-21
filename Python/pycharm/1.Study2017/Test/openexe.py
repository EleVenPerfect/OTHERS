#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/31 19:34
# @File     : openexe.py
# @Version  : Python2.7.14
# import os
import win32api


def main():
    # os.system(u"C:\\Windows\\System32\\notepad.exe")
    res = win32api.ShellExecute(0, 'open', 'C:\\Windows\\System32\\notepad.exe', '', '', 3)


if __name__ == "__main__":
    main()  