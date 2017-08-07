import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';


const UndoRedo = ({ onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo}>
      Undo
    </button>
    <button onClick={onRedo}>
      Redo
    </button>
  </p>
);

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())
  }
}

export default connect(null, mapDispatchToProps)(UndoRedo);