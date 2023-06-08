import React from 'react'
import AppointmentHeaderButton from '../Buttons/AppointmentButtons/appointmentHeaderButton'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Typography } from '@material-ui/core'

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
