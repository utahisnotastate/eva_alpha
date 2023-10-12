import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField, Select } from 'formik-material-ui'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import { Typography, MenuItem } from '@material-ui/core'
import PatientAutocomplete from '../../PatientAutocomplete/patientautocomplete'

export default function ScheduleAppointmentModal({ slottoschedule, patient }) {
	return (
		<Formik
			initialValues={{
				type: 'first_appointment',
				patient: patient,
				start: moment(slottoschedule.start).format(
					'MMM DD YYYY @ h:mm a'
				),
				end: moment(slottoschedule.end).format('MMM DD YYYY @ h:mm a'),
				provider: slottoschedule.resourceId,
				scheduling_note: '',
			}}
			onSubmit={(values) => {
				console.log(values)
			}}>
			{() => (
				<Form>
					<Grid container>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Appointment Type:</Typography>
								</Grid>
								<Grid item xs={8}>
									<Field component={Select} name="type">
										<MenuItem value="first_appointment">
											First Appointment
										</MenuItem>
										<MenuItem value="medication_management">
											Medication Management
										</MenuItem>
										<MenuItem value="follow_up">
											Follow Up
										</MenuItem>
										<MenuItem value="appointment">
											Appointment
										</MenuItem>
									</Field>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Patient:</Typography>
								</Grid>
								<Grid item xs={8}>
									<Field
										name="patient"
										component={PatientAutocomplete}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Appointment Start:</Typography>
								</Grid>
								<Grid item xs={8}>
									<Field component={TextField} name="start" />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Appointment End:</Typography>
								</Grid>
								<Grid item xs={8}>
									<Field component={TextField} name="end" />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Provider:</Typography>
								</Grid>
								<Grid item xs={8}>
									<Field
										component={TextField}
										name="provider"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Comment:</Typography>
								</Grid>
								<Grid item xs={8}>
									<Field
										component={TextField}
										multiline
										name="scheduling_note"
										placeHolder={`Please enter any patient comments here`}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Form>
			)}
		</Formik>
	)
}
