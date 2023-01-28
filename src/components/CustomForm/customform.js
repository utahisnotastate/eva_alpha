import * as React from 'react'
import { Stack } from '@mui/material'
import DynamicField from '../DynamicField/DynamicField'

export default function CustomForm({ fields }) {
	return (
		<Stack spacing={2}>
			{fields && fields.length > 0
				? fields.map((field, index) => (
						<div key={index}>
							<DynamicField
								value={field.value}
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
								options={field.options ? field.options : null}
							/>
						</div>
				  ))
				: null}
		</Stack>
	)
}
