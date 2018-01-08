/**
 * Created by liulei on 2017/5/22.
 */
function arrayUnique(arr) {
    var obj={};
    var unique=[];
    for (var i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=arr[i];
        }
    }
    for (var key in obj){
        unique.push(obj[key]);
    }
    return unique;
}
var arr=[1,2,2,2,3,3,4,5];
console.log(arrayUnique(arr));
