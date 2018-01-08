#朴素模式匹配算法

#基本思想：将需要检索的固定住，从第一位开始，让模式字符串与他相比较，如果都相同则成功；
#   	  如果不成功则将原字符串指针向后移动一位在进行比较


def nativeMatch(s,p):
	sLength = len(s)
	pLength = len(p)
	if sLength < pLength :
		return 'not match!'
	else:
		for i in range(sLength-pLength+1):
			if s[i:i+pLength] == p:
				return 'match!'
		return 'not match!'


if __name__ == '__main__':
	test1=('hello world','world')
	test2=('hello world','hellow')
	test3=('hel','hellow')
	print(nativeMatch(*test1))
	print(nativeMatch(*test2))
	print(nativeMatch(*test3))