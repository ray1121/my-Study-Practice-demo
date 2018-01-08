# -*- coding:utf-8 -*-
# 打印九九乘法表

n=1
while n<=9:
	i=1
	while i<=n:
		print("%d*%d=%d\t"%(i,n,n*i),end="")
		i=i+1
	print('')
	n +=1


