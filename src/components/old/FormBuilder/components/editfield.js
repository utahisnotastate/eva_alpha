import React from 'react'
import { Button } from '@mui/material'
import { Field } from 'react-final-form'

export default function EditField({ name, options = [], remove }) {
	const rowfields = [
		{ name: 'type', label: 'Type' },
		{ name: 'value', label: 'Value' },
		{ name: 'label', label: 'Label' },
		{ name: 'placeholder', label: 'Placeholder' },
	]
	return (
		<div>
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
			{rowfields && rowfields.length > 0
				? rowfields.map((rowfield, index) => (
						<Field
							key={index}
							name={`${name}.${rowfield.name}`}
							label={`${rowfield.label}`}
							component={`input`}
							placeholder={`placeholder`}
							type="text"
						/>
				  ))
				: null}
			<Button
				variant={'contained'}
				color={`secondary`}
				onClick={() => remove()}>
				X
			</Button>
		</div>
	)
}
