import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import Card from '../../basestyledcomponents/Card/Card'
import CardHeader from '../../basestyledcomponents/Card/CardHeader'
import { Formik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import CompletedAppointment from './CompletedAppointment/completedappointment'
import PatientEncounter from './PatientEncounter/patientencounter'
import PreAppointment from './PreAppointment/PreAppointment'
import { getAppointment } from '../../../api/appointment.api'
import { fetchAllForms } from '../../../api/forms.api'
import { useParams } from 'react-router-dom'
import AppointmentHeader from './AppointmentHeader/appointmentheader'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'

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
	let { path, url } = useRouteMatch()
	const dispatch = useDispatch()
	const classes = useStyles()
	const [appointmentforms, setAppointmentForms] = useState()
	const appointment = useSelector((state) => state.appointment)

	//destructure appointment so it has appointment.details, appointment.patient.details, and appointment.details.clinical_data
	const { details, patient, status, type } = appointment

	// Determines which component to render based on the status propert

	/*
  This changes the state of the appointment component to in progress. it was most likely in the scheduled
  state before meaning that the only thing showing was the scheduling note. Now it will show the exam forms and such
   */

	const handleEncounterBegin = async () => {
		//get all forms from server
		const allforms = await fetchAllForms()
		//remove all the inactive forms
		setAppointmentForms(allforms)
		const activeforms = allforms.filter((form) => form.active)
		// split the forms into 2 groups: physical exam forms, and ROS forms
		const activephysicalexamforms = activeforms.filter(
			(form) => form.form_type === 'physical_exam'
		)

		const activeROSforms = activeforms.filter(
			(form) => form.form_type === 'review_of_systems'
		)

		const new_clinical_data = {
			clinical_forms: activeforms,
			complaints: [],
			assessments: [],
		}
	}
	/*
  instead of splitting the medical appointment into different routes, it's easier to just render different
  components based on the status of the appointment.
   */

	function determineAppointmentComponentToRender() {
		switch (appointment.status) {
			case 'encounter_ended':
				return <CompletedAppointment appointment={appointment} />
			case 'in_progress':
				return (
					<Grid container direction={`column`}>
						<Grid item>
							<PatientEncounter
								appointment={appointment}
								appointmentforms={appointmentforms}
								complaints={``}
								assessments={``}
								physical_exam_forms={``}
								review_of_systems_forms={``}
							/>
						</Grid>
					</Grid>
				)
			default:
				return (
					<PreAppointment
						appointment={appointment}
						buttonAction={handleEncounterBegin}
					/>
				)
		}
	}
	/*
  The button rendered by this function is what the provider uses to change the progress of an appointment.

  An appointment progress should go something like
  scheduled (which means you only need to display any notes made during scheduling --> "in progress" which
  means that the doctor can fill out the medical forms
  --> encounter ended which means that the clinical documentation still isn't done, but the patient is no
  longer in the office and follow up can be scheduled (if necessary)
  --> "notes completed" which means the final notes have been written, and no one besides the provider can make
  changes to it. Additionallyu this will only show the medical chart fields that were filled out as a summary
   */

	useEffect(() => {
		getAppointment(id)
			.then((appointment) => {
				console.log(appointment)
				dispatch({ type: 'LOAD_APPOINTMENT', appointment })
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])
	console.log({ details, patient })
	return (
		<Grid container direction="row" spacing={1}>
			<Grid item xs={12} style={{ margin: '20px' }}>
				<Card>
					<Grid container direction={`column`}>
						<Grid item className={classes.header}>
							<CardHeader color={`primary`}>
								<Typography>Header goes here</Typography>
							</CardHeader>
						</Grid>
						<Formik
							enableReinitialize={true}
							initialValues={appointment}>
							{({ values }) => (
								<Grid item className={classes.content}>
									{determineAppointmentComponentToRender(
										appointment
									)}
									<pre>
										{JSON.stringify(appointment, null, 2)}
									</pre>
								</Grid>
							)}
						</Formik>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
}

/*

                    <Grid item>
                      <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Grid>
function determineAppointmentHeaderActionButtonToRender(appointment) {
    switch (appointment.status) {
      case "scheduled":
        return (
          <AppointmentHeaderButton
            text={`Begin Encounter`}
            buttonAction={handleEncounterBegin}
            className={classes.button}
          />
        );
      case "in_progress":
        return (
          <AppointmentHeaderButton
            text={`End Encounter`}
            buttonAction={handleEncounterEnd}
            className={classes.button}
          />
        );
      case "notes_completed":
        return (
          <AppointmentHeaderButton
            text={`Edit Encounter Documentation`}
            buttonAction={handleEncounterEnd}
            className={classes.button}
          />
        );
      case "encounter_ended":
        return (
          <AppointmentHeaderButton
            text={`Mark notes complete`}
            buttonAction={handleNotesCompleted}
            className={classes.button}
          />
        );
      default:
        return (
          <AppointmentHeaderButton
            text={`Begin Appointment`}
            buttonAction={handleEncounterBegin}
            className={classes.button}
          />
        );
    }
  }


{appointmentpatientroutes.map((route) => (
                        <Route
                          exact
                          key={route.label}
                          path={`${path}${route.path}/1`}
                          component={route.component}
                        />
                      ))}

// this is navlinks component

  const [complaints, setComplaints] = useState([]);
  const [review_of_systems, setReviewOfSystems] = useState([]);
  const [physical_exam, setPhysicalExam] = useState([]);
  const [plans, setPlans] = useState([]);
  const [summary, setSummary] = useState([]);

<Grid item xs={3}>
            <Card>
              <CardBody>
                <NavLinks patientroutes={appointmentpatientroutes} />
              </CardBody>
            </Card>
          </Grid>
<Route path={`${path}/test`}>
                      <AppointmentHeaderButton
                        text={`Begin Appointment`}
                        buttonAction={handleEncounterBegin}
                        className={classes.button}
                      />
                    </Route>
 */
