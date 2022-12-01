import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Field } from 'react-final-form'

export default function InputOptions({ name, label, options }) {
	return (
		<Field name={`${name}`} component={'select'}>
			<FormControl>
				<FormLabel>{label}</FormLabel>
				<RadioGroup defaultValue="female" name={`${name}`}>
					{options && options.length > 0
						? options.map(({ option, index }) => (
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
		</Field>
	)
}
