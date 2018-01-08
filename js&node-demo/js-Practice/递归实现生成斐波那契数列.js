/**
 * Created by liulei on 2017/5/22.
 */
function getfib(n) {
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }else if(n>1){
        return getfib(n-1)+getfib(n-2);
    }
}
function fibo(len) {
    var fib=[];
    for (var i=0;i<len;i++){
        fib.push(getfib(i));
    }
    return fib;
}
console.log(fibo(9));
