import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../../basestyledcomponents/Card/CardBody'
import AppointmentHeaderButton from '../Buttons/AppointmentButtons/appointmentHeaderButton'

import {
	Formik,
	Field,
	Form,
	ErrorMessage,
	FieldArray,
	useField,
	useFormikContext,
} from 'formik'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField } from '@material-ui/core'

/*
 import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  RadioGroup,
  Select,
  Switch,
} from "formik-material-ui";
*/

import { useParams } from 'react-router-dom'

const useStyles = makeStyles({
	button: {
		padding: '20px',
	},
})

export default function PreAppointment(props) {
	const classes = useStyles()
	//const { register, handleSubmit, watch, errors } = useFormContext();

	const onSubmit = (data) => {
		console.log(data)
	}
	return (
		<Grid container direction={`column`}>
			<Grid item>
				<AppointmentHeaderButton
					text={`Begin Encounter`}
					buttonAction={props.buttonAction}
					className={classes.button}
				/>
			</Grid>
			<Grid item>
				<Typography>Scheduling Note</Typography>
			</Grid>
			<Grid item>
				<TextField
					multiline
					fullWidth
					placeholder={`Enter any information that came up during the scheduling process`}
					name={`scheduling_note`}
					variant={`outlined`}
				/>
				<input type="submit" />
			</Grid>
		</Grid>
	)
}

/*
<Grid container direction={`column`}>
  <Grid item>
    <Typography>Scheduling Note</Typography>
  </Grid>
  <Grid item>
  <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputRef={register}
            multiline
            fullWidth
            placeholder={`Enter any information that came up during the scheduling process`}
            defaultValue={props.appointment.scheduling_note}
            variant={`outlined`}
          />
          <input type="submit" />
        </form>
  </Grid>
</Grid>
 */

/*
<Card>
      <CardHeader>
        <Typography>Scheduling Note</Typography>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputRef={register}
            multiline
            fullWidth
            placeholder={`Enter any information that came up during the scheduling process`}
            defaultValue={props.appointment.scheduling_note}
            variant={`outlined`}
          />
          <input type="submit" />
        </form>
      </CardBody>
    </Card>
 */
