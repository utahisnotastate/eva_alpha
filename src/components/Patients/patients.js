import React from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import columns from './patients.columns'
import options from './patient.table.options'
import Page from '../Page/page'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 20,
	},
	table: {
		minHeight: '100vh',
	},
	textfield: {
		marginRight: 10,
		marginLeft: 10,
	},
}))

export default function Patients() {
	const classes = useStyles()
	const patients = useSelector((state) => state.patients)

	return (
		<div className={classes.root}>
			<Page title={`Patients`}>
				<MUIDataTable
					title="Patients"
					data={patients}
					columns={columns}
					options={options}
					className={classes.table}
				/>
			</Page>
		</div>
	)
}
/*

 */
