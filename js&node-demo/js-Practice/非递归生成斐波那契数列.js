/**
 * Created by liulei on 2017/5/22.
 */
function getfibo(len) {
    var fib=[],i=0;
    while(i<len){
        if (i<=1){
            fib.push(i);
        }else {
            fib.push(fib[i-1]+fib[i-2]);
        }
        i++;
    }
    return fib;
}
console.log(getfibo(9));