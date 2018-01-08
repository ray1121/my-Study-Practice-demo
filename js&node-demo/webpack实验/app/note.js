import React from 'react';
// JSX表示对象
const element=React.createElement(
     'h1',
     {className:'greeting'},
      'Hello World'
	)
// 相当于
const element=(
     <h1 className="greeting">
       Hello World
     </h1>
	)
// JSX基本上会创建下，下面这个对象
const element={
   type:'h1',
   props:{
   	className:'greeting'
   	children:'Hello world'
   }
}
// 组件生命周期，调度更改组件状态;时钟的例子
class Clock extends React.Component{
    construct(props){
        super(props);
        this.state= {date:new Date()};
    }
    // 已经挂载后设置一个定时器
    componentDidMount(){
    	this.timerID=setInterval(()=>this.tick(), 1000);
    }
    componentWillUnmount(){
    	clearInterval(this.timerID);
    }
    tick(){
    	this.setState({date:new Date()});
    }
    render(){
       return (
          <div>
          	<h1>Hello World</h1>
             <h2>It is {this.state.date.toLocaleTimeString()}</h2>
          </div>
       	)
    }

}
// React的事件处理中不可以用return false的方式来防止默认行为
// 例子：
// 正常的 <a href="#" onclick="console.log('点了')；return false;">点我</a>
// 这样就组织了a标签的自动跳转
// 在React中，事件名注意要写成驼峰形式onClick,并且不能用return false;
// 用调用preventDefault“预防默认”的方式

class ActionLink extends React.Component{
       handleClick(e){
          e.preventDefault();//阻止时间的默认行为
          console.log('已经点击了');
       }
      render(){
       return(
         <a href="#" onClick={(e)=>this.handleClick(e)}></a>
       	)
      }
}

// 绑定事件时尤其是要注意this指向的问题，如果不绑定就会出现
// this指向undifined


// 在类中定义方法的时候使用箭头函数可以避免这种方法，或者用bind绑定

class LoggingButton extends React.Component{

     handleClick = ()=>{

     	console.log(this)//
     }

   render(){
   	  return (
         <button onClick={this.handleClick}></button>
   	  	)
   }
}

// 使用bind绑定事件处理函数

class LoggingButton extends React.Component{
     handleClick(){
      console.log(this)
     }
    render(){
    	return(
           <button  onClick={this.handleClick.bind(this)}></button>
    		)
    }
}

// JS中的转换列表map方法；
const numbers=[1,2,3,4];
const double= numbers.map((number)=>number*2);

// React渲染多个组件
const numbers=[1,2,3,4]
const listItems=numbers.map((number)=><li key={number.toString()}>{number}</li>);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')

	)

// 创建列表的时候若是不向li提供一个key会被警告,但是如果提取一个单个的列表的单个
// li组件就不需要加key否则会报错
//key在同一个列表里面是独一无二的，但是在不同列表中是可以一样的










