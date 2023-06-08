import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import { TextField, Select, Checkbox, Switch } from 'formik-material-ui'
import { MenuItem } from '@material-ui/core'
import { Field } from 'formik'

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required('First name is required'),
	lastName: Yup.string().required('Last name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	phone: Yup.string().required('Phone number is required'),
	gender: Yup.string().required('Gender is required'),
	dob: Yup.date().required('Date of birth is required'),
})

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	gender: '',
	dob: '',
}

const CustomForm = ({ fields }) => {
	const getField = (field) => {
		switch (field.type) {
			case 'text':
			case 'email':
			case 'password':
				return TextField
			case 'select':
				return Select
			case 'checkbox':
				return Checkbox

			case 'switch':
				return Switch
			default:
				return TextField
		}
	}

	const handleSubmit = (values, { setSubmitting }) => {
		console.log(values)
		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			{({ isSubmitting }) => (
				<Form>
					{fields.map((field) => {
						const FieldComponent = getField(field)
						return FieldComponent ? (
							<Field
								key={field.name}
								name={field.name}
								label={field.label}
								type={field.type}
								component={FieldComponent}
								fullWidth
								margin="normal"
								as={
									field.type === 'select'
										? MenuItem
										: undefined
								}>
								{field.type === 'select' &&
									field.options.map((option) => (
										<MenuItem
											key={option.value}
											value={option.value}>
											{option.label}
										</MenuItem>
									))}
							</Field>
						) : null
					})}
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={isSubmitting}>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	)
}

export default CustomForm
