import React from 'react'
import Card from '../../basestyledcomponents/Card/Card'
import CardBody from '../../basestyledcomponents/Card/CardBody'
import CardFooter from '../../basestyledcomponents/Card/CardFooter'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import ArrayFieldRow from './arrayfieldrow'

export default function EVAForm({ onSubmit, form, name, ...rest }) {
	return (
		<CardBody>
			<form onSubmit={onSubmit}>
				<label>{form.title}</label>
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
			</form>
		</CardBody>
	)
}
