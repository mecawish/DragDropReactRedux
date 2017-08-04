import undoable, { distinctState } from 'redux-undo';

const initialState = {
	dragElement: null,
	startX: 0,
	startY: 0,
	offsetX: 0,
	offsetY: 0 
}

const dragElementReducer = (state = initialState, action) => {
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
		case 'UNSELECT_ELEMENT':
			return {
				dragElement: null,
				//offsetX: e.target.offsetLeft,
				//offsetY: e.target.offsetTop
			} 
		default:
			return state;
	}
}

/*const undoableDragElementReducer = undoable(dragElementReducer, {
  filter: distinctState()
})

export default undoableDragElementReducer;*/

export default dragElementReducer;
