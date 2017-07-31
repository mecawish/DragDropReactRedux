import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import './index.css';
import AddTextBoxButton from './components/AddTextBoxButton/AddTextBoxButton';
import DropZone from './components/DropZone/DropZone';

let store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			dragElement: null,
			startX: 0,
			startY: 0,
			offsetX: 0,
			offsetY: 0 
		};

		this.onTextBoxMouseDown = this.onTextBoxMouseDown.bind(this);
		this.onTextBoxMouseMove = this.onTextBoxMouseMove.bind(this);
		this.onTextBoxMouseUp = this.onTextBoxMouseUp.bind(this);
	}

	onTextBoxMouseDown(e) {
		if (e.target.classList.contains('drag')){
			const dragElement = e.target;
		    this.setState({
		    	startX: e.pageX,
		    	startY: e.pageY,
		    	dragElement: dragElement,
		    	offsetX: dragElement.offsetLeft,
	    		offsetY: dragElement.offsetTop
		    });
	    	dragElement.firstChild.setAttribute('contenteditable', false);
		}
	}

	onTextBoxMouseMove(e) {
		if (this.state.dragElement) {
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

			const dragElement= this.state.dragElement;
			dragElement.style.cursor = 'move';
			const newLeft = this.state.offsetX + e.pageX - this.state.startX;
			const newTop = this.state.offsetY + e.pageY - this.state.startY;
			const rightLimit = dropZoneRightLimit - dragElement.offsetWidth;
			const bottomLimit = dropZoneBottomLimit - dragElement.offsetHeight;

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

	onTextBoxMouseUp(e) {
		const dragElement = this.state.dragElement;
		if (dragElement) {
			const el = this.state.dragElement.firstChild;
			el.setAttribute('contenteditable', true);
			el.style.cursor = 'text';
			dragElement.style.cursor = 'default';
			this.setState({
				dragElement: null	
			});
		}
	}

	render() {
	    return (
	    	<div>
				<AddTextBoxButton />
				<DropZone 
					onTextBoxMouseDown={this.onTextBoxMouseDown}
					onTextBoxMouseMove={this.onTextBoxMouseMove}
					onTextBoxMouseUp={this.onTextBoxMouseUp}/>
			</div>
	    );
  	} 
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));