#!/usr/local/bin/python
# -*- coding: utf-8 -*-
# 第一句告诉

a=100
if a>50:
	print(a)
else:
	print(-a)


# :冒号以后接下来的缩进代码会被看做是一个代码块
# /代表标准除法结果是浮点类型的
# // 代表地板除10//3=3结果永远是整数；
# 基本输入变量=input('这里放提示信息')   输出：print()


# ord()和char()是将字符在整数编码和字符串之间转化的

# 字符串类型在内存中以Unicode表示，在网络中或者保存到磁盘上时要转化成byte流
# byte型数据形式  b''  eg：b'ray'
# encode('编码方式')  和   decode('解码方式')   是 byte和str之间的相互转化

name='ray'
print(name.encode('utf-8'))
print(name.encode('utf-8').decode('ascii'))


print('你好')