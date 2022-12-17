import React from 'react'
import { Button } from '@mui/material'
import { Field } from 'react-final-form'
import EVASelect from './evaselect'

export default function ArrayFieldRow({ name, index, remove, options }) {
	const fieldnames = ['type', 'value', 'label', 'placeholder']
	return (
		<div key={index}>
			<EVASelect name={`${name}`} options={options} />
			{fieldnames && fieldnames.length > 0
				? fieldnames.map((fieldname, index) => (
						<Field
							name={`${name}.${fieldname}`}
							label={`Label`}
							component="input"
							placeholder={`placeholder`}
							type="text"
						/>
				  ))
				: null}
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
