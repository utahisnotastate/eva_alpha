import React from 'react'
import { Formik, FieldArray, Field } from 'formik'
import { TextField } from 'formik-mui'
import EVADynamicField from '../basestyledcomponents/Inputs/EVADynamicField'
import { Button, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Add, Delete } from '@mui/icons-material'

const initialValues = {
	fields: [
		{
			label: 'Test this ',
			type: 'text',
			placeholder: 'Placeholder test',
			helperText: 'This is the helper text',
		},
	],
}

const onSubmit = (values) => {
	console.log(values)
}
// 	alignItems: 'center',
const Form = styled('form')({
	display: 'flex',
	flexDirection: 'column',
	'& > *': {
		margin: '1rem',
	},
})

const FieldGroup = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: '1rem',
	boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
	borderRadius: '10px',
	transition: 'all 0.3s ease',
	'&:hover': {
		transform: 'scale(1.05)',
		boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
	},
})

const FormField = styled(TextField)({
	width: '100%',
	marginBottom: '1rem',
})

const FormButton = styled(Button)({
	width: '100%',
})

const AddButton = styled(IconButton)({
	alignSelf: 'flex-end',
})

const DeleteButton = styled(IconButton)({
	alignSelf: 'flex-start',
	marginLeft: 'auto',
})

const AppointmentFieldArray = ({ filter }) => {
	const initialValues = {
		fields: [
			{
				label: 'Test this ',
				type: 'text',
				placeholder: 'Placeholder test',
				helperText: 'This is the helper text',
				value: 'Value in name field',
				zone: 'complaints',
			},
			{
				label: 'Assessments ',
				type: 'text',
				placeholder: 'Check if assessments visible',
				helperText: 'This is the helper text',
				value: '',
				zone: 'assessments',
			},
		],
	}

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ values }) => (
				<FieldArray name="fields">
					{({ insert, remove, push }) => (
						<Form>
							{values.fields && values.fields.length > 0 ? (
								values.fields
									.filter((field) => field.zone === filter)
									.map((field, index) => (
										<FieldGroup key={index}>
											<DeleteButton
												onClick={() => remove(index)}>
												<Delete />
											</DeleteButton>
											<Field
												InputProps={{ notched: true }}
												InputLabelProps={{
													shrink: true,
												}}
												component={TextField}
												label={field.label}
												fullWidth
												name={`fields.${index}.value`}
												type={field.type}
												placeholder={field.placeholder}
												helperText={field.helperText}
											/>
										</FieldGroup>
									))
							) : (
								<p>No fields found.</p>
							)}
							<AddButton
								onClick={() => push(initialValues.fields[0])}>
								<Add />
							</AddButton>
							<FormButton
								type="submit"
								variant="contained"
								color="primary">
								Submit
							</FormButton>
						</Form>
					)}
				</FieldArray>
			)}
		</Formik>
	)
}

export default AppointmentFieldArray

/*
{values.fields &&
								values.fields.length > 0 &&
								values.fields.map((field, index) => (
									<FieldGroup key={index}>
										<DeleteButton
											onClick={() => remove(index)}>
											<Delete />
										</DeleteButton>
										<Field
											InputProps={{ notched: true }}
											InputLabelProps={{
												shrink: true,
											}}
											component={TextField}
											label={field.label}
											fullWidth
											name={`fields.${index}.value`}
											type={field.type}
											placeholder={field.placeholder}
											helperText={field.helperText}
										/>
									</FieldGroup>
								))}*
* */
