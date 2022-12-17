import React from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

const onSubmit = async (values) => {
	await sleep(300)
	window.alert(JSON.stringify(values, 0, 2))
}

const EVAForm = ({ practiceform }) => (
	<Form
		onSubmit={(values) => {
			console.log(values)
		}}
		mutators={{
			// potentially other mutators could be merged here
			...arrayMutators,
		}}
		initialValues={practiceform}
		render={({
			handleSubmit,
			pristine,
			invalid,
			form: { mutators: push, pop },
		}) => (
			<form onSubmit={handleSubmit}>
				<FieldArray name="customers">
					{({ fields }) => (
						<div>
							{fields.map((name, index) => (
								<div key={name}>
									<div>
										<label>First Name</label>
										<Field
											name={`${name}.firstName`}
											component="input"
										/>
									</div>
									<div>
										<label>Last Name</label>
										<Field
											name={`${name}.lastName`}
											component="input"
										/>
									</div>
									<button
										type="button"
										onClick={() => pop(index)}>
										Remove
									</button>
								</div>
							))}
							<button
								type="button"
								onClick={() =>
									push({ firstName: '', lastName: '' })
								}>
								Add
							</button>
						</div>
					)}
				</FieldArray>
			</form>
		)}
	/>
)

export default EVAForm
