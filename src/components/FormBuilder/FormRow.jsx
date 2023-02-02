import * as React from 'react'
import { FormGroup, Grid, MenuItem } from '@material-ui/core'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'

export default function FormRow({
	field,
	push,
	remove,
	index,
	blankfield,
	name,
}) {
	const handleAddNewField = () => {
		push(blankfield)
	}
	const handleRemoveField = () => {
		remove(index)
	}

	return (
		<FormGroup>
			<Grid container spacing={2} alignItems="center" direction={`row`}>
				<Grid item xs={1}>
					<Field
						component={Select}
						name={`${name}.type`}
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
						name={`${name}.label`}
						variant="outlined"
						fullWidth
					/>
				</Grid>
				{fiel'.type ==' 'select' || field.type === 'radiogroup' ? (
					<Grid item xs={3}>
						<OptionsFieldArray
							index={index}
							name={`fields[${index}].options`}
							options={field.options}
						/>
					</Grid>
				) : null}
				<Grid item>
					<AddIcon color='primary' onClick={handleAddNewField} />
				</Grid>
				<Grid item>
					<ClearIcon color='error' onClick={handleRemoveField} />
				</Grid>
			</Grid>
		</FormGroup>
	)
}
