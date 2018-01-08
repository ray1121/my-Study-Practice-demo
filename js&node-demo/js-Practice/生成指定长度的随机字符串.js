/**
 * Created by liulei on 2017/5/22.
 */

function randomString(n) {
    var str='abcdefghijklmnopqrstuvwxyz0123456789';
    var result='';
    for(var i=0;i<n;i++){
        result+= str.charAt(Math.round(Math.random()*str.length)) ;
    }
    return result;
}
var str1=randomString(5);
console.log(str1);