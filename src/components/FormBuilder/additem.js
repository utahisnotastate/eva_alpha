import React from 'react'
import { Button, Typography } from '@mui/material'

export default function AddItem({ item, push, newitemlabel }) {
	return (
		<Button variant="contained" color="primary" onClick={() => push(item)}>
			<Typography variant="body1">Add {item.label}</Typography>
		</Button>
	)
}
