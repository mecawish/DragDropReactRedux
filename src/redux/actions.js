let textBoxId = 1;
export const addTextBox = () => {
	return {
		type: 'ADD_TEXTBOX',
		id: textBoxId++
	}
};

export const deleteTextBox = (id) => {
	console.log(id);
	return {
		type: 'DELETE_TEXTBOX',
		id: textBoxId
	}
};

export const mouseDown = e => {
	return {
		type: 'SELECT_ELEMENT',
		payload: e
	}
};

export const mouseUp = e => {
	return {
		type: 'UNSELECT_ELEMENT',
		payload: e
	}
};

export const editText = text => {
	return {
		type: 'EDIT_TEXT',
		payload: text
	}
};