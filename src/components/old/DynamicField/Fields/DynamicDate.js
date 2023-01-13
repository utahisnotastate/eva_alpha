import React from 'react'
import { Field } from 'formik'
import { DatePicker } from 'formik-mui-lab'
import { TextField } from 'formik-mui'

export default function DynamicDate({ name, label }) {
	console.log({ name, label })
	return (
		<Field
			name={`${name}.value`}
			label={label}
			component={TextField}
			type={'date'}
			variant="standard"
			fullWidth
		/>
	)
}

/*

 */
