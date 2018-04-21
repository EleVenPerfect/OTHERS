import urllib2

request = urllib2.request("http://www.baidu.com")
response = urllib2.urlopen(request)
print (response.read())