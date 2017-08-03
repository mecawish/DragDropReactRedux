import React from 'react';
import { connect } from 'react-redux';
import { addTextBox } from '../../redux/actions';
import './AddTextBoxButton.css';

class AddTextBoxButton extends React.Component {
	render() {
	    return (
	    	<button onClick={() => this.props.onButtonClick()}>Add TextBox</button>
	    );
  	} 
}

const mapDispatchToProps= dispatch => {
  return {
    onButtonClick: () => dispatch(addTextBox())
  };
}

export default connect(null, mapDispatchToProps)(AddTextBoxButton); 