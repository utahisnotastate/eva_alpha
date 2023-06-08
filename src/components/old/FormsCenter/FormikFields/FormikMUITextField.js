import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

export default function FormikMUITextField(props) {
	return (
		<Field
			component={TextField}
			fullWidth={props.fullWidth}
			label={props.label}
			name={props.name}
			variant={props.variant}
			InputProps={props.inputProps}
		/>
	)
}
