//IGNORE THIS FILE!!!!! GO TO formbuilder instead

import { combineReducers } from 'redux'

const defaultEditForm = {
	id: '',
	type: '',

	active: '',
	title: '',
	details: { fields: [] },
	addField: {
		type: '',
		label: '',
		choices: null,
	},
}

export default function activeEditForm(state = defaultEditForm, action) {
	switch (action.type) {
		case 'SET_ACTIVE_EDIT_FORM':
			return action.form
		default:
			return state
	}
}

/*
const active_edit_form = combineReducers({
	formid,
	type,
	active,
	title,
	details,
})



export default active_edit_form
*/
