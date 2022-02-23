import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

export default function DynamicNumberField({ label, name }) {
	console.log({ label, name })
	return (
		<Field
			name={`${name}.value`}
			label={label}
			component={TextField}
			type={'number'}
			variant="standard"
			fullWidth
		/>
	)
}
