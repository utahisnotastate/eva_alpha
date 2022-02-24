import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@mui/material'
import { useFormikContext, Field } from 'formik'
import { TextField } from 'formik-mui'

const useStyles = makeStyles({
	actions: {
		display: 'flex',
		justifyContent: 'flex-end',
		marginTop: '1rem',
		gap: '1rem',
	},
	deleteButton: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '2rem',
	},
	fieldrow: {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
		backgroundColor: 'white',
	},
})
export default function FormHeader(props) {
	const classes = useStyles()
	return (
		<div className={classes.fieldrow}>
			<div className={classes.actions}>
				<Button variant="contained" color="primary" type="submit">
					Save
				</Button>
				<Button variant="contained" color="primary" type="submit">
					Preview
				</Button>
			</div>
			<Field
				name="title"
				label={`Title`}
				component={TextField}
				variant="standard"
				fullWidth
			/>
			<div className={classes.deleteButton}>
				<Button variant="contained" color="error" type="submit">
					Delete Form
				</Button>
			</div>
		</div>
	)
}
