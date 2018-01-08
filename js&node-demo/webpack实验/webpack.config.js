const webpack =require('webpack');//使用webpack自带的相关插件
const HtmlWebpackPlugin= require('html-webpack-plugin');
/*此插件根据一个简单的html模板生成一个新的，自动添加打包后的js文件的index.html文件，这在每次生成的Js文件名称都不同的时候（比如加了hash值）*/
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js", //唯一入口文件!!!!!
    output: {
        path: __dirname + "/build", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public", //本地服务器加载页面所在的路径
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //当源文件改变的时候实时刷新浏览器，并不是组件的热替换，热替换hot是不刷新页面只是热替换组件
        port:8081,   //设置监听端口，如果不设置默认是8080
        hot:true   //设置HotModuleReplacement即是热替换，当和inline这两个参数都传入进来时，资源发生变化，浏览器会首先尝试热替换，如果不成功才会进行热加载
    },
    module:{
    	rules:[
    	{
    		test: /(\.jsx|\.js)$/,
    		use: {
                    loader: "babel-loader",
                   
                 },//自动加载.babelrc的文件
                 exclude:/node_modules/
    	},
    	{
    		test:/.css$/,
    		use:[
    			{
    				loader:"style-loader"
    			},
    			{
    				loader:"css-loader",

    				options:{modules:true}//是的多个CSS文件可以模块化导入而不会引起冲突
    			},
    			{
    				loader:"postcss-loader"
    			}
    		]//同一个文件引入多个loader的use后面跟[{},{}]
    	},
    	{
    		test:/.sass$/,
    		use:{
    			loader:"sass-loader"
    		}
    	}
    	]
    },//loader是在打包构建过程中处理源文件的，plugins不直接操作单个文件，他对整个构建过程起作用
   plugins:[
    new webpack.BannerPlugin('RAY IS 刘雷'),
    new HtmlWebpackPlugin({template:__dirname+"/app/index.tmpl.html"}),
    new webpack.HotModuleReplacementPlugin()
   ],
};