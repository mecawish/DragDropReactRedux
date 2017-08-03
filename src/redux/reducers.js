import { combineReducers } from 'redux';
import textboxesReducer from './textboxes_reducer';
import dragElementReducer from './dragElement_reducer';
import inputTextReducer from './inputText_reducer';

const rootReducer = combineReducers({
  textboxes: textboxesReducer,
  dragElementReducer,
  inputText: inputTextReducer
})

export default rootReducer;