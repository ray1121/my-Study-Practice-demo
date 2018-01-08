// 表单的提交与绑定


import React from 'react';


class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			typeName:'shit'
		};

	}
	handleChange(event) {
   //        if(event.target.type === 'text'){
   //         this.setState({
			// userInput: event.target.value
		 //    });
   //        }else {
   //        	this.setState({
   //           typeName:event.target.value
   //        	})
   //        }
		const target = event.target
        const value = target.value
        const name  = target.name;
        this.setState(
        {
        	[name]:value
        })
		// 这里的event.target.value不能换成this.state.value
	}

	handleSubmit(event) {
		alert("提交了：" + this.state.userInput + this.state.typeName);
		event.preventDefault();

	}

  // 表单当处理多个输入的时候，增添一个name属性，在处理函数中根据
  // event.target.name来判断怎么处理

	render() {
		return (
	    <form onSubmit={this.handleSubmit.bind(this)}>
       <label>
       	Name:
       	<input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange.bind(this)} />
       </label>
       	<span>{this.state.userInput}</span>

         <label>
         	<select name="typeName"  value={this.state.typeName} onChange={this.handleChange.bind(this)}>
             <option value="apple">苹果</option>
             <option value="banana">香蕉</option>
             <option value="shit">翔</option>
             <option value="orange">橘子</option>
         	</select>

         </label>

         <input type="submit"  value='提交'/>
       </form>

		)

	}


}

export default NameForm;