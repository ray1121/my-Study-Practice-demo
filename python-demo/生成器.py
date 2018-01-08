# 生成器里面存储的是生成要使用数据的方法，到使用的时候才会给出，但是具有记录上一次数值的记忆

a=(x for x in range(10))

for i in range(11):
	try:
		print(next(a)) 
	except StopIteration:
		print('生成器结束了！')



def fib(times):
	a,b=0,1
	for i in range(times):
		yield b
		a,b = b,a+b  #注意这种写法实际上是先给b赋值

for x in fib(10):
	print(x)