import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useRouteMatch } from 'react-router-dom'
import Card from '../basestyledcomponents/Card/Card'
import AppointmentStepper from './components/appointmentstepper'
import Typography from '@mui/material/Typography'
import 'react-wizardry/dist/react-wizardry.css'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { CardActionArea } from '@mui/material'

export default function Appointment() {
	let { path } = useRouteMatch()
	let { id } = useParams()
	const [activeStep, setActiveStep] = useState(2)
	const appointment = useSelector((state) => state.appointment)

	const {
		preappointment,
		complaints,
		diagnoses,
		physical_exam,
		review_of_systems,
		treatment_plan,
	} = appointment

	// create a function that will render the correct component based on the view
	// this will be used in the switch statement belo
	return (
		<Card>
			<Button>Save</Button>
			<CardHeader title="Appointment" color={'primary'} />
			<CardContent>
				<AppointmentStepper
					activeStep={activeStep}
					setActiveStep={setActiveStep}
				/>
			</CardContent>
			<CardActionArea>
				<CardActions>
					<Button variant={`contained`}>Add</Button>
				</CardActions>
				<CardActions>
					<Typography> This is the `${} page`</Typography>
					<Button>Save</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	)
}
