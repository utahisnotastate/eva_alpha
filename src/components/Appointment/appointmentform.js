import React from 'react'
import { Grid, TextField, Button, IconButton } from '@material-ui/core'
import { Formik, FieldArray } from 'formik'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { FaTrash } from 'react-icons/fa'

function AppointmentForm(props) {
	const handleSubmit = (values) => {
		console.log(values)
	}

	// Filter fields array to show only fields in active tab's zone
	const filteredFields = props.fields.filter(
		(field) => field.zone === props.zones[props.activeTab]
	)

	return (
		<Formik
			initialValues={{
				fields: filteredFields,
				summary: '',
			}}
			onSubmit={handleSubmit}>
			{({ values, handleChange, handleBlur, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					{props.activeTab === 0 && (
						<Grid container spacing={3}>
							<FieldArray name="fields">
								{({ push, remove }) => (
									<>
										{values.fields.map((field, index) => (
											<Grid item xs={12} key={index}>
												<Grid container spacing={2}>
													<Grid item xs={10}>
														<TextField
															fullWidth
															id={`fields.${index}.label`}
															name={`fields.${index}.label`}
															label={`${field.label}`}
															value={
																values.fields[
																	index
																].label
															}
															onChange={
																handleChange
															}
															onBlur={handleBlur}
															multiline
														/>
													</Grid>
													<Grid
														item
														xs={2}
														container
														justify="flex-end"
														alignItems="center">
														{props.fields[index]
															.addItem !==
															false && (
															<IconButton
																aria-label="delete"
																onClick={() =>
																	remove(
																		index
																	)
																}>
																<FaTrash
																	className={
																		props
																			.classes
																			.deleteButton
																	}
																/>
															</IconButton>
														)}
													</Grid>
												</Grid>
											</Grid>
										))}
										{props.fields[values.fields.length]
											.addItem !== false && (
											<Grid
												item
												xs={12}
												container
												justify="flex-end">
												<Button
													variant="contained"
													color="primary"
													startIcon={
														<IoMdAddCircleOutline />
													}
													onClick={() =>
														push({ label: '' })
													}
													className={
														props.classes.addButton
													}>
													Add Item
												</Button>
											</Grid>
										)}
									</>
								)}
							</FieldArray>
						</Grid>
					)}
					{/* Repeat the above code for the other tabs */}
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={props.classes.saveButton}>
						Save
					</Button>
				</form>
			)}
		</Formik>
	)
}

export default AppointmentForm
