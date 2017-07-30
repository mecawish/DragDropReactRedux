import React from 'react';
import ReactDOM from 'react-dom';
import './AddTextBoxButton.css';

import TextBox from '../TextBox/TextBox';

class AddTextBoxButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			textbox: TextBox
		}

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(){
		this.props.onAddTextBoxClick(this.state.textbox);
	}

	render() {
	    return (
	    	<button onClick={this.onButtonClick}>Add TextBox</button>
	    );
  	} 
}

export default AddTextBoxButton; 