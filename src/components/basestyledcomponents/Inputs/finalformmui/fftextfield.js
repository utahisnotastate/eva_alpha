import React from 'react'
import { TextField } from 'mui-rff'

export default function FFTextField({
	name,
	label,
	placeholder,
	fullWidth = true,
	...rest
}) {
	return (
		<TextField
			name={name}
			label={label}
			fullWidth={fullWidth}
			placeholder={placeholder}
			{...rest}
		/>
	)
}
