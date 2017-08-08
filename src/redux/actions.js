let textBoxId = 0;
export const addTextBox = () => {
	return {
		type: 'ADD_TEXTBOX',
		id: textBoxId++, 
		text: "added"
	}
};

export const deleteTextBox = (id) => {
	return {
		type: 'DELETE_TEXTBOX',
		id: id,
		text: "deleted"
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

export const showButtons = () => {
	return {
		type: 'SHOW_BUTTONS'
	}
};

export const showNotification = text => {
	return {
		type: 'SHOW_NOTIFICATION',
		text: text
	}
};

export const hideNotification = () => {
	return {
		type: 'HIDE_NOTIFICATION'
	}
};