/**
 * Created by liulei on 2017/5/22.
 */
function maxStringChar(str) {
    if(str.length===1){
        return str;
    }
    var strObj={};
    for (var i=0;i<str.length;i++){
        if(!strObj[str.charAt(i)]){
            strObj[str.charAt(i)]=1;
        }else {
            strObj[str.charAt(i)]++;
        }
    }
    var maxChar='',maxValue=1;
    for (var key in strObj){
        if (strObj[key]>=maxValue){
            maxChar=key;
            maxValue=strObj[key];
        }
    }
    return '出现最多的字符是：'+maxChar+'出现的次数是:'+maxValue;
}
var str1='lllihgyyyyyyy';
console.log(maxStringChar(str1));