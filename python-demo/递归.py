# -*- coding:utf-8 -*-
# 递归阶乘


def go(n):
	if n>1:
		return n*go(n-1)		
	else:
		return 1
print(go(5))
def sum(n):
	if n>1:
		return n+sum(n-1)
	else:
		return 1
print(sum(100))