import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export default function CheckboxGroup({ options, control }) {
	return (
		<FormGroup>
			{options && options.length > 0
				? options.map((option, index) => (
						<FormControlLabel
							key={index}
							control={<Checkbox {...control} />}
							label={option.label}
						/>
				  ))
				: null}
		</FormGroup>
	)
}
