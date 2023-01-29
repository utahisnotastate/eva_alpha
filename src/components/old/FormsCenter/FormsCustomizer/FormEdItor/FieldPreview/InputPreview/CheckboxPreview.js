import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormContext } from 'react-hook-form'
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
	fullsize: {
		width: '100%',
	},
	fieldPreviewContainer: {
		borderStyle: 'solid',
		borderColor: '#000',
		borderWidth: '3',
		padding: '10px',
	},
	margTop: {
		marginTop: '15px',
	},
})

export default function CheckboxPreview(props) {
	const { register, watch } = useFormContext()
	const classes = useStyles()
	const watchlabel = watch(props.input.name)
	return (
		<Grid container direction="column">
			<Grid item>
				<Grid container direction="column">
					<Grid item className={classes.margTop}>
						<Typography variant="subtitle2">
							Field Preview:
						</Typography>
					</Grid>
				</Grid>
				<Grid item className={classes.fieldPreviewContainer}>
					<FormControlLabel
						control={<Checkbox />}
						label={watchlabel}
						labelPlacement="top"
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}
