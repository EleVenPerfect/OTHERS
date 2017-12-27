#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/19 10:33
# @File     : push.py
# @Version  : Python2.7.14

from instapush import Instapush, App

# insta = Instapush(user_token='xxxxxxx')
#
# insta.list_app()             #List all apps
#
# insta.add_app(title='title') #Create a app named title

app = App(appid='5a387736a4c48a6e16fc3061', secret='a3aad896c2f71175cb64b6f515bd7624')

print(app.list_event())

app.add_event(event_name='signups', trackers=['email'], message='{email} hia hia hia')

app.notify(event_name='signups', trackers={'email': 'jinzhuceyong@qq.com'})