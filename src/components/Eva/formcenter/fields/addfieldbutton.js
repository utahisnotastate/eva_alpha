import * as React from 'react'
import Button from '@mui/material/Button'

export default function AddFieldButton({ formikProps, blankitem, buttontext }) {
	const handleAddFieldToForm = () => {
		const mergedarray = [...formikProps.values.fields, blankitem]
		console.log(mergedarray)
		formikProps.setFieldValue(`fields`, mergedarray)
	}

	return (
		<Button onClick={handleAddFieldToForm}>
			Add New {buttontext} Field
		</Button>
	)
}
