import React from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

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

	const columns = ['Type', 'Status', 'Patient', 'View']
	const data = [
		['Medication', 'Waiting on patient follow up', 'Herbert Hoover'],
		['Insurance', 'Waiting on Insurance', 'Jiminy Cricket'],
		['Scheduling', 'Awaiting Dr. response', 'Wordle Burdle'],
		['Insurance', 'Patient Followup', 'John Stamos'],
	]

	return <MUIDataTable title="Requests" data={data} columns={columns} />
}
