import React from 'react';
import { connect } from 'react-redux';
import { addTextBox } from '../../redux/actions';
import './AddTextBoxButton.css';

class AddTextBoxButton extends React.Component {
	render() {
		const onButtonClick = this.props.onButtonClick;

	    return (
	    	<button onClick={() => onButtonClick()}>Add TextBox</button>
	    );
  	} 
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: () => dispatch(addTextBox())
  };
}

export default connect(null, mapDispatchToProps)(AddTextBoxButton); 