import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Typography } from '@mui/material'

export default function RadioButtonsGroup({ options, label }) {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<RadioGroup>
				{options && options.length > 0
					? options.map((option, index) => (
							<FormControlLabel
								key={index}
								value={option.value}
								control={<Radio />}
								label={option.label}
							/>
					  ))
					: null}
			</RadioGroup>
		</FormControl>
	)
}
