#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : Apache Licence
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/11/21 10:33
# @File     : wyyyy.py  
# @Version  : Python2.7.14

import re
import json
import base64
import codecs
import requests
from Crypto.Cipher import AES
from requests.exceptions import RequestException


FILE_NAME = 'wyyyy.md'
URL163 = ['http://music.163.com/#/song?id=186001',
          'http://music.163.com/#/song?id=437250607',
          'http://music.163.com/#/song?id=4172700',
          'http://music.163.com/#/song?id=30953009'
          ]

class Netease(object):

    def __init__(self):
        # self.first_param = "{rid:\"\", offset:\"0\", total:\"true\", limit:\"20\", csrf_token:\"\"}"
        # self.second_param = "010001"
        # self.third_param = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
        # self.forth_param = "0CoJUm6Qyw8W8jud"
        self.csrf_token = '1c51dc5cedf74268eaedb744f431f27b'
        self.header = {
            "Referer": 'http://music.163.com/',
            'Cookie': 'appver=1.5.0.75771;',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
        }

    def get_id(self, url):
        pattern = re.compile('\d+\d', re.S)
        song_id = re.findall(pattern, url)
        return song_id[1]  # str类型

    def get_html(self, url):
        request_url = 'http://music.163.com/song?id=' + self.get_id(url)
        headers = self.header
        try:
            response = requests.get(request_url, headers=headers)
            if response.status_code == 200:
                return response.text
            return None
        except RequestException:
            return None

    def get_title(self, url):
        title_html = self.get_html(url)
        pattern = re.compile('(?<=title\>).*(?=</title)', re.S)
        title = re.findall(pattern, title_html)
        title[0].encode('utf-8')
        return title[0]  # str类型

    def AES_encrypt(self, text, key, iv):
        pad = 16 - len(text) % 16
        text = text + chr(pad) * pad
        encryptor = AES.new(key, AES.MODE_CBC, iv)
        encrypt_text = encryptor.encrypt(text)
        encrypt_text = base64.b64encode(encrypt_text)
        return encrypt_text

    def get_params(self):
        iv = "0102030405060708"
        first_param = "{rid:\"\", offset:\"0\", total:\"true\", limit:\"20\", csrf_token:\"\"}"
        # second_param = "010001"
        # third_param = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
        forth_param = "0CoJUm6Qyw8W8jud"
        first_key = forth_param
        second_key = 16 * 'F'
        h_encText = self.AES_encrypt(first_param, first_key, iv)
        h_encText = self.AES_encrypt(h_encText, second_key, iv)
        return h_encText

    def get_encSecKey(self):
        encSecKey = "257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c"
        return encSecKey

    def get_json(self, song_id, csrf_token, params, encSecKey):
        base_url = 'http://music.163.com/weapi/v1/resource/comments/R_SO_4_'
        request_url = base_url + song_id + '?csrf_token=' + csrf_token
        headers = self.header
        post_data = {
            "params": params,
            "encSecKey": encSecKey
        }
        try:
            response = requests.post(request_url, headers=headers, data=post_data)
            if response.status_code == 200:
                return response.json()  # .content#.decode('utf-8')
            return None
        except RequestException:
            return None

    def save_as_json(self, song_name, json_result):
        # print(json_result)
        line = json.dumps(json_result, ensure_ascii=False)
        # print(line)
        # print(type(line))
        file_name = song_name + '.json'
        with codecs.open(file_name, 'w', 'utf-8') as fp:  # 写入Unicode字符
            fp.write(line)

    def set_title(self):
        global FILE_NAME
        with codecs.open(FILE_NAME, 'a', 'utf-8') as fp:  # 写入Unicode字符
            fp.write(u'## 网易云音乐热门评论')

    def save_title(self, song_name):
        global FILE_NAME
        with codecs.open(FILE_NAME, 'a', 'utf-8') as fp:  # 写入Unicode字符
            fp.write('\n### ')
            fp.write(song_name)

    def save_comment(self, json_data):
        global FILE_NAME
        hot_comment = json_data['hotComments']
        print(len(hot_comment))
        for i in range(len(hot_comment)):
            with codecs.open(FILE_NAME, 'a', 'utf-8') as fp:  # 写入Unicode字符
                fp.write('\n@( ')
                fp.write(hot_comment[i]['user']['nickname'])
                fp.write(' )')
            with codecs.open(FILE_NAME, 'a', 'utf-8') as fp:  # 写入Unicode字符
                fp.write('\n> ')
                fp.write(hot_comment[i]['content'])
                fp.write('\n')
                # print(hot_comment[i]['user']['nickname'])
                # print(hot_comment[i]['content'])

    def claw(self, url_list):
        self.set_title()
        for url in url_list:
            song_id = self.get_id(url)
            song_name = self.get_title(url)
            self.save_title(song_name)
            print(song_name)
            csrf_token = self.csrf_token
            params = self.get_params()
            encSecKey = self.get_encSecKey()
            json_data = self.get_json(song_id, csrf_token, params, encSecKey)
            self.save_comment(json_data)
            self.save_as_json(song_id, json_data)


def main():
    netease = Netease()
    netease.claw(URL163)


if __name__ == "__main__":
    main()  