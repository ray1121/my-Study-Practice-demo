const readline  = require('readline');


const rl = readline.createInterface({
	input : process.stdin,
	output: process.stdout
})


rl.question('input some thing:',(inputdata)=>{
	console.log(`输入的数据是${inputdata}`);
	rl.close();
})