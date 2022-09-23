import PatientActions from './patientcomponents/patientactions/patientactions'
import Allergies from './patientcomponents/allergies/allergies'
import AppointmentHistory from './patientcomponents/appointmenthistory/appointmenthistory'
import Insurance from './patientcomponents/insurance/insurance'
import Demographics from './patientcomponents/demographics/demographics'
import Medications from './patientcomponents/medications/medications'
import SurgicalHistory from './patientcomponents/surgicalhistory/surgicalhistory'
import Diagnoses from './patientcomponents/diagnoses/diagnoses'
/*
*
*
* 	{
		label: 'Medical History',
		path: '/medicalhistory',
		component: MedicalHistory,
	},
* {
		label: 'Family Medical History',
		path: '/familymedicalhistory',
		component: FamilyMedicalHistory,
	},
	{
		label: 'Social History',
		path: '/socialhistory',
		component: SocialHistory,
	},
*
* */

const routes = [
	{
		label: 'Actions',
		path: '/patientactions',
		component: PatientActions,
	},
	{
		label: 'Appointments',
		path: '/appointmenthistory',
		component: AppointmentHistory,
	},

	{
		label: 'Insurance',
		path: '/insurance',
		component: Insurance,
	},
	{
		label: 'Demographics',
		path: '/demographics',
		component: Demographics,
	},
	{
		label: 'Allergies',
		path: '/allergies',
		component: Allergies,
	},
	{
		label: 'Medications',
		path: '/medications',
		component: Medications,
	},
	{
		label: 'Diagnoses',
		path: '/diagnosis',
		component: Diagnoses,
	},
	{
		label: 'Surgical History',
		path: '/surgicalhistory',
		component: SurgicalHistory,
	},
]

export default routes
