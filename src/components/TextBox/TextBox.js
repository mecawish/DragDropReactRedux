import React from 'react';
import './TextBox.css';

import DeleteButton from '../DeleteButton/DeleteButton';

class TextBox extends React.Component {	
	render() {
		//const onTextBoxMouseDown = this.props.

	    return (
	    	<div 	
	    		className="drag"
	    		//onMouseDown={() => onTextBoxMouseDown()}
	    		//onMouseMove={this.props.onTextBoxMouseMove}
	    		//onMouseUp={this.props.onTextBoxMouseUp}
	    	>
	    		<div className="editText" contentEditable="true" spellCheck="false"></div>
	    		<DeleteButton />
	    	</div>
	    );
  	} 
}

export default TextBox; 