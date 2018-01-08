// const test = require('./语法分析.js');
// *function foo(){
// 	var a =1;
// 	console.log(a)
// 	// foo()
// }()

// test.lala()
// foo()



// for(var i = 0; i < 10; i++){
// 	console.log(i)

// }

// console.log(`这是外层${i}`)


function foo() {
	debugger;
	console.log(this.a)
}
function bar() {

	var a = 3;
	foo();
}
// bar.a = 1
// var a = 2;
// bar()

// let (b = 1){
// 	console.log(b)
// }


// var baz = {
// 	a : 2
// }

// baz.prototype.ba = function(){}

// baz.hasOwnProperty(b)



try {
	let a = 1;
} catch(e) {
	console.log(e)
}

console.log(a)


























