# 给一个装饰器传参数,其实可以理解为先执行一个函数然后再返回一个’正常的‘装饰器


def doSomething(arg):
	def something(functionName):
		def do(*args,**kwargs):
			if arg>0:
				print('success,ray notice you!')
				return functionName(*args,**kwargs)
			else:
				print('你给装饰器传递的参数不满足条件')
		return do
	return something

@doSomething(-1)
def test1():
	print('待测试的函数1')

@doSomething(1)
def test2():
	print('待测试的函数2')

if __name__ == '__main__':
	test1()
	test2()