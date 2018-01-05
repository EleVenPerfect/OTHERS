#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2018/1/5 20:41
# @File     : 1.ajjl.py
# @Version  : Python2.7.14
import time
import codecs
import requests
from bs4 import BeautifulSoup
from requests.exceptions import RequestException

FILE_NAME = "anjian"
start_url = "http://zy.anjian.com/index.php?action-viewnews-itemid-161"
stop_url = "http://zy.anjian.com/index.php?action-category-catid-305"

def craw(url):
    try:
        response = requests.post(url)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException:
        return None

def get_next_page(response_text):
    soup = BeautifulSoup(response_text, features="html.parser")
    click_button = soup.find("img", src="http://zy.anjian.com/templates/2011/images/zsk_forward.gif")
    button_url = click_button.parent
    a_url = button_url.get('href')
    next_url = "http://zy.anjian.com/index.php" + a_url
    # print(next_url)
    return next_url



def get_content(response_text):
    soup = BeautifulSoup(response_text, features="html.parser")
    content_data = soup.find("div", style="font-size:14px; line-height:24px;Word-break: break-all; word-wrap:break-word;color:#666; padding:8px;")
    # print(content_data)
    return content_data.prettify(formatter="html")

def construct_html():
    file_name = FILE_NAME + '.html'
    with codecs.open(file_name, 'w', 'utf-8') as fp:  # 写入Unicode字符
        fp.write("<html><head><title>按键精灵书册</title></head><body>"+"\n")


def save_2_html(content):
    file_name = FILE_NAME + '.html'
    with codecs.open(file_name, 'a', 'utf-8') as fp:  # 写入Unicode字符
        fp.write(content)


def deconstruct_html():
    file_name = FILE_NAME + '.html'
    with codecs.open(file_name, 'a', 'utf-8') as fp:  # 写入Unicode字符
        fp.write("\n"+"</body></html>")


def main():
    i = 1
    next_url = start_url
    construct_html()
    while True:
        i = i + 1
        print("当前爬取页面：" + next_url)
        response_text = craw(next_url)
        next_url = get_next_page(response_text)
        html_cont = get_content(response_text)
        save_2_html(html_cont)
        # time.sleep(1)
        if next_url == "http://zy.anjian.com/index.php?action-category-catid-106":
            next_url = "http://zy.anjian.com/index.php?action-viewnews-itemid-231"
            print("当前爬取页面：" + next_url)
            response_text = craw(next_url)
            html_cont = get_content(response_text)
            save_2_html(html_cont)
            next_url = "http://zy.anjian.com/index.php?action-viewnews-itemid-232"

        if next_url == "http://zy.anjian.com/index.php?action-category-catid-193":
            next_url = "http://zy.anjian.com/index.php?action-category-catid-200"

        if next_url == "http://zy.anjian.com/index.php?action-category-catid-218":
            next_url = "http://zy.anjian.com/index.php?action-category-catid-184"


        if next_url == stop_url:
            break
    deconstruct_html()

if __name__ == "__main__":
    main()  