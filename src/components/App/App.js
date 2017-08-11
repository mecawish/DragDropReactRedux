import React from 'react';
import { connect } from 'react-redux';
import AddTextBoxButton from '../AddTextBoxButton/AddTextBoxButton';
import DropZone from '../DropZone/DropZone';
import UndoRedo from '../UndoRedo/UndoRedo';
import Notification from '../Notification/Notification';
import './App.css';

class Container extends React.Component {
	render() {
		const { showUndoRedo, notification, text, message, testAction } = this.props;

	    return (
	    	<div>
	    		<div className="test">{message}</div>
	    		<a className="test" onClick={testAction}>Knock Knock</a>
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
    text: state.notification.text,
    message: state.notification.message
  };
}

const testAction = () => ({
  type: "TEST_ACTION"
})

export default connect(mapStateToProps, { testAction })(Container);