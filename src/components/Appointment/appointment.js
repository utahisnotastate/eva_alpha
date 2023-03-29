import React, { useState } from 'react'
import {
	Card,
	CardContent,
	CardActions,
	Button,
	Tabs,
	Tab,
	TextField,
	Box,
} from '@mui/material'
import { Formik, Form, FieldArray, Field } from 'formik'

const zones = [
	{ zone: 'complaints', label: 'Complaints' },
	{ zone: 'assessments', label: 'Assessments' },
	{ zone: 'physical_exam', label: 'Physical Exam' },
	{ zone: 'review_of_systems', label: 'Review of Systems' },
	{ zone: 'plans', label: 'Plans' },
	{ zone: 'summary', label: 'Summary' },
]

const initialValues = zones.reduce((acc, zone) => {
	acc[zone.zone] = zone.zone === 'summary' ? '' : []
	return acc
}, {})

const submitForm = async (values) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('Form submitted:', values)
			resolve({ success: true })
		}, 1000)
	})
}

function Appointment() {
	const [activeTab, setActiveTab] = useState(0)

	const handleTabChange = (event, newValue) => {
		setActiveTab(newValue)
	}

	const handleFormSubmit = async (values, { setSubmitting }) => {
		const response = await submitForm(values)
		if (response.success) {
			console.log('Form submission successful')
		} else {
			console.log('Form submission failed')
		}
		setSubmitting(false)
	}

	return (
		<Card>
			<CardContent>
				<Formik
					initialValues={initialValues}
					onSubmit={handleFormSubmit}>
					{({ values, isSubmitting }) => (
						<Form>
							<Box sx={{ mb: 2 }}>
								<Tabs
									value={activeTab}
									onChange={handleTabChange}>
									{zones.map((zone, index) => (
										<Tab key={index} label={zone.label} />
									))}
								</Tabs>
							</Box>

							{activeTab === zones.length - 1 ? (
								<Field
									component={TextField}
									name="summary"
									label="Summary"
									variant="outlined"
									multiline
									rows={4}
									fullWidth
								/>
							) : (
								<FieldArray name={zones[activeTab].zone}>
									{({ push, remove }) => (
										<div>
											{values[zones[activeTab].zone].map(
												(_, index) => (
													<div key={index}>
														<Field
															component={
																TextField
															}
															name={`${zones[activeTab].zone}.${index}`}
															label={`${
																zones[activeTab]
																	.label
															} #${index + 1}`}
															variant="outlined"
															fullWidth
														/>
														<Button
															onClick={() =>
																remove(index)
															}>
															Remove
														</Button>
													</div>
												)
											)}
											<Button onClick={() => push('')}>
												Add Item
											</Button>
										</div>
									)}
								</FieldArray>
							)}

							<Box sx={{ mt: 2 }}>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									disabled={isSubmitting}>
									Submit
								</Button>
							</Box>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	)
}

export default Appointment
