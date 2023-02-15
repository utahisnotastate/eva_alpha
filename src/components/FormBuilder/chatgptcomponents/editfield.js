import React from 'react'
import { Field, FieldArray } from 'formik'
import { TextField, Select } from 'formik-material-ui'
import { Button, Box, MenuItem } from '@mui/material'

const EditField = ({ field, index, remove, push }) => (
	<Box key={index} display="flex" alignItems="center" marginBottom={2}>
		<Box width={200} marginRight={2}>
			<Field
				component={Select}
				name={`fields.${index}.type`}
				label="Type"
				fullWidth>
				<MenuItem value="text">Text</MenuItem>
				<MenuItem value="textarea">Textarea</MenuItem>
				<MenuItem value="number">Number</MenuItem>
				<MenuItem value="date">Date</MenuItem>
				<MenuItem value="select">Select</MenuItem>
				<MenuItem value="radio">Radio</MenuItem>
			</Field>
		</Box>
		<Box width={300} marginRight={2}>
			<Field
				component={TextField}
				name={`fields.${index}.label`}
				label="Label"
				fullWidth
			/>
		</Box>
		{['select', 'radio'].includes(field.type) && (
			<Box width={400}>
				<FieldArray name={`fields.${index}.options`}>
					{({ remove }) => (
						<>
							{field.options.map((option, i) => (
								<Box
									key={i}
									display="flex"
									alignItems="center"
									marginBottom={2}>
									<Box width={300} marginRight={2}>
										<Field
											component={TextField}
											name={`fields.${index}.options.${i}.label`}
											label={`Option ${i + 1}`}
											fullWidth
										/>
									</Box>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => remove(i)}
										disabled={field.options.length === 1}
										sx={{ marginLeft: 2 }}>
										Remove
									</Button>
								</Box>
							))}
							<Button
								variant="contained"
								color="primary"
								onClick={() => push({ label: '' })}
								sx={{ marginTop: 2 }}>
								Add Option
							</Button>
						</>
					)}
				</FieldArray>
			</Box>
		)}
		<Button
			variant="contained"
			color="secondary"
			onClick={() => remove(index)}
			sx={{ marginLeft: 2, backgroundColor: '#ff0000' }}>
			Remove
		</Button>
	</Box>
)

export default EditField
