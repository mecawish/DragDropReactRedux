const ADD_TEXTBOX = 'ADD_TEXTBOX'
export const addTextBox = {
	type: ADD_TEXTBOX
};

const SELECT_ELEMENT = 'SELECT_ELEMENT'
export const mouseDown = (el) => {
	return {
		type: SELECT_ELEMENT,
		payload: el
	}
};