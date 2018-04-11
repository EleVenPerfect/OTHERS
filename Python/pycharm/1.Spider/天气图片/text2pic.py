
#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2018/4/9 16:21
# @File     : text2pic.py
# @Version  : Python2.7.14

import os
import pygame
import requests

r = requests.get('http://www.weather.com.cn/data/sk/101030100.html')
jsondata = r.json()
wd = str(jsondata['weatherinfo']['temp'])
rain = str(jsondata['weatherinfo']['rain'])
pygame.init()
textbase1 = u"Temperature: "
textbase2 = u"'C "
textbase3 = u" Rain: "
textbase4 = u"%"
text = textbase1 + wd + textbase2 +textbase3 + rain +textbase4
font = pygame.font.SysFont('Microsoft YaHei', 48)
ftext = font.render(text, True, (255, 255, 255), (0, 0, 0))
pygame.image.save(ftext, "weather.jpg")

def main():
    pass


if __name__ == "__main__":
    main()  