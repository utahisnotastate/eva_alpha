import { combineReducers } from 'redux'

function preappointment(state = '', action) {
	switch (action.type) {
		case 'LOAD_PREAPPOINTMENT':
			return action.preappointment
		default:
			return state
	}
}

function complaints(state = [], action) {
	switch (action.type) {
		case 'LOAD_COMPLAINTS':
			return action.complaints
		case 'DELETE_COMPLAINT':
			return state.filter((complaint) => complaint.id !== action.id)
		default:
			return state
	}
}

function diagnoses(state = [], action) {
	switch (action.type) {
		case 'LOAD_DIAGNOSES':
			return action.diagnoses
		case 'ADD_DIAGNOSIS':
			return [...state, action.diagnosis]
		case 'DELETE_DIAGNOSIS':
			return state.filter((diagnosis) => diagnosis.id !== action.id)
		default:
			return state
	}
}

function physical_exam(state = [], action) {
	switch (action.type) {
		case 'LOAD_PHYSICAL_EXAM':
			return action.physical_exam
		case 'ADD_PHYSICAL_EXAM':
			return [...state, action.physical_exam]
		case 'DELETE_PHYSICAL_EXAM':
			return state.filter(
				(physical_exam) => physical_exam.id !== action.id
			)
		default:
			return state
	}
}

function review_of_systems(state = [], action) {
	switch (action.type) {
		case 'LOAD_REVIEW_OF_SYSTEMS':
			return action.review_of_systems
		case 'ADD_REVIEW_OF_SYSTEMS':
			return [...state, action.review_of_systems]
		case 'DELETE_REVIEW_OF_SYSTEMS':
			return state.filter(
				(review_of_systems) => review_of_systems.id !== action.id
			)
		default:
			return state
	}
}

function treatment_plan(state = [], action) {
	switch (action.type) {
		case 'LOAD_TREATMENT_PLAN':
			return action.treatment_plan
		case 'ADD_TREATMENT_PLAN':
			return [...state, action.treatment_plan]
		case 'DELETE_TREATMENT_PLAN':
			return state.filter(
				(treatment_plan) => treatment_plan.id !== action.id
			)
		default:
			return state
	}
}

const appointment = combineReducers({
	preappointment,
	complaints,
	diagnoses,
	physical_exam,
	review_of_systems,
	treatment_plan,
})

export default appointment
