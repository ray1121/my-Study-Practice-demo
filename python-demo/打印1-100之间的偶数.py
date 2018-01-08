n=1
while n<=100:
	if n//10==2:
		n+=1
		continue
	if n%2==0:
		print('%d'%n)
		n+=1
	else:
		n+=1