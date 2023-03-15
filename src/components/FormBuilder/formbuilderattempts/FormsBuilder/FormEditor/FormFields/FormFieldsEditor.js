import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormikContext, FieldArray } from 'formik'
import {
	Typography,
	Card,
	CardHeader,
	CardContent,
	Button,
	CardActions,
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

export default function FormFields() {
	const { values, setFieldValue } = useFormikContext()
	const classes = useStyles()
	return (
		<FieldArray
			name={`details.fields`}
			render={(arrayHelpers) => (
				<div className={classes.root}>
					<Typography variant="h6">Fields</Typography>
					<Stack spacing={2}>
						{values.details.fields &&
						values.details.fields.length > 0
							? values.details.fields.map((field, index) => (
									<div key={index}>
										<Card
											variant={`outlined`}
											className={classes.card}>
											<CardHeader
												component={() => (
													<Button
														onClick={() =>
															arrayHelpers.remove(
																index
															)
														}>
														Delete Field
													</Button>
												)}
											/>
											<CardContent>
												<EditField
													type={field.type}
													label={field.label}
													name={`details.fields.${index}`}
													index={index}
												/>
											</CardContent>
										</Card>
									</div>
							  ))
							: null}
						<CardActions>
							<AddField arrayHelpers={arrayHelpers} />
						</CardActions>
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
