import React from 'react'
import DynamicFormDateField from './DyanmicAppointmentComponents/dynamicformdatefield'
import DynamicFormTextField from './DyanmicAppointmentComponents/dynamicformtextfield'

export default function DynamicAppointmentField(props) {
	switch (props.type) {
		case 'TextArea':
			return (
				<DynamicFormTextField
					label={props.label}
					formname={props.formname}
					index={props.index}
					fullWidth
					fieldname={props.fieldname}
					multiline
				/>
			)
		case 'Date':
			return (
				<DynamicFormDateField
					formname={props.formname}
					label={props.label}
					index={props.index}
					fieldname={props.fieldname}
				/>
			)
		default:
			return (
				<DynamicFormTextField
					label={props.label}
					formname={props.formname}
					index={props.index}
					fullWidth={!!props.fullWidth}
					fieldname={props.fieldname}
					multiline={!!props.multiline}
				/>
			)
	}
}
