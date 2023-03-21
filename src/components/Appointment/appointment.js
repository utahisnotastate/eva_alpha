import * as React from 'react'
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Container,
	Divider,
	Grid,
	Typography,
	Stepper,
	Step,
	StepButton,
	InputLabel,
	FormControl,
	MenuItem,
} from '@mui/material'
import AppointmentForm from './appointmentform'
import { TextField, Select } from 'formik-material-ui'
import { Formik, Form, FieldArray, Field } from 'formik'
import EVAStepper from './EVAStepper'
import EVAFieldArray from './components/EVAFieldArray'
import Button from '@mui/material/Button'
import SideNav from './sidenav'

function Appointment() {
	const [activeStep, setActiveStep] = React.useState(0)
	const [zones, setZones] = React.useState([
		{ zone: 'complaints', label: 'Complaints' },
		{ zone: 'assessment', label: 'Assessment' },
		{ zone: 'physical_exam', label: 'Physical Exam' },
		{ zone: 'plan', label: 'Plan' },
		{ zone: 'review_of_systems', label: 'Review of Systems' },
		{ zone: 'summary', label: 'Summary' },
	])
	const [active_zone, setActiveZone] = React.useState({
		zone: 'complaints',
		label: 'Complaints',
	})

	const handleZoneClick = (zone) => {
		setActiveZone(zone)
	}

	const initial_appointment_values = {
		patient: '1',
		provider: '1',
		details: {
			complaints: [],
			assessment: [],
			physical_exam: [],
			plan: [],
			review_of_systems: [],
			summary: '',
		},
		type: 'consultation',
		status: 'scheduled',
		start: '2021-09-01T10:00:00-04:00',
		end: '2021-09-01T10:30:00-04:00',
		complaints: [],
		assessment: [],
		physical_exam: [],
		plan: [],
		review_of_systems: [],
		summary: '',
		fields: [
			{ type: 'text', label: 'summary', zone: 'summary', value: '' },
			{
				type: 'text',
				label: 'complaints',
				zone: 'complaints',
				value: '',
			},
			{
				type: 'text',
				label: 'assessment',
				zone: 'assessment',
				value: '',
			},
			{
				type: 'text',
				label: 'physical_exam',
				zone: 'physical_exam',
				value: '',
			},
			{ type: 'text', label: 'plan', zone: 'plan', value: '' },
			{
				type: 'text',
				label: 'review_of_systems',
				zone: 'review_of_systems',
				value: '',
			},
		],
	}

	const handleStep = (step) => () => {
		setActiveStep(step)
	}
	return (
		<Box>
			<Card>
				<CardHeader title="Appointment" />
				<Stepper nonLinear activeStep={activeStep}>
					{zones.map((zone, index) => (
						<Step key={index}>
							<StepButton
								color="inherit"
								onClick={handleStep(zone)}>
								{zone.label}
							</StepButton>
						</Step>
					))}
				</Stepper>
				<Divider />
				<CardContent></CardContent>
			</Card>
		</Box>
	)
}
export default Appointment
