const notificationsReducer = (state = { value: false, text: "", message: "" }, action) => {
	switch(action.type){
		case 'SHOW_NOTIFICATION':
			return {
				...state,
				value: true,
				text: action.text
			}
		case 'HIDE_NOTIFICATION':
			return {
				...state,
				value: false,
				text: ""
			}
		case 'HELLO_WORLD':
			return {
				...state,
				message: action.message
			}
		case 'REMOVE_HELLO':
			return {
				...state,
				message: ""
			}
		default:
			return state;
	}
}

export default notificationsReducer;
