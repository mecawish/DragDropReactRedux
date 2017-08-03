const textboxesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TEXTBOX':
			return state.concat("textbox")
		default:
			return state;
	}
}

export default textboxesReducer;