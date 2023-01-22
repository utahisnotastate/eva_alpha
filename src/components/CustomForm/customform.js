import * as React from 'react'
import { Stack, TextField } from '@mui/material'

export default function CustomForm({ fields }) {
	return (
		<Stack spacing={2}>
			{fields && fields.length > 0
				? fields.map((field, index) => (
						<div key={index}>
							<TextField
								name={`${field}[${index}].value`}
								label={field.label}
								type={field.type}
								variant={
									field.variant ? field.variant : 'standard'
								}
								fullWidth={
									field.fullWidth ? field.fullWidth : true
								}
								helperText={
									field.helperText ? field.helperText : ''
								}
								options={field.options ? field.options : []}
							/>
						</div>
				  ))
				: null}
		</Stack>
	)
}
