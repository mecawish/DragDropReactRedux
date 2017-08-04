import React from 'react';
import './DeleteButton.css';

class DeleteButton extends React.Component {
	onButtonClick(e){
		e.target.parentNode.remove();
	}

	render() {
	    return (
	    	<div className="delete"
	    	onClick={this.onButtonClick}
	    	>x</div>
	    );
  	} 
}

export default DeleteButton;