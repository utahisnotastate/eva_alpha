import { NavLink } from 'react-router-dom'
import Button from '../basestyledcomponents/Button'
import React from 'react'
import moment from 'moment'

function actionsColumn(tableMeta) {
	// console.log(tableMeta);
	return (
		<NavLink to={`/patient/${tableMeta.rowData[0]}/demographics`}>
			<Button color="primary">View Chart</Button>
		</NavLink>
	)
}

const columns = [
	{
		name: 'id',
		label: 'Patient id',
		options: {
			filter: true,
			sort: true,
			display: false,
		},
	},

	{
		name: 'details.last_name',
		label: 'Last Name',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'details.first_name',
		label: 'First Name',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'details.date_of_birth',
		label: 'Date of Birth',
		options: {
			filter: true,
			sort: true,
			customBodyRender: (value, tableMeta, updateValue) => {
				return moment(value).format('MM-DD-YYYY')
			},
		},
	},
	{
		name: 'details.gender',
		label: 'Gender',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'actions',
		label: 'Actions',
		options: {
			filter: false,
			sort: false,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) =>
				actionsColumn(tableMeta),
		},
	},
]

export default columns
