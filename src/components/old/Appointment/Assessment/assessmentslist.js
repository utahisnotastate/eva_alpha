import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card, TextField, Typography } from '@material-ui/core'
import { useFormContext } from 'react-hook-form'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles({
	fieldcontainer: {
		display: 'flex',
		padding: '15px',
		border: '1px solid #000000',

		margin: '5px',
	},
	assessment: {
		marginTop: '15px',
		marginBottom: '15px',
		padding: '15px',
	},
	base: {
		backgroundColor: '#fff',
	},
})

export default function AssessmentsList(props) {
	let { id } = useParams()
	const classes = useStyles()
	const findings = useSelector(
		(state) => state.appointment.appointmentfindings
	)
	const { register } = useFormContext()

	const deleteAssessment = (pos) => {
		//console.log(pos);
		props.removeAssessment(pos)
	}

	return (
		<Grid container direction={`column`}>
			<Typography>Assessments</Typography>
			{props.assessments.map((assessment, index) => (
				<div key={assessment.id}>
					<Grid item className={classes.assessment}>
						<Card raised>
							<Grid container direction={`column`}>
								<Grid item>
									<Grid container direction={`row`}>
										<Grid item>
											<TextField
												disabled
												inputRef={register()}
												defaultValue={
													assessment.icd10assessmentcode
												}
												name={`appointmentassessments[${index}].icd10assessmentcode`}
											/>
										</Grid>
										<Grid item>
											<TextField
												disabled
												inputRef={register()}
												defaultValue={
													assessment.icd_description
												}
												name={`appointmentassessments[${index}].icd_description`}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Grid item>
									<Typography>Related to:</Typography>
									<Grid
										container
										direction={`column`}
										justify="flex-start"
										alignItems="stretch"
										spacing={4}>
										<Grid item>
											<Typography>
												Which of the following patient
												complaints:
											</Typography>
										</Grid>
										<Grid item>
											<Grid container direction="row">
												{assessment.based_on.complaints
													? assessment.based_on.complaints.map(
															(
																complaint,
																complaintindex
															) => (
																<Grid
																	item
																	key={
																		complaintindex
																	}>
																	<Grid
																		container
																		className={
																			classes.fieldcontainer
																		}>
																		<Grid
																			item>
																			<TextField
																				disabled
																				inputRef={register()}
																				defaultValue={
																					complaint.complaint_name
																				}
																				name={`appointmentassessments[${index}].based_on.complaints[${complaintindex}].complaint_name`}
																			/>
																		</Grid>
																		<Grid
																			item>
																			<TextField
																				disabled
																				inputRef={register()}
																				defaultValue={
																					complaint.complaint_description
																				}
																				name={`appointmentassessments[${index}].based_on.complaints[${complaintindex}].complaint_description`}
																			/>
																		</Grid>
																		<Grid
																			item>
																			<Checkbox
																				inputRef={register()}
																				checked={
																					complaint.related_to
																				}
																				name={`appointmentassessments[${index}].based_on.complaints[${complaintindex}].related_to`}
																			/>
																		</Grid>
																	</Grid>
																</Grid>
															)
													  )
													: null}
											</Grid>
										</Grid>

										<Grid item>
											<Grid container direction="column">
												<Grid item>
													<Typography>
														Which of the following
														physical exam findings:
													</Typography>
												</Grid>
												<Grid item>
													<Grid
														container
														direction={`row`}>
														{assessment.based_on.findings.map(
															(
																finding,
																findingindex
															) => (
																<Grid
																	item
																	xs={2}
																	key={
																		findingindex
																	}
																	className={
																		classes.fieldcontainer
																	}>
																	<TextField
																		disabled
																		inputRef={register()}
																		defaultValue={
																			finding.label
																		}
																		name={`appointmentassessments[${index}].based_on.findings[${findingindex}].label`}
																	/>
																	<TextField
																		disabled
																		inputRef={register()}
																		defaultValue={
																			finding.value
																		}
																		name={`appointmentassessments[${index}].based_on.findings[${findingindex}].value`}
																	/>
																	<Checkbox
																		checked={
																			finding.related_to
																		}
																		inputRef={register()}
																		name={`appointmentassessments[${index}].based_on.findings[${findingindex}].related_to`}
																	/>
																</Grid>
															)
														)}
													</Grid>
												</Grid>
											</Grid>
										</Grid>
										<Grid item>
											<Typography>
												Which of the following review of
												systems findings:
											</Typography>
										</Grid>
										<Grid item>
											<Button
												onClick={() =>
													deleteAssessment(index)
												}>
												Delete Assessment
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</div>
			))}
		</Grid>
	)
}
/*

<Grid item>
                          <Grid container direction={`row`}>
                            {findings.map((finding, findingindex) => (
                              <Grid
                                item
                                xs={2}
                                key={findingindex}
                                className={classes.fieldcontainer}
                              >
                                <TextField
                                  disabled
                                  inputRef={register()}
                                  defaultValue={finding.label}
                                  name={`appointmentassessments[${index}].based_on.findings[${findingindex}].label`}
                                />
                                <Checkbox
                                  inputRef={register()}
                                  name={`appointmentassessments[${index}].based_on.findings[${findingindex}].related_to`}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>


<Grid container direction="row">
                        {complaints
                          ? complaints.map((complaint, complaintindex) => (
                              <Grid item key={complaintindex}>
                                <Grid
                                  container
                                  className={classes.fieldcontainer}
                                >
                                  <Grid item>
                                    <TextField
                                      disabled
                                      inputRef={register()}
                                      defaultValue={complaint.complaint_name}
                                      name={`appointmentassessments[${index}].based_on.complaints[${complaintindex}].label`}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <Checkbox
                                      inputRef={register()}
                                      name={`appointmentassessments[${index}].based_on.complaints[${complaintindex}].related_to`}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                            ))
                          : null}
                      </Grid>
 */
