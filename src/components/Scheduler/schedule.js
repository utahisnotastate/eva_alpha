import React from 'react'
import {
	Scheduler,
	DayView,
	WeekView,
	MonthView,
	Appointments,
	Toolbar,
	DateNavigator,
	ViewSwitcher,
	Resources,
	AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui'
import {
	ViewState,
	EditingState,
	IntegratedEditing,
} from '@devexpress/dx-react-scheduler'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
const appointments = [
	{
		title: 'Meeting',
		startDate: new Date(2023, 2, 15, 9, 30),
		endDate: new Date(2023, 2, 15, 11, 30),
	},
	{
		title: 'Lunch',
		startDate: new Date(2023, 2, 15, 12, 30),
		endDate: new Date(2023, 2, 15, 14, 0),
	},
	// Add more appointments here if needed.
]
const Schedule = () => {
	const [currentView, setCurrentView] = React.useState('Week')
	const [currentDate, setCurrentDate] = React.useState(new Date())
	const [data, setData] = React.useState(appointments)
	const providers = useSelector((state) => state.providers)

	const resources = [
		{
			fieldName: 'providerId',
			title: 'Provider',
			instances: providers.map((provider) => ({
				id: provider.id,
				text: `${provider.title} ${provider.first_name} ${provider.last_name}`,
			})),
		},
	]

	return (
		<Paper>
			<Scheduler data={data}>
				<ViewState
					currentDate={currentDate}
					onCurrentDateChange={setCurrentDate}
					currentViewName={currentView}
					onCurrentViewNameChange={setCurrentView}
				/>
				<EditingState
					onCommitChanges={({ added, changed, deleted }) => {
						// Handle appointment changes here.
					}}
				/>
				<IntegratedEditing />
				<DayView />
				<WeekView />
				<MonthView />
				<Toolbar />
				<DateNavigator />
				<ViewSwitcher />
				<Appointments />
				<Resources data={resources} />
			</Scheduler>
		</Paper>
	)
}

export default Schedule
