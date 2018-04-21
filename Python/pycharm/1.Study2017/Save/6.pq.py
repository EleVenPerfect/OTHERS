import json
import requests
from requests.exceptions import RequestException
import re

def get_one_page(url):
    data = {
        'first':'true',
        'pn':'1',
        'kd':'python'
    }
    headers ={
        'User-Agent': 'Mozilla / 5.0(Windows NT 6.3; WOW64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 61.0.3163.100 Safari / 537.36',
        'Host': 'www.lagou.com',
        'Referer': 'https://www.lagou.com/jobs/list_python?labelWords=&fromSearch=true&suginput=',
        'X-Anit-Forge-Code': '0',
        'X-Anit-Forge-Token': 'None',
        'X-Requested-With': 'XMLHttpRequest'
    }
    try:
        response = requests.post(url,headers = headers,data = data)
        if response.status_code == 200:
            return response.json()
        return None
    except RequestException:
        return None


def main():
    url = 'https://www.lagou.com/jobs/positionAjax.json?needAddtionalResult=false&isSchoolJob=0'
    html = get_one_page(url)
    results = html['content']['positionResult']['result']
    line = json.dumps(results, ensure_ascii=False)
    line.encode('gb2312')
    with open('lagou.json','w') as fp:
        fp.write(line)



if __name__ == '__main__':
    main()