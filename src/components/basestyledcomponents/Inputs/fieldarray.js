import React from 'react'
import Card from '../../basestyledcomponents/Card/Card'
import CardBody from '../../basestyledcomponents/Card/CardBody'
import CardFooter from '../../basestyledcomponents/Card/CardFooter'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
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
