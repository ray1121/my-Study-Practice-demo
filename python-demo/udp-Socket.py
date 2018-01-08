from socket import *


udpSocket = socket(AF_INET,SOCK_DGRAM)
udpSocket.bind(('',2223))
sendData = input('请输入要发送的内容：')
udpSocket.sendto(sendData.encode('utf-8'),('192.168.0.107',2222))

