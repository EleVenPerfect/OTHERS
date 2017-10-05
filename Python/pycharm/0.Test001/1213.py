from PriorityQueue import PriorityQueue
from Item import Item

q = PriorityQueue()
q.push(Item('foo'),1)
q.push(Item('bar'),5)
q.push(Item('spam'),4)
q.push(Item('grok'),2)
print q.pop()
print q.pop()
print q.pop()
print q.pop()

a = (Item('foo'),1)
b = (Item('bar'),2)
print a>b