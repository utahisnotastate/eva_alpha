import React, { useEffect, useState } from 'react'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
	Calendar as BigCalendar,
	momentLocalizer,
	Views,
} from 'react-big-calendar'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import { useModal } from 'react-modal-hook'
import API_URL from '../../api/api_url'
import Card from '../basestyledcomponents/Card/Card'
import CardBody from '../basestyledcomponents/Card/CardBody'
import AppointmentScheduleEvent from './Day/Appointment/appointmentscheduleevent'
import ScheduleAppointmentModal from './ScheduleAppointmentModal/scheduleappointmentmodal'
import styles from '../basestyledcomponents/buttonStyle'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import toDate from '@fav/type.to-date'
//var toDate = require('@fav/type.to-date')

const localizer = momentLocalizer(moment)

const useStyles = makeStyles(styles)

export default function Scheduling() {
	const dispatch = useDispatch()
	let { id } = useParams()
	const appointments = useSelector((state) => state.appointments)

	// const [appointmentcreated, setAppointmentCreated] = useState(false);
	const { register, handleSubmit, control, errors } = useForm()

	// gets new appointments after appointment has been scheduled

	// handles create new patient form
	const onSubmit = (data) => {
		console.log(data)

		// this schedules appointment. I dont know why I don't have this in the appointment API.
		//
	}
	// console.log(errors);
	// resources are the providers
	const [resources, setResources] = useState([])
	//const [appointments, setAppointments] = useState([])
	// holds the values of the appointment information for the form to have
	const [slottoschedule, setSlotToSchedule] = useState()
	const [showModal, hideModal] = useModal(
		({ in: open, onExited }) => {
			return (
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Dialog
							disableBackdropClick={true}
							open={true}
							onExited={onExited}
							onClose={hideModal}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
								}}>
								<Fab color="primary" onClick={hideModal}>
									X
								</Fab>
							</div>
							<DialogTitle>Schedule appointment</DialogTitle>
							<DialogContent>
								<ScheduleAppointmentModal
									slottoschedule={slottoschedule}
									patient={id}
									register={register}
									control={control}
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleSubmit(onSubmit)}>
									Schedule
								</Button>
							</DialogActions>
						</Dialog>
					</form>
				</div>
			)
		},
		[slottoschedule]
	)

	useEffect(() => {
		// gets providers
		const fetchData = async () => {
			const result = await axios(`${API_URL}/providers/`)
			console.log(result)
			setResources(result.data)
		}
		fetchData().catch((err) => console.log(err))
	})

	useEffect(() => {
		//gets appointments on mount
		const fetchData = async () => {
			const result = await axios(`${API_URL}/appointments/`)
			// console.log(result.data);
			let appointments = result.data
			let convertedappointments = []
			appointments.forEach((appointment) => {
				let newstart = toDate.RFC3339(appointment.start)
				let newend = toDate.RFC3339(appointment.end)
				let resourceId = appointment.provider
				// console.log(appointment.provider);
				// console.log({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
				convertedappointments.push({
					...appointment,
					...{ start: newstart, end: newend, resourceId: resourceId },
				})
			})
		}
		fetchData()
			.then((appointments) => {
				dispatch({ type: 'LOAD_APPOINTMENTS', appointments })
			})
			.catch((err) => console.log(err))
	})
	const handleSelect = ({ start, end, resourceId }) => {
		if (start === end) {
			return false
		}
		setSlotToSchedule({ start, end, resourceId })
		showModal()
	}
	const eventColors = (event) => {
		// console.log(event);
		return {
			style: {
				backgroundColor: '#1f618d',
			},
		}
	}

	const calendercomponents = {
		day: {
			event: AppointmentScheduleEvent,
		},
		week: {
			event: AppointmentScheduleEvent,
		},
	}

	const opentime = () => {
		let date = new Date()
		date.setHours(8, 0)
		return date
	}
	const closetime = () => {
		let date = new Date()
		date.setHours(17, 0)
		return date
	}
	return (
		<Grid container justifyContent={`center`}>
			<Grid item xs={12} sm={12} md={10}>
				<Card>
					<CardBody calendar={false}>
						<BigCalendar
							selectable
							localizer={localizer}
							drilldownView="day"
							events={appointments}
							defaultView={Views.DAY}
							views={['month', 'work_week', 'day']}
							scrollToTime={new Date(1970, 1, 1, 6)}
							defaultDate={new Date()}
							onSelectEvent={(event) => console.log(event)}
							onSelectSlot={handleSelect}
							eventPropGetter={eventColors}
							resources={resources}
							resourceTitleAccessor="last_name"
							resourceIdAccessor={(resource) => {
								return resource.id
							}}
							titleAccessor="type"
							min={opentime()}
							max={closetime()}
							onView={(view) => console.log('View is ' + view)}
							components={calendercomponents}
						/>
					</CardBody>
				</Card>
			</Grid>
		</Grid>
	)
}
