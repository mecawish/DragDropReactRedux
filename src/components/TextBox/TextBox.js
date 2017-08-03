import React from 'react';
import { connect } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import { mouseDown, mouseUp, editText } from '../../redux/actions';
import './TextBox.css';

class TextBox extends React.Component {	
	textBoxMouseDown(e){
		if (e.target.classList.contains('drag')){
			this.props.onTextBoxMouseDown(e);
			e.target.firstChild.setAttribute('contenteditable', false);
		}
	}

	textBoxMouseMove(e){
		if (this.props.dragElement){
			const dropZone = document.getElementById('dropZone');

			const dropZoneStyle = window.getComputedStyle(dropZone);
			const marginTop = parseInt(dropZoneStyle.getPropertyValue('border-top-width'));
			const marginBottom = parseInt(dropZoneStyle.getPropertyValue('border-bottom-width'));
			const marginLeft = parseInt(dropZoneStyle.getPropertyValue('border-left-width'));
			const marginRight = parseInt(dropZoneStyle.getPropertyValue('border-right-width'));

			const dropZoneRightLimit = dropZone.offsetWidth + dropZone.offsetLeft - marginRight;
			const dropZoneLeftLimit = dropZone.offsetLeft + marginLeft;
			const dropZoneTopLimit = dropZone.offsetTop + marginTop;
			const dropZoneBottomLimit = dropZone.offsetHeight + dropZone.offsetTop - marginBottom;

			const dragElement= this.props.dragElement;
			const newLeft = this.props.offsetX + e.pageX - this.props.startX;
			const newTop = this.props.offsetY + e.pageY - this.props.startY;
			const rightLimit = dropZoneRightLimit - dragElement.offsetWidth;
			const bottomLimit = dropZoneBottomLimit - dragElement.offsetHeight;

			dragElement.style.cursor = 'move';

			if (newLeft > rightLimit) {
				dragElement.style.left = rightLimit + 'px';
			} else if (newLeft < dropZoneLeftLimit){
				dragElement.style.left = dropZoneLeftLimit + 'px';
			} else {
				dragElement.style.left = newLeft + 'px';	
			}

			if (newTop > bottomLimit) {
				dragElement.style.top = bottomLimit + 'px';
			} else if (newTop < dropZoneTopLimit) {
				dragElement.style.top = dropZoneTopLimit + 'px';
			} else {
				dragElement.style.top = newTop + 'px';	
			}
		}
	}

	textBoxMouseUp(e){
		const dragElement = this.props.dragElement;
		if (dragElement) {
			dragElement.style.cursor = 'default';
			const el = dragElement.firstChild;
			el.setAttribute('contenteditable', true);
			el.style.cursor = 'text';
			this.props.onTextBoxMouseUp(e);
		}
	}

	render() {
	    return (
	    	<div 	
	    		className="drag"
	    		onMouseDown={e => this.textBoxMouseDown(e)}
	    		onMouseMove={e => this.textBoxMouseMove(e)}
	    		onMouseUp={e => this.textBoxMouseUp(e)}
	    	>
	    		<div
	    			className="editText"
	    			contentEditable="true"
	    			spellCheck="false"
	    			onBlur={e => this.props.onTextChange(e.target.innerHTML)}
	    		></div>
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

const mapDispatchToProps = dispatch => {
	return {
    	onTextBoxMouseDown: e => dispatch(mouseDown(e)),
    	onTextBoxMouseUp: e => dispatch(mouseUp(e)),
    	onTextChange: text => dispatch(editText(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox); 