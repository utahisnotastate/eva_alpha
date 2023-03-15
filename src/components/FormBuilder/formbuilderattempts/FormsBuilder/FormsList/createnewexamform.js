import React from 'react'
import { Formik, Field, Form } from 'formik'
import { TextField } from 'formik-mui'
/*
 *
 * PROBABLY DELETE THIS
 *
 * */
export default function CreateNewExamForm() {
	return (
		<Formik
			initialValues={{
				title: '',
				type: '',
				active: false,
				details: { fields: [] },
			}}
			enableReinitialize={true}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				console.log(values)
				setSubmitting(false)
			}}>
			<Form>
				<Field
					name={`title`}
					label={`Title`}
					component={TextField}
					variant="standard"
					fullWidth
				/>
			</Form>
		</Formik>
	)
}
