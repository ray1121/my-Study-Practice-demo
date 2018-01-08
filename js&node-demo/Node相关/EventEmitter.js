const EventEmitter = require('events');


class MyEmitter extends EventEmitter {};


const myEmitter = new MyEmitter();
const musicPlayer = new EventEmitter();
let m = 0;
myEmitter.on('events',(a,b)=>{
	console.log(`events 发生！${a},${b}`);
	console.log(this)
})

/*应该始终为EventEmitter 实例注册错误事件*/
myEmitter.on('error',(err)=>{
	console.log(err)
})

myEmitter.emit('events','1','2');
myEmitter.emit('error',new Error('cnm!'))




musicPlayer.on('play',()=>{
	console.log(++m)
})


musicPlayer.once('stop',()=>{
	console.log('player has stopped')
})

musicPlayer.addListener('stop',()=>{
	console.log('又被关了一遍')
})//emitter.addListener 和 emitter.on 是一个意思

console.log(musicPlayer.eventNames())//获得该事件发射器所注册的事件
console.log(musicPlayer.getMaxListeners());
//一个事件实例能够注册的最大时间数是10个


musicPlayer.setMaxListeners(11)
console.log(musicPlayer.getMaxListeners());
//可以设置一个事件实例能够注册的最大事件数大于10个


console.log(musicPlayer.listenerCount('stop'));
//某一个时间已经有了多少个监听器

musicPlayer.prependListener('stop', ()=>{
	console.log('讲究一个后来居上')
});
musicPlayer.prependListener('stop', ()=>{
	console.log('讲究一个后来居上2')
});
musicPlayer.prependOnceListener('stop',()=>{
	console.log('后来居上但是只有一次')
})

musicPlayer.emit('play')
musicPlayer.emit('play')
musicPlayer.emit('stop')
musicPlayer.emit('stop')



const listener1 = ()=>{
	console.log('我是监听处理函数listener1')
	musicPlayer.removeListener('testListener',listener2)
}
const listener2 = ()=>{
	console.log('我是监听处理函数listener2')
}

musicPlayer.on('testListener',listener1)
musicPlayer.on('testListener',listener2)
/*第一次事件触发的时候，所有注册了该事件的监听器都会依次执行
**在事件触发后、最后一个监听器完成执行前，
**任何 removeListener() 或 removeAllListeners() 调用都不会从 emit() 中移除它们。
**随后的事件会像预期的那样发生。
*/

musicPlayer.emit('testListener');
musicPlayer.emit('testListener');








