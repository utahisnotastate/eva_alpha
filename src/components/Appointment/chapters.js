import React from 'react'
import { Form } from 'react-final-form'
import { useSelector } from 'react-redux'
import arrayMutators from 'final-form-arrays'
import Chapter from './chapter'

export default function Chapters({ onSubmit }) {
	const form = useSelector((state) => state.form)
	const forms = useSelector((state) => state.forms)
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={form}
			mutators={{
				// potentially other mutators could be merged here
				...arrayMutators,
			}}
			render={({ handleSubmit, pristine, invalid, form }) => (
				<form onSubmit={handleSubmit}>
					{forms && forms.length > 0
						? forms.map((form, index) => (
								<Chapter
									key={index}
									name={form.name}
									title={form.title}
									inputs={form.inputs}
									blankitem={form.blankitem}
									fields={form.fields}
								/>
						  ))
						: null}
				</form>
			)}
		/>
	)
}
