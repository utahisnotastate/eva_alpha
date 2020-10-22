import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { getAllPatientAllergyInfo } from "../../api/patient.api";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d60000",
    color: "#ffffff",
    fontSize: "18px",
  },
});

export default function AppointmentAllergiesWarning() {
  const classes = useStyles();
  const pollenstatus = useSelector(
    (state) => state.patient.patientallergies.pollenallergy
  );
  const latexstatus = useSelector(
    (state) => state.patient.patientallergies.latexallergy
  );
  const drugstatus = useSelector(
    (state) => state.patient.patientallergies.drugallergies
  );
  const petstatus = useSelector(
    (state) => state.patient.patientallergies.petallergies
  );
  const foodstatus = useSelector(
    (state) => state.patient.patientallergies.foodallergies
  );

  return (
    <Grid className={classes.root} container direction="column" spacing={1}>
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography>Latex Alleries:</Typography>
          </Grid>
          <Grid item>
            {latexstatus.length === 0 ? (
              <Typography>Unknown</Typography>
            ) : (
              <Typography>Present</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography>Pollen Allergies:</Typography>
          </Grid>
          <Grid item>
            {pollenstatus.length === 0 ? (
              <Typography>Unknown</Typography>
            ) : (
              <Typography>Present</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography>Pet Allergies:</Typography>
          </Grid>
          <Grid item>
            {petstatus.length === 0 ? (
              <Typography>Unknown</Typography>
            ) : (
              <Typography>Present</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography>Drug Allergies:</Typography>
          </Grid>
          <Grid item>
            {drugstatus.length === 0 ? (
              <Typography>Unknown</Typography>
            ) : (
              <Typography>Present</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography>Food Allergies:</Typography>
          </Grid>
          <Grid item>
            {foodstatus.length === 0 ? (
              <Typography>Unknown</Typography>
            ) : (
              <Typography>Present</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

/*
<Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography>Insect Allergies:</Typography>
          </Grid>
          <Grid item>
            {insectstatus.length === 0 ? (
              <Typography>Unknown</Typography>
            ) : (
              <Typography>{insectstatus}</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
  const [latexstatus, setLatexStatus] = useState([]);
  const [pollenstatus, setPollenStatus] = useState([]);
  const [petstatus, setPetStatus] = useState([]);
  const [foodstatus, setFoodStatus] = useState([]);
  const [insectstatus, setInsectStatus] = useState([]);
  useEffect(() => {
    getAllPatientAllergyInfo(props.patientId).then((response) => {
      console.log("all allergy is " + JSON.stringify(response));
      const [
        latexallergies,
        pollenallergies,
        petallergies,
        drugallergies,
        foodallergies,
        insectallergies,
      ] = response;
      setLatexStatus(latexallergies);
      setPollenStatus(pollenallergies);
      setPetStatus(petallergies);
      setDrugStatus(drugallergies);
      setFoodStatus(foodallergies);
      setInsectStatus(insectallergies);
      console.log("latex allergies are " + latexallergies.length);
    });
  }, []);
 */
