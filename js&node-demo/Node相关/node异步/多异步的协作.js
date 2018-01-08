const events = require('events'),
	  fs = require('fs');
const emitter = new events.EventEmitter();
const after = (limit,callback)=>{
	let count = 0,
		results = {};
		console.log(limit)
	return (key,value)=>{
		if(limit.indexOf(key) !== -1){
			results[key] = value;
			count++;//****哨兵变量****
			if(count === limit.length){
			callback(results)
		}
		}
		
	}
}
let doSomething = (results)=>{
	console.log(results);
}
let done = after(['Content1','Content2','Content3'],doSomething);

emitter.on('done',done);

fs.readFile('./testFile/test1.csv','utf-8',(err,content)=>{
	if (err) {
		console.log('读取文件1出错！');
	}else {
		emitter.emit('done','Content1',content);
	}
});

fs.readFile('./testFile/test2.csv','utf-8',(err,content)=>{
	if (err) {
		console.log('读取文件1出错！');
	}else {
		emitter.emit('done','Content2',content);
	}
});

fs.readFile('./testFile/test3.csv','utf-8',(err,content)=>{
	if (err) {
		console.log('读取文件1出错！');
	}else {
		emitter.emit('done','Content3',content);
	}
});

fs.readFile('./testFile/test4.csv','utf-8',(err,content)=>{
	if (err) {
		console.log('读取文件1出错！');
	}else {
		emitter.emit('done','Content4',content);
	}
});
