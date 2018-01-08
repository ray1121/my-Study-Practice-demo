function* fib(times){
	let a=0,b=1;
	for (let i = 0; i < times; i++) {
		yield b;
		b=a+b;
		a=b;
	}
}

console.log(fib(5))