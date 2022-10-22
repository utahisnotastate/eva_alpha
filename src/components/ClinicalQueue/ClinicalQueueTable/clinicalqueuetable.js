import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'
import style from '../../basestyledcomponents/Table/contentAreas'

const useStyles = makeStyles(style)

export default function ClinicalQueueTable(props) {
	const { table_actions, columnheaders, expandable, title } = props
	const [appointments, setAppointments] = useState(props.data)
	const classes = useStyles()
	const [options, setOptions] = useState({
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
	})
	return (
		<MUIDataTable
			columns={columnheaders}
			data={props.data.filter(
				(appointment) =>
					appointment.status === props.clinicalqueuefilter
			)}
			options={options}
			title={title}
		/>
	)
}
