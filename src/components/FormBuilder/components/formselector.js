import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'

export default function FormSelector({ forms, form, handleFormSelect }) {
	const handleChange = (event) => {
		handleFormSelect(event.target.value)
	}
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select">
				Select a Form to Edit
			</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={form}
				onChange={handleChange}>
				{forms && forms.length > 0 ? (
					forms.map((form, index) => (
						<MenuItem key={index} value={form}>
							{form.label}
						</MenuItem>
					))
				) : (
					<p>No Forms</p>
				)}
			</Select>
		</FormControl>
	)
}
