import React from 'react'
import Select from 'mui-rff'
import { MenuItem } from '@mui/material'

export default function EVASelect({ options, ...rest }) {
	return (
		<Select
			{...rest}
			FormHelperTextProps={{
				style: { color: 'red' },
			}}
			SelectProps={{
				native: true,
			}}>
			{options && options.length > 0
				? options.map((option, index) => (
						<MenuItem key={index} value={option.value}>
							{option.label}
						</MenuItem>
				  ))
				: null}
		</Select>
	)
}
