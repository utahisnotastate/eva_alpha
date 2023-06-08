import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@material-ui/core'

export default function FormFieldLabel(props) {
	const { control, register } = useFormContext()
	console.log(props.index)
	console.log()
	return (
		<Grid item xs={4}>
			<Grid container>
				<Controller
					name={`formfields.${props.index}.label`}
					label={`Field Label`}
					as={<TextField inputRef={register} variant={`outlined`} />}
					control={control}
					defaultValue={props.label}
				/>
			</Grid>
		</Grid>
	)
}
