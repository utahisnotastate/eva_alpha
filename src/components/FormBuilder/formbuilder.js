import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Typography,
	Divider,
	Select,
	FormControl,
	MenuItem,
	ButtonGroup,
	Button,
} from '@mui/material'
import Card from '../basestyledcomponents/Card/Card'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import FormBuilderHeader from './components/header'
import NewItem from './newitem'
import EVAForm from './components/EVAForm'
import Footer from './components/footer'

export default function FormBuilder() {
	const dispatch = useDispatch()

	const forms = useSelector((state) => state.forms)
	const form = useSelector((state) => state.form)

	const handleFormSelect = (event) => {
		dispatch({ type: 'SET_FORM', form: event.target.value })
	}

	const onSubmit = async (values) => {
		console.log(values)
		window.alert(JSON.stringify(values, 0, 2))
	}
	return (
		<Card>
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
						<EVAForm
							onSubmit={onSubmit}
							form={form}
							name={`inputs`}
						/>
						<Footer
							name={`inputs`}
							push={push}
							blankitem={{
								type: 'text',
								component: 'input',
								label: '',
								placeholder: '',
							}}
							label={`Add Input`}
						/>
					</Card>
				)}
			/>
		</Card>
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
