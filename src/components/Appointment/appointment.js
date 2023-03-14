import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CustomForm from '../CustomForm/customform'
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
	const [activeStep, setActiveStep] = useState(0)
	const fields = useSelector((state) => state.appointment.fields)
	const appointment = useSelector((state) => state.appointment)

	return (
		<>
			<Button>Save</Button>
			<CardContent></CardContent>
			<CardActionArea>
				<CardActions>
					<Button variant={`contained`}>Add</Button>
				</CardActions>
				<CardActions>
					<Typography> This is the `${} page`</Typography>
					<Button>Save</Button>
				</CardActions>
			</CardActionArea>
		</>
	)
}
