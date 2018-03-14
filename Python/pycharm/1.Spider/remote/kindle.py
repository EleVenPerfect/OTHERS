#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2018/2/17 21:01
# @File     : kindle.py
# @Version  : Python2.7.14
import hashlib


def main():
    print("fiona%s" % hashlib.md5("G090KB0370820JNL\n".encode('utf-8')).hexdigest()[13:16])


if __name__ == "__main__":
    main()