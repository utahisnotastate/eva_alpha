import React from 'react'
import AppointmentScheduleEventToolTip from './components/AppointmentScheduleEventToolTip/appointmentscheduleeventtooltip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	popover: {
		pointerEvents: 'none',
		backgroundColor: 'transparent',
	},
	paper: {
		padding: theme.spacing(1),
	},
}))

export default function AppointmentScheduleEvent(props) {
	// console.log(props);
	return <AppointmentScheduleEventToolTip event={props.event} />
}
