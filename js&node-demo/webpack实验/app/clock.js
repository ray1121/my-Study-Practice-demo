import React, {
	Component
} from 'react';
class Clock extends Component {
	constructor(...args) {
		super(...args);
		this.state = {
			h: 0,
			m: 0,
			s: 0
		};
		var _this = this;
		setInterval(function() {
			_this.tick();
		}, 1000);
	}

	componentDidMount() {
		this.tick();
	}
	tick() {
		var oData = new Date();
		this.setState({
			h: oData.getHours(),
			m: oData.getMinutes(),
			s: oData.getSeconds()

		});
	}
	render() {
		return <div>
       	   <span>{this.state.h}:</span>
       	   <span>{this.state.m}:</span>
       	   <span>{this.state.s}</span>
       </div>


	}
}

export default Clock;