import React from 'react'
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from '@mui/material'
import FormRow from './FormRow'
import { useDispatch, useSelector } from 'react-redux'
import { FieldArray, Form, Formik } from 'formik'
import { saveForm } from '../../api/api'

export default function FormBuilder() {
	const formbuilder = useSelector((state) => state.formbuilder)
	const forms = useSelector((state) => state.forms)
	const dispatch = useDispatch()
	const handleSubmit = (values, actions) => {
		console.log()
		actions.setSubmitting(true)
		//

		dispatch({ type: 'LOAD_CUSTOM_FIELDS', customfields: values.fields })
		actions.setSubmitting(false)
	}

	return (
		<Formik
			initialValues={formbuilder}
			onSubmit={(values, actions) => handleSubmit(values, actions)}>
			{({ values, handleSubmit }) => (
				<Card variant={`outlined`}>
					<CardHeader title={formbuilder.title} />
					<Button
						style={{ float: 'right' }}
						variant="contained"
						onClick={handleSubmit}>
						Save Form
					</Button>
					<CardContent>
						{forms && forms.length > 0 ? (
							forms.map((form, index) => (
								<Button
									key={index}
									variant="contained"
									onClick={() =>
										dispatch({
											type: 'LOAD_FORM_TO_EDIT',
											form: form,
										})
									}>
									<Typography variant="h6" gutterBottom>
										{form.title}
									</Typography>
								</Button>
							))
						) : (
							<Typography>No Forms Exist</Typography>
						)}
					</CardContent>
					<Divider />
					<CardContent>
						<Form>
							<FieldArray name="fields">
								{({ push, remove }) => (
									<>
										{values.fields &&
										values.fields.length > 0 ? (
											values.fields.map(
												(field, index) => (
													<FormRow
														key={index}
														field={field}
														name={`fields.${index}`}
														buttonLabel=""
														blankfield={{
															autoComplete: 'on',
															autoFocus: false,
															classes: {
																root: 'my-class',
																input: 'my-input',
															},
															color: '',
															defaultValue: '',
															disabled: true,
															error: false,
															FormHelperTextProps:
																{
																	variant: '',
																},
															fullWidth: true,
															helperText: '',
															hiddenLabel: false,
															InputLabelProps: {
																shrink: true,
															},
															inputProps: {
																maxLength: 10,
															},
															InputProps: {
																disableUnderline: true,
															},
															inputRef: null,
															label: '',
															maxRows: 5,
															minRows: 2,
															multiline: true,
															name: '',
															placeholder: '',
															required: true,
															rows: 3,
															rowsMax: 10,
															select: true,
															SelectProps: {
																native: true,
															},
															size: '',
															type: '',
															value: '',
														}}
														index={index}
														push={push}
														remove={remove}
													/>
												)
											)
										) : (
											<Button
												color="primary"
												size="small"
												variant="contained"
												onClick={() =>
													push({
														autoComplete: 'on',
														autoFocus: false,
														classes: {
															root: 'my-class',
															input: 'my-input',
														},
														color: '',
														defaultValue: '',
														disabled: true,
														error: false,
														FormHelperTextProps: {
															variant: '',
														},
														fullWidth: true,
														helperText: '',
														hiddenLabel: false,
														InputLabelProps: {
															shrink: true,
														},
														inputProps: {
															maxLength: 10,
														},
														InputProps: {
															disableUnderline: true,
														},
														inputRef: null,
														label: '',
														maxRows: 5,
														minRows: 2,
														multiline: true,
														name: '',
														placeholder: '',
														required: true,
														rows: 3,
														rowsMax: 10,
														select: true,
														SelectProps: {
															native: true,
														},
														size: '',
														type: '',
														value: '',
													})
												}>
												Add Field
											</Button>
										)}
									</>
								)}
							</FieldArray>
						</Form>
					</CardContent>
				</Card>
			)}
		</Formik>
	)
}
