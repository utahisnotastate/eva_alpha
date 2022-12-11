import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { TextField, Select } from 'mui-rff'
import {
	Button,
	Stack,
	Typography,
	Card,
	MenuItem,
	Divider,
} from '@mui/material'

export default function EVAForm({ form, handleSubmit, initialValues }) {
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
				handleSubmit(newValues)
			}}
			initialValues={{
				shifts: [{ startTime: '09:00' }],
				complaints: [
					{
						label: 'Description',
						type: 'text',
						value: '',
						placeholder: 'Placeholder',
						helperText: 'Helper Text',
					},
				],
			}}>
			{(formProps) => (
				<>
					<h1>{form.title}</h1>

					<FieldArray name="complaints">
						{(fieldArrayProps) =>
							fieldArrayProps.fields.map((name, index) => (
								<Stack
									key={index}
									direction="row"
									justifyContent="space-between"
									alignItems="flex-end"
									sx={{ mb: 2 }}
									spacing={2}>
									<Select
										name={`${name}.type`}
										label="Field Type"
										formControlProps={{
											margin: 'normal',
										}}>
										<MenuItem value="text">Text</MenuItem>
										<MenuItem value="number">
											Number
										</MenuItem>
										<MenuItem value="textarea">
											Text Area
										</MenuItem>
									</Select>
									<TextField
										name={`${name}.label`}
										label={`Label`}
									/>
									<TextField
										name={`${name}.placeholder`}
										label={`Placeholder`}
									/>
									<Button
										onClick={() =>
											fieldArrayProps.fields.remove(index)
										}
										color={'error'}
										variant={'contained'}>
										X
									</Button>
								</Stack>
							))
						}
					</FieldArray>
					<Button
						onClick={() =>
							formProps.form.mutators.push('complaints', {
								label: '',
								type: 'text',
								value: '',
								placeholder: '',
								helperText: '',
							})
						}
						color={'primary'}
						variant={'contained'}>
						Add Input
					</Button>
				</>
			)}
		</Form>
	)
}
