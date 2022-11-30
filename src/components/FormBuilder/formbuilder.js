import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../basestyledcomponents/Card/Card'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import FormBuilderHeader from './components/header'
import Footer from './components/footer'
import Chapters from '../Appointment/chapters'

export default function FormBuilder() {
	const dispatch = useDispatch()
	const forms = useSelector((state) => state.forms)
	const form = useSelector((state) => state.form)
	const blankitem = {
		type: 'text',
		component: 'input',
		label: '',
		placeholder: '',
	}
	const handleFormSelect = (event) => {
		dispatch({ type: 'SET_FORM', form: event.target.value })
	}
	const onSubmit = async (values) => {
		console.log(values)
		window.alert(JSON.stringify(values, 0, 2))
	}
	return (
		<Form
			onSubmit={onSubmit}
			mutators={{
				...arrayMutators,
			}}
			initialValues={form}
			render={({
				handleSubmit,
				form: {
					mutators: { push, pop },
				}, // injected from final-form-arrays above
				pristine,
				form,
				submitting,
				values,
			}) => (
				<Card>
					<FormBuilderHeader
						forms={forms}
						title={`Form Builder`}
						handleFormSelect={handleFormSelect}
					/>
					<Chapters forms={forms} onSubmit={onSubmit} />
					<Footer
						name={`inputs`}
						push={push}
						blankitem={blankitem}
						label={`Add Input`}
					/>
				</Card>
			)}
		/>
	)
}

/*

<CardFooter>
							<NewItem
								name={`inputs`}
								push={push}
								label={`Add Input`}

							/>
						</CardFooter>
<CardFooter>
							<NewItem
								push={push}
								name={`inputs`}
								label={`Add New Field`}
								blankitem={{
									label: '',
									type: '',
									placeholder: '',
								}}
							/>
						</CardFooter>


<CardBody>
							<form onSubmit={handleSubmit}>
								<label>{form.title}</label>
								<FieldArray name="inputs">
									{({ fields }) =>
										fields.map((name, index) => (
											<ArrayFieldRow
												key={index}
												name={name}
												remove={fields.remove}
											/>
										))
									}
								</FieldArray>
							</form>
						</CardBody>


<FieldArray name="inputs">
								{({ fields }) =>
									fields.map((name, index) => (
										<div key={index}>
											<Field
												name={`${name}.type`}
												component="select">
												<option />
												<option value="text">
													Text
												</option>
												<option value="number">
													Number
												</option>
											</Field>
											<Field
												name={`${name}.label`}
												component="input"
												type="text"
												placeholder="Label"
											/>
											<Field
												name={`${name}.placeholder`}
												component="input"
												type="text"
												placeholder="Placeholder"
											/>
										</div>
									))
								}
							</FieldArray>



* <CardHeader>
				<Typography variant="body1">Form Builder</Typography>
				<ButtonGroup variant={`text`}>
					{forms && forms.length > 0
						? forms.map((form, index) => (
								<Button
									key={index}
									color={`primary`}
									onClick={() => {
										console.log(form)
										dispatch({ type: 'SET_FORM', form })
									}}>
									{form.title}
								</Button>
						  ))
						: null}
				</ButtonGroup>
			</CardHeader>
*
*
* */
