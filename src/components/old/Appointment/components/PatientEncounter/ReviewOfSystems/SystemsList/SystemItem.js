import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function SystemItem({ fields }) {
	return (
		<Grid container direction={`column`}>
			<Grid item>
				<Typography variant="h6">Label</Typography>
			</Grid>
			<Grid item>
				<Typography variant="body1">Choices</Typography>
			</Grid>
		</Grid>
	)
}
