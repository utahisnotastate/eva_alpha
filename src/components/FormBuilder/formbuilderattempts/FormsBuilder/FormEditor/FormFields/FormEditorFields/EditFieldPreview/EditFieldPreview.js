import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Divider } from '@mui/material'
import DynamicField from '../../../../../../eva_alpha/src/redone/DynamicField/DynamicField'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		border: `1px solid ${theme.palette.primary.main}`,
		padding: theme.spacing(2),
	},
	row: {
		width: '100%',
	},
}))

export default function EditFieldPreview({ label, type, options, name }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Typography>Field Preview</Typography>
			<Divider />
			<DynamicField
				label={label}
				type={type}
				options={options}
				name={name}
			/>
		</div>
	)
}
/*
* <DynamicField
				label={label}
				type={type}
				options={options}
				name={name}
				index={index}
			/>
*
* */
