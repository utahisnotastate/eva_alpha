import React from 'react'
import {
	TextField,
	Select,
	DatePicker,
	Checkboxes,
	Radios,
	TimePicker,
} from 'mui-rff'
import MenuItem from '@mui/material/MenuItem'

export default function EVADynamicField({ field, ...rest }) {
	switch (field.type) {
		case 'text':
			return <TextField label={field.label} name={field.name} {...rest} />
		case 'select':
			return (
				<Select
					options={field.options}
					label={field.label}
					name={field.name}
					{...rest}>
					{field.options && field.options.length > 0
						? field.options.map((option, index) => (
								<MenuItem key={index} value={option.value}>
									{option.label}
								</MenuItem>
						  ))
						: null}
				</Select>
			)
		case 'date':
			return (
				<DatePicker name={field.value} label={field.label} {...rest} />
			)
		case 'time':
			return (
				<TimePicker name={field.name} label={field.label} {...rest} />
			)
		case 'radios':
			return (
				<Radios
					name={field.name}
					label={field.label}
					data={field.options}
					{...rest}
				/>
			)
		case 'checkboxgroup':
			return (
				<Checkboxes
					{...rest}
					name={field.name}
					label={field.label}
					data={field.options}
				/>
			)
		default:
			return <TextField name={field.name} label={field.label} {...rest} />
	}
}
