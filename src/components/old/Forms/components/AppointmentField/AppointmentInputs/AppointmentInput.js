import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Checkbox, TextField, Typography } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'
import AppointmentRadioGroup from './Radio'

const useStyles = makeStyles({
	fieldcontainer: {
		height: '100%',
	},
})

export default function AppointmentInput(props) {
	const { register, control, setValue, getValues } = useFormContext()
	const classes = useStyles()
	const handleFormFieldChange = (e) => {
		if (e.target.value === '') {
			//setValue(`${props.name}[${props.fieldindex}].checked`, false);
			setValue(`${props.name}["checked"]`, false)
		} else {
			//console.log(e);
			setValue(`${props.name}["checked"]`, true)
		}
	}
	const presentnotpresentchoices = [
		{ label: 'Present' },
		{ label: 'Not Present' },
	]

	switch (props.type) {
		case 'TextInput':
			return (
				<TextField
					inputRef={register()}
					fullWidth
					className={classes.input}
					defaultValue={props.value}
					variant={`outlined`}
					placeholder={`Please enter your findings for the '${props.label}' field here`}
					onChange={(e) => handleFormFieldChange(e)}
					name={`${props.name}.value`}
				/>
			)
		case 'checkbox':
			return (
				<Controller
					name={`${props.name}[${props.fieldindex}].value`}
					defaultValue={props.value}
					render={({ onChange, onBlur, value, name }) => (
						<Checkbox
							onChange={(e) => onChange(handleFormFieldChange(e))}
							checked={value}
							name={name}
						/>
					)}
				/>
			)
		case 'present_not_present':
			return (
				<AppointmentRadioGroup
					name={`${props.name}.value`}
					value={`unchecked`}
					choices={presentnotpresentchoices}
					fieldindex={props.fieldindex}
					radioChange={handleFormFieldChange}
				/>
			)
		case 'radio':
			return (
				<AppointmentRadioGroup
					name={`${props.name}`}
					value={`unchecked`}
					fieldindex={props.fieldindex}
					radioChange={handleFormFieldChange}
					choices={props.choices}
				/>
			)
		case 'textarea':
			return (
				<TextField
					inputRef={register()}
					multiline
					fullWidth
					className={classes.fieldcontainer}
					placeholder={`Please enter your findings for the '${props.label}' field here`}
					variant={`outlined`}
					defaultValue={props.value}
					onChange={(e) => handleFormFieldChange(e)}
					rows={3}
					name={`${props.name}.value`}
				/>
			)
		default:
			return (
				<Typography>
					Sorry we don't recognize that field input type.
				</Typography>
			)
	}
}

/*



onChange={(e) => setValue(`appointmentform[${props.fieldindex}].checked]`, true)}
 */
