import React from 'react'
import Grid from '@material-ui/core/Grid'
import FormFieldLabel from './FormFieldLabel'
import FormFieldOptions from './FormFieldOptions'
import FormFieldActions from './FormFieldActions/FormFieldActions'

export default function FormFieldRow(props) {
	return (
		<Grid item>
			<Grid container direction={`row`}>
				<Grid item>
					<FormFieldLabel />
				</Grid>
				<Grid item>
					<FormFieldOptions />
				</Grid>
				<Grid item>
					<FormFieldActions />
				</Grid>
			</Grid>
		</Grid>
	)
}
