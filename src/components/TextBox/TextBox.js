import React from 'react';
import { connect } from 'react-redux';
import { mouseDown } from '../../redux/actions';
import './TextBox.css';

import DeleteButton from '../DeleteButton/DeleteButton';

class TextBox extends React.Component {	
	onTextBoxMouseMove(e){
		if (this.props.dragElement){
			const dragElement= this.props.dragElement;
			const newLeft = this.props.offsetX + e.pageX - this.props.startX;
			const newTop = this.props.offsetY + e.pageY - this.props.startY;
			dragElement.style.left = newLeft + 'px';
			dragElement.style.top = newTop + 'px';	
		}
	}

	render() {
	    return (
	    	<div 	
	    		className="drag"
	    		onMouseDown={e => this.props.onTextBoxMouseDown(e)}
	    		onMouseMove={e => this.onTextBoxMouseMove(e)}
	    		//onMouseUp={this.props.onTextBoxMouseUp}
	    	>
	    		<div className="editText" contentEditable="true" spellCheck="false"></div>
	    		<DeleteButton />
	    	</div>
	    );
  	} 
}

const mapStateToProps = state => {
  return {
    dragElement: state.dragElementReducer.dragElement,
    startX: state.dragElementReducer.startX,
    startY: state.dragElementReducer.startY,
    offsetX: state.dragElementReducer.offsetX,
    offsetY: state.dragElementReducer.offsetY
  };
}

function mapDispatchToProps(dispatch){
	return {
    	onTextBoxMouseDown: e => dispatch(mouseDown(e))
    	//onTextBoxMouseMove: e => dispatch(mouseMove(e))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox); 