import React, { useState } from 'react'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import CardText from '../basestyledcomponents/Card/CardText'
import Card from '../basestyledcomponents/Card/Card'

import {
	Button,
	Stack,
	Typography,
	MenuItem,
	TextField,
	Select,
} from '@mui/material'

export default function CustomForm({ onSubmit, customform }) {
	const [form, setForm] = useState({
		newitem: [
			{
				value: '',
				type: '',
				label: '',
				helperText: '',
				placeholder: '',
			},
			{
				value: '',
				type: '',
				label: '',
				helperText: '',
				placeholder: '',
			},
			{
				value: '',
				type: '',
				label: '',
				helperText: '',
				placeholder: '',
			},
		],
		fields: [],
		label: 'Appointment',
		zone: 'appointment',
	})

	//create a function that adds a new item to the fields property of the form state
	//this function will be passed to the AddItem component
	const addNewItem = () => {
		setForm({
			...form,
			fields: [
				...form.fields,
				...[
					{
						value: '',
						type: '',
						label: '',
						helperText: '',
						placeholder: '',
					},
				],
			],
		})
	}
	// create an onChange function that will be passed to the form fields
	// this function will be passed to each of the form fields
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<Card>
			<CardHeader color="primary">
				<h4>{form.label}</h4>
			</CardHeader>
			<CardBody>
				<CardText>{form.description}</CardText>
				{form.fields && form.fields.length > 0
					? form.fields.map((input, index) => (
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									gap: '1rem',
									borderColor: 'grey',
									borderWidth: '1px',
									borderStyle: 'solid',
									padding: '1rem',
									margin: '1rem',
								}}
								key={index}>
								<Select
									name={`${input}.type`}
									label="Field Type"
									formControlProps={{
										margin: 'normal',
									}}
									onChange={(e) => {
										const newFields = [...form.fields]
										newFields[index].type = e.target.value
										setForm({
											...form,
											fields: newFields,
										})
									}}>
									<MenuItem value="text">Text</MenuItem>
									<MenuItem value="number">Number</MenuItem>
									<MenuItem value="textarea">
										Text Area
									</MenuItem>
									<MenuItem value="select">Select</MenuItem>
								</Select>

								<TextField
									key={index}
									label={`Label`}
									name={`${input}.label`}
									onChange={(e) => {
										const newFields = form.fields.map(
											(field, i) => {
												if (i === index) {
													return {
														...field,
														value: e.target.value,
													}
												}
												return field
											}
										)
										setForm({
											...form,
											fields: newFields,
										})
									}}
									fullWidth
									variant={`standard`}
								/>
								<TextField
									key={index}
									label={`Placeholder`}
									name={`${input}.placeHolder`}
									helperText={`When form is empty, this will show in the input`}
									onChange={(e) => {
										const newFields = form.fields.map(
											(field, i) => {
												if (i === index) {
													return {
														...field,
														value: e.target.value,
													}
												}
												return field
											}
										)
										setForm({
											...form,
											fields: newFields,
										})
									}}
									fullWidth
									variant={`standard`}
								/>
								<TextField
									key={index}
									label={`Helper Text`}
									name={`${input}.helperText`}
									helperText={`This will show below the input`}
									onChange={(e) => {
										const newFields = form.fields.map(
											(field, i) => {
												if (i === index) {
													return {
														...field,
														value: e.target.value,
													}
												}
												return field
											}
										)
										setForm({
											...form,
											fields: newFields,
										})
									}}
									fullWidth
									variant={`standard`}
								/>
							</div>
					  ))
					: null}
			</CardBody>
			<CardBody>
				<pre>{JSON.stringify(form, null, 2)}</pre>
			</CardBody>
			<CardFooter>
				<Button
					variant={'contained'}
					color={`primary`}
					onClick={addNewItem}>
					Add Item
				</Button>
			</CardFooter>
		</Card>
	)
}

/*
* <TextField
										key={index}
										label={input.label}
										name={`${input}.value`}
										onChange={(e) => {
											const newFields = form.fields.map(
												(field, i) => {
													if (i === index) {
														return {
															...field,
															value: e.target
																.value,
														}
													}
													return field
												}
											)
											setForm({
												...form,
												fields: newFields,
											})
										}}
										fullWidth
										variant={`standard`}
									/>
*
*
* */
