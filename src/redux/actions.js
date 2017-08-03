export const addTextBox = () => {
	return {
		type: 'ADD_TEXTBOX'	
	}
};

export const mouseDown = e => {
	return {
		type: 'SELECT_ELEMENT',
		payload: e
	}
};

export const mouseMove = e => {
	return {
		type: 'MOVE_ELEMENT',
		payload: e
	}
};