#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2018/6/28 17:11
# @File     : main.py
# @Version  : Python 3.4.2
# @Note     : PyCharm
from flask import Flask
from config import DevConfig

app = Flask(__name__)
app.config.from_object(DevConfig)

@app.route('/')
def home():
    return '<h1>Hello Word!</h1>'

if __name__ == '__main__':
    app.run()