/**
 * Created by liulei on 2017/5/22.
 */
//回文字符串：正着读反着读都一样，比如level,递归思想，用第一个和最后一个比，每次比完之后删除
//字符串的第一个和最后一个，递归终止条件是字符串的长度等于0；
function huiwen(str) {
    var reg=/[\W_]/g;
    var lowstr=str.toLowerCase().replace(reg,'');
    if(lowstr.length===0){
        return true;
    }
    if(lowstr[0]!==lowstr[lowstr.length-1]){
        return false;
    }
    //之后要用数组的slice方法截取index为1的开始包括1，到最后一个字符结束但不包括最后一个元素
    //并且当做参数递归调用函数
    return huiwen(lowstr.slice(1,lowstr.length-1));

}
var str1='level',str2='abc';
console.log(huiwen(str1));
console.log(huiwen(str2));