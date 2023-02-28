import React from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RequestModal from '../Requests/RequestModal'

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
	const columns = [
		{
			name: 'id',
			label: 'ID',
			options: {
				display: false,
			},
		},
		{
			name: 'name',
			label: 'Name',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'dob',
			label: 'Date of Birth',
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
	const data = [
		['Joe James', '9/15/87'],
		['John Walsh', '6/13/22'],
		['Bob Herm', '3/18/97'],
		['James Houston', '4/16/88'],
	]

	return <MUIDataTable title="Patients" data={data} columns={columns} />
}
