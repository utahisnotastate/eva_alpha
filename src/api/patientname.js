//import react
import React, { useState, useEffect } from 'react'
//import Typography component
import Typography from '@material-ui/core/Typography'
//import getBasicPatientInformation from patient.api.js file
import { getBasicPatientInformation } from './patient.api'
import moment from 'moment'

export default function PatientDisplayName({ patient }) {
	//create a state variable for patient information
	/*const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [middle_name, setMiddleName] = useState('')
	const [date_of_birth, setDateOfBirth] = useState('')*/

	/*useEffect(() => {
		return () => {
			getBasicPatientInformation(patientId)
				.then((patientInformation) => {
					console.log(patientInformation)
					setFirstName(patientInformation.first_name)
					setLastName(patientInformation.last_name)
					setMiddleName(patientInformation.middle_name)
					setDateOfBirth(patientInformation.date_of_birth)
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}, [patientId])*/
	return (
		<Typography>
			{patient.first_name} {patient.last_name}
		</Typography>
	)
}
