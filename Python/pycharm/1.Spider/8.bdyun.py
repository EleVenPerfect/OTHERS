import json
import requests
from requests.exceptions import RequestException


def get_one_page():
    url = 'https://cloud.baidu.com/api/bcd/search/price'
    headers = {
        "Referer": 'https://cloud.baidu.com/product/bcd/price.html',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    }
    try:
        response = requests.post(url,headers = headers)
        if response.status_code == 200:
            return response.json()
        return None
    except RequestException:
        return None

def main():
    json_result = get_one_page()
    print(json_result)
    line = json.dumps(json_result , ensure_ascii=False)
    line.encode('gb2312')
    with open('bdyun.json', 'w') as fp:
        fp.write(line)


if __name__ == '__main__':
    main()