import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import AppointmentDetails from "./appointmentdetails";
import AppointmentHeaderAction from "./appointmentheaderaction";

export default function AppointmentHeader(props) {
  return (
    <Grid container direction="column">
      <Grid item>
        <div style={{ float: "right" }}>
          <Button variant={`outlined`} color={`secondary`}>
            Save
          </Button>
        </div>
      </Grid>
      <Grid item>
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
              {props.appointment.actual_end
                ? props.appointment.actual_end
                : null}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
/*

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
