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
import { useParams } from 'react-router-dom'
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
	const dispatch = useDispatch()
	const classes = useStyles()
	const [appointmentforms, setAppointmentForms] = useState()
	const appointment = useSelector((state) => state.appointment)

	const { details, patient } = appointment

	useEffect(() => {
		getAppointment(id)
			.then((appointment) => {
				dispatch({ type: 'LOAD_APPOINTMENT', appointment })
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])

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
							initialValues={appointment}
							onSubmit={() => {
								console.log(`Submitted`)
							}}>
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
