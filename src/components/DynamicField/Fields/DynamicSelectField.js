import React from 'react'
import { Field } from 'formik'

export default function DynamicSelectField({ label, name, choices }) {
	console.log({ label, name, choices })
	return (
		<Field as={`select`} name={name} label={label}>
			{choices && choices.length > 0
				? choices.map((choice, index) => {
						return (
							<option key={index} value={choice.value}>
								{choice.label}
							</option>
						)
				  })
				: null}
		</Field>
	)
}
