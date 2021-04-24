import React from 'react';
import Board from '../board/board'
import './container.css';

class Container extends React.Component
{
	constructor(props){
		super(props);

		this.state = {
			color: "#000000",
			sie:  "1"
		};
	}

	changeColor(params){
		this.setState({
			color: params.target.value
		})
	}

	changeSize(params){
		this.setState({
			size: params.target.value
		})
	}

	render(){
		return (
			<div className = 'container'>
			<div className = 'tools-section'>
				<div className = 'color-picker-container'>
				Brush Color:  &nbsp;
				 <input type = 'color' value  = {this.state.color} onChange = {this.changeColor.bind(this)}/> 	
				 </div>
				 <div className = 'brushsize-container'>
				 Brush Size: &nbsp;
				<select value= {this.state.size} onChange= {this.changeSize.bind(this)}>
				
				
					
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
				 </div>
				</div>

				 <div className = 'board-container'>
				  <Board color ={this.state.color} size = {this.state.size} />
				 </div>
			</div>

			)
	}
}


export default Container;