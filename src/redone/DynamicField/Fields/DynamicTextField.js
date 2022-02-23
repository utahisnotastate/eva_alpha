import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

export default function DynamicTextField({ label, name }) {
	console.log({ label, name })

	return (
		<Field
			name={`${name}.value`}
			label={label}
			component={TextField}
			variant="standard"
			fullWidth
		/>
	)
}
/*
InputProps={{ notched: true }}
 */
