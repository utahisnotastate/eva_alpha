import React, { useState, useCallback } from 'react'
import { Typography, Button, TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: '10px',
	},
}))

export default function AddNewChoice({
	arrayHelpers,
	newChoice,
	setNewChoice,
}) {
	const classes = useStyles()

	const handleAddChoice = () => {
		arrayHelpers.push({ label: newChoice })
	}

	return (
		<div className={classes.root}>
			<TextField
				label="New Choice"
				onChange={(event) => setNewChoice(event.target.value)}
				variant="outlined"
				size="small"
				style={{ width: '100%' }}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={handleAddChoice}>
				Add
			</Button>
		</div>
	)
}
