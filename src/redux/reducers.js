import { combineReducers } from 'redux';
import textBoxesReducer from './textBoxes_reducer';
import dragElementReducer from './dragElement_reducer';
import inputTextReducer from './inputText_reducer';

const rootReducer = combineReducers({
  textboxes: textBoxesReducer,
  dragElementReducer,
  inputText: inputTextReducer
})

export default rootReducer;