/**
 * Created by liulei on 2017/5/22.
 */
function maxDistance(arr) {
    var min = arr[0], max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        arr[i] < min ? min = arr[i] : null;
        arr[i] > max ? max = arr[i] :null;
    }
    return max-min;
}
var arr1=[1,2,3,4,5];
console.log(maxDistance(arr1));