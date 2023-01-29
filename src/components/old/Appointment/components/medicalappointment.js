import React, { useEffect } from 'react'
import Card from '../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import { Field, Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import CustomTabs from '../../../basestyledcomponents/CustomTabs/CustomTabs'
import { getAppointment } from '../../../../api/appointment.api'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { TextField } from 'formik-mui'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra'

const useStyles = makeStyles({
	header: {
		paddingLeft: '15px',
	},
	content: {
		padding: '15px',
		minHeight: '100vh',
	},
	button: {
		padding: '20px',
	},
})

export default function MedicalAppointment() {
	let { id } = useParams()
	const dispatch = useDispatch()
	const classes = useStyles()
	const appointment = useSelector((state) => state.appointment)

	const { details, patient } = appointment

	/*
	* {
		id: '',
		details: {
			status: '',
			summary: '',
			followup: '',
			diagnoses: [],
			complaints: [],
			assessments: [],
			physicalexam: [],
			reviewofsystems: [],
			preappointmentnotes: '',
		},
		type: '',
		status: 'scheduled',
		start: '',
		end: '',
		patient: '',
		provider: '',
	}
	*
	*
	*
	* */

	useEffect(() => {
		getAppointment(id)
			.then((appointment) => {
				dispatch({ type: 'LOAD_APPOINTMENT', appointment })
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])
	// setToDos([...todos, ...[newToDo]])

	return (
		<Card>
			<CardHeader className={classes.header}>
				<Typography>Medical Appointment</Typography>
			</CardHeader>
			<CardBody>
				<CustomTabs
					headerColor="primary"
					tabs={[
						{
							tabName: 'Complaints',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<div>
									<Typography>Complaints</Typography>
								</div>
							),
						},
						{
							tabName: 'Assessments',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<div>
									<Typography>Assessments</Typography>
								</div>
							),
						},
						{
							tabName: 'Physical Exam',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<div>
									<Typography>Physical Exam</Typography>
								</div>
							),
						},
						{
							tabName: 'Review of Systems',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<div>
									<Typography>Review of Systems</Typography>
								</div>
							),
						},
						{
							tabName: 'Diagnoses',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<div>
									<Typography>Diagnoses</Typography>
								</div>
							),
						},
						{
							tabName: 'Follow Up',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<div>
									<Typography>Follow Ups</Typography>
								</div>
							),
						},
						{
							tabName: 'Summary',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<div>
									<Typography>Summary</Typography>
								</div>
							),
						},
					]}
				/>

				<Formik
					initialValues={appointment}
					onSubmit={async (values) =>
						alert(JSON.stringify(values, null, 2))
					}>
					<Form>
						<Field
							component={TextField}
							fullWidth
							name={`details.preappointmentnotes`}
							multiline
							minRows={4}
							variant="outlined"
							label="Pre Appointment Notes"
							placeholder="Pre Appointment Notes"
						/>
						<Field
							component={TextField}
							fullWidth
							name={`details.summary`}
							multiline
							minRows={4}
							variant="outlined"
							label="Summary"
							placeholder="Pre Appointment Notes"
						/>
						<button type="submit">Submit</button>
					</Form>
				</Formik>
			</CardBody>
		</Card>
	)
}

/*
<Card>
					<Grid container direction={`column`}>
						<Grid item className={classes.header}>
							<CardHeader color={`primary`}>
								<Typography>Header goes here</Typography>
							</CardHeader>
						</Grid>
						<Formik
							enableReinitialize={true}
							initialValues={appointment}
							onSubmit={() => {
								console.log(`Submitted`)
							}}>
							{({ values }) => (
								<Grid item className={classes.content}>
									<PatientEncounter
										appointment={appointment}
										appointmentforms={appointmentforms}
										complaints={``}
										assessments={``}
										physical_exam_forms={``}
										review_of_systems_forms={``}
									/>
									<pre>
										{JSON.stringify(appointment, null, 2)}
									</pre>
								</Grid>
							)}
						</Formik>
					</Grid>
				</Card>
 */
