import { combineReducers } from 'redux'

function appointments(state = [], action) {
	switch (action.type) {
		case 'LOAD_APPOINTMENTS':
			return action.appointments
		case 'ADD_APPOINTMENT':
			return [...state, action.appointment]
		case 'REMOVE_APPOINTMENT':
			return state.filter((appointment) => appointment.id !== action.id)
		default:
			return state
	}
}

//create a reducer for the forms
function forms(state = [], action) {
	switch (action.type) {
		case 'LOAD_FORMS':
			return action.forms
		case 'ADD_FORM':
			return [...state, action.form]
		case 'REMOVE_FORM':
			return state.filter((form) => form.id !== action.id)
		default:
			return state
	}
}

function patients(state = [], action) {
	switch (action.type) {
		case 'LOAD_PATIENTS':
			return action.patients
		case 'ADD_PATIENT':
			return [...state, action.patient]
		case 'REMOVE_PATIENT':
			return state.filter((patient) => patient.id !== action.id)
		default:
			return state
	}
}

function requests(state = [], action) {
	switch (action.type) {
		case 'LOAD_REQUESTS':
			return action.requests
		case 'ADD_REQUEST':
			return [...state, action.request]
		default:
			return state
	}
}

function settings(state = {}, action) {
	switch (action.type) {
		case 'LOAD_SETTINGS':
			return action.settings
		case 'UPDATE_SETTINGS':
			return { ...state, ...action.settings }
		default:
			return state
	}
}

function editform(state = {}, action) {
	switch (action.type) {
		case 'LOAD_EDITFORM':
			return action.editform

		default:
			return state
	}
}

function patient(state = { id: '', details: {}, ssn: '' }, action) {
	switch (action.type) {
		case 'LOAD_PATIENT':
			return action.patient

		default:
			return state
	}
}

function appointment(
	state = {
		id: '',
		details: {
			status: '',
			summary: '',
			followup: '',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes: '',
		},
		type: '',
		status: 'scheduled',
		start: '',
		end: '',
		patient: '',
		provider: '',
	},
	action
) {
	switch (action.type) {
		case 'LOAD_APPOINTMENT':
			return action.appointment

		default:
			return state
	}
}

const allReducers = combineReducers({
	appointments,
	forms,
	patients,
	requests,
	settings,
	editform,
	patient,
	appointment,
})

export default allReducers
