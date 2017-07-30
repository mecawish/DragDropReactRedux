import React from 'react';
import './TextBox.css';

import DeleteButton from '../DeleteButton/DeleteButton';

class TextBox extends React.Component {	
	render() {
	    return (
	    	<div 	
	    		className="drag" 
	    		onMouseDown={this.props.onTextBoxMouseDown}
	    		onMouseMove={this.props.onTextBoxMouseMove}
	    		onMouseUp={this.props.onTextBoxMouseUp}>
	    		<div className="editText" contentEditable="true" spellCheck="false"></div>
	    		<DeleteButton />
	    	</div>
	    );
  	} 
}

export default TextBox; 