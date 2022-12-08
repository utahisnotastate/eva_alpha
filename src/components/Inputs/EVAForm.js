import React from 'react'
import { Form, Field } from 'react-final-form'

export default function EVAForm({ fields, onSubmit, initialValues }) {
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			render={({ onSubmit, values, form, submitting, pristine }) => (
				<form onSubmit={onSubmit}>
					{fields && fields.length > 0
						? fields.map((field, index) => (
								<Field
									key={index}
									name={`${field.name}.value`}
									component="input"
									type="text"
									label={`${field.name}.label`}
								/>
						  ))
						: null}
				</form>
			)}
		/>
	)
}
