import * as React from 'react'
import Paper from '@mui/material/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
	Appointments,
	DayView,
	Scheduler,
} from '@devexpress/dx-react-scheduler-material-ui'

const currentDate = '2018-11-01'
const schedulerData = [
	{
		startDate: '2018-11-01T09:45',
		endDate: '2018-11-01T11:00',
		title: 'Meeting',
	},
	{
		startDate: '2018-11-01T12:00',
		endDate: '2018-11-01T13:30',
		title: 'Go to a gym',
	},
]
export default function Schedule() {
	return (
		<Paper>
			<Scheduler data={schedulerData}>
				<ViewState currentDate={currentDate} />
				<DayView startDayHour={8} endDayHour={22} />

				<Appointments />
			</Scheduler>
		</Paper>
	)
}
