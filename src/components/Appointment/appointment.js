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
import AppointmentFieldArray from './appointmentfieldarray'
import EVAFieldArray from '../basestyledcomponents/Inputs/EVAFieldArray'
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

function Appointment() {
	const classes = useStyles()
	const [activeTab, setActiveTab] = useState(0)
	const [filter, setFilter] = useState('complaints')

	const zones = [
		{
			zone: 'complaints',
			label: 'Complaints',
			new_item: { label: 'New Complaint', type: 'text' },
		},
		{
			zone: 'assessments',
			label: 'Assessments',
			new_item: { label: 'New Assessment', type: 'text' },
		},
		{ zone: 'physical_exam', label: 'Physical Exam', new_item: false },
		{
			zone: 'review_of_systems',
			label: 'Review of Systems',
			new_item: false,
		},
		{
			zone: 'plans',
			label: 'Plans',
			new_item: { zone: 'plans', label: 'Plan Label', type: 'text' },
		},
		{ zone: 'summary', label: 'Summary', new_item: false },
	]

	const handleChangeTab = (event, newTab) => {
		console.log(event)
		console.log('newTab', newTab)
		setActiveTab(newTab)
		setFilter(zones[newTab].zone)
	}

	const handleTabClicked = (event, zone) => {
		console.log(event)
		console.log('zone', zone)
		setFilter(zone)
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
						{zones && zones.length > 0
							? zones.map((zone, index) => (
									<Tab key={index} label={zone.label} />
							  ))
							: null}
					</Tabs>
					<div className={classes.formContainer}>
						<AppointmentFieldArray filter={filter} />
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
/*
* <Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}>
							{({ values, setFieldValue }) => (
								<Form>
									<EVAFieldArray
										name={`fields`}
										items={values.fields}
										blankobject={{
											type: 'text',
											label: 'Field Array',
											zone: 'complaints ',
										}}
									/>
								</Form>
							)}
						</Formik>
*
*
* */
