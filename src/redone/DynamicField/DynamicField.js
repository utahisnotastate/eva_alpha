import React from 'react'
import DynamicTextField from './Fields/DynamicTextField'
import DynamicRadioGroup from './Fields/DynamicRadioGroup'
import DynamicPresentNotPresentField from './Fields/DynamicPresentNotPresentField'
import DynamicNormalAbnormal from './Fields/DynamicNormalAbnormal'
import DynamicNumberField from './Fields/DynamicNumber'
import DynamicDate from './Fields/DynamicDate'
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

export default function DynamicField({ type, index, options, label, name }) {
	switch (type) {
		case 'text':
			return <DynamicTextField label={label} name={name} />
		case 'textarea':
			return <DynamicTextField label={label} name={name} />

		case 'radio':
			return (
				<DynamicRadioGroup
					label={label}
					options={options}
					name={name}
				/>
			)
		case 'date':
			return <DynamicTextField label={label} name={name} />

		case 'number':
			return <DynamicTextField label={label} name={name} />

		case 'normal_abnormal':
			return <DynamicTextField label={label} name={name} />

		case 'present_not_present':
			return <DynamicTextField label={label} name={name} />
		case 'select':
			return <DynamicTextField label={label} name={name} />

		default:
			return <DynamicTextField label={`default`} name={name} />
	}
}
