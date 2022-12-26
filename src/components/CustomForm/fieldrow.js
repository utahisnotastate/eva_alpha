import { TextField } from '@mui/material'
import React from 'react'
import CardBody from '../basestyledcomponents/Card/CardBody'

export default function CustomForm({ form }) {
	return (
		<CardBody>
			{form.fields.map((field, index) => (
				<TextField
					key={index}
					name={`${field.name}.value`}
					label={field.label}
					type={field.type}
					variant={field.variant}
					fullWidth={field.full_width}
					helperText={field.helperText}
					options={field.options}
				/>
			))}
		</CardBody>
	)
}
