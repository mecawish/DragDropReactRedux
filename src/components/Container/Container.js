import React from 'react';
import { connect } from 'react-redux';
import AddTextBoxButton from '../AddTextBoxButton/AddTextBoxButton';
import DropZone from '../DropZone/DropZone';
import UndoRedo from '../UndoRedo/UndoRedo';
import Notification from '../Notification/Notification';
import './container.css';

class Container extends React.Component {
	render() {
		const { showUndoRedo, notification, text } = this.props;

	    return (
	    	<div>
				<AddTextBoxButton />			
				{ notification && <Notification text={text} /> }
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