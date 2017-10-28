#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2017/10/28 14:07
# @Author  : ATIME
# @File    : 1.尾数前移.py
# @Func    : 求一个自然数n，个位数是6，将6提到前面所得到得数是这个数的4倍

def func(n):
    nn = n
    t = 6
    m = 10 * n + t

    while nn > 0:
        t *= 10
        nn //= 10

    if t + n == m * 4:
        print(m)


def main():
    for x in range(1,100000):
        func(x)


if __name__ == '__main__':
    main()
