import React from 'react';

/*lift-state-up   当几个组件要共同反应相同变化的数据的时候
  要将共同的state提升到最近的共同的祖先上去
*/ 

// 接收温度当参数，判断是否沸腾
function BoilingVerdict(props){
   if(props.celsius >= 100){
     return <p>水已经沸腾！</p>
   }
   return <p>水没有沸腾</p>
}


 class Calculator extends React.Component{
    render(){
    return (
          <div>
          	<TemperatureInput scale='c'/>
            <TemperatureInput scale='f'/>
          </div>
    	)
     
    }
 }
// 现在提供华氏温度(Fahrenheit)的输入框并且跟摄氏温度（Celsius）的输入框保持同步；
// 提取新的温度输入框组件，并且增加新的prop  为‘scale’给
// Temperature组件的scale域可以为c或者f

const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
};
class TemperatureInput extends React.Component{

    constructor(props){
    	super(props);
    	
    }

     handleChange(event){
       this.setState({
        value:event.target.value
       })
  }


    render(){
       const value = this.props.value;
       const scale = this.props.scale;
       return (
          <fieldset>
          	<legend>请输入{scaleNames[scale]}</legend>
            <input value={value} onChange={this.handleChange.bind(this)}/>
          </fieldset>

      	);
    }


};
// 温度相互转化的函数
function toCelsius(fahrenheit) {
			return (fahrenheit - 32) * 5 / 9;
		}
function toFahrenheit(celsius) {
			return (celsius * 9 / 5) + 32;
		}

// 接收一个value和一个转换函数名来根据一个框输入的值来计算另一个输入框的值；
function tryConvert(value,convert){
	// parseFloat把字符串转化为浮点型数字，如果第一个字符不能被解析为数字则返回NaN
     const input = parseFloat(value);
     if(Number.isNaN(input)){
        return '';
     }
     const output=convert(input);
     // Math.round四舍五入小数点,下式乘1000之后除以1000是为了保留小数点后面三位之后再四舍五入后面的小数
     const rounded=Math.round(output*1000)/1000；
    return rounded.toString();

}








