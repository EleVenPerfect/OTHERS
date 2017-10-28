import requests
from requests.exceptions import RequestException


def get_one_page():
    url = 'https://www.cndns.com/cn/domain/domain_price.aspx'
    headers = {
        "Referer": 'https://www.cndns.com/index.aspx?b=ppzq1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    }
    try:
        response = requests.post(url,headers = headers)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException:
        return None

def main():
    result = get_one_page()
    print(result)

if __name__ == '__main__':
    main()