import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

export default function DynamicTextField({ label, name, type }) {
	console.log({ label, name })

	return (
		<Field
			name={`${name}.value`}
			label={label}
			type={type}
			component={TextField}
			variant="standard"
			fullWidth
		/>
	)
}
/*
InputProps={{ notched: true }}
 */
