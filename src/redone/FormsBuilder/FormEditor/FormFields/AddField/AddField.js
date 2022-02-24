import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@mui/material/MenuItem'
import {
	Card,
	CardContent,
	CardActions,
	CardHeader,
	Button,
} from '@mui/material'
import { useFormikContext, Field } from 'formik'
import { TextField } from 'formik-mui'
import { Select } from 'formik-mui'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '1rem',
		padding: '1rem',
		border: '1px solid #ccc',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	fieldinput: {
		margin: '.5rem',
		minWidth: '10rem',
	},
}))

export default function AddField({ arrayHelpers }) {
	const { values, setFieldValue } = useFormikContext()
	const classes = useStyles()

	const types = [
		{ type: 'text', label: 'Text' },
		{ type: 'textarea', label: 'Textarea' },
		{ type: 'select', label: 'Select' },
		{ type: 'checkbox', label: 'Checkbox' },
		{ type: 'radio', label: 'Radio' },
		{ type: 'date', label: 'Date' },
		{
			type: 'present_not_present',
			label: 'Present/Not Present',
			choices: [
				{ label: 'Present', value: 'present' },
				{ label: 'Not Present', value: 'not_present' },
			],
		},
		{
			type: 'normal_abnormal',
			label: 'Normal/Abnormal',
			choices: [
				{ label: 'normal', value: 'normal' },
				{ label: 'abnormal', value: 'abnormal' },
			],
		},
	]

	const handleAddField = (values) => {
		console.log(values.addField)
		arrayHelpers.push(values.addField)
		setFieldValue('addField', { type: '', label: '', choices: null })
	}

	return (
		<Card>
			<CardHeader title="Add Field" />
			<CardContent className={classes.content}>
				<Field
					className={classes.fieldinput}
					component={Select}
					name="addField.type"
					defaultValue={''}
					label="Type">
					{types.map((type, index) => (
						<MenuItem key={index} value={type.type}>
							{type.label}
						</MenuItem>
					))}
				</Field>
				<Field
					className={classes.fieldinput}
					component={TextField}
					label="label"
					name="addField.label"
					variant="outlined"
					InputProps={{ notched: true }}
				/>
			</CardContent>
			<CardActions>
				<Button
					variant={`contained`}
					color={`primary`}
					onClick={() => handleAddField(values)}>
					Add Field
				</Button>
			</CardActions>
		</Card>
	)
}

/*
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
<FormGroup sx={{ gap: 2 }}>
					<FormControl>
						<InputLabel htmlFor={`field-type`} shrink>
							Field Type
						</InputLabel>
						<Select name={`addField.type`}>
							{types && types.length > 0
								? types.map((type, index) => (
										<MenuItem key={index}>
											{type.label}
										</MenuItem>
								  ))
								: null}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor={`field-label`} shrink>
							Label
						</InputLabel>
						<TextField
							className={classes.fieldinput}
							id={`field-label`}
							name={`addField.label`}
						/>
					</FormControl>
					<FormControl>
						<Button
							variant={`contained`}
							color={`primary`}
							onClick={() => handleAddField(values)}>
							Add Field
						</Button>
					</FormControl>
				</FormGroup>

 * Typography variant="h6">Add Field</Typography>
 *
 * */
