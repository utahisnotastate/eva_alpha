import React from 'react'
import { TextField } from 'mui-rff'

export default function DynamicTextField({ label, name, type }) {
	console.log({ label, name })

	return (
		<TextField
			name={`${name}.value`}
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
