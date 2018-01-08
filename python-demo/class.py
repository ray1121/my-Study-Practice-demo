# --*-- coding:utf-8 --*--
class Cat(object):
	"""docstring for Cat"""
	def __init__(self, name,age):
		self.name = name
		self.age = age
	def __str__(self):
		return '猫的名字是%s，年龄是%d岁'%(self.name,self.age)
	def __private(self):
		print('私有方法')
	def pubulic(self,sex):
		if (sex=='man') or (sex=='women'):
			self.__private()
		else:
			print('nigun!!!')
tom=Cat('tom',10)
print(tom)
tom.pubulic('yao')
tom.pubulic('man')
		