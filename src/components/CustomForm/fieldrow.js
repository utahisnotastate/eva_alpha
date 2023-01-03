import { TextField } from '@mui/material'
import React from 'react'
import CardBody from '../basestyledcomponents/Card/CardBody'

export default function CustomForm({ form }) {
	return (
		<CardBody>
			{form.fields.map(
				(
					{
						full_width,
						helperText,
						label,
						name,
						options,
						type,
						variant,
					},
					index
				) => (
					<TextField
						key={index}
						name={`${name}.value`}
						label={label}
						type={type}
						variant={variant}
						fullWidth={full_width}
						helperText={helperText}
						options={options}
					/>
				)
			)}
		</CardBody>
	)
}
