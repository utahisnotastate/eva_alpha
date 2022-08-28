import React from 'react'
import { Formik, Field, FieldArray, Form } from 'formik'
import { TextField } from 'formik-mui'

export default function PatientDetailsForm({ fields }) {
	return (
		<Form>
			{fields && fields.length > 0
				? fields.map((field, index) => (
						<Field
							key={index}
							style={{ margin: '15px' }}
							name={field.name}
							label={field.label}
							component={TextField}
							rows={4}
							multiline
							fullWidth
						/>
				  ))
				: null}

			<button type={`submit`} />
		</Form>
	)
}
