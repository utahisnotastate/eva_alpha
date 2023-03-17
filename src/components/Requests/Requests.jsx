import React from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import RequestModal from './RequestModal'

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: 'auto',
		width: '50%',
	},
}))

export default function Requests() {
	const classes = useStyles()
	const requests = useSelector((state) => state.requests)

	const columns = [
		{
			name: 'id',
			label: 'ID',
			options: {
				display: false,
			},
		},
		{
			name: 'type',
			label: 'Type',
			options: {
				filter: true,
				sort: true,
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
			name: 'patient',
			label: 'Patient',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'view',
			label: 'View',
			options: {
				customBodyRender: (value, tableMeta, updateValue) => {
					const patientId = tableMeta.rowData[0]
					return <RequestModal />
				},
			},
		},
	]

	const options = {
		print: false,
		download: false,
		filter: false,
		viewColumns: false,
		selectableRows: 'none',
	}

	return (
		<MUIDataTable
			title="Requests"
			data={requests}
			columns={columns}
			options={options}
		/>
	)
}
