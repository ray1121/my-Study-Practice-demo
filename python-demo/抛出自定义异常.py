# --*-- coding:utf-8 --*--


#抛出自定义异常
#自定义异常是个类，继承自Exception类
class MyException(Exception):
	"""docstring for MyException"""
	def __init__(self, name,age):
		self.name=name
		self.age = age

def main():
	try:
		s = input('请输入大于5个数字')
		if len(s)<5:
			raise MyException('rayError',100)
	except MyException as e:
		print('发生了错误%s,年龄：%d'%(e.name,e.age))
	else:
		print(s)
main()
		