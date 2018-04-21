import requests
from bs4 import BeautifulSoup

response = requests.get(url="http://www.autohome.com.cn/news/")

response.encoding = response.apparent_encoding

#print(response.text)

soup = BeautifulSoup(response.text,features="html.parser")

target = soup.find(id = "auto-channel-lazyload-article")

li_list = target.find_all('li')

for i in li_list:
    a = i.find('a')

    if a:
        print(a.attrs.get('href'))
        txt = a.find('h3')
        print(txt)