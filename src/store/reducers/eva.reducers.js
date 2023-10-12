import { combineReducers } from 'redux'
import appointment from './appointment.reducers'

function appointments(state = [], action) {
	switch (action.type) {
		case 'LOAD_APPOINTMENTS':
			return action.appointments || []
		case 'ADD_APPOINTMENT':
			return [...state, action.appointment]
		case 'REMOVE_APPOINTMENT':
			return state.filter((appointment) => appointment.id !== action.id)
		default:
			return state
	}
}

function providers(state = [], action) {
	switch (action.type) {
		case 'LOAD_PROVIDERS':
			return action.providers
		case 'ADD_PROVIDER':
			return [...state, action.provider]
		case 'REMOVE_PROVIDER':
			return state.filter((provider) => provider.id !== action.id)
		default:
			return state
	}
}

//create a reducer for the forms

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

function patient(state = { id: '', details: {}, ssn: '' }, action) {
	switch (action.type) {
		case 'LOAD_PATIENT':
			return action.patient
		default:
			return state
	}
}

//create a reducer for the form property 'form'

//create a combined reducer with the properties of form and fields

const allReducers = combineReducers({
	appointments,

	patients,
	requests,
	patient,
	providers,
	appointment,
})

export default allReducers
