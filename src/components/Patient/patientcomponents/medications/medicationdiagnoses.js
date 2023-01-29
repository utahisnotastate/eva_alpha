import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function MedicationDiagnoses(props) {
	return (
		<Grid container direction="column">
			<Grid item>
				<Typography>
					Related to which of the patient's diagnoses
				</Typography>
			</Grid>
			<Grid item>
				<Typography>Add New Diagnoses</Typography>
			</Grid>
		</Grid>
	)
}
