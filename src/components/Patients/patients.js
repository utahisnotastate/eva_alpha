import React from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import columns from './patients.columns'
import options from './patient.table.options'

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

export default function Patients() {
	const classes = useStyles()
	const patients = useSelector((state) => state.patients)

	return (
		<div className={classes.root}>
			<MUIDataTable
				title="Patients"
				data={[]}
				columns={columns}
				options={options}
			/>
		</div>
	)
}
