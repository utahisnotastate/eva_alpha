import React, { useState, useEffect } from 'react'
import RequestTimeLine from './TimeLine/timeline'
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

function NameColumn(tableMeta) {
	console.log(tableMeta)
	return (
		<Typography>
			{tableMeta.rowData[2].first_name} {tableMeta.rowData[2].last_name}
		</Typography>
	)
}

const patientrequestcolumns = [
	{
		name: 'id',
		label: 'Request ID',
		options: {
			display: true,
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
		name: 'details.type',
		label: 'Type',
		options: {
			filter: true,
			sort: false,
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
