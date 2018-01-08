// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;;
//   return greet;
// };

import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css'; //将CSS文件当成模块处理


// var WebSite=React.createClass()
// class Greeter extends Component {
// 	render() {
// 		return (
// 			<div className={styles.root}>
//     		{config.greetText}
//     		</div>

// 		);
// 	}
// }
//React的state和props

var WebSite=React.createClass({
   
	getInitialState:function(){
		return{
			name:"RAY liulei",
			site:"http://www.baidu.com"
		};
	},
	render:function(){
		return (
			<div>
				<Name name={this.state.name} />
				<Link site={this.state.site} />
			</div>
			);
	}

});

var Name=React.createClass({
	render:function(){
		return(
			<h1>{this.props.name}</h1>
		);
	}
});

var Link=React.createClass({
	render:function(){
		return(
			<a href={this.props.site}>
            {this.props.site}
			</a>
		);
	}
});








export default WebSite;