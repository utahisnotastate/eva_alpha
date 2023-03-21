import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { makeStyles } from '@mui/styles'
import { Tab, Tabs, TextField, Button, Box, Typography } from '@mui/material'

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		'& > *': {
			marginBottom: theme.spacing(2),
		},
	},
	addButton: {
		alignSelf: 'flex-start',
	},
}))

const AppointmentForm = ({ appointment }) => {
	const classes = useStyles()
	const [tabValue, setTabValue] = React.useState(0)

	const handleTabChange = (event, newValue) => {
		setTabValue(newValue)
	}

	return (
		<Formik
			initialValues={{
				complaints: [],
				physical_exam: [],
				assessments: [],
				plans: [],
				summary: '',
				review_of_systems: [],
			}}
			onSubmit={(values) => {
				// Submit the form data to the API
			}}>
			{({ values }) => (
				<Form className={classes.form}>
					<Tabs value={tabValue} onChange={handleTabChange}>
						<Tab label="Complaints" />
						<Tab label="Physical Exam" />
						<Tab label="Assessments" />
						<Tab label="Plans" />
						<Tab label="Summary" />
						<Tab label="Review of Systems" />
					</Tabs>
					<Typography variant="h6">Complaints</Typography>

					<Button type="submit" variant="contained">
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	)
}

export default AppointmentForm
