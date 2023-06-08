import * as React from 'react'
import { MenuItem } from '@material-ui/core'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import OptionsFieldArray from './OptionsFieldArray'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

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
		<div
			style={{
				display: 'flex',
				alignItems: 'baseline',
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}>
				<Field
					component={Select}
					name={`${name}.type`}
					label="Field Type"
					variant="outlined"
					fullWidth>
					<MenuItem value={`text`}>Text</MenuItem>
					<MenuItem value={`textarea`}>Text Area</MenuItem>
					<MenuItem value={`time`}>Time</MenuItem>
					<MenuItem value={`date`}>Date</MenuItem>
					<MenuItem value={`number`}>Number</MenuItem>
					<MenuItem value={`select`}>Select</MenuItem>
					<MenuItem value={`radiogroup`}>Radio Group</MenuItem>
				</Field>
				<Field
					component={TextField}
					type={field.type}
					InputLabelProps={{ shrink: true }}
					label={`Label`}
					name={`${name}.label`}
					variant="outlined"
					fullWidth
				/>
			</div>
			{field.type === 'select' || field.type === 'radiogroup' ? (
				<div>
					<Typography variant="body1">Options</Typography>
					<Divider />
					<br />
					<OptionsFieldArray
						name={`${name}.${`options`}`}
						options={field.options}
					/>
				</div>
			) : null}

			<div style={{ display: 'flex' }}>
				<Button
					type="button"
					variant={`contained`}
					color={`primary`}
					onClick={handleAddNewField}>
					Add
				</Button>
				<Button
					type="button"
					variant={`contained`}
					color={`error`}
					onClick={handleRemoveField}>
					Delete
				</Button>
			</div>
		</div>
	)
}
