let displayHelp = ()=>{
	console.log(`${args}`)
}

let readfile = (filename)=>{
	require('fs').createReadStream(filename).pipe(process.stdout)
}

let args = {
	'-r' : readfile,
	'-h' : displayHelp
}



console.log(process.argv.length)

if(process.argv.length > 2){
	process.argv.forEach( function(element, index) {
		console.log(this)
		args[element].apply(this,process.argv.slice(index+1))
	});
}