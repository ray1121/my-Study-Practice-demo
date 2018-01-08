# Sort-JS
排序算法的JS实现
tip：console.time(label)和console.timeEnd(label)是用来统计一段代码执行的时间其中的label参数可以是任何的字符串
	但是二者参数必须是一样的




稳定性：若a=b；以前a在b的前面，在排序完成之后，a依然在b的前面
稳定性分析：
			1.（直接）插入排序：稳定
			2.希尔排序：不稳定