import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTextBox } from '../../redux/actions';
import './DeleteButton.css';

class DeleteButton extends React.Component {
	render() {
	    return (
	    	<div 	className="delete"
	    			onClick={() => this.props.onButtonClick(this.props.parentId)}>
	    			x
	    	</div>
	    );
  	} 
}

DeleteButton.propTypes = {
	parentId: PropTypes.number.isRequired
}

const mapDispatchToProps= dispatch => {
  return {
    onButtonClick: id => dispatch(deleteTextBox(id))
  };
}

export default connect(null, mapDispatchToProps)(DeleteButton);
