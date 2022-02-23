import React from 'react'
import { Field } from 'formik'

export default function DynamicSelectField({ label, name, options }) {
	console.log({ label, name, options })
	return (
		<Field as={`select`} name={name}>
			{options && options.length > 0
				? options.map((option, index) => {
						return (
							<option key={index} value={option.value}>
								{option.label}
							</option>
						)
				  })
				: null}
		</Field>
	)
}
