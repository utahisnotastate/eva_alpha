import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {
	getAppointmentBasicDetails,
	saveAppointmentPlan,
} from '../../../../api/appointment.api'
import DiagnosisPlan from './diagnosisplan'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'

const useStyles = makeStyles({
	builderroot: {
		border: 1,
		borderColor: 'black',
		padding: '10px',
		// backgroundColor: 'lightgrey'
	},
	plancard: {
		padding: '20px',
	},
	plancontentcontainer: {
		margin: '20px',
	},
	addfieldcontainer: {
		backgroundColor: 'white',
		padding: '10px',
	},
	addfielditem: {
		padding: '10px',
		flexGrow: 2,
	},
	formTitle: {
		padding: '15px',
	},
	formTypeSelectContainer: {
		marginTop: '5px',
	},
})

export default function AppointmentPlan() {
	const classes = useStyles()
	let { id } = useParams()
	const dispatch = useDispatch()
	const plans = useSelector((state) => state.appointment.clinical_data.plans)
	const methods = useForm({
		defaultValues: {
			plans: plans,
		},
	})

	const { fields, append, prepend, remove, swap, move, insert } =
		useFieldArray({
			control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
			name: 'plans', // unique name for your Field Array
			// keyName: "id", default to "id", you can change the key name
		})
	const onSubmit = (data) => {
		console.log(data.plans)
		saveAppointmentPlan(id, data.plans)
			.then((response) => {
				console.log('Plan saved!')
				loadAppointmentPlan()
			})
			.catch((err) => console.log(err))
	}

	const loadAppointmentPlan = () => {
		getAppointmentBasicDetails(id).then((response) => {
			console.log('plan response is ' + JSON.stringify(response))
			if (response.appointment_plan === null) {
				console.log('No plans!')
				dispatch({
					type: 'load_plans',
					plan: response.appointment_assessment.assessments,
				})
				append(response.appointment_assessment.assessments)
			} else {
				console.log('There are plans!')
				dispatch({
					type: 'load_plans',
					plan: response.appointment_plan.plan,
				})
				append(response.appointment_plan.plan)
			}
		})
	}

	useEffect(() => {
		// loadAppointmentPlan();
	}, [id])
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Grid container direction={`column`} spacing={3}>
					<Grid item>
						<Grid container direction={`column`}>
							<Grid item>
								<Typography>Appointment Plans</Typography>
							</Grid>
						</Grid>
					</Grid>
					{fields.length > 0 ? (
						fields.map((field, index) => (
							<Grid item key={field.id}>
								<DiagnosisPlan field={field} index={index} />
							</Grid>
						))
					) : (
						<Grid item>
							<Typography>No Diagnosis listed</Typography>
						</Grid>
					)}
				</Grid>
				<input type="submit" />
			</form>
		</FormProvider>
	)
}

/*

  useEffect(() => {
    getAppointmentBasicDetails(id).then((response) => {
      console.log("plan response is " + JSON.stringify(response));
      if (response.appointment_plan === null) {
        console.log("No plans!");
        dispatch({
          type: "load_plans",
          plan: response.appointment_assessment.assessments,
        });
        append(response.appointment_assessment.assessments);
      } else {
        console.log("There are plans!");
        dispatch({ type: "load_plans", plan: response.appointment_plan.plans });
        append(response.appointment_plan.plans);
      }
    });
  }, [id]);

<Card raised>
                    <Grid
                      className={classes.plancard}
                      container
                      direction={`column`}
                    >
                      <Grid item className={classes.plancontentcontainer}>
                        <Grid
                          container
                          direction={`row`}
                          style={{ color: "#000" }}
                        >
                          <Grid item>
                            <TextField
                              inputRef={methods.register()}
                              defaultValue={field.icd10assessmentcode}
                              disabled
                              name={`plans[${index}].icd10assessmentcode`}
                            />
                          </Grid>
                          <Grid item style={{ flexGrow: 1 }}>
                            <TextField
                              inputRef={methods.register()}
                              defaultValue={field.icd_description}
                              disabled
                              fullWidth
                              name={`plans[${index}].icd_description`}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.plancontentcontainer}>
                        <TextField
                          inputRef={methods.register()}
                          defaultValue={field.plan}
                          multiline
                          fullWidth
                          variant={`outlined`}
                          rows={5}
                          placeholder={`Enter treatment plan for ${field.icd10assessmentcode} - ${field.icd_description} here`}
                          name={`plans[${index}].plan`}
                        />
                      </Grid>
                      <Grid item className={classes.plancontentcontainer}>
                        <Typography>Order Radiology</Typography>
                        <Typography>Setup Referral</Typography>
                        <Typography>Prescribe Medication</Typography>
                        <Typography>Order Labs</Typography>
                        <Typography>Schedule follow up appointment</Typography>
                      </Grid>
                    </Grid>
                  </Card>
 */
