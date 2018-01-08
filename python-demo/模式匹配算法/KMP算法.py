# KMP算法

# 关键在于算出模式字符串的每个字符部分匹配值的部分匹配表

#定义得出部分匹配表
def partial_table(p):
    # 定义前缀集合和后缀集合
    pre = set()
    late = set()
    table = [0]
    #得出每组子字符串的前后缀集合，取出交集中最长字符串的长度
    for i in range(1,len(p)):
        pre.add(p[:i])
        late = {p[j:i+1] for j in range(1,i+1)}
        table.append(max(map(lambda x:len(x),pre&late or {''})))
    return table

def kmpMatch(s,p):
    sLength,pLength,=(len(s),len(p))
    if sLength < pLength:
        return 'not match!'
    else:
        table = partial_table(p)
        cur = 0
        while cur < sLength - pLength:
            #判断此次是否匹配
            for i in range(pLength):
                if s[cur+i] !=p[i]:
                    cur += max(i - table[i-1], 1)
                    break
            else:
                return 'match!!'
        return 'not match'

if __name__ == '__main__':
    test1=('hello world','world')
    test2=('hello world','hellow')
    test3=('hel','hellow')
    print(kmpMatch(*test1))
    print(kmpMatch(*test2))
    print(kmpMatch(*test3))

