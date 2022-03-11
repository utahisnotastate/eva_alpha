import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from 'formik-mui'
import patientfields from './newpatient.fields'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
}))

export default function CreateNewPatient() {
	const classes = useStyles()

	return (
		<Formik
			initialValues={{
				firstname: '',
				lastname: '',
				email: '',
				phone: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: '',
				dob: '',
			}}
			onSubmit={(values) => console.log(values)}>
			<Form>
				<div className={classes.root}>
					{patientfields.map((field, index) => (
						<div key={index}>
							<Field
								name={field.name}
								component={TextField}
								type={field.type}
								placeholder={field.placeholder}
								label={field.label}
							/>
						</div>
					))}
				</div>
				<button type="submit">Create Patient</button>
			</Form>
		</Formik>
	)
}

/* *

onSubmit={(values) => console.log(values)}

			onSubmit={(values, { setSubmitting }) => {

			}}
				setTimeout(() => {
					axios.post('/api/patients', values)
						.then(res => {
							console.log(res)
							setSubmitting(false)
						})
						.catch(err => {
							console.log(err)
							setSubmitting(false)
						})
				}, 500)
/
 */
