import Home from './components/Home/home'
import MedicalAppointment from './components/Appointment/components/medicalappointment'
import ClinicalQueue from './components/ClinicalQueue/clinicalqueue'
import Patients from './components/Patients/patients'
import PatientRequests from './components/PatientRequests/patientrequests'
import FormsBuilder from './redone/FormsBuilder/FormsBuilder'
import Patient from './components/Patient/patient'
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
		component: FormsBuilder,
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
