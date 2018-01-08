const singleLog = require('single-line-log').stdout;
let length = 10000
let read =0
for (let j=0;j<length;j++){
    read =read+j;
	let percentage =Math.floor(read/length) 
	singleLog(`进度条：[${percentage}%]`)	
}