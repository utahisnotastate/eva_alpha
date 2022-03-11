import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import GridContainer from '../basestyledcomponents/Grid/GridContainer'
import GridItem from '../basestyledcomponents/Grid/GridItem'
import { Typography } from '@material-ui/core'
import API_URL from '../../api/api_url'
import patientfields from './newpatient.fields'
import { TextField } from 'formik-mui'
import createNewPatientInDB from './createpatient.api'

export default function CreateNewPatient() {
	const [usercreated, setUserCreated] = useState(false)
	const [newuserid, setNewUserId] = useState()
	const handleSubmit = async (values) => {
		createNewPatientInDB(values)
			.then((res) => {
				setUserCreated(true)
				setNewUserId(res.data.id)
			})
			.catch((err) => {
				console.log(err)
			})
		console.log(values)
	}
	const PatientFormField = ({ name, type, placeholder, label, index }) => {
		return (
			<GridItem key={index} xs={12} style={{ margin: '10px' }}>
				<GridContainer>
					<GridItem xs={4}>
						<Typography>{label}*</Typography>
					</GridItem>
					<GridItem xs={8}>
						<Field
							name={name}
							component={TextField}
							type={type}
							placeholder={placeholder}
							fullWidth
						/>
					</GridItem>
				</GridContainer>
			</GridItem>
		)
	}
	return (
		<div>
			<div>
				{usercreated ? (
					<Redirect to={`/patient/${newuserid}/demographics`} />
				) : null}
			</div>
			<Formik
				initialValues={{
					first_name: '',
					last_name: '',
					preferred_name: '',
					date_of_birth: '',
					middle_name: '',
					ssn: '',
					details: {
						demographics: {
							race: '',
							gender: '',
							marital_status: '',
							employment_status: '',
						},
						address: {
							address_one: '',
							address_two: '',
							city: '',
							state: '',
							zip_code: '',
						},
						allergies: [],
						medical_history: [],
						loadSurgicalHistory: [],
						contact_methods: [],
					},
				}}
				onSubmit={(values) => handleSubmit(values)}>
				<Form>
					<GridContainer direction={`column`}>
						<GridItem xs={12}>
							<Typography>Register New Patient</Typography>
						</GridItem>
						{patientfields.map((field, index) => {
							return (
								<PatientFormField
									key={index}
									name={field.name}
									type={field.type}
									placeholder={field.placeholder}
									label={field.label}
								/>
							)
						})}
						<GridItem xs={12}>
							<button type={`submit`}>Create Patient</button>
						</GridItem>
					</GridContainer>
				</Form>
			</Formik>
		</div>
	)
}
/*
* <GridItem xs={12}>
							<GridContainer>
								<GridItem xs={4}>
									<Typography>Date of Birth*</Typography>
								</GridItem>
								<GridItem xs={8}>
									<TextField
										type="date"
										style={styles.input}
										inputRef={register({ required: true })}
										name={`date_of_birth`}
										placeholder={`mm/dd/yyyy`}
									/>
									{errors.date_of_birth &&
										'Date of Birth is required'}
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12}>
							<GridContainer>
								<GridItem xs={4}>
									<Typography>First Name*</Typography>
								</GridItem>
								<GridItem xs={8}>
									<TextField
										style={styles.input}
										inputRef={register({ required: true })}
										name={`first_name`}
										placeholder={`First Name`}
									/>
									{errors.first_name &&
										'First Name is required'}
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12}>
							<GridContainer>
								<GridItem xs={4}>
									<Typography>Middle Name*</Typography>
								</GridItem>
								<GridItem xs={8}>
									<TextField
										style={styles.input}
										inputRef={register({ required: true })}
										name={`middle_name`}
										placeholder={`Middle Name`}
									/>
									{errors.middle_name &&
										'Middle Name is required'}
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12}>
							<GridContainer>
								<GridItem xs={4}>
									<Typography>Last Name*</Typography>
								</GridItem>
								<GridItem xs={8}>
									<TextField
										style={styles.input}
										inputRef={register({ required: true })}
										name={`last_name`}
										placeholder={`Last Name`}
									/>
									{errors.last_name &&
										'Last Name is required'}
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12}>
							<GridContainer>
								<GridItem xs={4}>
									<Typography>Preferred Name</Typography>
								</GridItem>
								<GridItem xs={8}>
									<TextField
										style={styles.input}
										inputRef={register}
										name={`preferred_name`}
										placeholder={`Preferred Name`}
									/>
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12}>
							<GridContainer>
								<GridItem xs={4}>
									<Typography>SSN*</Typography>
								</GridItem>
								<GridItem xs={8}>
									<TextField
										style={styles.input}
										inputRef={register({ required: true })}
										name={`ssn`}
										placeholder={`SSN`}
									/>
									{errors.ssn && 'SSN is required'}
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem>
							<input
								style={styles.input}
								type="submit"
								value={`Create Patient`}
							/>
						</GridItem>
*
*
*
* */
/*
<Controller
                    style={styles.input}
                    name={`ssn`}
                    as={<TextField type={`number`} />}
                    rules={{ required: true }}
                    control={control}
                    placeholder={`SSN`}
                  />

<Controller
                    style={styles.input}
                    name={`preferred_name`}
                    as={TextField}
                    control={control}
                    placeholder={`Preferred Name`}
                  />

<Controller
                    style={styles.input}
                    name={`last_name`}
                    as={TextField}
                    rules={{ required: true }}
                    control={control}
                    placeholder={`Last Name`}
                  />

<Controller
                    style={styles.input}
                    name={`middle_name`}
                    rules={{ required: true }}
                    as={TextField}
                    control={control}
                    placeholder={`Middle Name`}
                  />

<Controller
                    style={styles.input}
                    name={`first_name`}
                    as={TextField}
                    rules={{ required: true }}
                    control={control}
                    placeholder={`First Name`}
                  />

<Controller
                    style={styles.input}
                    name={`date_of_birth`}
                    rules={{ required: true }}
                    as={<TextField type="date" />}
                    control={control}
                    placeholder={`mm/dd/yyyy`}
                  />
<input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
                    <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
                    <input type="text" placeholder="Middle Name" name="Middle Name" ref={register} />
                    <input type="text" placeholder="Preferred Name" name="Preferred Name" ref={register} />
                    <input type="datetime" placeholder="Date of Birth" name="Date of Birth" ref={register} />


 */
