import React from 'react'
import { FieldArray } from 'react-final-form-arrays'
import ArrayFieldRow from '../../old/FormBuilder/components/arrayfieldrow'

export default function EVAForm({ onSubmit, form, name }) {
	return (
		<FieldArray name={name}>
			{({ fields }) =>
				fields.map((name, index) => (
					<ArrayFieldRow
						key={index}
						name={name}
						remove={fields.remove}
					/>
				))
			}
		</FieldArray>
	)
}
