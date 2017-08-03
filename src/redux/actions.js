export const mouseDown = el => {
	return {
		type: 'SELECT_ELEMENT',
		payload: el
	}
};

export const addTextBox = () => {
	return {
		type: 'ADD_TEXTBOX'	
	}
};