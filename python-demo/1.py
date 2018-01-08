#!/usr/local/bin/python
# -*- coding: utf-8 -*-
# 第一句告诉操作系统用什么执行他；第二句告诉解释器编码是什么
# 把后缀名改成.command之后  修改
a=100
if a>50:
	print(a)
else:
	print(-a)
# :冒号以后接下来的缩进代码会被看做是一个代码块
# /代表标准除法结果是浮点类型的
# // 代表地板除10//3=3结果永远是整数；
# 基本输入变量=input('这里放提示信息')   输出：print()
# ord()和char()是将字符在整数编码和字符串之间转化的
# 字符串类型在内存中以Unicode表示，在网络中或者保存到磁盘上时要转化成byte流
# byte型数据形式  b''  eg：b'ray'
# encode('编码方式')  和   decode('解码方式')   是 byte和str之间的相互转化
name='ray'
print(name.encode('utf-8'))
print(name.encode('utf-8').decode('ascii'))
#  占位符   多于1个要用（）
str='Age: %d ,name: %s'
print(str % (20,2))
print('nihao')

# list=[]数组   list[-1]表示最后一个元素  .append(value)末尾插入
# .insert(index,value)插入到指定的index的位置
# .pop()弹出末尾   .pop(index)弹出指定位置的元素，从原数组里删除了

# tuple=() 是元组，类似维数组只能通过索引查找和len()度元素指向的地址不得改变
# tuple里若是只有1个数，定义的时候t=(1,)加一个逗号，否则就是定义了一个变凉了
# tuple里若是有list（数组），数组的地址不能变，内容可以变


# continue  退出本次循环

# x=input()接收输入的之后   x是字符串类型  要把它变成数字型就要int(x)

# 字典dict={}   k-v   查找速度非常快   d[key]
# d[key]=value的方式也可以赋值   判断key在字典里是否存在的方式  key in dict
# key值必须是字符串或是数字，因为key值必须是不可变的



# 对于不可变的理解:数字和字符串本身是不可变的a=‘abc’  a是一个变量指向‘abc’  a.replace('a','A')是将字符串中的
# 字符替换之后一个新的字符串返回，原来的a变量是不变得    list是可变的，list.sort()之后原来的数组就改变了



# s=set([1,2,3])   set 是一组无序，没有重复的集合   可以进行数学交集 &  和并集 |  s.add(value)增加值，重复增加不会有效果
# s.remove(value)删除   
# 如果只有一个元素的集合s=set([1],)


# 定义函数def 声明   不使用默认参数的时候传入的参数个数不正确就会报错，，使用默认参数一定要注意初始值一定要是不可变对象
# 若是默认值是list[]则每次使用默认参数都会往list中追加一项！

def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L

# 可变参数加星号 *args   函数内部还是接收到了一个tuple 使用时还是使用for in
 

def canChange(*args):
	sum=0
	for n in args:
	  	sum=sum+n
	return sum

canChange(1,2,3,4)
# 调用的时候可以随意输入数字；如果已经有了一个list或者tuple的时候


l1=[1,2,3]
# 调用：
canChange(*l1)


# 关键字参数   **kw  可以直接将kw替换成一个字典{}
def keyArgument(name,age,**kw):
	if 'sex' in kw:
		pass
	print('name:',name,'age:',age,'other:',kw)
	
keyArgument('ray',23,school='USTC')


# list 和 tuple的切片slice：l=[1,2,3,4]   l[0:3]  从索引0开始到索引为3之前的切完后返回



# 判断是否可迭代用来看他是否能够   for in
from collections import Iterable
isinstance('abc', Iterable) # str是否可迭代
# True
 isinstance([1,2,3], Iterable) # list是否可迭代
# True
 isinstance(123, Iterable) # 整数是否可迭代
# False


# Python内置的enumerate函数可以把一个list变成索引-元素对，这样就可以在for循环中同时迭代索引和元素本身：

 for i, value in enumerate(['A', 'B', 'C']):
     print(i, value)




































