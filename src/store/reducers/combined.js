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

/*import {
	patientnameanddetails,
	patientdiagnoses,
	patient_contact_methods,
	patientmedications,
	patientaddress,
	patientdemographics,
	drugallergies,
	foodallergies,
	latexallergy,
	petallergies,
	pollenallergy,
	surgicalhistory,
	addmedicationformicd10result,
	addMedicationFormMedication,
	patientinsurances,
} from './patient/patient.reducers'
import {
	appointmentassessments,
	assessmentinputfields,
	appointmentcomplaints,
	clinical_data,
	appointmentforms,
	appointmentformfields,
	activeAppointmentFormDetails,
	activeAppointmentFormFields,
	appointmentfindings,
	appointmentplans,
} from './appointment/appointment.reducers'

import {
	forms,
	newtextvalueoptions,
	newformfields,
	newformtitle,
	newformtype,
	previewtitle,
	previewfields,
	activeformscenterform,
} from './formscenter/formscenter.reducers'

function patientAppointmentHistory(state = [], action) {
	switch (action.type) {
		case 'initial_load_patient_history':
			return action.appointmenthistory
		default:
			return state
	}
}

function requestupdates(state = [], action) {
	switch (action.type) {
		case 'set_request_updates':
			return action.requestupdates
		default:
			return state
	}
}

function patientToSchedule(state = null, action) {
	switch (action.type) {
		case 'set_patient_to_schedule':
			return action.patient
		default:
			return state
	}
}

function patientRequests(state = [], action) {
	switch (action.type) {
		case 'load_patient_requests':
			return action.patientrequests
		default:
			return state
	}
}

//Shove every form in there, and then whenever you need one instead of pulling it up when the component loads
//You just grab it from here and filter what you need.
function allpracticeforms(state = [], action) {
	switch (action.type) {
		case 'load_all_practice_forms':
			return action.forms
		default:
			return state
	}
}

function clinicalqueue(state = [], action) {
	switch (action.type) {
		case 'check_in_patient':
			return action.newclinicalqueue
		case 'move_to_exam_room':
			return action.newclinicalqueue
		case 'move_to_waiting_room':
			return action.newclinicalqueue
		case 'appointment_in_progress':
			return action.newclinicalqueue
		case 'initial_load':
			return action.newclinicalqueue
		default:
			return state
	}
}

const formpreview = combineReducers({
	previewtitle,
	previewfields,
})

const newform = combineReducers({
	newformtitle,
	newformtype,
	newformfields,
	newtextvalueoptions,
})

const formsmanager = combineReducers({
	forms,
	activeformscenterform,
	newform,
	formpreview,
})

const patientallergies = combineReducers({
	drugallergies,
	foodallergies,
	latexallergy,
	petallergies,
	pollenallergy,
})

/!*const complaints = combineReducers({
  inputfields: newcomplaintinputfields,
  complaints: appointmentcomplaints,
});*!/

const assessments = combineReducers({
	assessments: appointmentassessments,
	inputfields: assessmentinputfields,
})

/!*const appointmentforms = combineReducers({
    clinicalexamforms,
    reviewofsystemforms
})*!/
const activeappointmentform = combineReducers({
	activeAppointmentFormFields,
	activeAppointmentFormDetails,
})
const appointment = combineReducers({
	appointmentcomplaints,
	assessments,
	clinical_data,
	appointmentforms,
	appointmentformfields,
	activeappointmentform,
	appointmentplans,
	appointmentfindings,
})
const patient = combineReducers({
	patientnameanddetails,
	patientdiagnoses,
	patientmedications,
	patient_contact_methods,
	patientinsurances,
	patientallergies,
	patientaddress,
	patientdemographics,
	surgicalhistory,
	addmedicationformicd10result,
	addMedicationFormMedication,
})

export const allReducers = combineReducers({
	allpracticeforms,
	clinicalqueue,
	patientToSchedule,
	formsmanager,
	patientAppointmentHistory,
	patientRequests,
	requestupdates,
	appointment,
	patient,
})*/

/*
    masteractiveappointmentformfields
function vitalsformschema(state={
    type: "array",
    title: "Vital Fields",
    items: [],
}, action) {
    switch (action.type) {
        case 'add_new_vitals_property':
            return {...state, properties: {...state.properties, ...action.newproperty}};

        case 'add_new_field':
            return {...state, items: [...state.items, action.newfield]};

        default:
            return state;


    }
}
function vitalsformuischema(state={
    "temperatureChecked": {
        classNames: "custom-field-input"
    },
    "Temperature": {
        classNames: "custom-field-input"
    },
    "ui:options": {
        label: false,
        addable: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;


    }
}

function assessmentformschema(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}
function assessmentformuischema(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}
function patientcomplaintsformschema(state={
    "type": "object",
    "title": "Patient Complaints Form Fields",
        "properties": {
            "icd10code": {"type": "string", "title": "ICD 10 Code"},
            "icd10description": {"type": "string", "title": "ICD 10 Description"},
            "onset": {"type": "string", "title": "Onset"},
            "progression": {"type": "string", "title": "Progression"},
            "caused_by": {"type": "string", "title": "Caused By"},
        }
}, action) {
    switch (action.type) {
        case 'add_new_complaints_property':
            return {...state, properties: {...state.properties, ...action.newproperty}}
        default:
            return state;


    }
}
function patientcomplaintsformuischema(state={
    "ui:options": {
        label: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;


    }
}
export function reviewofsystemsformschema(state = {
    "type": "object",
    "title": "",
    "properties": {
        "no_allergies": {
            "type": "boolean",
            "title": "No Allergies",
            "default": true,
        },
        "hiv": {
            "type": "boolean",
            "title": "HIV",
            "default": false,
        },

    }
}, action) {
    switch (action.type) {
        default:
            return state;

    }
}
export function reviewofsystemsformuischema(state = {
    "ui:options": {
        label: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;

    }
}
 */
