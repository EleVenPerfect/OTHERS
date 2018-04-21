#encoding: utf-8

# urllib/requests/scrpy

# python3

# python2
# urllib

# pip3 install cx_Freeze

import urllib.request
# urllib.request
import urllib.parse
import time
import random
import hashlib
import json
from tkinter import Tk,Button,Entry,Label,Text,END


class YouDaoHelper(object):

    def __init__(self):
        pass

    def crawl(self,content):
        timestamp = int(time.time() * 1000) + random.randint(0, 10)

        u = "fanyideskweb"
        d = content
        f = str(timestamp)
        c = "rY0D^0'nM0}g5Mm1z%1G4"

        salt = hashlib.md5((u + d + f + c).encode('utf-8')).hexdigest()

        headers = {
            "Referer": 'http://fanyi.youdao.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
        }

        data = {
            'i': content,
            'from': 'AUTO',
            'to': 'AUTO',
            'smartresult': 'dict',
            'client': 'fanyideskweb',
            'salt': timestamp,
            'sign': salt,
            'doctype': 'json',
            'version': '2.1',
            'keyfrom': 'fanyi.web',
            'action': 'FY_BY_CL1CKBUTTON',
            'typoResult': 'true'
        }

        data = urllib.parse.urlencode(data).encode('utf-8')
        request = urllib.request.Request(
            url='http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule&sessionFrom=https://www.google.com/',
            method='POST', data=data,headers=headers)
        response = urllib.request.urlopen(request)
        result_str = response.read().decode('utf-8')
        result_dict = json.loads(result_str)
        result = result_dict["translateResult"][0][0]['tgt']
        return result

class Application(object):

    def __init__(self):
        self.helper = YouDaoHelper()
        self.window = Tk()
        self.window.title(u'知了词典')
        self.window.geometry("280x350+700+300")
        # 输入框
        self.entry = Entry(self.window)
        self.entry.place(x=10, y=10, width=200, height=25)

        # 提交按钮
        self.submit_btn = Button(self.window, text=u'查询', command=self.submit)
        self.submit_btn.place(x=220, y=10, width=50, height=25)

        # 翻译结果标题
        self.title_label = Label(self.window, text=u'翻译结果：')
        self.title_label.place(x=10, y=55)

        # 翻译结果
        self.result_text = Text(self.window, background='#ccc')
        self.result_text.place(x=10, y=75, width=260, height=265)

    def submit(self):
        # 1. 从输入框中获取用户输入的值
        content = self.entry.get()
        # 2. 把这个值发送给有道的服务器，进行翻译
        result = self.helper.crawl(content)
        # 3. 把结果放在底部的Text控件中
        self.result_text.delete(1.0,END)
        self.result_text.insert(END,result)

    def run(self):
        self.window.mainloop()


if __name__ == '__main__':
    app = Application()
    app.run()


