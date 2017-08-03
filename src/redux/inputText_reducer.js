const inputTextReducer = (state = "Meliza", action) => {
	switch(action.type){
		case 'EDIT_TEXT':
			return action.payload
		default:
			return state;
	}
}

export default inputTextReducer;