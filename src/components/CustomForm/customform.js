import React, { useState } from 'react'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import CardText from '../basestyledcomponents/Card/CardText'
import Card from '../basestyledcomponents/Card/Card'
import { Button, Stack, Typography, MenuItem, TextField } from '@mui/material'

export default function CustomForm({ onSubmit }) {
	const [form, setForm] = useState({
		newitem: [
			{ value: '', type: 'text', label: 'Test Label' },
			{ value: '', type: 'text', label: 'Test label 2' },
			{ name: '', type: 'text', label: '' },
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
				...[{ value: '', type: 'text', label: 'Test 1' }],
			],
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
							<div key={index}>
								<TextField
									key={index}
									{...input}
									label={input.label}
									name={`${input}.value`}
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
									value={input.value}
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
 *
 *
 *
 * */
