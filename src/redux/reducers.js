//import { combineReducers } from 'react';

//const rootReducer = combineReducers({
	//textboxes: []
//});

const addTextBox = () => {
	return {
		type: 'ADD_TEXTBOX'	
	}
}

const reducer = (state={textboxes: [1,2]}, action) => {
	switch(action.type){
		case ('ADD_TEXTBOX'):
			//return {textboxes: }; add one textbox
		default:
			return state;
	}
}

export default reducer;