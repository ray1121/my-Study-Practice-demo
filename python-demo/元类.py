# 元类(MetaClass)就是创建用class 定义的那些类   type('类名',(父类元祖),{属性字典})



def printNum(self):
	print(self.num)

Test = type('Test',(object,),{'num':10,'printNum':printNum})

t=Test()

t.printNum()