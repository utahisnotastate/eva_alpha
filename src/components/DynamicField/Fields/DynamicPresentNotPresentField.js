import React from 'react'
import { Field } from 'formik'

export default function DynamicPresentNotPresentField({ label, name }) {
	console.log({ label, name })
	return (
		<Field as={`select`} name={name} disabled={true}>
			<option value="present">Present</option>
			<option value="not_present">Not Present</option>
		</Field>
	)
}

/*
<Field
			InputLabelProps={{
				shrink: true,
			}}
			component={TextField}
			fullWidth
			label={label}
			margin="normal"
			name={`${name}.value`}
			select
			type="text"
			variant="standard">
			<MenuItem key={`unchecked`} value={`unchecked`}>
				Unchecked
			</MenuItem>
			<MenuItem key={`present`} value={`present`}>
				Present
			</MenuItem>
			<MenuItem key={`not_present`} value={`not_present`}>
				Not Present
			</MenuItem>
		</Field>
	)
 */

/*
{ranges.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
 */
