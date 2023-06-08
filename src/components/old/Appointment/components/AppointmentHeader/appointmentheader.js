import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

export default function AppointmentHeader({ appointment, patient }) {
	const { details } = patient

	return (
		<Grid container direction="column">
			<Grid item>
				<div style={{ float: 'right' }}>
					<Button variant={`outlined`} color={`secondary`}>
						Save
					</Button>
				</div>
			</Grid>
			<Grid item>
				<Grid container direction="column">
					<Grid item>
						<Typography>Medical Appointment</Typography>
						<Typography>Patient </Typography>
						<Typography>
							<pre>
								{JSON.stringify(patient.details, null, 2)}
							</pre>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
/*
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
              {props.appointment.actual_end
                ? props.appointment.actual_end
                : null}
            </Typography>


<Grid item>
        <AppointmentDetails appointment={props.appointment} />
      </Grid>
        <Typography>Medical Appointment</Typography>
        <Typography>
          Patient: {props.appointment.patient_display_name}
        </Typography>
        <Typography>Scheduled Start: {props.appointment.start}</Typography>
        <Typography>Appointment end: {props.appointment.end}</Typography>
 */
