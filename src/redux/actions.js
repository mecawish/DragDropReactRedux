let textBoxId = 1;
export const addTextBox = () => {
	return {
		type: 'ADD_TEXTBOX',
		id: textBoxId++, 
		text: "You added a textbox!"
	}
};

export const deleteTextBox = (id) => {
	return {
		type: 'DELETE_TEXTBOX',
		id: id,
		text: "You deleted a textbox!"
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

export const helloWorld = (data) => {
	return {
		type: 'HELLO_WORLD',
		message: data.message
	}
};

export const removeHello = () => {
	return {
		type: 'REMOVE_HELLO',
	}
};

export const loadTextboxes = () => {
	return {
		type: 'LOAD_TEXTBOXES',
	}
};

export const displayTextboxes = (data) => {
	return {
		type: 'DISPLAY_TEXTBOXES',
		id: data.id,
		left: data.styleLeft,
		top: data.styleTop,
		text: data.inputText
	}
};