#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/27 13:49
# @File     : running.py
# @Version  : Python2.7.14
import time
from sim800al import Sim800al


def main():
    sim = Sim800al()
    time.sleep(2)
    print(sim.send_order("E0", 0.1))
    print(sim.send_order('+CMGF=0', 0.5))
    print(sim.send_order('+CMGL=4', 0.5))
    print("ok")


if __name__ == "__main__":
    main()  