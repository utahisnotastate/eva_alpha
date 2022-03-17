import { combineReducers } from 'redux'
import activeEditForm from './formsbuilder/formsbuilder.reducers'

function forms(state = {}, action) {
	switch (action.type) {
		case 'ADD_FORM':
			return {
				...state,
				[action.form.id]: action.form,
			}
		case 'UPDATE_FORM':
			return {
				...state,
				[action.form.id]: action.form,
			}
		case 'DELETE_FORM':
			const newState = { ...state }
			delete newState[action.formId]
			return newState

		case 'LOAD_FORMS':
			return action.forms
		default:
			return state
	}
}

export const allReducers = combineReducers({
	activeEditForm,
	forms,
})
