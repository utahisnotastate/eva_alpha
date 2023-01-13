import React from 'react'
import { Select } from 'mui-rff'

export default function EVASelect({ name, options }) {
	return (
		<Select name={`${name}.type`}>
			<option />
			{options && options.length > 0
				? options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
				  ))
				: null}
		</Select>
	)
}
