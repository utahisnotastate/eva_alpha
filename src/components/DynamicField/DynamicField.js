import React from 'react'
import DynamicTextField from './Fields/DynamicTextField'
import DynamicRadioGroup from './Fields/DynamicRadioGroup'
import DynamicPresentNotPresentField from './Fields/DynamicPresentNotPresentField'
import DynamicSelectField from './Fields/DynamicSelectField'

const present_not_present_options = [
	{
		label: 'Present',
		value: 'present',
	},
	{
		label: 'Not Present',
		value: 'not_present',
	},
]

const normal_abnormal_options = [
	{
		label: 'Normal',
		value: 'normal',
	},
	{
		label: 'Abnormal',
		value: 'abnormal',
	},
]

function DynamicField({ type, index, choices, label, name }) {
	switch (type) {
		case 'text':
			return <DynamicTextField type={`text`} label={label} name={name} />
		case 'textarea':
			return (
				<DynamicTextField type={`textarea`} label={label} name={name} />
			)

		case 'radio':
			return (
				<DynamicRadioGroup
					label={label}
					choices={choices}
					name={name}
				/>
			)
		case 'date':
			return <DynamicTextField type={`date`} label={label} name={name} />

		case 'number':
			return (
				<DynamicTextField type={`number`} label={label} name={name} />
			)

		case 'normal_abnormal':
			return (
				<DynamicSelectField
					label={label}
					name={name}
					choices={normal_abnormal_options}
				/>
			)

		case 'present_not_present':
			return <DynamicPresentNotPresentField />
		case 'select':
			return (
				<DynamicSelectField
					label={label}
					name={name}
					choices={choices}
				/>
			)

		default:
			return (
				<DynamicTextField type={`text`} label={`default`} name={name} />
			)
	}
}

export default React.memo(DynamicField)
