# --*-- coding:utf-8 --*--


#关于类的私有化：
# _a : 单前置下划线，from someModel import * 的时候不会导入,类的对象和子类可以访问
# __a : 双前置下划线，无法zai类的外部访问到，使用的方式是name mangling名字重整的方法
# 		目的是防止子类意外改写：子类._ClassName__a的方式可以访问
# xx_:防止与关键字重名的方式

_a=100
class Test(object):
	"""docstring for Test"""
	def __init__(self):
		self.__age=0 #这里的__name 是类私有变量。可以提供getter和setter
	def getAge(self):
		return self.__age
	def setAge(self,age):
		if age < 0 or age>120:
			print('滚')
		else:
			self.__age=age
	age = property(getAge,setAge)  # 使用property封装了getter和setter
test =Test()
test.age=130
test.age=25
print(test.age)


# 用装饰器的方式使用property

class Test2(object):
	"""docstring for Test2"""
	def __init__(self):
	    self.__age=0
	@property
	def age(self):
		return self.__age
	@age.setter
	def age(self,age):
		if age < 0 or age>120:
			print('滚')
		else:
			self.__age=age
test2=Test2()

test.age=130
test.age=30
print(test.age)

		



