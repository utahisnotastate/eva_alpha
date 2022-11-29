import React from 'react'
import { Button } from '@mui/material'
import { Form, Field } from 'react-final-form'

export default function ArrayFieldRow({ name, index, remove }) {
	return (
		<div key={index}>
			<Field name={`${name}.type`} component="select">
				<option />
				<option value="text">Text</option>
				<option value="number">Number</option>
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
			<Button
				variant={'contained'}
				color={`secondary`}
				onClick={() => remove(index)}>
				X
			</Button>
		</div>
	)
}
