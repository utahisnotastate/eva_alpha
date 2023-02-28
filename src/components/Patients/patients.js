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

export default function Patients() {
	const classes = useStyles()

	const columns = ['Name', 'DOB']
	const data = [
		['Joe James', '9/15/87'],
		['John Walsh', '6/13/22'],
		['Bob Herm', '3/18/97'],
		['James Houston', '4/16/88'],
	]

	return <MUIDataTable title="Patients" data={data} columns={columns} />
}
