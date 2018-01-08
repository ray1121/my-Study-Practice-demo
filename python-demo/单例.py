#每次创建对象都指向同一个对象

class Single(object):
	# 私有类属性
	__instance = None
	__name='ray'
	def __new__(cls):
		if cls.__instance == None:
			cls.__instance = object.__new__(cls)
			return cls.__instance
		else:
			return cls.__instance
	def test(self):
		print(Single.__name   )
a=Single()
b=Single()
a.test()
print(id(a))
print(id(b))



class Test(object):
	def test(self):
		print('lal')

test=Test()
test.test()