import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@mui/material/MenuItem'
import {
	Card,
	CardContent,
	CardActions,
	CardHeader,
	Button,
	TextField,
} from '@mui/material'
import Typeselectfield from './typeselectfield'

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

export default function AddField({ arrayHelpers }) {
	const [type, setType] = useState(types[0])
	const [label, setLabel] = useState('')
	const classes = useStyles()

	const handleAddField = (field) => {
		console.log({ type, label })
		arrayHelpers.push({ type: field.type, label: field.label })
		setType('')
		setLabel('')
	}

	return (
		<Card>
			<CardHeader title="Add Field" />
			<CardContent className={classes.content}>
				<Typeselectfield type={type} setType={setType} />
				<TextField
					className={classes.fieldinput}
					label="Label"
					value={label}
					onChange={(event) => setLabel(event.target.value)}
				/>
			</CardContent>
			<CardActions>
				<Button
					variant={`contained`}
					color={`primary`}
					onClick={() => handleAddField({ type, label })}>
					Add Field
				</Button>
			</CardActions>
		</Card>
	)
}

/*
<Field
					className={classes.fieldinput}
					component={TextField}
					label="label"
					name="addField.label"
					variant="outlined"
					InputProps={{ notched: true }}
				/>
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
