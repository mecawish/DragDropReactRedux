import React from 'react';
import { connect } from 'react-redux';
import './Notification.css';

class Notification extends React.Component {
	render(){
		return (
			<div className="notif">You {this.props.text} a textbox!</div>
		);
	}
}

export default Notification;