import React from 'react'
import TextField from '@material-ui/core/TextField'
import RadioChoicesInput from './FieldComponents/RadioChoicesInput'

const normalabnormalchoices = [
	{ value: 'normal', label: 'Normal' },
	{ value: 'abnormal', label: 'Abnormal' },
]
const presentnotpresentchoices = [
	{ value: 'present', label: 'Present' },
	{
		value: 'not_presentl',
		label: 'Not Present',
	},
]

export default function SingleFieldInput(props) {
	switch (props.type) {
		case 'present_not_present':
			return <RadioChoicesInput choices={presentnotpresentchoices} />
		case 'normal_abnormal':
			return <RadioChoicesInput choices={normalabnormalchoices} />
		default:
			return (
				<TextField disabled={props.disabled ? false : true} fullWidth />
			)
	}
}
