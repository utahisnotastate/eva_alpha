import React from 'react'
import { Divider, Stack } from '@mui/material'

export default function Section({ title, children }) {
	return (
		<>
			<h6>{title}</h6>
			<Divider />
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="stretch"
				spacing={2}>
				{children}
			</Stack>
		</>
	)
}
