const initialState = {
	dragElement: null,
	startX: 0,
	startY: 0,
	offsetX: 0,
	offsetY: 0 
}

const dragElementReducer = (state=initialState, action) => {
	let textboxes = state.textboxes;
	switch(action.type){
		case 'SELECT_ELEMENT':
			return {
				dragElement: el.target
			}
		case 'MOVE_ELEMENT':
			//return
		case 'UNSELECT_ELEMENT':
			//return 
		default:
			return state;
	}
}

export default textboxesReducer;