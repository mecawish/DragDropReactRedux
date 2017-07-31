/*import { combineReducers } from 'redux';
import textboxes_reducer from './textboxes_reducer';
import dragElement_reducer from './dragElement_reducer';

const DragAndDrop = combineReducers({
  textboxes_reducer
  dragElement_reducer
})

export default DragAndDrop;*/

import TextBox from '../components/TextBox/TextBox';

const reducer = (state={textboxes: []}, action) => {
	let textboxes = state.textboxes;
	switch(action.type){
		case 'ADD_TEXTBOX':
			return {textboxes: textboxes.concat(TextBox)}
		default:
			return state;
	}
}

export default reducer;