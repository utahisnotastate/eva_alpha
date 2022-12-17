import React from 'react'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import CardText from '../basestyledcomponents/Card/CardText'
import Card from '../basestyledcomponents/Card/Card'
import { Button, Stack, Typography, MenuItem, TextField } from '@mui/material'

export default function CustomForm({ form, onSubmit }) {
	// create a handleChange function for the TextField component that changes the form object
	const handleChange = (event) => {
		form[event.target.name] = event.target.value
	}
	return (
		<Card>
			<CardHeader color="primary">
				<h4>{form.label}</h4>
			</CardHeader>
			<CardBody>
				<CardText>{form.description}</CardText>
				{form.inputs && form.inputs.length > 0
					? form.inputs.map((input, index) => (
							<div key={index}>
								<TextField
									key={index}
									fullWidth
									variant={`standard`}
									onChange={handleChange}
									{...input}
								/>
							</div>
					  ))
					: null}
			</CardBody>
			<CardFooter>
				<Button
					variant={'contained'}
					color={`primary`}
					onClick={() => onSubmit(form)}>
					Submit
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
