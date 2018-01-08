# -*- coding:utf-8 -*-
# 猜拳游戏

import random#导入随机包
user = raw_input("请输入石头或者剪刀或者布：")
computer = random.randint(0,2)
if (user=='石头' and computer==1) or (user=='剪刀' and computer==2) or (user=='布' and computer==0):
	print('大吉大利晚上吃鸡！')
elif (user=='石头' and computer==2) or (user=='剪刀' and computer==0) or (user=='布' and computer==1):
	print('你输了，垃圾')
else:
	print('再战一回合')

	