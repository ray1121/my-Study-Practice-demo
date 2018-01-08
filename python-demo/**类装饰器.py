# 如果重写一个类的__call__()方法那么就可以用'对象名()'的方式调用这个对象,执行的是__call__的方法

class TestCall(object):
  	def __call__(self):
  		print('-------执行的__call__方法-------')

test=TestCall()
test()


# 用一个类来装饰一个方法

class DoSomething(object):
	def __init__(self,functionName):    #注意这里要定义一个传入的被修饰函数的占位符
		print('初始化对象中。。。。。。')
		self.functionName = functionName
	def __call__(self):
		print('已经被装饰其他功能了。。。。。')
		self.functionName()


def didFunction():
	print('我是要被装饰的函数1。。。。')

# 原理：初始化一个对象，对象有一个属性方法就是要被装饰的函数，并将对象医用付给被装饰函数的名字
didFunction=DoSomething(didFunction)
# 执行这个就相当于执行对象，就是执行__call__()方法
didFunction()

print('='*50)

# 写成python 的装饰器语法糖方式:

@DoSomething
def didFunction222():
	print('我是要被装饰的函数222。。。。')

didFunction222()




