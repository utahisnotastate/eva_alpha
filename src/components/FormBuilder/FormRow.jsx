import * as React from 'react'
import { FormGroup, Grid, MenuItem, TextField } from '@material-ui/core'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import OptionsFieldArray from './OptionsFieldArray'

export default function FormRow({ field, push, remove, index, blankfield }) {
	const handleAddNewField = () => {
		push(blankfield)
	}
	const handleRemoveField = () => {
		remove(index)
	}

	return (
		<FormGroup>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={1}>
					<Field
						component={Select}
						name={`fields[${index}].type`}
						label="Type"
						fullWidth>
						<MenuItem value={`text`}>Text</MenuItem>
						<MenuItem value={`textarea`}>Text Area</MenuItem>
						<MenuItem value={`time`}>Time</MenuItem>
						<MenuItem value={`date`}>Date</MenuItem>
						<MenuItem value={`number`}>Number</MenuItem>
					</Field>
				</Grid>
				<Grid item xs={3}>
					<Field
						component={TextField}
						InputLabelProps={{ shrink: true }}
						label={`Label`}
						name={`fields[${index}].label`}
						variant="outlined"
						fullWidth
					/>
				</Grid>

				{field.type === 'select' || field.type === 'radiogroup' ? (
					<Grid item xs={3}>
						<OptionsFieldArray index={index} />
					</Grid>
				) : null}

				<Grid item xs={1}>
					<AddIcon color="primary" onClick={handleAddNewField} />
				</Grid>
				<Grid item xs={1}>
					<ClearIcon color="error" onClick={handleRemoveField} />
				</Grid>
			</Grid>
		</FormGroup>
	)
}
