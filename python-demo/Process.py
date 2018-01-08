# 由于fork（）创建子进程的方式只能在类unix操作系统中，所以有了一种跨平台的方式去创建子进程

from multiprocessing import Process,Pool
import time
import os


# 方法一：先定义一个子进程所要执行的函数
def run_child_process():
    for x in range(10):
        print('子进程正在运行中，进程号是%d'%os.getpid())
        time.sleep(0.5)



# 方法2 ：定义一个子进程的类，一定要继承自Process，执行时会自动调用该类的 run方法

class ChildProcess(Process):
    """docstring for ChildProcess"""
    def __init__(self,name,exeTime):
        Process.__init__(self)# 这句话不需要有调用父类的__init__方法
        self.name=name
        self.exeTime=exeTime
    def run(self):
        print('%s子进程开始执行,父进程是%d'%(self.name,os.getppid()))
        t_start=time.time()
        time.sleep(self.exeTime)
        t_stop = time.time()
        print('%s子进程执行结束，共用时%d'%(self.name,t_stop-t_start))




# 方法3：进程池的方式，先创建一定数目的进程放在池子里，可以向进程池中添加大于进程数目的任务
#       还没有进程为任务工作时，任务处于排队状态


# 1.定义任务:
def worker(num):
    print('正在执行任务%s'%num)
    time.sleep(3)





if __name__ == '__main__':
    print('父进程执行，进程号是%d'%os.getpid())
    
    #注册进程执行环境函数方式
    p1=Process(target=run_child_process)
    print('子进程1就要运行了！')
    p1.start()
    p1.join()  #阻塞作用，之后的代码会等到子进程结束之后才继续执行
    print('子进程1结束了')
    print('当前执行的是%s'%os.getpid())

    # 定义进程子类方式
    p2=ChildProcess('p2',3)
    p2.start()
    p2.join()
    for x in range(1,10):
        print('test')


    # 进程池方式：2.创建进程池(我只创建3个)
    pool = Pool(3)
    # 向进程池中持续添加10个任务
    for x in range(10):
        
        pool.apply_async(worker,(x,))  #注意这里向任务传参的方式是元组

    pool.close()#关闭进程池
    pool.join()#若不加这一句则主进程会在任务还没有结束时退出，导致任务得不到执行

    

