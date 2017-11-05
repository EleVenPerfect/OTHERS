import requests
import re
import time
import json
from bs4 import BeautifulSoup
from requests.exceptions import RequestException

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


def get_one_page():
    url = 'https://www.cndns.com/cn/domain/domain_price.aspx'
    headers = {
        "Referer": 'https://www.cndns.com/index.aspx?b=ppzq1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    }
    try:
        response = requests.post(url, headers=headers)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException:
        return None


def bs4_result(text):
    soup = BeautifulSoup(text, features="html.parser")
    pattern = re.compile('\d+\.\d\d', re.S)
    table = soup.find(class_="tab-t")
    tr_list = table.find_all('tr')

    price_data['result'][0]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[1].find_all('td')[1].p.text)[0]  # .com价格
    price_data['result'][0]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[1].find_all('td')[5].p.text)[0]  # .com价格
    price_data['result'][0]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[1].find_all('td')[9].p.text)[0]  # .com价格

    price_data['result'][2]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[2].find_all('td')[1].p.text)[0]  # .net价格
    price_data['result'][2]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[2].find_all('td')[5].p.text)[0]  # .net价格
    price_data['result'][2]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[2].find_all('td')[9].p.text)[0]  # .net价格

    price_data['result'][1]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[3].find_all('td')[1].p.text)[0]  # .cn价格
    price_data['result'][1]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[3].find_all('td')[5].p.text)[0]  # .cn价格
    price_data['result'][1]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[3].find_all('td')[9].p.text)[0]  # .cn价格

    price_data['result'][4]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[5].find_all('td')[1].p.text)[0]  # .cc价格
    price_data['result'][4]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[5].find_all('td')[5].p.text)[0]  # .cc价格
    price_data['result'][4]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[5].find_all('td')[9].p.text)[0]  # .cc价格

    price_data['result'][3]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[7].find_all('td')[1].p.text)[0]  # .org价格
    price_data['result'][3]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[7].find_all('td')[5].p.text)[0]  # .org价格
    price_data['result'][3]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[7].find_all('td')[9].p.text)[0]  # .org价格

    price_data['result'][5]['price_list']['new']['real_price'] = re.findall(pattern, tr_list[11].find_all('td')[1].p.text)[0]  # .xyz价格
    price_data['result'][5]['price_list']['renew']['real_price'] = re.findall(pattern, tr_list[11].find_all('td')[5].p.text)[0]  # .xyz价格
    price_data['result'][5]['price_list']['tran']['real_price'] = re.findall(pattern, tr_list[11].find_all('td')[9].p.text)[0]  # .xyz价格

    # i = 0
    # for tr in tr_list:
    #     if i == 0:
    #         i += 1
    #         continue
    #     td_list = tr.find_all('td')
    #     price = re.findall(pattern, td_list[1].p.text)
    #     print(price)
    #     exit()


def set_time_data():
    now_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
    price_data['status']['datetime'] = now_time


def write_to_file(content):
    with open('meicheng.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(content, ensure_ascii=False) + '\n')
        f.close()


def main():
    bs4_result(get_one_page())
    set_time_data()
    write_to_file(price_data)
    print(price_data)

if __name__ == '__main__':
    main()
