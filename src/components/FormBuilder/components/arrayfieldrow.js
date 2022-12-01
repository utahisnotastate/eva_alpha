import React from 'react'
import { Button } from '@mui/material'
import { Field } from 'react-final-form'

export default function ArrayFieldRow({ name, index, remove, options }) {
	const fieldnames = ['type', 'value', 'label', 'placeholder']
	return (
		<div key={index}>
			<Field name={`${name}.type`} component="select">
				<option />
				{options && options.length > 0
					? options.map((option, index) => (
							<option key={index} value={option.value}>
								{option.label}
							</option>
					  ))
					: null}
			</Field>
			<Field
				name={`${name}.value`}
				label={`Label`}
				component="input"
				placeholder={`placeholder`}
				type="text"
			/>
			<Field
				name={`${name}.label`}
				placeholder={`Label`}
				component="input"
				type="text"
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
