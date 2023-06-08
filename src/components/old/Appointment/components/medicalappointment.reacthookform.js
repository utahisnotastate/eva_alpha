import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import Card from '../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import CompletedAppointment from './CompletedAppointment/completedappointment'
import PatientEncounter from './PatientEncounter/patientencounter'
import PreAppointment from './PreAppointment/PreAppointment'
import AppointmentHeaderButton from './Buttons/AppointmentButtons/appointmentHeaderButton'
import { getAppointment } from '../../../../api/appointment.api'
import { fetchAllForms } from '../../../../api/forms.api'
import AppointmentHeader from './AppointmentHeader/appointmentheader'
import example_appointment from './fake.data'
import moment from 'moment'

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
	const classes = useStyles()
	const [status, setStatus] = useState('')
	//const [activeforms, setActiveForms] = useState([]);
	const [appointment, setAppointment] = useState(
		example_appointment.clinical_data
	)
	const methods = useForm({
		defaultValues: {
			actual_end: null,
			actual_start: null,
			clinical_data: {
				plans: [],
				summary: '',
				complaints: [],
				assessments: [],
				physical_exam: [],
				review_of_systems: [],
			},
			end: '2021-02-15T22:00:00Z',
			id: '',
			patient: '',
			patient_display_name: '',
			provider: '',
			provider_display_name: '',
			scheduled_on: '',
			scheduling_note: '',
			start: '',
			status: 'scheduled',
			type: '',
		},
	})
	const watchSummary = methods.watch('clinical_data.summary')
	const watchStatus = methods.watch('status')

	// Determines which component to render based on the status propert
	function handleEncounterEnd() {
		const encounter_end = {
			status: 'encounter_ended',
			actual_end: moment().toISOString(),
		}
		const encounter_ended_appointment = {
			...appointment,
			...encounter_end,
		}
		setAppointment(encounter_ended_appointment)
	}

	/*
    This changes the state of the appointment component to in progress. it was most likely in the scheduled
    state before meaning that the only thing showing was the scheduling note. Now it will show the exam forms and such
     */

	const handleEncounterBegin = async () => {
		//get all forms from server
		const allforms = await fetchAllForms()
		//remove all the inactive forms
		const activeforms = allforms.filter((form) => form.active)
		// split the forms into 2 groups: physical exam forms, and ROS forms
		const activephysicalexamforms = activeforms.filter(
			(form) => form.form_type === 'physical_exam'
		)
		const activeROSforms = activeforms.filter(
			(form) => form.form_type === 'review_of_systems'
		)

		const staticcomplaints = [
			{
				complaint_name: 'test name',
				complaint_description: 'complaint description',
				onset: '',
				patient_therapeutic_attempts: 'test therapeutic attempts',
				patient_belief_caused_by: 'test patient belief caused by ',
				other_notes: 'test other notes',
			},
		]
		//set clinical data physical exam form values

		//set clinical data review of systems form values
		methods.setValue('status', 'in_progress')
		methods.reset({
			status: 'in_progress',
			clinical_data: {
				complaints: staticcomplaints,
				review_of_systems: activeROSforms,
				physical_exam: activephysicalexamforms,
			},
		})
		setStatus('in_progress')
		console.log(activephysicalexamforms)
		console.log(activeROSforms)
		/*const encounter_start = {
          status: "in_progress",
          actual_start: moment().toISOString(),
        };
        const in_progress_appointment = { ...appointment, ...encounter_start };
        setAppointment(in_progress_appointment);*/
		//setStatus("in_progress");
	}

	/*
    instead of splitting the medical appointment into different routes, it's easier to just render different
    components based on the status of the appointment.
     */

	function handleNotesCompleted() {
		const notes_completed = {
			status: 'notes_completed',
		}
		const notes_completed_appointment = {
			...appointment,
			...notes_completed,
		}
		setAppointment(notes_completed_appointment)
	}

	function determineAppointmentComponentToRender(appointmentstatus) {
		switch (appointmentstatus) {
			case 'encounter_ended':
				return <CompletedAppointment appointment={appointment} />
			case 'in_progress':
				return (
					<PatientEncounter
						appointment={appointment}
						summary={watchSummary}
					/>
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
	function determineAppointmentHeaderActionButtonToRender(appointmentstatus) {
		switch (appointmentstatus) {
			case 'scheduled':
				return (
					<AppointmentHeaderButton
						text={`Begin Encounter`}
						buttonAction={handleEncounterBegin}
						className={classes.button}
					/>
				)
			case 'in_progress':
				return (
					<AppointmentHeaderButton
						text={`End Encounter`}
						buttonAction={handleEncounterEnd}
						className={classes.button}
					/>
				)
			case 'notes_completed':
				return (
					<AppointmentHeaderButton
						text={`Edit Encounter Documentation`}
						buttonAction={handleEncounterEnd}
						className={classes.button}
					/>
				)
			case 'encounter_ended':
				return (
					<AppointmentHeaderButton
						text={`Mark notes complete`}
						buttonAction={handleNotesCompleted}
						className={classes.button}
					/>
				)
			default:
				return (
					<AppointmentHeaderButton
						text={`Begin Appointment`}
						buttonAction={handleEncounterBegin}
						className={classes.button}
					/>
				)
		}
	}

	useEffect(() => {
		const getAppointmentAndPopulateDetails = async (appointmentId) => {
			const appointment = await getAppointment(appointmentId)
			/*
            {
              actual_end: null
              actual_start: null
              clinical_data: {plans: Array(0), summary: "", complaints: Array(0), assessments: Array(0), physical_exam: Array(0), …}
              end: "2021-02-15T22:00:00Z"
              id: 1
              patient: 1
              patient_display_name: "Jack Robles"
              provider: 2
              provider_display_name: "Nurse Howard"
              scheduled_on: "2021-02-15T07:50:55.743111Z"
              scheduling_note: ""
              start: "2021-02-15T20:30:00Z"
              status: "scheduled"
              type: "first_appointment"
            }
             */
			if (appointment.status === 'scheduled') {
				console.log(appointment)
				setAppointment(appointment)
			} else {
				setAppointment(appointment)
			}
		}
		getAppointmentAndPopulateDetails(id)
	}, [id])
	console.log(path)
	return (
		<>
			<FormProvider {...methods}>
				<form>
					<Grid container direction="row" spacing={1}>
						<Grid item xs={12} style={{ margin: '20px' }}>
							<Card>
								<Grid container direction={`column`}>
									<Grid item className={classes.header}>
										<CardHeader color={`primary`}>
											<AppointmentHeader
												appointment={appointment}
											/>
										</CardHeader>
									</Grid>
									<Grid item className={classes.content}>
										<Switch>
											<Route exact path={path}>
												{determineAppointmentComponentToRender(
													status
												)}
											</Route>
										</Switch>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
				</form>
			</FormProvider>
		</>
	)
}

/*
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
