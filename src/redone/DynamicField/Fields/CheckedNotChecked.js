import React from 'react'
import { Typography } from '@mui/material'

export default function CheckedNotChecked({ touched }) {
	console.log({ label, name })
	return <Typography>{touched ? 'Checked' : 'Not Checked'}</Typography>
}
