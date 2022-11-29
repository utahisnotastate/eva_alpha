import React, { useState } from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Field } from 'react-final-form'

//create a select input component using the mui select components
export default function SelectInput({ name, label, options, ...rest }) {
	const [value, setValue] = useState('')

	const handleChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<>
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select name={name} label={label} onChange={handleChange}>
					{options && options.length > 0 ? (
						options.map((option, index) => (
							<MenuItem key={index} value={option}>
								{option.form}
							</MenuItem>
						))
					) : (
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
					)}
				</Select>
			</FormControl>
		</>
	)
}
