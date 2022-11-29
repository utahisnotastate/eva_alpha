import React from 'react'
import { Button } from '@mui/material'

export default function NewItem({ name, push, blankitem, label, ...rest }) {
	return (
		<Button
			variant={`contained`}
			fullWidth
			color={`primary`}
			onClick={() => push(name, blankitem)}
			{...rest}>
			{label}
		</Button>
	)
}
