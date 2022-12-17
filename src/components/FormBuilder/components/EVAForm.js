import React from 'react'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { TextField, Select } from 'mui-rff'
import { Button, Stack, Typography, MenuItem } from '@mui/material'
import Condition from '../../basestyledcomponents/Inputs/finalformmui/conditioninput'
import CardFooter from '../../basestyledcomponents/Card/CardFooter'

export default function EVAForm({ formName }) {
	const blankitem = {
		label: 'Label',
		type: 'text',
		value: '',
		placeholder: 'Placeholder',
		helperText: 'Helper Text',
	}
	return (
		<Form
			mutators={{
				...arrayMutators,
			}}
			onSubmit={(newValues) => {
				console.log(newValues)
			}}
			initialValues={{
				complaints: [
					{
						label: 'Description',
						type: 'text',
						value: '',
						placeholder: 'Placeholder',
						helperText: 'Helper Text',
						options: [{ label: 'Option 1', value: 'option1' }],
					},
					{
						label: 'Select',
						type: 'select',
						value: '',
						placeholder: 'Placeholder',
						helperText: 'Helper Text',
						options: [{ label: 'Option 1', value: 'option1' }],
					},
				],
			}}
			render={({
				handleSubmit,
				form: {
					mutators: { push },
				},
			}) => (
				<form onSubmit={handleSubmit}>
					<FieldArray name={formName}>
						{({ fields }) =>
							fields.map((name, index) => (
								<Stack
									key={index}
									direction="column"
									justifyContent="center"
									alignItems="stretch"
									sx={{
										border: 1,
										borderColor: 'grey.300',
										borderRadius: 1,
										p: 2,
										marginTop: 2,
									}}
									spacing={2}>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="flex-end"
										spacing={2}>
										<Select
											name={`${name}.type`}
											label="Field Type"
											formControlProps={{
												margin: 'normal',
											}}>
											<MenuItem value="text">
												Text
											</MenuItem>
											<MenuItem value="number">
												Number
											</MenuItem>
											<MenuItem value="textarea">
												Text Area
											</MenuItem>
											<MenuItem value="select">
												Select
											</MenuItem>
										</Select>
										<TextField
											name={`${name}.label`}
											label={`Label`}
											InputLabelProps={{ shrink: true }}
										/>
										<TextField
											name={`${name}.placeholder`}
											label={`Placeholder`}
											InputLabelProps={{ shrink: true }}
										/>
										<Button
											onClick={() => fields.remove(index)}
											color={'error'}
											variant={'contained'}>
											X
										</Button>
									</Stack>
									<Stack
										direction="column"
										justifyContent="space-between"
										spacing={2}>
										<Condition
											when={`${name}.type`}
											is={`select`}>
											<Typography>Options</Typography>
											<FieldArray
												name={`${name}.options`}>
												{({ fields }) =>
													fields.map(
														(name, index) => (
															<Stack
																key={index}
																direction="row"
																justifyContent="space-between"
																alignItems="center"
																spacing={2}>
																<TextField
																	name={`${name}.label`}
																	label={`Label`}
																	InputLabelProps={{
																		shrink: true,
																	}}
																/>
																<Button
																	onClick={() =>
																		fields.push(
																			{
																				label: '',
																				value: '',
																			}
																		)
																	}
																	color={
																		'primary'
																	}
																	variant={
																		'contained'
																	}>
																	+
																</Button>
																<Button
																	onClick={() =>
																		fields.remove(
																			index
																		)
																	}
																	color={
																		'error'
																	}
																	variant={
																		'contained'
																	}>
																	X
																</Button>
															</Stack>
														)
													)
												}
											</FieldArray>
										</Condition>
									</Stack>
								</Stack>
							))
						}
					</FieldArray>
					<Button
						onClick={() =>
							push('complaints', {
								label: '',
								type: 'text',
								value: '',
								placeholder: '',
								helperText: '',
								options: [],
							})
						}
						color={'primary'}
						variant={'contained'}>
						Add Input
					</Button>
					<CardFooter>
						<Button color="primary" onClick={handleSubmit}>
							Save
						</Button>
					</CardFooter>
				</form>
			)}
		/>
	)
}
