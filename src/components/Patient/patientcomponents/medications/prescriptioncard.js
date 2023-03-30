import * as React from 'react'
import { Card, CardContent, Grid, TextField } from '@mui/material'
import { Field } from 'formik'
import { IconButton } from '@material-ui/core'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'


const PrescriptionCard = ({ index, historyIndex, removeHistory }) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Grid container spacing={2}>
					{/* Prescription Name field */}
					<Grid item xs={12} sm={3}>
						<Field
							as={TextField}
							name={`medications.${index}.history.${historyIndex}.name`}
							label="Prescription Name"
							fullWidth
							required
						/>
					</Grid>
					{/* Dosage field */}
					<Grid item xs={12} sm={2}>
						<Field
							as={TextField}
							name={`medications.${index}.history.${historyIndex}.dosage`}
							label="Dosage"
							fullWidth
							required
						/>
					</Grid>
					{/* Date Written field */}
					<Grid item xs={12} sm={3}>
						<Field
							as={TextField}
							name={`medications.${index}.history.${historyIndex}.date_written`}
							label="Date Written"
							fullWidth
							required
						/>
					</Grid>
					{/* Notes field */}
					<Grid item xs={12} sm={3}>
						<Field
							as={TextField}
							name={`medications.${index}.history.${historyIndex}.notes`}
							label="Notes"
							fullWidth
						/>
					</Grid>
					{/* Remove Prescription button */}
					<Grid item xs={1}>
						<IconButton onClick={() => removeHistory(historyIndex)}>
							<RemoveCircleOutlineIcon />
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

export default PrescriptionCard
