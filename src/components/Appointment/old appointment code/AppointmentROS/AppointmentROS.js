import React, { useEffect, useState } from "react";
import { useFormikContext, Field } from "formik";
import { useParams, useRouteMatch } from "react-router-dom";
import { RadioGroup } from "formik-material-ui";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FormControlLabel, Radio } from "@material-ui/core";

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

export default function AppointmentROS(props) {
  let { id } = useParams();
  const match = useRouteMatch();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { values } = useFormikContext();
  const forms = values.clinical_data.clinical_forms.filter(
    (form) => form.form_type === "review_of_systems"
  );

  forms.forEach((form) => {
    form.form.customformfields.forEach((field) => {
      if (field.value) {
      } else {
        field["value"] = ``;
      }
    });
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        {forms.map((form, index) => (
          <Tab label={form.title} {...a11yProps(index)} />
        ))}
      </Tabs>
      {forms.map((form, formindex) => (
        <TabPanel value={value} index={formindex}>
          {form.form.customformfields.map((field, fieldindex) => (
            <div key={fieldindex}>
              <Field
                component={RadioGroup}
                name={`${props.name}['${formindex}']['form']['customformfields']['${fieldindex}'][value]`}
              >
                <p>{`${props.name}[${formindex}][form][customformfields][${fieldindex}][value]`}</p>
                {field.choices.map((choice, choiceindex) => (
                  <FormControlLabel
                    key={choiceindex}
                    control={<Radio />}
                    value={choice.label}
                    label={choice.label}
                  />
                ))}
              </Field>
            </div>
          ))}
        </TabPanel>
      ))}
    </div>
  );
}

/*
<Field component={RadioGroup} name="activity">
            <FormControlLabel
              value="painting"
              control={<Radio />}
              label="Painting"
            />
            <FormControlLabel
              value="drawing"
              control={<Radio />}
              label="Drawing"
            />
            <FormControlLabel value="none" control={<Radio />} label="None" />
          </Field>
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
