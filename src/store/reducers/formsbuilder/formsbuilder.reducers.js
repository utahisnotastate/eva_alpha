const initialformvalues = {
	id: '',
	type: '',

	active: '',
	title: '',
	details: { fields: [] },
}

export function form(state = initialformvalues, action) {
	switch (action.type) {
		case 'FORM_EDITOR_LOADED':
			return {
				...state,
				...action.form,
			}
		default:
			return state
	}
}
