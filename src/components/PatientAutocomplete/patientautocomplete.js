import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function PatientAutocomplete({ field, form }) {
	const patients = useSelector((state) => state.patients)

	return (
		<Autocomplete
			{...field}
			options={patients}
			getOptionLabel={(option) =>
				`${option.details.demographics.first_name} ${option.details.demographics.last_name}`
			}
			onChange={(event, newValue) => {
				form.setFieldValue(field.name, newValue)
			}}
			value={field.value}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Patient"
					variant="outlined"
					fullWidth
				/>
			)}
		/>
	)
}
