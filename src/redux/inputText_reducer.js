//import undoable, { distinctState } from 'redux-undo';

const inputTextReducer = (state = "", action) => {
	switch(action.type){
		case 'EDIT_TEXT':
			return action.payload
		default:
			return state;
	}
}

/*const undoableInputTextReducer = undoable(inputTextReducer, {
  filter: distinctState()
})

export default undoableInputTextReducer;*/
export default inputTextReducer;