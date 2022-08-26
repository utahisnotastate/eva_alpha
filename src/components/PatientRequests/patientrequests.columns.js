import React, { useState, useEffect } from 'react'
import RequestTimeLine from './TimeLine/timeline'
import { Typography } from '@material-ui/core'

function viewRequestColumn(tableMeta) {
	return (
		<RequestTimeLine
			requestId={tableMeta.rowData[0]}
			request_description={tableMeta.rowData[4]}
		/>
	)
}

function NameColumn(tableMeta) {
	return (
		<Typography>
			{tableMeta.rowData[2].first_name} {tableMeta.rowData[2].last_name}
		</Typography>
	)
}

const columns = [
	{
		name: 'id',
		label: 'Request ID',
		options: {
			display: false,
		},
	},
	{
		name: 'type',
		label: 'Type',
		options: {
			filter: true,
			sort: false,
		},
	},
	{
		name: 'patient',
		label: 'Name',
		options: {
			filter: true,
			sort: true,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) =>
				NameColumn(tableMeta),
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
		name: 'request_description',
		label: 'Request Description',
		options: {
			display: false,
		},
	},
	{
		name: 'patient_request_updates',
		label: 'Request Updates',
		options: {
			display: false,
			empty: true,
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

export default columns
