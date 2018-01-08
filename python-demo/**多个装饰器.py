#给内容加粗
def makeBlod(contentGnerator):
	def wrapped():
		print('-----1.加粗-----')
		return '<b>'+contentGnerator()+'</b>'
	return wrapped

#给内容变成斜体

def makeItalic(contentGnerator):
	def wrapped():
		print('-------2.变斜-------')
		return '<i>'+contentGnerator()+'</i>'
	return wrapped


def contentTest():
	print('3.这是要被装饰的函数')
	return 'ray is handsome man'

#装饰器原理
contentTest = makeItalic(contentTest)
contentTest = makeBlod(contentTest)

res= contentTest()
print(res)

print("="*50)
# 装饰器的写法
@makeBlod  #在这一步调用装饰器的时候makeBlod函数已经执行了将下面的东西变成了他的内层函数
@makeItalic
def contentTest2():
	print('4.这是第二个要被装饰的函数')
	return 'lalal'

print(contentTest2())