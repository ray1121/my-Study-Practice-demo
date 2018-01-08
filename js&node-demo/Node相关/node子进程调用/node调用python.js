const exec = require('child_process').exec;
const spawn = require('child_process').spawn;


let arg1 = 'hello',
    arg2 = 'node和python';

exec('python test.py '+arg1+' '+arg2+' ',function(err,stdout,stderr){
	if(err){
		console.log(err)
	}else {
		console.log(stdout)
		console.log(`stderr is : ${stderr}`)
	}
})


const ls = spawn('ls',['-lh','./']);

ls.stdout.on('data', (data) => {  
  console.log(`stdout: ${data}`);  
});  
ls.stderr.on('data', (data) => {  
  console.log(`stderr: ${data}`);  
});  
ls.on('close', (code) => {  
  console.log(`child process exited with code ${code}`);  
});  