import React from 'react'
import { Button, Card, CardContent, CardHeader, Divider } from '@mui/material'
import FormRow from './FormRow'
import { useSelector, useDispatch } from 'react-redux'

import { FieldArray, Form, Formik } from 'formik'

export default function FormBuilder({ title, zone = 'physical_exam' }) {
	const dispatch = useDispatch()
	const handleSubmit = (values, actions) => {
		console.log(values)
		dispatch({ type: 'LOAD_CUSTOM_FIELDS', customfields: values.fields })
		actions.setSubmitting(false)
	}

	return (
		<Card>
			<CardHeader title={title} />
			<Divider />
			<CardContent>
				<Formik
					initialValues={{
						fields: [],
					}}
					onSubmit={(values, actions) =>
						handleSubmit(values, actions)
					}>
					{({ values }) => (
						<Form>
							<FieldArray name="fields">
								{({ push, remove }) => (
									<>
										{values.fields &&
										values.fields.length > 0 ? (
											values.fields.map(
												(field, index) => (
													<FormRow
														key={index}
														field={field}
														name={`fields.${index}`}
														buttonLabel="Remove Field"
														blankfield={{
															type: 'text',
															label: '',
															options: [],
															zone: zone,
														}}
														index={index}
														push={push}
														remove={remove}
													/>
												)
											)
										) : (
											<Button
												color="primary"
												size="small"
												variant="text"
												onClick={() =>
													push({
														type: 'text',
														label: '',
														options: [],
														zone: zone,
													})
												}>
												Add Field
											</Button>
										)}
									</>
								)}
							</FieldArray>
							<input type="submit" />
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	)
}
