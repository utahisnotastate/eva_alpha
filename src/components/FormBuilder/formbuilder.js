import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Divider } from '@mui/material'
import Card from '../basestyledcomponents/Card/Card'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import _ from 'lodash'
import Button from '@mui/material/Button'

export default function FormBuilder() {
	const forms = useSelector((state) => state.forms)

	const onSubmit = async (values) => {
		console.log(values)
		window.alert(JSON.stringify(values, 0, 2))
	}
	return (
		<Card>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					minHeight: '100vh',
				}}>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="h6">Forms</Typography>
					<Divider />
					<div>
						{forms && forms.length > 0
							? forms.map((form, index) => (
									<div
										key={index}
										onClick={(form) => {
											console.log(form.fields)
										}}>
										<Typography variant="body1">
											{form.form}
										</Typography>
										<Divider />
									</div>
							  ))
							: null}
					</div>
				</div>
				<Form
					onSubmit={onSubmit}
					mutators={{
						// potentially other mutators could be merged here
						...arrayMutators,
					}}
					initialValues={{
						form: 'complaint',
						fields: [
							{
								type: 'text',
								name: 'label',
								label: 'Label',
								component: 'input',
								placeholder: 'Label',
							},
						],
					}}
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
						<form onSubmit={handleSubmit}>
							<FieldArray name={`fields`}>
								{({ fields }) =>
									fields.map((name, index) => (
										<div key={name}>
											<Field
												name={`${name}.type`}
												component="select">
												<option value="text">
													Text
												</option>
												<option value="radio">
													Radio
												</option>
												<option value="checkbox">
													Checkbox
												</option>
											</Field>
											<Field
												name={`${name}.name`}
												component="input"
												type="text"
												placeholder="Name"
											/>
											<Field
												name={`${name}.label`}
												component="input"
												type="text"
												placeholder="Label"
											/>
											<button
												type="button"
												onClick={() =>
													fields.remove(index)
												}>
												Remove
											</button>
										</div>
									))
								}
							</FieldArray>
							<Button
								variant="contained"
								onClick={() =>
									push('fields', {
										type: 'text',
										label: '',
										name: '',
									})
								}>
								Add Field
							</Button>
						</form>
					)}
				/>
			</div>
		</Card>
	)
}
