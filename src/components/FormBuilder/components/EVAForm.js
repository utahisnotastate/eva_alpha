import React from 'react'
import { Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

export default function EVAForm({ onSubmit, title, name, fields }) {
	return (
		<form onSubmit={onSubmit}>
			<label>{title}</label>
			<FieldArray name={name}>
				{fields && fields.length > 0
					? fields.map((field, index) => (
							<Field
								key={index}
								name={`${name}.value`}
								component="input"
								type="text"
								label={`${name}.label`}
							/>
					  ))
					: null}
			</FieldArray>
		</form>
	)
}
