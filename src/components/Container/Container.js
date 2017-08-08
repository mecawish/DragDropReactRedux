import React from 'react';
import { connect } from 'react-redux';
import AddTextBoxButton from '../AddTextBoxButton/AddTextBoxButton';
import DropZone from '../DropZone/DropZone';
import UndoRedo from '../UndoRedo/UndoRedo';
import Notification from '../Notification/Notification';
import './container.css';

class Container extends React.Component {
	render() {
		const showUndoRedo = this.props.showUndoRedo;
		const notification = this.props.notification;
	    return (
	    	<div>
				<AddTextBoxButton />			
				{ notification && <Notification text={this.props.text} /> }
				{ showUndoRedo ? <UndoRedo /> : <div className="placeHolder"></div> }
				<DropZone />
			</div>
	    );
	}
}

const mapStateToProps = state => {
  return {
    showUndoRedo: state.showUndoRedo,
    notification: state.notification.value,
    text: state.notification.text
  };
}

export default connect(mapStateToProps)(Container);