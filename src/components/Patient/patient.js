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
import { getFullPatientInformation } from "../../api/patient.api";
import { apifetch } from "../../api/utility.api";
import axios from "axios";
import { useStateValue } from "../ClinicalQueue/context/ClinicalQueueContext";

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
    console.log(patient);
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

  function handleDemographicsAddressReduxLoad(patient) {
    //When you make an API call to get the patient address h, if the patient address hasnt been filled out yet it will give you a null value.
    //this function handles that and updates the store appropriately
    handleNameAndDetailsReduxLoad(patient);
    if (patient.address === null) {
      console.log("address null");
      //dispatch({ type: "address_is_null" });
    } else {
      dispatch({ type: "load_address", address: patient.address });
    }
  }

  useEffect(() => {
    apifetch(getFullPatientInformation, id).then((fullpatientinformation) => {
      //dispatch({ type: "load_address", address: fullpatientinformation.address });
      //handleNameAndDetailsReduxLoad(fullpatientinformation);
      handleDemographicsAddressReduxLoad(fullpatientinformation);
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
  const fetchData = async () => {
    const result = await getFullPatientInformation(id);
    //const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
    console.log(result);
  };
  fetchData();
}, [id]);
 */
