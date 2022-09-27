import React, { useState, useEffect } from 'react'
import RequestTimeLine from './TimeLine/timeline'
import PatientDisplayName from '../../api/patientname'
import { Typography } from '@material-ui/core'

function viewRequestColumn(tableMeta) {
	return (
		<RequestTimeLine
			requestId={tableMeta.rowData[0]}
			type={tableMeta.rowData[2]}
			status={tableMeta.rowData[3]}
			request_description={tableMeta.rowData[4]}
			patient_request_updates={tableMeta.rowData[5]}
		/>
	)
}

const patientrequestcolumns = [
	{
		name: 'id',
		label: 'Request ID',
		options: {
			display: false,
		},
	},
	{
		name: 'details.date',
		label: 'Type',
		options: {
			display: false,
		},
	},
	{
		name: 'patient.details',
		label: 'Name',
		options: {
			filter: true,
			sort: false,
			customBodyRender: (value, tableMeta, updateValue) => {
				return <PatientDisplayName patient={value} />
			},
		},
	},
	{
		name: 'details.status',
		label: 'Status',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'details.request_description',
		label: 'Request Description',
		options: {
			display: true,
		},
	},
	{
		name: 'details.patient_request_updates',
		label: 'Request Updates',
		options: {
			display: false,
		},
	},
	{
		name: 'viewrequest',
		label: 'View Request',
		options: {
			filter: false,
			sort: false,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) =>
				viewRequestColumn(tableMeta),
		},
	},
]

export default patientrequestcolumns
