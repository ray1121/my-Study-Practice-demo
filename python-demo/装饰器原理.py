def check(func):
	def login(a):
		if a>10:
			func(a)
		else:
			print('验证失效')
	return login


def f1(a):
	print('客户1')
def f2(a):
	print('客户2')


#装饰器原理：闭包，让函数以参数的形式传递给嵌套函数中定义的内层函数中执行形成闭包后将引用传递给原函数

f1 = check(f1)
f1(100)
f1(3)


# 用装饰器的写法：在函数定义的上一行加入@check

@check
def f3(a):
	print('客户3来了')

f3(120)