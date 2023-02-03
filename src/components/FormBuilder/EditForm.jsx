import React from 'react'
import { Button, Card, CardContent, CardHeader, Divider } from '@mui/material'
import FormRow from './FormRow'

import { FieldArray, Form, Formik } from 'formik'

export default function EditForm({ title }) {
	const handleSubmit = (values, actions) => {
		console.log(values)
		actions.setSubmitting(false)
	}

	return (
		<Card>
			<CardHeader title={title} />
			<Divider />
			<CardContent>
				<Formik
					enableReinitialize
					initialValues={{
						fields: [
							{
								type: 'text',
								label: 'test physical exam',
								zone: 'physical exam',
								options: [],
							},
						],
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
