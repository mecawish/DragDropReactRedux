import React from 'react';
import { connect } from 'react-redux';
import TextBox from '../TextBox/TextBox';
import { showButtons } from '../../redux/actions';
import './DropZone.css';

class DropZone extends React.Component {
	render() {
		const textboxes = this.props.textboxes.map((textbox) => {
			return (
				<TextBox key={textbox.id} textboxId={textbox.id}/>
			);
		});

		return(
			<div id="dropZone">
				<div>{this.props.inputText}</div>
				{textboxes}
			</div>
		);
	}

	componentDidUpdate() {
		this.props.showButtons();
	}
}

const mapStateToProps = state => {
  return {
    textboxes: state.textboxes.present,
    inputText: state.inputText
  };
}

const mapDispatchToProps= dispatch => {
  return {
    showButtons: () => dispatch(showButtons())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);