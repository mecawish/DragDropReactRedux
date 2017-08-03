import React from 'react';
import { connect } from 'react-redux';
import { mouseDown } from '../../redux/actions';
import './TextBox.css';

import DeleteButton from '../DeleteButton/DeleteButton';

class TextBox extends React.Component {	
	render() {
		const onTextBoxMouseDown = this.props.onTextBoxMouseDown;

	    return (
	    	<div 	
	    		className="drag"
	    		onMouseDown={(el) => onTextBoxMouseDown()}
	    		//onMouseMove={this.props.onTextBoxMouseMove}
	    		//onMouseUp={this.props.onTextBoxMouseUp}
	    	>
	    		<div className="editText" contentEditable="true" spellCheck="false"></div>
	    		<DeleteButton />
	    	</div>
	    );
  	} 
}

function mapDispatchToProps(dispatch){
	return {
    onTextBoxMouseDown: (el) => dispatch(mouseDown)
  };
}

export default connect(null, mapDispatchToProps)(TextBox); 