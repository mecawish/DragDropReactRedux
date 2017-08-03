import { combineReducers } from 'redux';
import textboxesReducer from './textboxes_reducer';
import dragElementReducer from './dragElement_reducer';

const rootReducer = combineReducers({
  textboxesReducer,
  dragElementReducer
})

export default rootReducer;