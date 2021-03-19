import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

export default function AppointmentDetails(props) {
  return (
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
  );
}
