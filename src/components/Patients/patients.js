import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { Formik, Form, Field } from 'formik'
import {
	makeStyles,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@material-ui/core'
import { TextField } from 'formik-material-ui'

import { getAllPatients, addNewPatient } from '../../api/patients.api'

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: 'auto',
		width: '50%',
	},
}))

/*
* {
    "details": {
        "demographics": {
            "first_name": "John",
            "last_name": "Doe",
            "address": "123 Main St.",
            "city": "Springfield",
            "state": "IL",
            "zip_code": "12345",
            "phone": "123-456-7890",
            "email": "john.doe@example.com",
            "date_of_birth": "1980-01-01"
        },
        "allergies": ["Penicillin", "Peanuts"],
        "insurance": [
            {
                "provider": "HealthInsuranceCo",
                "policy_number": "ABC1234567"
            }
        ],
        "medications": ["Aspirin", "Tylenol"],
        "medical_history": ["Asthma", "High blood pressure"],
        "surgical_history": ["Appendectomy", "Tonsillectomy"]
    },
    "ssn": 123456789,
    "fields": [
        {
            "name": "additional_info_1",
            "value": "Some additional information"
        },
        {
            "name": "additional_info_2",
            "value": "Some more additional information"
        }
    ]
}
*
*
* */

export default function Patients() {
	const classes = useStyles()

	const [patients, setPatients] = useState([])
	const [dialogOpen, setDialogOpen] = useState(false)

	useEffect(() => {
		const fetchPatients = async () => {
			try {
				const data = await getAllPatients()
				setPatients(data)
			} catch (error) {
				alert('Error fetching patients.')
			}
		}

		fetchPatients()
	}, [])

	const handleFormSubmit = async (values) => {
		const defaultPatient = {
			details: {
				demographics: {
					first_name: values.first_name,
					last_name: values.last_name,
					address: '',
					city: '',
					state: '',
					zip_code: '',
					phone: '',
					email: '',
					date_of_birth: '',
				},
				allergies: [],
				insurance: [],
				medications: [],
				medical_history: [],
				surgical_history: [],
			},
			ssn: values.ssn,
			fields: [],
		}

		try {
			const addedPatient = await addNewPatient(defaultPatient)
			setPatients([...patients, addedPatient])
			setDialogOpen(false)
			alert('Patient added successfully.')
		} catch (error) {
			alert('Error adding patient.')
		}
	}

	const columns = [
		{
			name: 'id',
			label: 'ID',
			options: {
				display: false,
			},
		},
		{
			name: 'first_name',
			label: 'First Name',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'last_name',
			label: 'Last Name',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'demographics.date_of_birth',
			label: 'Date of Birth',
			options: {
				filter: true,
				sort: true,
			},
		},
	]

	return (
		<div className={classes.root}>
			<MUIDataTable
				title="Patients"
				data={patients.map((patient) => [
					patient.details.demographics.first_name +
						' ' +
						patient.details.demographics.last_name,
					patient.details.demographics.date_of_birth,
					patient.ssn,
				])} // assuming that's how you want to format the data
				columns={columns}
				options={{
					customToolbar: () => {
						return (
							<Button
								color="primary"
								variant="contained"
								onClick={() => setDialogOpen(true)}>
								Add Patient
							</Button>
						)
					},
				}}
			/>
			<Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
				<DialogTitle>Add New Patient</DialogTitle>
				<DialogContent>
					<Formik
						initialValues={{
							first_name: '',
							last_name: '',
							ssn: '',
						}}
						onSubmit={handleFormSubmit}>
						{({ handleSubmit }) => (
							<Form onSubmit={handleSubmit}>
								<Field
									component={TextField}
									fullWidth
									label="First Name"
									name="first_name"
								/>
								<Field
									component={TextField}
									fullWidth
									label="Last Name"
									name="last_name"
								/>
								<Field
									component={TextField}
									fullWidth
									label="SSN"
									name="ssn"
								/>
								<DialogActions>
									<Button
										onClick={() => setDialogOpen(false)}
										color="secondary">
										Cancel
									</Button>
									<Button type="submit" color="primary">
										Add
									</Button>
								</DialogActions>
							</Form>
						)}
					</Formik>
				</DialogContent>
			</Dialog>
		</div>
	)
}

/*
*
* {
			name: 'view',
			label: 'View',
			options: {
				customBodyRender: (value, tableMeta, updateValue) => {
					const patientId = tableMeta.rowData[0]
					return <RequestModal />
				},
			},
		} */
