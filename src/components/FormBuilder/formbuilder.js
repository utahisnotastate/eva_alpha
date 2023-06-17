import React, { useSelector } from 'react'
import { FormBuilder } from 'cb-react-forms'
import { addForm } from '../../api/api'
import { Formik } from 'formik'

const toolbaritems = [
	{ key: 'Header', name: 'Header Text', icon: 'fa fa-header' },
	{
		key: 'Paragraph',
		name: 'Paragraph',
		icon: 'fa fa-paragraph',
	},
	{
		key: 'Dropdown',
		name: 'Dropdown',
		icon: 'fa fa-caret-square-o-down',
	},
]
export default function FormBuild() {
	const handleSubmit = (values) => {
		addForm(values)
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return (
		<Formik
			enableReinitialize
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
					<CardContent
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
						}}>
						{forms && forms.length > 0 ? (
							forms.map((form, index) => (
								<Button
									key={index}
									variant="contained"
									onClick={() => {
										console.log(form)
										dispatch({
											type: 'LOAD_FORM_TO_EDIT',
											form,
										})
									}}>
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
														blankfield={
															dummyblanktext
														}
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

/*
* <Formik
			enableReinitialize
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
					<CardContent
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
						}}>
						{forms && forms.length > 0 ? (
							forms.map((form, index) => (
								<Button
									key={index}
									variant="contained"
									onClick={() => {
										console.log(form)
										dispatch({
											type: 'LOAD_FORM_TO_EDIT',
											form,
										})
									}}>
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
														blankfield={
															dummyblanktext
														}
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
*
*
*
*
*
* */
