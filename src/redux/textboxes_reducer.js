import undoable, { distinctState } from 'redux-undo';

const textboxesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TEXTBOX':
			return state.concat(action.id)
		default:
			return state;
	}
}

const undoableTextboxesReducer = undoable(textboxesReducer, {
  filter: distinctState()
})

export default undoableTextboxesReducer;

//export default textboxesReducer;
