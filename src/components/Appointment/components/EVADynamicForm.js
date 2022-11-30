import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

export default function EVADynamicForm({
	name,
	handleSubmit,
	initialValues,
	children,
}) {
	return (
		<Form
			onSubmit={handleSubmit}
			mutators={{
				...arrayMutators,
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
			}) => {
				return <form onSubmit={handleSubmit}>{children}</form>
			}}
		/>
	)
}

/*

<div className="buttons">
										<button
											type="button"
											onClick={() =>
												push('customers', undefined)
											}>
											Add Customer
										</button>
									</div>
* <FieldArray name={name}>
										{({ fields }) =>
											fields.map((name, index) => (
												<div key={index}>
													<label>
														Cust. #{index + 1}
													</label>
													<Field
														name={`${name}.firstName`}
														component="input"
														placeholder="First Name"
													/>
													<Field
														name={`${name}.lastName`}
														component="input"
														placeholder="Last Name"
													/>
													<span
														onClick={() =>
															fields.remove(index)
														}
														style={{
															cursor: 'pointer',
														}}>
														❌
													</span>
												</div>
											))
										}
									</FieldArray>
*
* */
