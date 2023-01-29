import React from 'react'
import { TextField } from '@mui/material'

export default function DynamicTextField({ label, name, type }) {
	console.log({ label, name })

	return (
		<TextField
			name={`${name}`}
			label={label}
			type={type}
			variant="standard"
			fullWidth
		/>
	)
}
/*
InputProps={{ notched: true }}
 */
