const initialState = {
	dragElement: null,
	startX: 0,
	startY: 0,
	offsetX: 0,
	offsetY: 0 
}

const dragElementReducer = (state=initialState, action) => {
	const e = action.payload;
	switch(action.type){
		case 'SELECT_ELEMENT':
			return {
				dragElement: e.target,
				startX: e.pageX, 
				startY: e.pageY,
				offsetX: e.target.offsetLeft,
				offsetY: e.target.offsetTop
			}
		case 'MOVE_ELEMENT':
			//return
		case 'UNSELECT_ELEMENT':
			//return 
		default:
			return state;
	}
}

export default dragElementReducer;