import React, { useRef, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Typography } from '@mui/material'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default function EVAForm({ fields, newitem, label, push }) {
	return (
		<Form
			onSubmit={onSubmit}
			mutators={{
				// potentially other mutators could be merged here
				...arrayMutators,
			}}
			initialValues={{
				form: 'complaint',
				fields: [
					{
						type: 'text',
						name: 'label',
						label: 'Label',
						component: 'input',
						placeholder: 'Label',
					},
				],
			}}
			render={({
				handleSubmit,
				form: {
					mutators: { push, pop },
				}, // injected from final-form-arrays above
				pristine,
				form,
				submitting,
				values,
			}) => (
				<form onSubmit={handleSubmit}>
					<FieldArray name={`fields`}>
						{({ fields }) =>
							fields.map((name, index) => (
								<div key={name}>
									<Field
										name={`${name}.type`}
										component="select">
										<option value="text">Text</option>
										<option value="radio">Radio</option>
										<option value="checkbox">
											Checkbox
										</option>
									</Field>
									<Field
										name={`${name}.name`}
										component="input"
										type="text"
										placeholder="Name"
									/>
									<Field
										name={`${name}.label`}
										component="input"
										type="text"
										placeholder="Label"
									/>
									<button
										type="button"
										onClick={() => fields.remove(index)}>
										Remove
									</button>
								</div>
							))
						}
					</FieldArray>
				</form>
			)}
		/>
	)
}
