oldFileName = input('请输入你要复制的文件：')
old = open(oldFileName,'r')
newFileName = oldFileName[:oldFileName.rfind('.')]+'副本'+oldFileName[oldFileName.rfind('.'):]
new = open(newFileName,'w')
new.write(old.read())
old.close()
new.close()