import React, { useState } from 'react'
import { Formik, Form, FieldArray, Field } from 'formik'
import { Container, Grid, Button, Paper } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import Stepper from 'react-stepper-horizontal'

const steps = [
	{ label: 'Complaints', value: 'complaints' },
	{ label: 'Assessment', value: 'assessment' },
	{ label: 'Physical Exam', value: 'physical_exam' },
	{ label: 'Plan', value: 'plan' },
	{ label: 'Review of Systems', value: 'review_of_systems' },
	{ label: 'Summary', value: 'summary' },
]

const initialValues = {
	complaints: [{ name: '' }],
	assessment: [{ name: '' }],
	physical_exam: [{ name: '' }],
	plan: [{ name: '' }],
	review_of_systems: [{ name: '' }],
	summary: '',
}

const renderFields = (values, activeZone, push, remove) => {
	return (
		<>
			{values[activeZone].map((_, index) => (
				<Grid container spacing={2} key={index}>
					<Grid item xs={12}>
						<Field
							component={TextField}
							name={`${activeZone}[${index}].name`}
							label="Item Name"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => remove(index)}>
							Remove
						</Button>
					</Grid>
				</Grid>
			))}
			<Button
				variant="contained"
				color="primary"
				onClick={() => push({ name: '' })}>
				Add Item
			</Button>
		</>
	)
}

const Appointment = () => {
	const [activeStep, setActiveStep] = useState(0)
	const [activeZone, setActiveZone] = useState(steps[0].value)

	const handleStep = (step) => () => {
		console.log(step)
		setActiveStep(step)
		setActiveZone(steps[step].value)
	}

	return (
		<Paper>
			<Container maxWidth="md">
				<Stepper
					steps={steps.map((step) => ({ title: step.label }))}
					activeStep={activeStep}
					circleFontSize={0}
					onClick={handleStep}
				/>
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => console.log(values)}>
					{({ values, handleSubmit }) => (
						<Form onSubmit={handleSubmit}>
							<FieldArray name={activeZone}>
								{({ push, remove }) =>
									renderFields(
										values,
										activeZone,
										push,
										remove
									)
								}
							</FieldArray>
							<Button
								variant="contained"
								color="primary"
								type="submit">
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			</Container>
		</Paper>
	)
}

export default Appointment
