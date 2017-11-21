#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2017/11/7 20:31
# @Author  : ATIME
# @File    : 12.async.py
import time
import threading


def greet(index):
    print("hello world", index)
    time.sleep(1)


def main():
    for x in range(5):
        th = threading.Thread(target=greet, args=[x])
        th.start()
        # greet(x)


if __name__ == '__main__':
    main()
