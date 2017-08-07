import React from 'react';
import { connect } from 'react-redux';
import AddTextBoxButton from '../AddTextBoxButton/AddTextBoxButton';
import DropZone from '../DropZone/DropZone';
import UndoRedo from '../UndoRedo/UndoRedo';
import './container.css';

class Container extends React.Component {
	render() {
		const showUndoRedo = this.props.showUndoRedo;
	    return (
	    	<div>
				<AddTextBoxButton />
				{showUndoRedo ? <UndoRedo /> : <div className="placeHolder"></div>}
				<DropZone />
			</div>
	    );
	}
}

const mapStateToProps = state => {
  return {
    showUndoRedo: state.showUndoRedo
  };
}

export default connect(mapStateToProps)(Container);