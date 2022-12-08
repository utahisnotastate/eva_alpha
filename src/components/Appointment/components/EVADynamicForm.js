import React from 'react'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { Stack } from '@mui/material'

export default function EVADynamicForm({
	handleSubmit,
	initialValues,
	children,
}) {
	return (
		<Form
			onSubmit={handleSubmit}
			initialValues={initialValues}
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
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="stretch"
							spacing={2}>
							{children}
						</Stack>
					</form>
				)
			}}
		/>
	)
}
