import React from 'react'
import { CheckboxWithLabel } from 'formik-material-ui'
import { Field } from 'formik'

export default function RelatedToField(props) {
	return (
		<Field
			component={CheckboxWithLabel}
			type="checkbox"
			name={`${props.name}[${props.index}].relatedTo`}
			defaultValue={false}
			Label={{ label: props.label }}
		/>
	)
}
