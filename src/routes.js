import React from 'react'
import Home from './components/Home/home'
import MedicalAppointment from './components/Appointment/components/medicalappointment'
import ClinicalQueue from './components/ClinicalQueue/clinicalqueue'
import Patients from './components/Patients/patients'
import PatientRequests from './components/PatientRequests/patientrequests'
import FormsBuilder from './redone/FormsBuilder/FormsBuilder'
import FormCenter from './components/Eva/formcenter/formcenter'
import FormBuilder from './components/FormBuilder/formbuilder'
import Patient from './components/Patient/patient'
import FormsCenterHome from './components/FormsCenter/FormsCenterHome'
import Scheduling from './components/Scheduling/scheduling'

const physicalexamfields = [
	{ label: 'Label 1', type: 'text' },
	{ label: 'Label 2', type: 'textarea' },
	{
		label: 'Label 3',
		type: 'radiogroup',
		options: [
			{ label: 'Option Label 1' },
			{ label: 'Option Label 2' },
			{ label: 'Option Label 3' },
		],
	},
	{ label: 'Label 5', type: 'textarea' },
]

const physicalexaminputs = [
	{ buttonlabel: 'text', type: 'text', label: 'Test text push' },
	{ buttonlabel: 'textarea', type: 'textarea', label: '22222' },
	{ buttonlabel: 'radio', type: 'radio', label: '', options: [] },
	{ buttonlabel: 'range', type: 'range', label: '', min: '', max: '' },
]

const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		displayInNav: true,
		label: 'Home',
	},
	{
		path: '/appointments/:id',
		exact: false,
		label: null,
		displayInNav: false,
		component: MedicalAppointment,
	},
	{
		path: '/clinicalqueue',
		exact: false,
		component: ClinicalQueue,
		displayInNav: true,
		label: 'Clinical Queue',
	},
	{
		path: '/patients',
		exact: true,
		component: Patients,
		displayInNav: true,
		label: 'Patients',
	},
	{
		path: '/patientrequests',
		exact: true,
		component: PatientRequests,
		label: 'Patient Requests',
		displayInNav: true,
	},
	{
		path: '/formscenter',
		exact: false,
		displayInNav: true,
		component: FormsBuilder,
		label: 'Forms Center',
	},
	{
		path: '/Eva/formcenter/formcenter',
		exact: false,
		displayInNav: true,
		component: FormCenter,
		label: 'compoents/eva/formcenter/formcenter',
	},
	{
		path: '/components/FormBuilder/formbuilder',
		exact: false,
		displayInNav: true,
		component: FormBuilder,
		label: 'components/FormBuilder/formbuilder',
	},
	{
		path: './components/FormsCenter/FormsCenterHome',
		exact: false,
		displayInNav: true,
		component: FormsCenterHome,
		label: 'components/FormsCenter/FormsCenterHome',
	},
	{
		path: '/redone/F',
	},
	{
		path: '/patient/:id',
		exact: false,
		component: Patient,
		label: null,
	},
	{
		path: '/scheduling/:id',
		exact: false,
		component: Scheduling,
		label: null,
		displayInNav: false,
	},
	{
		path: '/scheduling',
		exact: false,
		component: Scheduling,
		label: 'Scheduling',
		displayInNav: true,
	},
]

export default routes
