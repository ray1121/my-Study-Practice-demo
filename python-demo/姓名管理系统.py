# -*- coding:utf-8 -*-
# 姓名管理系统
# 知识点：列表的常见操作

print('='*20)
print('执行的功能：')
print('1:增加一个姓名')
print('2:删除一个姓名')
print('3:修改一个姓名')
print('4:查找一个姓名')
print('5:退出系统')
print('='*20)
names=[]
while 1:	
	chanel= raw_input('请输入要执行的功能代号：')
	if chanel=='1':
		name=raw_input('请输入要增加的姓名')
		names.append(name)
		print('插入成功')
	elif chanel=='2':
		name=raw_input('请输入要删除的姓名：')
		if name in names:
			names.remove(name)
			print('删除成功')
		else:
			print('所删除的名字不存在！')
	elif chanel=='3':
		name= raw_input('请输入要修改的姓名：')
		if name in names:
			newName =raw_input('请输入新的的姓名：')
			names.remove(name)
			names.append(newName)
			print('修改成功')
		else:
			print('所修改的名字不存在！')
	elif chanel=='4':
		name=raw_input('please input the find name:')
		if name in names:
			print('姓名存在')
		else:
			print('姓名不存在')
	elif chanel=='5':
		break
	else:
		print('非法代号，请重新输入')

