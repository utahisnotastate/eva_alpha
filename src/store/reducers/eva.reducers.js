import { combineReducers } from 'redux'
import appointment from './appointment.reducers'

const mockforms = [
	{
		zone: 'physical_exam',
		title: 'Physical Exam',
		fields: [
			{
				autoComplete: 'on',
				autoFocus: false,
				classes: {
					root: 'my-class',
					input: 'my-input',
				},
				color: 'secondary',
				defaultValue: 'default value',
				disabled: true,
				error: false,
				FormHelperTextProps: {
					variant: 'outlined',
				},
				fullWidth: true,
				helperText: 'Enter some text here',
				hiddenLabel: false,
				id: 'input-1',
				InputLabelProps: {
					shrink: true,
				},
				inputProps: {
					maxLength: 10,
				},
				InputProps: {
					disableUnderline: true,
				},
				inputRef: null,
				label: 'Input label',
				maxRows: 5,
				minRows: 2,
				multiline: true,
				name: 'input-name',
				onChange: "() => console.log('Input changed')",
				placeholder: 'Enter text here...',
				required: true,
				rows: 3,
				rowsMax: 10,
				select: true,
				SelectProps: {
					native: true,
				},
				size: 'small',
				type: 'password',
				value: 'some value',
			},
			{
				autoComplete: 'off',
				autoFocus: true,
				classes: {
					root: 'my-other-class',
					input: 'my-other-input',
				},
				color: 'primary',
				defaultValue: '',
				disabled: false,
				error: true,
				FormHelperTextProps: {
					error: true,
				},
				fullWidth: false,
				helperText: 'Error message goes here',
				hiddenLabel: true,
				id: 'input-2',
				InputLabelProps: {
					shrink: false,
				},
				inputProps: {
					minLength: 3,
				},
				InputProps: {
					disableUnderline: false,
				},
				inputRef: null,
				label: 'Some label 222',
				maxRows: 4,
				minRows: 1,
				multiline: true,
				name: 'some-name',
				onChange: "() => console.log('Input changed')",
				placeholder: 'Some placeholder...',
				required: false,
				rows: 2,
				rowsMax: 8,
				select: false,
				SelectProps: {
					native: false,
				},
				size: 'large',
				type: 'text',
				value: 'random value',
			},
		],
	},
]

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

function customfields(state = [], action) {
	switch (action.type) {
		case 'LOAD_CUSTOM_FIELDS':
			return action.customfields
		case 'ADD_CUSTOM_FIELD':
			return [...state, action.customfield]

		case 'UPDATE_CUSTOM_FIELDS':
			return action.customfields
		case 'REMOVE_CUSTOM_FIELD':
			return state.filter((customfield) => customfield.id !== action.id)
		default:
			return state
	}
}

//create a reducer for the forms
function forms(state = mockforms, action) {
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

function formbuilder(state = {zone: 'Test Form Builder', title: "Test Form Builder", fields: []}, action) {
	switch (action.type) {
		case 'LOAD_FORM_TO_EDIT':
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
	customfields,
	patients,
	requests,
	settings,
	formbuilder,
	editform,
	patient,
	appointment,
})

export default allReducers
