import React from 'react'
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
} from '@mui/material'
import FormBuilderRow from './FormBuilderRow'

import { FieldArray, Form, Formik } from 'formik'

export default function FormBuilder({ title, fields }) {
	return (
		<Card>
			<CardHeader title={title} />
			<Divider />
			<CardContent>
				<Formik initialValues={{ fields }} onSubmit={console.log}>
					{({ values }) => (
						<Form>
							<FieldArray name="fields">
								{({ push, remove }) => (
									<>
										{values.fields &&
										values.fields.length > 0
											? values.fields.map(
													(field, index) => (
														<FormBuilderRow
															key={index}
															field={field}
															index={index}
															push={push}
															remove={remove}
														/>
													)
											  )
											: null}
									</>
								)}
							</FieldArray>
						</Form>
					)}
				</Formik>
			</CardContent>

			<CardActions>
				<Button color="primary" size="small" variant="text">
					View all <Box component="span" sx={{ pl: 1 }} />
				</Button>
			</CardActions>
		</Card>
	)
}
