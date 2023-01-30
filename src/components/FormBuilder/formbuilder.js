import React from 'react'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
} from '@mui/material'
import FormRow from './FormRow'

import { FieldArray, Form, Formik } from 'formik'

export default function FormBuilder({ title }) {
	const handleSubmit = (values) => {
		console.log(values)
	}

	return (
		<Card>
			<CardHeader title={title} />
			<Divider />
			<CardContent>
				<Formik initialValues={{ fields: [] }} onSubmit={handleSubmit}>
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
						</Form>
					)}
				</Formik>
			</CardContent>
			<CardActions>
				<Button color="primary" size="small" variant="text">
					Save
				</Button>
			</CardActions>
		</Card>
	)
}
