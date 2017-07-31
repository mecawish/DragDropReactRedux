import React from 'react';
import { connect } from 'react-redux';
import './DropZone.css';

import TextBox from '../TextBox/TextBox';

class DropZone extends React.Component {
	render() {
		const textboxes = this.props.textboxes.map((textbox, index) => {
			return (
				<TextBox
					key={index}
					onTextBoxMouseDown={this.props.onTextBoxMouseDown}
					onTextBoxMouseMove={this.props.onTextBoxMouseMove}
					onTextBoxMouseUp={this.props.onTextBoxMouseUp}
				/>
			);
		});

		return(
			<div id="dropZone">
				{textboxes}
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    textboxes: state.textboxes
  };
}

export default connect(mapStateToProps)(DropZone);