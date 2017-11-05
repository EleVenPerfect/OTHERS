#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2017/10/31 21:23
# @Author  : ATIME
# @File    : 11.aliyun.py

import re
import time
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

SERVICE_ARGS = ['--load-images=false', '--disk-cache=true']
price_data = {
    "status": {
        "code": 0,
        "message": "操作已经成功完成",
        "datetime": "2017-10-28 21:46:12"},
    "result":
    [
        {
            "name": ".com",
            "price_list": {
                "new": {
                        "price": "8888",
                        "real_price": "8888"
                },
                "renew": {
                        "price": "8888",
                        "real_price": "8888"
                },
                "tran": {
                        "price": "8888",
                        "real_price": "8888"
                }
            }
        },
        {
            "name": ".cn",
            "price_list": {
                "new": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "renew": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "tran": {
                    "price": "8888",
                    "real_price": "8888"
                }
            }
        },
        {
            "name": ".net",
            "price_list": {
                "new": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "renew": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "tran": {
                    "price": "8888",
                    "real_price": "8888"
                }
            }
        },
        {
            "name": ".org",
            "price_list": {
                "new": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "renew": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "tran": {
                    "price": "8888",
                    "real_price": "8888"
                }
            }
        },
        {
            "name": ".cc",
            "price_list": {
                "new": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "renew": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "tran": {
                    "price": "8888",
                    "real_price": "8888"
                }
            }
        },
        {
            "name": ".xyz",
            "price_list": {
                "new": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "renew": {
                    "price": "8888",
                    "real_price": "8888"
                },
                "tran": {
                    "price": "8888",
                    "real_price": "8888"
                }
            }
        }
    ]
}


# browser = webdriver.PhantomJS(service_args=SERVICE_ARGS)
browser = webdriver.Chrome(service_args=SERVICE_ARGS)
browser.set_window_size(1000, 600)


def get_page_html():
    pattern = re.compile('\d+', re.S)
    try:
        browser.get('https://wanwang.aliyun.com/help/price.html')
        WebDriverWait(browser, 10).until(
            EC.presence_of_element_located((By.ID, 'domain_tr'))
        )
        price_text = browser.find_element_by_id('domain_tr').get_attribute('innerHTML')
        soup = BeautifulSoup(price_text, "html.parser")
        tr_list = soup.findAll('tr')

        # print(price_text)
        # print(0)
        # print(re.findall(pattern, tr_list[0].findAll('td')[1].text)[0])
        # print(1)
        # print(re.findall(pattern, tr_list[0].findAll('td')[5].text)[0])
        # print(2)
        # print(re.findall(pattern, tr_list[0].findAll('td')[9].text)[0])
        # print(3)

        price_data['result'][0]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[0].findAll('td')[1].text)[0]
        price_data['result'][0]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[0].findAll('td')[5].text)[0]
        price_data['result'][0]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[0].findAll('td')[9].text)[0]
        # .com
        price_data['result'][1]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[2].findAll('td')[1].text)[0]
        price_data['result'][1]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[2].findAll('td')[5].text)[0]
        price_data['result'][1]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[2].findAll('td')[9].text)[0]
        # .cn
        price_data['result'][2]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[1].findAll('td')[1].text)[0]
        price_data['result'][2]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[1].findAll('td')[5].text)[0]
        price_data['result'][2]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[1].findAll('td')[9].text)[0]
        # .net
        price_data['result'][3]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[3].findAll('td')[1].text)[0]
        price_data['result'][3]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[3].findAll('td')[5].text)[0]
        price_data['result'][3]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[3].findAll('td')[9].text)[0]
        # .org
        price_data['result'][4]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[28].findAll('td')[1].text)[0]
        price_data['result'][4]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[28].findAll('td')[5].text)[0]
        price_data['result'][4]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[28].findAll('td')[9].text)[0]
        # .cc
        price_data['result'][5]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[6].findAll('td')[1].text)[0]
        price_data['result'][5]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[6].findAll('td')[5].text)[0]
        price_data['result'][5]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[6].findAll('td')[9].text)[0]
        # .xyz

    except Exception:
        print('出错啦')
    finally:
        browser.close()



def set_time_data():
    now_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
    price_data['status']['datetime'] = now_time


def write_to_file(content):
    with open('aliyun.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(content, ensure_ascii=False) + '\n')
        f.close()



def main():
    set_time_data()
    get_page_html()
    write_to_file(price_data)

if __name__ == '__main__':
    main()
