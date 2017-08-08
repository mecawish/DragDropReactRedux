const notificationsReducer = (state = { value: false, text: "" }, action) => {
	switch(action.type){
		case 'SHOW_NOTIFICATION':
			return {
				value: true,
				text: action.text
			}
		case 'HIDE_NOTIFICATION':
			return {
				value: false,
				text: ""
			}
		default:
			return state;
	}
}

export default notificationsReducer;
