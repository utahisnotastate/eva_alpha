import React from 'react'
import { Grid } from '@material-ui/core'

// THIS IS NO LONGER USED
export default function AppointmentDetails(props) {
	return (
		<Grid container direction="column">
			<Grid item>
				<pre>{JSON.stringify(props.appointment, null, 2)}</pre>
			</Grid>
		</Grid>
	)
}

/*
<Grid container direction="column">
      <Grid item>
        <Typography>Medical Appointment</Typography>
        <Typography>
          Patient: {props.appointment.patient_display_name}
        </Typography>
        <Typography>Scheduled Start: {props.appointment.start}</Typography>
        <Typography>Appointment end: {props.appointment.end}</Typography>
        <Typography>
          Actual start:{" "}
          {props.appointment.actual_start
            ? props.appointment.actual_start
            : null}
        </Typography>
        <Typography>
          Actual End:{" "}
          {props.appointment.actual_end ? props.appointment.actual_end : null}
        </Typography>
      </Grid>
    </Grid>
 */
