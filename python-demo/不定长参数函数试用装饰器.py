# 通用装饰器
# 考虑的点：1.所装饰的函数是否有返回值 return fn()
#		   2.所装饰的函数是否传入参数，传入多少参数，使用不定长的参数的方式
def doSomething(fn):
	def inner(*args,**kwargs):
		print('ray notice you!')
		return fn(*args,**kwargs)
	return inner


# 当要调用装饰器修饰的函数本身要传递不定长的参数

@doSomething
def test(a,b,c):
	print('a=%d,b=%d,c=%d'%(a,b,c))

test(1,23,3)


# 要装饰又返回值的函数
@doSomething
def hasReturn():
	return 'lalalla'

print(hasReturn())