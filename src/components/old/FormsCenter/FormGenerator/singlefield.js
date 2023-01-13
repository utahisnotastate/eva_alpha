import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { Typography } from '@material-ui/core'
import SingleFieldInput from './singlefieldinput'
import InputPreview from '../FormPreview/formpreview.js'
import AppointmentField from '../../Forms/components/AppointmentField/appointmentfield'

const useStyles = makeStyles({
	root: {
		margin: '15px',
	},
})

export default function SingleField(props) {
	const classes = useStyles()
	const [fieldchecked, setFieldChecked] = useState(false)
	const handleSwitch = (fieldchecked) => {
		setFieldChecked(!fieldchecked)
	}
	return (
		<Grid className={classes.root} container direction={`column`}>
			<Grid item xs={2}>
				<Grid container direction={`column`}>
					<Grid item>
						<Typography>{props.field.label}</Typography>
					</Grid>
					<Grid item>
						<Grid container direction={`column`} justify="center">
							<AppointmentField
								label={props.field.label}
								type={props.field.type}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

/*
                            <InputPreview input={{label: props.field.label, fieldindex: props.fieldindex, type: props.field.type, choices: props.field.choices} } />

<Grid item>
                        <FormControlLabel
                            control={<Switch checked={fieldchecked} onChange={() => handleSwitch(fieldchecked)} />}
                            label={fieldchecked ? "Checked" : "Unchecked"}
                        />
                    </Grid>


<SingleFieldInput field={props.field} fieldindex={props.fieldindex} disabled={fieldchecked}/>
{fieldchecked ? (<SingleFieldInput type={props.type} disabled={fieldchecked}/>): (<Typography>Field not checked, please flip switch to fill out field</Typography>)}
 */
