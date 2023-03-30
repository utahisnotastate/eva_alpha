import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

export default function EVAFieldArray({ name, items }) {
	return (
		<FieldArray name={name}>
			{({ fields }) =>
				fields && fields.length > 0
					? fields.map((name, index) => (
							<Field
								key={index}
								name={`${name}.value`}
								component="input"
								type="text"
								label={name.label}
							/>
					  ))
					: null
			}
		</FieldArray>
	)
}
