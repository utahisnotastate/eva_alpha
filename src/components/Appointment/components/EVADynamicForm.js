import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

export default function EVADynamicForm({ name, handleSubmit, children }) {
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
				return (
					<form onSubmit={handleSubmit}>
						{children}
						<div className="buttons">
							<button
								type="button"
								onClick={() => push('customers', undefined)}>
								Add Customer
							</button>
						</div>
						<pre>{JSON.stringify(values, 0, 2)}</pre>
					</form>
				)
			}}
		/>
	)
}
