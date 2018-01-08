import os
# import time

pid = os.fork()
print(pid)
if pid==0:   
    print('------子进程------%d---%d'%(os.getpid(),os.getppid()))
else:   
    print('------父进程------%d'%os.getpid())



