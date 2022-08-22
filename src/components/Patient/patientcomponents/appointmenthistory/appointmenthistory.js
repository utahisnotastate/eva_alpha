import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink, useParams } from 'react-router-dom'
import style from '../../../basestyledcomponents/Table/contentAreas'
import { Typography } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'

const useStyles = makeStyles(style)

function ViewAppointment(props) {
	console.log(props.tableMeta)
	return (
		<div>
			<NavLink to={`/appointments/${props.tableMeta.rowData[0]}`}>
				<Typography>View Appointment</Typography>
			</NavLink>
		</div>
	)
}
export default function AppointmentHistory(props) {
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
			},
		},
		{
			name: 'provider_display_name',
			label: 'Provider',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'actions',
			label: 'Actions',
			options: {
				filter: false,
				sort: false,
				empty: true,
				customBodyRender: (value, tableMeta, updateValue) =>
					ViewAppointment({ value, tableMeta, updateValue }),
			},
		},
	]
	return (
		<MUIDataTable
			title="Appointment History"
			data={[]}
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
					console.log('Init!')
				},
			}}
		/>
	)
}
