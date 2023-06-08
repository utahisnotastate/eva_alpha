import * as React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

export default function Summary() {
	return (
		<Field
			component={TextField}
			name="summary"
			label="Summary"
			variant="outlined"
			multiline
			rows={4}
			fullWidth
		/>
	)
}
