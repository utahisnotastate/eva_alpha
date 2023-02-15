import * as React from 'react'
import { FormGroup, Grid, MenuItem } from '@material-ui/core'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import OptionsFieldArray from './OptionsFieldArray'
import Button from '@mui/material/Button'

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
			<Grid
				container
				spacing={2}
				alignItems="center"
				direction={`column`}>
				<Grid item>
					<Button type="button" onClick={handleRemoveField}>
						Delete Field
					</Button>
				</Grid>
				<Grid item xs={12}>
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
						<MenuItem value={`select`}>Select</MenuItem>
						<MenuItem value={`radiogroup`}>Radio Group</MenuItem>
					</Field>
				</Grid>
				<Grid item xs={12}>
					<Field
						component={TextField}
						type={field.type}
						InputLabelProps={{ shrink: true }}
						label={`Label`}
						name={`${name}.label`}
						variant="outlined"
						fullWidth
					/>
				</Grid>
				{field.type === 'select' || field.type === 'radiogroup' ? (
					<Grid item xs={12}>
						<OptionsFieldArray
							name={`${name}.${`options`}`}
							options={field.options}
						/>
					</Grid>
				) : null}
				<Grid item>
					<Button type="button" onClick={handleAddNewField}>
						Add New Field
					</Button>
				</Grid>
			</Grid>
		</FormGroup>
	)
}
