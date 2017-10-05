#!/usr/bin/env python
"""
http://debsoft.blog.163.com/blog/static/17075427220144413712984/
http://www.jb51.net/article/55413.htm
"""
 
import sys
from time import sleep      
def view_bar(i):
    output = sys.stdout
    for count in range(0, i+1):
        second = 0.1
        sleep(second)
        output.write('\rcomplete percent:%.0f%%' % count)
    output.flush()
     
view_bar(100)
