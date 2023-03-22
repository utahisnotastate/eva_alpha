import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Card,
	CardContent,
	CardActions,
	Button,
	Tabs,
	Tab,
} from '@material-ui/core'
import { Typography } from '@mui/material'
import { Formik, Form, FieldArray } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	card: {
		borderRadius: theme.spacing(1),
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
	},
	tabContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	formContainer: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
	},
	saveButton: {
		marginLeft: 'auto',
		marginRight: theme.spacing(2),
	},
	addButton: {
		marginLeft: theme.spacing(1),
	},
	deleteButton: {
		color: theme.palette.error.main,
	},
}))

const initialValues = {
	fields: [],
}

const validationSchema = Yup.object().shape({})

function Appointment(props) {
	const classes = useStyles()
	const [activeTab, setActiveTab] = useState(0)

	const zones = [
		'complaints',
		'assessments',
		'physical_exam',
		'review_of_systems',
		'plans',
		'summary',
	]

	const handleChangeTab = (event, newTab) => {
		setActiveTab(newTab)
	}

	const handleSubmit = (values, { setSubmitting }) => {
		// Submit logic here
		setSubmitting(false)
	}

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardContent>
					<Tabs
						value={activeTab}
						onChange={handleChangeTab}
						className={classes.tabContainer}>
						<Tab label="Complaints" />
						<Tab label="Assessments" />
						<Tab label="Physical Exam" />
						<Tab label="Review of Systems" />
						<Tab label="Plans" />
						<Tab label="Summary" />
					</Tabs>
					<div className={classes.formContainer}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}>
							{({ values, setFieldValue }) => (
								<Form>
									<FieldArray name="fields">
										{({ push, remove }) => (
											<>{/* Field array form here */}</>
										)}
									</FieldArray>
								</Form>
							)}
						</Formik>
					</div>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						color="primary"
						className={classes.saveButton}
						onClick={() => console.log('save button clicked')}>
						Save
					</Button>
				</CardActions>
			</Card>
		</div>
	)
}

export default Appointment
