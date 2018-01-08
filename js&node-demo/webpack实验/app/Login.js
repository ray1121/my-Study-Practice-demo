import React from 'react';

class UserGreeting extends React.Component{
render(){
    return (
         <h1>欢迎回来</h1>
    	)
}
};
class GuestGreeting extends React.Component{

	render(){
		return(
      		<h1>客人请登录</h1>
			)
	}
}


class Greeting extends React.Component{
	constructor(props){
		super(props);
	}
    render(){
    // isLoggedIn要定义在这里，是因为私有作用域吗？？？？
      const isLoggedIn = this.props.isLoggedIn
     if(isLoggedIn){
     	return <UserGreeting />;
     }
     return <GuestGreeting />;
    }
}


export default Greeting;