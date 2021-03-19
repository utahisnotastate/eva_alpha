import React, { Component, useEffect, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  updatePatientDemographics,
  saveDemographicsFormToDB,
} from "../../../../api/patient.api";
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
  const dispatch = useDispatch();
  let { id } = useParams();
  const patientnameanddetails = useSelector(
    (state) => state.patient.patientnameanddetails
  );
  const patient_contact_methods = useSelector(
    (state) => state.patient.patient_contact_methods
  );
  const demographics = useSelector(
    (state) => state.patient.patientdemographics
  );
  const address = useSelector((state) => state.patient.patientaddress);

  const methods = useForm({
    defaultValues: {
      address: {
        address_one: "",
        address_two: "",
        city: "",
        state: "",
        zip_code: "",
      },
      patientnameanddetails: {
        first_name: "Utah",
        middle_name: "Shanker",
      },
      demographics: {
        race: "",
        gender: "",
        marital_status: "",
        employment_status: "",
        email: "",
      },
      patient_contact_methods: [],
    },
  });
  const onSubmit = (data) => {
    console.log(data.patient_contact_methods);
    const demographicsform = {
      patient_address: data.address,
      patient_contact_methods: data.patient_contact_methods,
      patient_demographics: {
        race: "unknown",
        gender: "unknown",
        marital_status: "unknown",
        employment_status: "unknown",
        email: "",
      },
      first_name: data.patientnameanddetails.first_name,
      last_name: data.patientnameanddetails.last_name,
      middle_name: data.patientnameanddetails.middle_name,
      preferred_name: data.patientnameanddetails.preferred_name,
      date_of_birth: data.patientnameanddetails.date_of_birth,
      ssn: parseInt(data.patientnameanddetails.ssn),
      //patient_contact_methods: data.patient_contact_methods,
    };
    // console.log(demographicsform);
    saveDemographicsFormToDB(id, demographicsform).then((savedForm) => {
      console.log(savedForm);
    });

    /*updatePatientDemographics(
      id,
      data.patientnameanddetails,
      data.address,
      data.patient_contact_methods,
      data.demographics
    )
      .then((response) => {
        console.log(response);

        dispatch({
          type: "load_name_and_details",
          nameanddetails: {
            first_name: response.first_name,
            last_name: response.last_name,
            middle_name: response.middle_name,
            preferred_name: response.preferred_name,
            date_of_birth: response.date_of_birth,
            ssn: response.ssn,
          },
        });

        dispatch({ type: "load_address", address: response.address });

        dispatch({
          type: "load_patient_contact_methods",
          patient_contact_methods: response.patient_contact_methods,
        });
      })
      .catch((error) => {
        console.log(error);
      });*/
  };
  const classes = useStyles();

  useEffect(() => {
    //when the user clicks on the patient component, there is an API call which grabs all patient information and
    //stores it in the redux store. setFormFields simply reads the value from redux and sets the values of the form accordingly
    async function setFormFields() {
      methods.setValue("patientnameanddetails", patientnameanddetails);
      methods.setValue("address", address);
      methods.setValue("patient_contact_methods", patient_contact_methods);
      methods.setValue("demographics", demographics);
      /* methods.reset({
        patientnameanddetails,
        address,
        patient_contact_methods,
        demographics,
      });*/
      //methods.reset(patientnameanddetails);
    }
    setFormFields();
  }, [
    id,
    patientnameanddetails,
    address,
    patient_contact_methods,
    demographics,
  ]);

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
const dbdemographicsobject = {
      patientnamedetails: data.patientnameanddetails,
      address: data.address,
      patient_contact_methods: data.patient_contact_methods,
      demographics: {
        gender: data.demographics.gender.value,
        marital_status: data.demographics.marital_status.value,
        race: data.demographics.race.value,
      },
    };

useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
            console.log(result);
        };
        fetchData();
    });
 */
