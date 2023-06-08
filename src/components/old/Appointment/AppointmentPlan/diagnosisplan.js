import Grid from '@material-ui/core/Grid'
import { Card, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormContext } from 'react-hook-form'

const useStyles = makeStyles({
	builderroot: {
		border: 1,
		borderColor: 'black',
		padding: '10px',
		// backgroundColor: 'lightgrey'
	},
	plancard: {
		padding: '20px',
	},
	plancontentcontainer: {
		margin: '20px',
	},
	addfieldcontainer: {
		backgroundColor: 'white',
		padding: '10px',
	},
	addfielditem: {
		padding: '10px',
		flexGrow: 2,
	},
	formTitle: {
		padding: '15px',
	},
	formTypeSelectContainer: {
		marginTop: '5px',
	},
})

export default function DiagnosisPlan(props) {
	const classes = useStyles()
	const methods = useFormContext()
	return (
		<Card raised>
			<Grid className={classes.plancard} container direction={`column`}>
				<Grid item className={classes.plancontentcontainer}>
					<Grid container direction={`row`} style={{ color: '#000' }}>
						<Grid item>
							<TextField
								inputRef={methods.register()}
								defaultValue={props.field.icd10assessmentcode}
								disabled
								name={`plans[${props.index}].icd10assessmentcode`}
							/>
						</Grid>
						<Grid item style={{ flexGrow: 1 }}>
							<TextField
								inputRef={methods.register()}
								defaultValue={props.field.icd_description}
								disabled
								fullWidth
								name={`plans[${props.index}].icd_description`}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.plancontentcontainer}>
					<TextField
						inputRef={methods.register()}
						defaultValue={props.field.plan}
						multiline
						fullWidth
						variant={`outlined`}
						rows={5}
						placeholder={`Enter treatment plan for ${props.field.icd10assessmentcode} - ${props.field.icd_description} here`}
						name={`plans[${props.index}].plan`}
					/>
				</Grid>
				<Grid item className={classes.plancontentcontainer}>
					<Typography>Order Radiology</Typography>
					<Typography>Setup Referral</Typography>
					<Typography>Prescribe Medication</Typography>
					<Typography>Order Labs</Typography>
					<Typography>Schedule follow up appointment</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}
