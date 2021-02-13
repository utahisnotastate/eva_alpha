import React, { Component, useEffect, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { getPatientAndDemographics } from "../../../../api/patient.api";
import axios from "axios";
import BasicInfoForm from "./basicinfo";
import AddressForm from "./addressform";
import ContactForm from "./contactinfoform";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  formcontainer: {
    marginBottom: 15,
  },
  areaicon: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  areatitletext: {
    padding: 20,
  },
});

export default function Demographics(props) {
  const address = useSelector((state) => state.patient.patientaddress);
  const patientnameanddetails = useSelector(
    (state) => state.patient.patientnameanddetails
  );
  const patient_contact_methods = useSelector(
    (state) => state.patient.patient_contact_methods
  );
  const demographics = useSelector(
    (state) => state.patient.patientdemographics
  );

  const methods = useForm({
    defaultValues: {
      address: {},
      patientnameanddetails: {
        first_name: "Utah",
        middle_name: "Shanker",
      },
      patient_contact_methods: [],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const classes = useStyles();
  let { id } = useParams();
  useEffect(() => {
    async function setFormFields() {
      console.log(patientnameanddetails);
      methods.reset({
        patientnameanddetails,
        address,
        patient_contact_methods,
      });
      //methods.reset(patientnameanddetails);
    }
    setFormFields();
  }, [methods.reset, patientnameanddetails, address]);

  /*  useEffect(() => {
    const fetchData = async () => {
      const result = await getPatientAndDemographics(id);
      //const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
      console.log(result);
    };
    fetchData();
  }, [id]);*/
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container className={classes.root} alignItems="flex-start">
          <div>
            <Paper className={classes.areaicon} square>
              <AssignmentIcon />
              <Typography className={classes.areatitletext} variant="subtitle2">
                Name
              </Typography>
            </Paper>
          </div>
          <div>
            <Paper className={classes.areaicon} square>
              <BasicInfoForm />
            </Paper>
          </div>
          <div>
            <Paper className={classes.areaicon} square>
              <AssignmentIcon />
              <Typography className={classes.areatitletext} variant="subtitle2">
                Address
              </Typography>
            </Paper>
          </div>
          <div>
            <Paper className={classes.areaicon} square>
              <AddressForm />
            </Paper>
          </div>
          <div>
            <Paper className={classes.areaicon} square>
              <AssignmentIcon />
              <Typography className={classes.areatitletext} variant="subtitle2">
                Contact Info
              </Typography>
            </Paper>
          </div>
          <div>
            <Paper className={classes.areaicon} square>
              <ContactForm />
            </Paper>
          </div>
        </Grid>
        <input type="submit" value={`Save`} />
      </form>
    </FormProvider>
  );
}

/*
useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
            console.log(result);
        };
        fetchData();
    });
 */
