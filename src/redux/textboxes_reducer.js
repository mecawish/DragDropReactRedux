const textboxesReducer = (state={textboxes: []}, action) => {
	let textboxes = state.textboxes;
	switch(action.type){
		case 'ADD_TEXTBOX':
			return {textboxes: textboxes.concat("textbox")}
		default:
			return state;
	}
}

export default textboxesReducer;