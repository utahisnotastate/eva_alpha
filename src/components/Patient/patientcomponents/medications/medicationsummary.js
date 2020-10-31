import React, { useEffect, useState } from "react";
import { Grid, Typography, Checkbox, TextField } from "@material-ui/core";
import { getMedicationClinicalDetails } from "../../../../api/patient.api";
// ADDERALL (Oral Pill) -  5 mg Tab, 7.5 mg Tab,10 mg Tab,12.5 mg Tab,15 mg Tab,20 mg Tab,30 mg Tab - 541879,1009147,541894,687045,577960,577962,541365
export default function MedicationSummary(props) {
  useEffect(() => {
    console.log(props.summary.name);
    getMedicationClinicalDetails(props.summary.name).then((response) => {
      console.log("Clinical details is " + response);
    });
  }, [props.summary.id]);
  console.log(props);
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>{props.summary.name}</Typography>
        <Typography>{props.summary.strength}</Typography>
        <Typography>{props.summary.frequency}</Typography>
      </Grid>
      <Grid item>
        <TextField defaultValue={props.summary.prescribed_by} />
      </Grid>
      <Grid item>
        <Typography>Active</Typography>
        <Checkbox checked={props.summary.active} />
      </Grid>
      <Grid item>
        <Typography>Next authorization required by: </Typography>
      </Grid>
      <Grid item>
        <Typography>Date Started</Typography>
      </Grid>
      <Grid item>
        <Typography>Last Prescription Written on:</Typography>
      </Grid>
    </Grid>
  );
}
