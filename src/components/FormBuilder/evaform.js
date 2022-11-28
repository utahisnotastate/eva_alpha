import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { TextField } from 'formik-mui'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default function EVAForm() {
	const form = useSelector((state) => state.activeform.form)
	const fields = useSelector((state) => state.activeform.fields)
	return (
		<Formik
			initialValues={{ fields: fields, form: form }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					actions.setSubmitting(false)
				}, 1000)
			}}>
			{({ values }) => (
				<Form>
					<Typography variant="h6">{form}</Typography>
					<FieldArray name="fields">
						{({ insert, remove, push }) => (
							<div>
								{values.fields.length > 0 &&
								values.fields.length > 0 ? (
									values.fields.map((field, index) => (
										<div
											key={index}
											style={{
												display: 'flex',
												flexDirection: 'row',
											}}>
											<Typography variant="body1">
												{field.type}
											</Typography>
											<Field
												name={`fields.${index}.value`}
												component={TextField}
												label={field.label}
												placeholder={field.defaultValue}
												fullWidth
											/>
											<button
												type="button"
												onClick={() => remove(index)}>
												-
											</button>
											<button
												type="button"
												onClick={() =>
													insert(index, {
														type: 'text',
														label: '',
														defaultValue: '',
														value: '',
													})
												}>
												+
											</button>
										</div>
									))
								) : (
									<Typography variant="body1">
										No fields
									</Typography>
								)}
							</div>
						)}
					</FieldArray>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	)
}
