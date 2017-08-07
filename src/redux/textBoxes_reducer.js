import undoable, { distinctState } from 'redux-undo';
import TextBox from '../components/TextBox/TextBox';

const textBoxesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TEXTBOX':
			return [
				...state,
				{
					id: action.id
				}
			]
		case 'DELETE_TEXTBOX':
			return [
				...state.filter(textbox => { return textbox.id !== action.id })
			]
		default:
			return state;
	}
}

const undoableTextBoxesReducer = undoable(textBoxesReducer, {
  filter: distinctState()
})

export default undoableTextBoxesReducer;
