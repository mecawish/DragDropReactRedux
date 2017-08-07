import { combineReducers } from 'redux';
import textBoxesReducer from './textBoxes_reducer';
import dragElementReducer from './dragElement_reducer';
import inputTextReducer from './inputText_reducer';
import showUndoRedoReducer from './showUndoRedo_reducer';

const rootReducer = combineReducers({
  textboxes: textBoxesReducer,
  dragElementReducer,
  inputText: inputTextReducer,
  showUndoRedo: showUndoRedoReducer
})

export default rootReducer;