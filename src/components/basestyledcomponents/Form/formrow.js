import React from 'react'
import { Field } from 'react-final-form'

export default function FormRow({ field }) {
	const { name, type, label, placeholder, component } = field
	return (
		<Field
			name={name}
			component={component}
			type={type}
			label={label}
			placeholder={placeholder}
		/>
	)
}
