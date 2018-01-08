const fs = require('fs');


let getFile=(path)=>{
return new Promise((resolve,reject)=>{
	fs.readFile(path, 'utf-8', (err,file)=>{
		if(err){
			reject(err);
		}else {
			resolve(file)
		}
	});
})

}

getFile('./fibo.js')
		.then(file=>console.log(file))
		.catch(err=>console.log(err))


console.log('没等')
/*Promise.all([p1,p2,p3])*/
let promisesArr = ['./Readline.js','./fibo.js'].map(item=>{
	return new Promise((resolve,reject)=>{
		fs.readFile(item, 'utf-8', (err,file)=>{
		if(err){
			reject(err);
		}else {
			resolve(file)
		}
	});
  })
})
Promise.all(promisesArr)
	   .then(result=>console.log(result))
	   .catch(err =>console.log(err))


console.log('======================================');


Promise.race(promisesArr)
		.then(result=>console.log('这是race的哟！！！',result))
		.catch(err=>console.log(err))


// let getAnotherOne =(path)=>{
// 	return Promise.resolve(
// 			fs.readFile(path, 'utf-8', (err,file)=>{
// 					if(err){
// 						return err;
// 					}else {
// 						return file;
// 					}
// 			})
// )
// }

// getAnotherOne('./Readline.js')
// 			.then(file=>console.log(file))
// 			.catch(err=>console.log(err))









