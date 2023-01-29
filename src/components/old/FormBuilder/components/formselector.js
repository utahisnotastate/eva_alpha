import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

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

/*
<TextField
									label="Label"
									name={`${field}.label`}
									required
									variant="outlined"
								/>


<TextField
									key={index}
									label={`Label`}
									name={`${input}.label`}
									onChange={(e) => {
										const newFields = form.fields.map(
											(field, i) => {
												if (i === index) {
													return {
														...field,
														value: e.target.value,
													}
												}
												return field
											}
										)
										setForm({
											...form,
											fields: newFields,
										})
									}}
									fullWidth
									variant={`standard`}
								/>




<TextField
									key={index}
									label={`Placeholder`}
									name={`${input}.placeHolder`}
									helperText={`When form is empty, this will show in the input`}
									onChange={(e) => {
										const newFields = form.fields.map(
											(field, i) => {
												if (i === index) {
													return {
														...field,
														value: e.target.value,
													}
												}
												return field
											}
										)
										setForm({
											...form,
											fields: newFields,
										})
									}}
									fullWidth
									variant={`standard`}
								/>


<TextField
									key={index}
									label={`Helper Text`}
									name={`${input}.helperText`}
									helperText={`This will show below the input`}
									onChange={(e) => {
										const newFields = form.fields.map(
											(field, i) => {
												if (i === index) {
													return {
														...field,
														value: e.target.value,
													}
												}
												return field
											}
										)
										setForm({
											...form,
											fields: newFields,
										})
									}}
									fullWidth
									variant={`standard`}
								/>


* <Stack key={index} spacing={2}>
					<TextField
						label={field.label}
						name={`${field.name}.label`}
						helperText={field.helperText}
						fullWidth={field.full_width}
						variant={field.variant}
						required={field.required}
					/>
					{field.type === 'select' ?
						(<Select
								label={field.label}
								name={`${field.name}.value`}
								helperText={field.helperText}
								fullWidth={field.full_width}
							/>
						)
						: null}
*
*
* <div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									gap: '1rem',
									borderColor: 'grey',
									borderWidth: '1px',
									borderStyle: 'solid',
									padding: '1rem',
									margin: '1rem',
								}}
								key={index}>
*
* */
