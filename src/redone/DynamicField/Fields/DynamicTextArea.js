import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

export default function DynamicTextArea({ label, name }) {
	return (
		<Field
			name={`${name}.value`}
			label={label}
			type="textarea"
			component={TextField}
			variant="standard"
			fullWidth
		/>
	)
}
/*
InputProps={{ notched: true }}
 */
