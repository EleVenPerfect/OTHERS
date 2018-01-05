#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/31 20:37
# @File     : LZW.py
# @Version  : Python2.7.14

dictionary = {i: chr(i) for i in range(0, 255)}
last = 256
arr = [47, 87, 69, 68, 256, 69, 260, 261, 257, 66, 260, 84]

result = []
p = arr.pop(0)
result.append(dictionary[p])

for c in arr:
    if c in dictionary:
        entry = dictionary[c]
    result.append(entry)
    dictionary[last] = dictionary[p] + entry[0]
    last += 1
    p = c

print(''.join(result))
print(result)

