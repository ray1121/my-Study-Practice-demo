def thead1():
	while True:
		print('---------thead1-------')
		yield None
def thead2():
	while True:
		print('---------thead2-------')
		yield None

t1=thead1()
t2=thead2()

while True:
	t1.__next__()
	t2.__next__()