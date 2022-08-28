import React, { useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPatients } from '../../api/patients.api'
import mockpatients from '../Patient/patients.mock'
import columns from './patients.columns'
import options from './patient.table.options'

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
	const dispatch = useDispatch()

	/*useEffect(() => {
		const fetchPatients = async () => {
			const response = await getAllPatients()
			return response.data
		}
		fetchPatients()
			.then((patients) => {
				return dispatch({
					type: 'LOAD_PATIENTS',
					patients: patients,
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])*/

	return (
		<div className={classes.root}>
			<MUIDataTable
				title="Patients"
				data={patients}
				columns={columns}
				options={options}
				className={classes.table}
			/>
		</div>
	)
}
/*

 */
