import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  useParams,
  useRouteMatch,
  Link,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import routes from "./routes";
import {
  getFullPatientInformation,
  getBasicPatientInformation,
} from "../../api/patient.api";
import { apifetch } from "../../api/utility.api";
import axios from "axios";
import { useStateValue } from "../../graveyard/context/ClinicalQueueContext";
import { patient_contact_methods } from "../../store/reducers/patient/patient.reducers";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#BADDFF",
    minHeight: "100vh",
    boxShadow: "0 2px 4px rgba(0,0,0,.15)",
  },
  listitem: {
    display: "flex",
    justifyContent: "flex-start",
  },
  sideitem: {
    color: "#414141",
  },
}));

export default function Patient() {
  let { path, url } = useRouteMatch();
  const classes = useStyles();
  let { id } = useParams();
  const dispatch = useDispatch();

  function handleNameAndDetailsReduxLoad(patient) {
    dispatch({
      type: "load_name_and_details",
      nameanddetails: {
        first_name: patient.first_name,
        last_name: patient.last_name,
        middle_name: patient.middle_name,
        preferred_name: patient.preferred_name,
        date_of_birth: patient.date_of_birth,
        ssn: patient.ssn,
      },
    });
  }

  function handleDemographicsReduxLoad(demographics) {}

  function handlePatientContactMethods(contact_methods) {
    dispatch({
      type: "load_patient_contact_methods",
      patient_contact_methods: contact_methods,
    });
  }

  function handleDemographicsAddressContactMethodsReduxLoad(patient) {
    console.log(patient);
    //When you make an API call to get the patient address h, if the patient address hasnt been filled out yet it will give you a null value.
    //this function handles that and updates the store appropriately

    // this populates the redux store with the nameanddetails value which has patient name and such
    handleNameAndDetailsReduxLoad(patient);
    dispatch({ type: "load_address", address: patient.address });
    dispatch({ type: "load_demographics", demographics: patient.demographics });
  }

  useEffect(() => {
    /*
    apifetch(getBasicPatientInformation, id).then((basicpatientinformation) => {
      //handleDemographicsAddressContactMethodsReduxLoad(fullpatientinformation);
      handleNameAndDetailsReduxLoad(basicpatientinformation);
      console.log(basicpatientinformation);
     */
    apifetch(getFullPatientInformation, id).then((patientinformation) => {
      //handleDemographicsAddressContactMethodsReduxLoad(fullpatientinformation);
      dispatch({
        type: "load_name_and_details",
        nameanddetails: {
          first_name: patientinformation.basic_information.first_name,
          last_name: patientinformation.basic_information.last_name,
          middle_name: patientinformation.basic_information.middle_name,
          preferred_name: patientinformation.basic_information.preferred_name,
          date_of_birth: patientinformation.basic_information.date_of_birth,
          ssn: patientinformation.basic_information.ssn,
        },
      });
      dispatch({
        type: "load_address",
        address: patientinformation.address[0],
      });
      dispatch({
        type: "load_demographics",
        demographics: patientinformation.demographics[0],
      });
      dispatch({
        type: "load_patient_contact_methods",
        patient_contact_methods: patientinformation.patient_contact_methods,
      });
      //handleNameAndDetailsReduxLoad(patientinformation.basic_information);
    });
  }, [id]);
  return (
    <Grid container>
      <Grid item xs={2}>
        <List className={classes.list}>
          {routes.map((route) => (
            <ListItem className={classes.listitem} key={route.path}>
              <NavLink
                activeStyle={{ color: "#0232b2" }}
                to={`${url}${route.path}`}
              >
                <ListItemText
                  primary={
                    <Typography className={classes.sideitem} variant="body1">
                      {route.label}
                    </Typography>
                  }
                />
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={10}>
        <Switch>
          <Route exact path={path}>
            <Typography variant="body1">Content</Typography>
          </Route>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={`${path}${route.path}`}
              component={route.component}
            />
          ))}
        </Switch>
      </Grid>
    </Grid>
  );
}
/*
  useEffect(() => {
    apifetch(getFullPatientInformation, id).then((fullpatientinformation) => {
      handleDemographicsAddressContactMethodsReduxLoad(fullpatientinformation);
    });
  }, [id]);
if (patient.address === null || patient.demographics === null) {
      // set address to its default blank values
      dispatch({ type: "address_is_null" });
      // set demographics to its default blank values
      dispatch({ type: "demographics_is_null" });
      // set patient contact methods to values in DB
      // handlePatientContactMethods(patient.patient_contact_methods);

      dispatch({
        type: "load_patient_contact_methods",
        patient_contact_methods: patient.patient_contact_methods,
      });
    } else {
      // load the address into the redux store
      dispatch({ type: "load_address", address: patient.address });
      //load the demographics into the store
      dispatch({ type: "load_demographics", address: patient.demographics });
      // handlePatientContactMethods(patient.patient_contact_methods);

      // set patient contact methods to values in DB
      dispatch({
        type: "load_patient_contact_methods",
        patient_contact_methods: patient.patient_contact_methods,
      });
    }

useEffect(() => {
  const fetchData = async () => {
    const result = await getFullPatientInformation(id);
    //const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
    console.log(result);
  };
  fetchData();
}, [id]);
 */
