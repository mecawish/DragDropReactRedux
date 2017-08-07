const showUndoRedoReducer = (state = false, action) => {
	switch(action.type){
		case 'SHOW_BUTTONS':
			return true;
		default:
			return state;
	}
}

export default showUndoRedoReducer;