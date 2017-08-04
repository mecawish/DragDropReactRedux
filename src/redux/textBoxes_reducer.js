import undoable, { distinctState } from 'redux-undo';
import TextBox from '../components/TextBox/TextBox';

const textBoxesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TEXTBOX':
			return state.concat(action.id);
		case 'DELETE_TEXTBOX':
			return state.filter((el) => {return el !== action.id});
		default:
			return state;
	}
}

const undoableTextBoxesReducer = undoable(textBoxesReducer, {
  filter: distinctState()
})

export default undoableTextBoxesReducer;

//export default textBoxesReducer;
