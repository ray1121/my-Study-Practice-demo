# --*-- coding:utf-8 --*--


# try:
	# conding
# except Exception:(Python3捕获所有异常的方式)
# except:(Python2 捕获所有异常的方式)

try:
	f=open('xx.txt')
except Exception as e:
	print(e)
else:
	f.read()
	print('读文件中')
finally:
	
	print('继续执行')

try:
	pass
except Exception as e:
	raise
else:
	pass
finally:
	pass