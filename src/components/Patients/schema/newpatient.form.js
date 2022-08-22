import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { addNewPatient } from '../../../api/patients.api'

import Grid from '@material-ui/core/Grid'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'

import CardActions from '@mui/material/CardActions'

export default function NewPatientForm() {
	// Note that we have to initialize ALL of fields with values. These
	// could come from props, but since we don’t want to prefill this form,
	// we just use an empty string. If we don’t do this, React will yell
	// at us
	return (
		<Formik
			initialValues={{
				familyhistory: [],
				socialhistory: [],
				medicalhistory: [],
				surgicalhistory: [],
				allergies: [],
				requests: [],
				diagnoses: [],
				insurances: [],
				medications: [],
				appointments: [],
				first_name: '',
				last_name: '',
				middle_name: '',
				preffered_name: '',
				address_one: '',
				address_two: '',
				city: '',
				state: '',
				zip: '',
				contact_methods: [],
			}}
			enableReinitialize={true}
			onSubmit={(values, actions) => {
				const details = values
				const patient = {
					details,
					ssn: 654287563,
				}
				console.log(patient)
				addNewPatient(patient)
					.then((data) => {
						console.log(data)
						actions.setSubmitting(false)
					})
					.catch((err) => {
						console.log(err)
						actions.setSubmitting(false)
					})
			}}>
			{(formikProps) => (
				<Grid container spacing={3}>
					<Grid item xs={12}>
						{' '}
						<Card sx={{ boxShadow: 3 }}>
							<CardHeader
								title={`New Patient Form`}
								sx={{
									bgcolor: 'primary.main',
									color: 'primary.contrastText',
								}}
							/>
							<CardContent>
								<Form>
									<Field
										name="first_name"
										component={TextField}
										label="First Name"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="last_name"
										component={TextField}
										label="Last Name"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="middle_name"
										component={TextField}
										label="Middle Name"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="preffered_name"
										component={TextField}
										label="Preffered Name"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="address_one"
										component={TextField}
										label="Address One"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="address_two"
										component={TextField}
										label="Address Two"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="city"
										component={TextField}
										label="City"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="state"
										component={TextField}
										label="State"
										variant="outlined"
										fullWidth
									/>
									<Field
										name="zip"
										component={TextField}
										label="Zip"
										variant="outlined"
										fullWidth
									/>
								</Form>
							</CardContent>
							<CardActions
								sx={{ display: 'flex', flexDirection: 'row' }}>
								<Button
									onClick={() => formikProps.handleSubmit()}>
									Add Patient
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			)}
		</Formik>
	)
}

/*
* const [patient, setPatient] = useState(schema)
	return (
		<JsonForms
			schema={schema}
			data={patient}
			renderers={materialRenderers}
			cells={materialCells}
			onChange={({ data }) => setPatient(data)}
		/>
	)
*
* */
