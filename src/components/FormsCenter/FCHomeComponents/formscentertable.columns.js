import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const columns = [
	{
		name: 'id',
		label: 'Form ID',
		options: {
			display: false,
			filter: false,
		},
	},
	{
		label: 'Form Role',
		name: 'details.title',
		options: {
			filter: false,
			customBodyRender: (value, tableMeta, updateValue) => {
				return (
					<Link to={`/formscenter/${tableMeta.rowData[0]}/edit`}>
						{value}
					</Link>
				)
			},
		},
	},

	{
		title: 'Actions',
		name: 'Actions',
		options: {
			filter: false,
			customBodyRender: (value, tableMeta, updateValue) => {
				return (
					<Button
						variant="contained"
						color="secondary"
						onClick={() => {
							console.log('clicked')
						}}>
						Edit
					</Button>
				)
			},
		},
	},
]

export default columns
