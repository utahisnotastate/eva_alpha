import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { useFieldArray, useFormContext } from 'react-hook-form'
import NewComplaint from './NewComplaint/NewComplaint.FunComp'
import Button from '../../../basestyledcomponents/Button'
import Card from '../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
// import PatientComplaint from './PatientComplaint/PatientComplaint';
import {
	createAppointmentComplaints,
	getAppointmentComplaints,
} from '../../../../api/appointment.api'

const editorStyle = {
	minWidth: '100px',
	minHeight: '100px',
	'touch-action': 'none',
}
const API_URL = 'http://127.0.0.1:8000/api'
const useStyles = makeStyles((theme) => ({
	headercontainer: {
		margin: '10px',
	},
	sectioncontainer: {
		margin: '10px',
	},
}))

export default function PatientComplaints(props) {
	let { id } = useParams()
	let dispatch = useDispatch()
	const classes = useStyles()
	const complaints = useSelector(
		(state) => state.appointment.clinical_data.complaints
	)
	/*const methods = useForm({
    defaultValues: {
      complaints: complaints,
    },
  });*/
	const methods = useFormContext()

	const { fields, append, prepend, remove, swap, move, insert } =
		useFieldArray({
			name: 'clinical_data.complaints',
		})
	// const { complaints, values } = props;
	const reloadcomplaints = () => {
		getAppointmentComplaints(id).then((response) => {
			console.log('complaints response is ' + JSON.stringify(response))
			if (response.length === 0) {
				console.log('There are no complaints yet!')
				createAppointmentComplaints(id).then((response) => {
					dispatch({ type: 'load_complaints', complaints: [] })
				})
			} else {
				//dispatch({ type: "load_complaints", complaints: response });
				console.log(
					'appointment has the following complaibts' +
						JSON.stringify(response)
				)
				dispatch({
					type: 'load_complaints',
					complaints: response[0].appointment_complaints.complaints,
				})
			}
		})
	}

	const onSubmit = (data) => {
		const values = methods.getValues()
		console.log(values.complaints)
		//dispatch({ type: "save_complaints", complaints: values.complaints });
		/*const complaints = { complaints: values.complaints };
        saveAppointmentComplaints(id, complaints).then((response) => {
          console.log(response);
          reloadcomplaints();
        });*/
	}

	const addComplaintToForm = (complaint) => {
		append(complaint)
		methods.setValue('complaint_name', '')
		methods.setValue('complaint_description', '')
	}
	const handleRemove = (index) => {
		remove(index)
	}
	methods.watch('clinical_data.complaints')
	return (
		<>
			<Grid
				container
				direction={`column`}
				justify="space-evenly"
				alignItems="stretch"
				spacing={2}>
				<Grid item>
					<Grid container direction="column">
						{fields.length > 0
							? fields.map((field, index) => (
									<Grid item key={index}>
										<Card raised>
											<Grid container direction="column">
												<Grid item>
													<Grid
														container
														direction="row">
														<Grid item>
															<Button
																color={`danger`}
																onClick={() =>
																	handleRemove(
																		index
																	)
																}>
																X
															</Button>
														</Grid>
													</Grid>
												</Grid>
												<Grid item>
													<CardHeader>
														<Grid item>
															<Typography>
																Complaint
															</Typography>
														</Grid>
														<Grid item>
															<Grid
																container
																direction="column">
																<Grid
																	item
																	className={
																		classes.headercontainer
																	}>
																	<TextField
																		inputRef={methods.register()}
																		name={`clinical_data.complaints[${index}].complaint_name`}
																		fullWidth
																		defaultValue={
																			field.complaint_name
																		}
																		variant="outlined"
																	/>
																</Grid>
																<Grid
																	item
																	className={
																		classes.headercontainer
																	}>
																	<TextField
																		inputRef={methods.register()}
																		name={`clinical_data.complaints[${index}].complaint_description`}
																		fullWidth
																		variant="outlined"
																		defaultValue={
																			field.complaint_description
																		}
																	/>
																</Grid>
															</Grid>
														</Grid>
													</CardHeader>
												</Grid>
												<Grid item>
													<CardBody>
														<Grid
															container
															direction="column">
															<Grid item>
																<Typography>
																	Choose
																	Complaint
																	Form
																</Typography>
															</Grid>
															<Grid
																item
																className={
																	classes.sectioncontainer
																}>
																<Typography>
																	Onset
																</Typography>
																<TextField
																	inputRef={methods.register()}
																	type={`date`}
																	name={`clinical_data.complaints[${index}].onset`}
																	defaultValue={
																		field.onset
																	}
																	fullWidth
																/>
															</Grid>
															<Grid
																item
																className={
																	classes.sectioncontainer
																}>
																<Grid
																	container
																	direction="column">
																	<Grid item>
																		<Typography>
																			Patient's
																			Explanation
																		</Typography>
																	</Grid>
																	<Grid item>
																		<Grid
																			container
																			direction="column">
																			<Grid
																				item
																				className={
																					classes.sectioncontainer
																				}>
																				<TextField
																					inputRef={methods.register()}
																					name={`clinical_data.complaints[${index}].patient_therapeutic_attempts`}
																					fullWidth
																					placeholder={`Please document any treatment attempts the patient has done`}
																					defaultValue={
																						field.patient_therapeutic_attempts
																					}
																					variant="outlined"
																				/>
																			</Grid>
																			<Grid
																				item
																				className={
																					classes.sectioncontainer
																				}>
																				<TextField
																					inputRef={methods.register()}
																					name={`clinical_data.complaints[${index}].patient_belief_caused_by`}
																					placeholder={`Please document what patient beliefs the complaint is caused by`}
																					defaultValue={
																						field.patient_belief_caused_by
																					}
																					fullWidth
																					variant="outlined"
																				/>
																			</Grid>
																		</Grid>
																	</Grid>
																</Grid>
															</Grid>
															<Grid
																item
																className={
																	classes.sectioncontainer
																}>
																<Typography>
																	Provider's
																	Notes
																</Typography>
																<TextField
																	inputRef={methods.register()}
																	name={`clinical_data.complaints[${index}].other_notes`}
																	placeholder={`Provider notes only`}
																	defaultValue={
																		field.other_notes
																	}
																	fullWidth
																	variant="outlined"
																/>
															</Grid>
														</Grid>
													</CardBody>
												</Grid>
											</Grid>
										</Card>
									</Grid>
							  ))
							: null}
					</Grid>
				</Grid>
				<Grid item>
					<h3>Add Complaint</h3>
					<NewComplaint
						control={methods.control}
						register={methods.register}
						setValue={methods.setValue}
						getValues={methods.getValues}
						append={append}
						addComplaintToForm={addComplaintToForm}
					/>
				</Grid>
			</Grid>
			<Grid item>
				<input type="submit" value={`Save`} />
			</Grid>
		</>
	)
}
