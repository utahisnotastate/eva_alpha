import React, { useState, useCallback } from 'react'
import { Typography, Button, TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import { Field, useFormikContext, FieldArray } from 'formik'
import DynamicField from '../../../../../../eva_alpha/src/redone/DynamicField/DynamicField'
import Stack from '@mui/material/Stack'
import AddNewChoice from './addchoice'

const useStyles = makeStyles((theme) => ({
	newchoice: {
		marginTop: theme.spacing(2),
		border: '1px solid #000',
		padding: theme.spacing(1),
	},
	optionrow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: theme.spacing(1),
	},
}))

export default function ChoicesEditor({ choices, label, name, index }) {
	const classes = useStyles()
	const [newChoice, setNewChoice] = useState('hhhhhhh')
	const { values, setFieldValue } = useFormikContext()
	console.log({ choices, label, name, index })

	return (
		<FieldArray
			name={name}
			render={(arrayHelpers) => (
				<div>
					<Typography>Edit Choices for {label}</Typography>
					<Stack spacing={2}>
						{values.details.fields[index].choices &&
						values.details.fields[index].choices.length > 0 ? (
							values.details.fields[index].choices.map(
								(choice, index) => (
									<div
										key={index}
										className={classes.optionrow}>
										<DynamicField
											name={`${name}.${index}`}
											label={choice.label}
											type={`text`}
										/>
										<Button
											onClick={() =>
												arrayHelpers.remove(index)
											}
											variant="contained"
											color="secondary">
											X
										</Button>
									</div>
								)
							)
						) : (
							<Typography>No Choices</Typography>
						)}
						<div>
							<TextField
								label="New Choice"
								onChange={(event) =>
									setNewChoice(event.target.value)
								}
								type={`text`}
								variant="outlined"
								size="small"
								style={{ width: '100%' }}
							/>
							<Button
								onClick={() => {
									const choice = {
										label: newChoice,
									}

									arrayHelpers.push(choice)
									setNewChoice('')
								}}
								variant="contained"
								color="secondary">
								Add
							</Button>
						</div>
					</Stack>
				</div>
			)}
		/>
	)
}
/*
<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						spacing={2}
						className={classes.newchoice}>
						<MUITextField
							name={`${name}.new_choice`}
							value={newChoice}
							onChange={(e) => setNewChoice(e.target.value)}
							fullWidth
							type={`text`}
							label={`Add New Choice`}
							variant={`standard`}
						/>
						<Button
							variant={`contained`}
							onClick={() => {
								arrayHelpers.push({ label: newChoice })
								setNewChoice('')
							}}>
							Add Choice
						</Button>
					</Stack>
<Stack spacing={2}></Stack>
 */
