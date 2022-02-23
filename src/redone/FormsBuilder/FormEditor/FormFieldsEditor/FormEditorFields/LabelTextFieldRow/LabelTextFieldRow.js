import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-mui'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	header: {
		padding: theme.spacing(1),
		color: theme.palette.primary.contrastText,
	},
}))

/* This only changes the label for the field. This is not a normal text field.*/

export default function LabelTextFieldRow({ label, name }) {
	const classes = useStyles()
	return (
		<Field
			component={TextField}
			className={classes.header}
			fullWidth
			label={label}
			name={name}
			variant="standard"
		/>
	)
}

/*
 *
 * name={`${name}.${index}.label`}
 * */
