import React from 'react'
import { Field, Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import FieldArrayRow from '../components/arrayfieldrow'

//create a FieldArray component that will render a list of inputs
//based on the fields array passed in as props

function EVAField({ label, name }) {
	return (
		<div>
			<label>{label}</label>
		</div>
	)
}
export default function EVAFieldArray({ name }) {
	//map over the fields array and render a list of inputs
	return (
		<FieldArray name={name}>
			{({ fields }) =>
				fields.map((name, index) => (
					<div key={index}>
						<FieldArrayRow name={name} index={index} />
					</div>
				))
			}
		</FieldArray>
	)
}

/*
* <FieldArray name={name}>
			{({ fields }) =>
				fields.map((name, index) => (
					<div key={index}>
						<Field name={`${name}.type`} component="select">
							<option />
							<option value="text">Text</option>
							<option value="number">Number</option>
						</Field>
						<Field
							name={`${name}.label`}
							component="input"
							type="text"
							placeholder="Label"
						/>
						<Field
							name={`${name}.placeholder`}
							component="input"
							type="text"
							placeholder="Placeholder"
						/>
					</div>
				))
			}
		</FieldArray>
*
* */
