import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink, useParams } from 'react-router-dom'
import style from '../../../basestyledcomponents/Table/contentAreas'
import moment from 'moment'
import { Typography } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import { getPatientAppointments } from '../../../../api/patient.api'
import { getAllRequests } from '../../../../api/requests.api'

const useStyles = makeStyles(style)

function ViewAppointment({ tableMeta }) {
	return (
		<div>
			<NavLink to={`/appointments/${tableMeta.rowData[0]}`}>
				<Typography>View Appointment</Typography>
			</NavLink>
		</div>
	)
}
export default function AppointmentHistory() {
	const [appointments, setAppointments] = useState([])

	const classes = useStyles()
	let { id } = useParams()

	const columnheaders = [
		{
			name: 'id',
			label: 'Appointment ID',
			options: {
				display: false,
			},
		},
		{
			name: 'start',
			label: 'Appointment Date',
			options: {
				filter: true,
				sort: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						<Typography>
							{moment(value).format('MM-DD-YYYY')}
						</Typography>
					)
				},
			},
		},
		{
			name: 'status',
			label: 'Status',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'details.clinical_data',
			label: 'View Appointment',
			options: {
				filter: false,
				sort: false,
				empty: true,
				customBodyRender: (value, tableMeta, updateValue) => (
					<ViewAppointment value={value} tableMeta={tableMeta} />
				),
			},
		},
	]
	return (
		<MUIDataTable
			title="Appointment History"
			data={appointments}
			columns={columnheaders}
			options={{
				searchOpen: false,
				serverSide: true,
				textLabels: {
					body: {
						noMatch: 'SORRY NO MATCHES FOUND',
					},
				},
				searchPlaceholder: 'Search by patient name',
				elevation: 0,
				print: false,
				filter: true,
				download: false,
				selectableRows: 'none',
				viewColumns: false,
				onTableInit: () => {
					getPatientAppointments(id)
						.then((appointments) => {
							console.log(appointments)
							return setAppointments(appointments)
						})
						.catch((err) => console.log(err))
				},
			}}
		/>
	)
}
