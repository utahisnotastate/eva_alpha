import * as React from 'react'
import { FormGroup, MenuItem, TextField } from '@mui/material'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'

export default function FormBuilderRow({
	fieldt,
	push,
	remove,
	index,
	blankfield,
}) {
	const handleAddNewField = () => {
		push(blankfield)
	}
	const handleRemoveField = () => {
		remove(index)
	}
	return (
		<FormGroup>
			<Field
				component={Select}
				name={`fields[${index}].type`}
				label="Type">
				<MenuItem value={`text`}>Text</MenuItem>
				<MenuItem value={`textarea`}>Text Area</MenuItem>
				<MenuItem value={`time`}>Time</MenuItem>
				<MenuItem value={`date`}>Date</MenuItem>
				<MenuItem value={`number`}>Number</MenuItem>
			</Field>
			<Field
				component={TextField}
				InputLabelProps={{ shrink: true }}
				label={`Label`}
				name={`fields[${index}].label`}
				variant="outlined"
			/>
			<AddIcon onClick={handleAddNewField} />
			<ClearIcon onClick={handleRemoveField} />
		</FormGroup>
	)
}
