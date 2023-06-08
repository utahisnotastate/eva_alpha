import React from 'react'
import { Field } from 'formik'
import MenuItem from '@mui/material/MenuItem'
import { TextField } from 'formik-mui'

export default function DynamicNormalAbnormal({ label, name }) {
	console.log({ label, name })
	return (
		<Field
			InputLabelProps={{
				shrink: true,
			}}
			component={TextField}
			disabled
			fullWidth
			label={label}
			margin="normal"
			name={name}
			defaultValue="unchecked"
			select
			type="text"
			variant="standard">
			<MenuItem key={`unchecked`} value={`unchecked`}>
				Unchecked
			</MenuItem>
			<MenuItem key={`present`} value={`present`}>
				Normal
			</MenuItem>
			<MenuItem key={`not_present`} value={`not_present`}>
				Abnormal
			</MenuItem>
		</Field>
	)
}
