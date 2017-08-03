import React from 'react';
import { connect } from 'react-redux';
import TextBox from '../TextBox/TextBox';
import './DropZone.css';

class DropZone extends React.Component {
	render() {
		const textboxes = this.props.textboxes.map((textbox, index) => {
			return (
				<TextBox key={index} />
			);
		});

		return(
			<div id="dropZone">
				<div>{this.props.inputText}</div>
				{textboxes}
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    textboxes: state.textboxes,
    inputText: state.inputText
  };
}

export default connect(mapStateToProps)(DropZone);