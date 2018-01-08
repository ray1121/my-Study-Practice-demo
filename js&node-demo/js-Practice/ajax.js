/**
 * Created by liulei on 2017/5/15.
 */
//惰性思想：js中凡是能在执行一次就能确定的，绝不要重复执行；
function createXHR() {
    var xhr = null;
    var flag = false;
    var ary = [
        function () {
            return new XMLHttpRequest;
        },
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxml3.XMLHTTP");
        }
    ];
    for (var i = 0; i < ary.length; i++) {
        var curFn = ary[i];
        try {
            xhr = curFn();
            //浏览器执行到这里后就确定了创建XHR的方法，然后就可以用确定的小方法来重写掉原来的方法
            //在下一次再次创建的时候就不用再经过遍历了，惰性思想体现在此；完成之后直接退出循环
            //不再进行下面的试探，原来的大方法也被覆盖掉了
            createXHR = curFn;
            flag = true;
            break;
        } catch (e) {
            //    若是本次循环执行的方法出现了错误，则退出循环执行下一次；
        }
    }
    if (!flag) {
        throw new Error("您的浏览器不支持AJAX，请尝试更换浏览器")
    }
    return xhr;
}
//封装一个完整的ajax操作;ajax方法里需要传递的参数比较多并且还不固定，所以用一个option对象来封装参数
function ajax(options) {
    var _defaut = {
        url: "",        //请求的地址
        type: "get",    //请求方式
        async:true,     //同步还是异步
        data:null,      //使用post方法请求时放在请求主体里面的数据
        datatype:"json", //设置请求返回的内容格式；"json"：就是JSON格式的对象；"txt"：字符串或者是JSON格式的字符串
        getHEAD:null,   //当readystate===2时所执行的回调方法
        success:null    //当readystate===4返回成功时所要执行的方法

    };
    //使用用户传进来的值来覆盖我们的默认值
    for (var key in options){
        if(options.hasOwnProperty(key)){
            _defaut[key]=options[key];
        }
    }
    //若当前的请求是Get，我们就要添加随机数来清除缓存
    if (_defaut.type==="get"){
        //判断原来的url是否已经传参，如果没有传参就加？_=随机数；如果原来有了？则url后面就加&_=
        //随机数
        _defaut.url.indexOf("?")>=0 ? _defaut.url+="&" : _defaut.url+="?";
        _defaut.url+="_="+Math.random();
    }
    var xhr = createXHR();
    xhr.open(_defaut.type,_defaut.url,_defaut.async);
    xhr.onreadystatechange = function () {
        if (/^2\d{2}$/.test(xhr.status)) {
            if (xhr.readyState === 2) {
                if (typeof _defaut.getHEAD==="function"){
                    _defaut.getHEAD.call(xhr);
                }
            }
            if (xhr.readyState === 4) {
                var val=xhr.responseText;
                //判断响应返回数据类型是否是JSON格式的对象
                if(_defaut.datatype==="json"){
                    //将获取的内容转化为JSON格式的对象
                    val="JSON" in window ? JSON.parse(val) : eval("("+val+")");
                }
                //如果默认的方法存在则执行请求成功的处理函数
                _defaut.success && _defaut.success.call(xhr,val);

            }
        }
    };
    xhr.send(_defaut.data);
}
