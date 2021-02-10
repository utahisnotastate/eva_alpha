import React, { useEffect, useState } from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import BaseROSComponent from "./AppointmentROSComponents/BaseROSComponent";
import AppointmentROSSummary from "./AppointmentROSSummary";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function AppointmentROS() {
  let { id } = useParams();
  const match = useRouteMatch();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [systems, setSystems] = useState([
    { label: "Constitutional", component: "ROSConstitutional" },
    { label: "Allergic Immunologic", component: "ROSAllergicImmunologic" },
    { label: "Integumentary", component: "ROSIntegumentary" },
    { label: "Eyes", component: "ROSEyes" },
    { label: "Cardiovascular", component: "ROSCardiovascular" },
    { label: "Respiratory", component: "ROSRespiratory" },
    { label: "Musculoskeletal", component: "ROSMusculoskeletal" },
    { label: "Gastrointestinal", component: "ROSGastrointestinal" },
    { label: "Neurological", component: "ROSNeurological" },
    { label: "Genitourinary", component: "ROSGenitourinary" },
    { label: "Endocrine", component: "ROSEndocrine" },
    { label: "Hematologic", component: "ROSHematologic" },
    { label: "Psychiatric", component: "ROSPsychiatric" },
    { label: "Ears Nose Throat", component: "ROSEarsNoseThroat" },
  ]);
  // console.log('path is ' + path)
  console.log(match.path);
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {systems.map((system, index) => (
          <Tab label={system.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {systems.map((system, index) => (
        <TabPanel value={value} index={index}>
          {system.label}
        </TabPanel>
      ))}
    </div>
  );
}

/*

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      
 <Route key={`summary`} exact path={`${match.path}`} component={AppointmentROSSummary} />

 <Switch>
                <Route path={`/appointments/:id/appointmentros/ROSAllergicImmunologic`}>
                    <BaseROSComponent/>
                </Route>

            </Switch>
 */
