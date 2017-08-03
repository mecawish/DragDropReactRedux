import { combineReducers } from 'redux';
//import undoable from 'redux-undo';
import textboxesReducer from './textboxes_reducer';
import dragElementReducer from './dragElement_reducer';
import inputTextReducer from './inputText_reducer';

const rootReducer = combineReducers({
  textboxes: textboxesReducer,
  dragElementReducer,
  inputText: inputTextReducer
})

export default rootReducer;