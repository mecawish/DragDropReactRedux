import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Notification.css';

class Notification extends React.Component {
	render(){
		return (
			<div className="notif">{this.props.text}</div>
		);
	}
}

Notification.propTypes = {
	text: PropTypes.string.isRequired
};

export default Notification;