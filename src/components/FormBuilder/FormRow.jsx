import * as React from 'react'
import { FormGroup, Grid, MenuItem } from '@material-ui/core'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import OptionsFieldArray from './OptionsFieldArray'

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
			<Grid container spacing={2} columns={5} direction={`row`}>
				<Grid item>
					<Field
						component={Select}
						name={`${name}.type`}
						sx={{ flexGrow: 2 }}
						label="Type"
						fullWidth>
						<MenuItem value={`text`}>Text</MenuItem>
						<MenuItem value={`textarea`}>Text Area</MenuItem>
						<MenuItem value={`time`}>Time</MenuItem>
						<MenuItem value={`date`}>Date</MenuItem>
						<MenuItem value={`number`}>Number</MenuItem>
					</Field>
				</Grid>
				<Grid item>
					<Field
						component={TextField}
						InputLabelProps={{ shrink: true }}
						label={`Label`}
						name={`${name}.label`}
						variant="outlined"
						fullWidth
					/>
				</Grid>
				{field.type === 'select' || field.type === 'radiogroup' ? (
					<Grid item xs={3}>
						<OptionsFieldArray
							index={index}
							name={`fields[${index}].options`}
							options={field.options}
						/>
					</Grid>
				) : null}
				<Grid item>
					<AddIcon color="primary" onClick={handleAddNewField} />
				</Grid>
				<Grid item>
					<ClearIcon color="error" onClick={handleRemoveField} />
				</Grid>
			</Grid>
		</FormGroup>
	)
}

/*
* <FormGroup>
			<Grid container spacing={2} columns={5} direction={`row`}>
				<Grid item>
					<Field
						component={Select}
						name={`${name}.type`}
						sx={{ flexGrow: 2 }}
						label="Type"
						fullWidth>
						<MenuItem value={`text`}>Text</MenuItem>
						<MenuItem value={`textarea`}>Text Area</MenuItem>
						<MenuItem value={`time`}>Time</MenuItem>
						<MenuItem value={`date`}>Date</MenuItem>
						<MenuItem value={`number`}>Number</MenuItem>
					</Field>
				</Grid>
				<Grid item>
					<Field
						component={TextField}
						InputLabelProps={{ shrink: true }}
						label={`Label`}
						name={`${name}.label`}
						variant="outlined"
						fullWidth
					/>
				</Grid>
				{field.type === 'select' || field.type === 'radiogroup' ? (
					<Grid item xs={3}>
						<OptionsFieldArray
							index={index}
							name={`fields[${index}].options`}
							options={field.options}
						/>
					</Grid>
				) : null}
				<Grid item>
					<AddIcon color="primary" onClick={handleAddNewField} />
				</Grid>
				<Grid item>
					<ClearIcon color="error" onClick={handleRemoveField} />
				</Grid>
			</Grid>
		</FormGroup>
*
*
* */
