import React from 'react'
import Home from './components/Home/home'
import MedicalAppointment from './components/Appointment/components/medicalappointment'
import ClinicalQueue from './components/ClinicalQueue/clinicalqueue'
import Patients from './components/Patients/patients'
import PatientRequests from './components/PatientRequests/patientrequests'
import Patient from './components/Patient/patient'
import FormsCenterHome from './components/FormsCenter/FormsCenterHome'
import FormBuilder from './components/FormBuilder/formbuilder'
import Scheduling from './components/Scheduling/scheduling'

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
		component: FormBuilder,
		label: 'Forms Center',
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

/*
* 	{
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
*
*
* */
