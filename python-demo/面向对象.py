# py的面向对象



class Base(object):
	"""docstring for Base"""
	#类属性
	num=0
	__num=9
	#实例方法，特点是必须要传入self,
	def __init__(self, name,age):
		#实例属性
		self.name = name
		self.age = age
		print(Base.__num)

	def instaceMethod(self):
		print('这是实例方法')

	#类方法,特点是必须传入一个参数是指向类本身
	@classmethod
	def addNum(cls):
		cls.num+=1
		print(cls.num)

	#静态方法，操作的事情与类和实例都无关,也不用传递任何参数
	@staticmethod
	def printMenu():
		print('='*50)
		print('菜单')
class extendBase(Base):
	pass

#此处使用子类	
Base.instaceMethod(Base)

extendBase.instaceMethod(extendBase)
		
instance = Base('liu',8)
instance.instaceMethod()

extendBase.addNum()
instance.addNum()
print(instance.num)
print(extendBase.num)
# print(instance.__num)
