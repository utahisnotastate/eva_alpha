import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormikContext, FieldArray } from 'formik'
import {
	Typography,
	Card,
	CardHeader,
	CardContent,
	Button,
} from '@mui/material'
import AddField from './AddField/AddField'
import Stack from '@mui/material/Stack'
import EditField from './FormEditorFields/EditField'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '1rem',
		padding: '1rem',
		border: '1px solid #ccc',
	},
	card: {
		padding: theme.spacing(1),
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'white',
	},
}))

export default function FormFieldsEditor() {
	const { values, setFieldValue } = useFormikContext()
	const classes = useStyles()
	const types = [
		{ type: 'text', label: 'Text' },
		{ type: 'textarea', label: 'Textarea' },
		{ type: 'select', label: 'Select' },
		{ type: 'checkbox', label: 'Checkbox' },
		{ type: 'radio', label: 'Radio' },
		{ type: 'file', label: 'File' },
	]
	return (
		<FieldArray
			name={`form.customformfields`}
			render={(arrayHelpers) => (
				<div className={classes.root}>
					<Typography variant="h6">Fields</Typography>
					<Stack spacing={2}>
						{values.form.customformfields &&
						values.form.customformfields.length > 0
							? values.form.customformfields.map(
									(field, index) => (
										<div key={index}>
											<Card
												variant={`outlined`}
												className={classes.card}>
												<CardHeader
													component={() => (
														<Button>
															Delete Field
														</Button>
													)}
												/>
												<CardContent>
													<EditField
														type={field.type}
														choices={field.choices}
														label={field.label}
														name={`form.customformfields.${index}.value`}
														setFieldValue={
															setFieldValue
														}
													/>
												</CardContent>
											</Card>
										</div>
									)
							  )
							: null}
						<AddField arrayHelpers={arrayHelpers} types={types} />
					</Stack>
				</div>
			)}
		/>
	)
}

/*
<EditField
														name={`form.customformfields`}
														label={field.label}
														type={field.type}
														options={field.choices}
														index={index}
													/>
 */
