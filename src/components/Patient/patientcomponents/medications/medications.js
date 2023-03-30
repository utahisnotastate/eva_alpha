import * as React from 'react'
import { Formik, FieldArray, Form, Field, useFormikContext } from 'formik'
import {
	Button,
	Grid,
	Typography,
	Container,
	TextField,
	IconButton,
	Card,
	CardContent,
	Divider,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import MedicationTable from './medicationtable'
import PrescriptionCard from './prescriptioncard'

const Medications = () => {
	const { values } = useFormikContext()
	// Handle selection of a medication from the table.

	const onSelectMedication = (selectedMedication) => {
		console.log('Selected Medication:', selectedMedication)
	}

	return (
		<div>
			<MedicationTable
				medications={values.medications}
				onSelectMedication={onSelectMedication}
			/>

			{/* FieldArray to manage a dynamic array of medications in the form */}
			<FieldArray name="medications">
				{({ push, remove }) => (
					<>
						{/* Render form fields for each medication */}
						{values.medications.map((medication, index) => (
							<Grid container spacing={3} key={index}>
								<Grid item xs={12} sm={3}>
									<Field
										as={TextField}
										name={`medications.${index}.name`}
										label="Medication Name"
										fullWidth
										required
									/>
								</Grid>
								{/* Dosage field */}
								<Grid item xs={12} sm={2}>
									<Field
										as={TextField}
										name={`medications.${index}.dosage`}
										label="Dosage"
										fullWidth
										required
									/>
								</Grid>
								{/* Status field */}
								<Grid item xs={12} sm={2}>
									<Field
										as={TextField}
										name={`medications.${index}.status`}
										label="Status"
										fullWidth
										required
									/>
								</Grid>
								{/* Last Refill field */}
								<Grid item xs={12} sm={2}>
									<Field
										as={TextField}
										name={`medications.${index}.lastRefill`}
										label="Last Refill"
										fullWidth
										required
									/>
								</Grid>
								{/* Next Refill field */}
								<Grid item xs={12} sm={2}>
									<Field
										as={TextField}
										name={`medications.${index}.nextRefill`}
										label="Next Refill"
										fullWidth
										required
									/>
								</Grid>
								{/* Remove Medication button */}
								<Grid item xs={1}>
									<IconButton onClick={() => remove(index)}>
										<RemoveCircleOutlineIcon />
									</IconButton>
								</Grid>

								{/* Prescription History */}
								<Grid item xs={12}>
									<Typography variant="h6">
										Prescription History
									</Typography>
									<Divider />

									{/* FieldArray for Prescription History */}
									<FieldArray
										name={`medications.${index}.history`}>
										{({
											push: pushHistory,
											remove: removeHistory,
										}) => (
											<>
												{/* Render PrescriptionCard for each prescription in history */}
												{medication.history.map(
													(history, historyIndex) => (
														<PrescriptionCard
															key={historyIndex}
															index={index}
															historyIndex={
																historyIndex
															}
															removeHistory={
																removeHistory
															}
														/>
													)
												)}
												{/* Button to add a new prescription */}
												<Grid item xs={12}>
													<Button
														variant="outlined"
														color="primary"
														startIcon={
															<AddCircleOutlineIcon />
														}
														onClick={() =>
															pushHistory({
																name: '',
																dosage: '',
																date_written:
																	'',
																notes: '',
															})
														}>
														Add Prescription
													</Button>
												</Grid>
											</>
										)}
									</FieldArray>
								</Grid>
							</Grid>
						))}
						{/* Button to add a new medication */}
						<Grid item xs={12}>
							<Button
								variant="outlined"
								color="primary"
								startIcon={<AddCircleOutlineIcon />}
								onClick={() =>
									push({
										name: '',
										dosage: '',
										status: '',
										lastRefill: '',
										nextRefill: '',
										history: [],
									})
								}>
								Add Medication
							</Button>
						</Grid>
					</>
				)}
			</FieldArray>
		</div>
	)
}

export default Medications
