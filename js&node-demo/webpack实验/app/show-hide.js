
import React from 'react'

function WarningBanner(props){
   if(!props.warn){
   	// 利用状态的改变来决定是不是返回null来决定出现和消失
   	return null;
   }
    return(<div className='warning'>Warning</div>);
}

class Page extends React.Component{

     constructor(props){
      super(props);
      this.state={showWarning:true}
      this.handleToggleClick=this.handleToggleClick.bind(this);
     }

     handleToggleClick(){
     	this.setState(prevState =>({

            showWarning:!prevState.showWarning

     		}));
     }
     render(){
       return(
       <div>
         <WarningBanner warn={this.state.showWarning} />
         <button onClick={this.handleToggleClick}>
         	{this.state.showWarning ? 'Hide' : 'Show'}
         </button>
       </div>
     )};

}
export default Page;