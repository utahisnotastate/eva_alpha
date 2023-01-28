import { combineReducers } from 'redux'
import appointment from './appointment.reducers'
import base_zones from '../../api/zones'

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

function zones(state = base_zones, action) {
	switch (action.type) {
		case 'LOAD_ZONES':
			return action.zones
		case 'ADD_ZONE':
			return [...state, action.zone]
		case 'REMOVE_ZONE':
			return state.filter((zone) => zone.id !== action.id)
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

//create a reducer for the form property 'form'
function form(
	state = { form: 'complaints', title: 'New Complaint', inputs: [] },
	action
) {
	switch (action.type) {
		case 'SET_FORM':
			return action.form
		default:
			return state
	}
}

//create a combined reducer with the properties of form and fields

const allReducers = combineReducers({
	appointments,
	forms,
	form,
	patients,
	requests,
	settings,
	editform,
	patient,
	zones,
	appointment,
})

export default allReducers
