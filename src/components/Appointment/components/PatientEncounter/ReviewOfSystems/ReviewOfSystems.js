import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FieldArray } from "formik";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

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
      {value === index && <Box p={3}>{children}</Box>}
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
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
export default function ReviewOfSystems(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props.rosforms);
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
        <FieldArray name={props.name}>
          {(arrayHelpers) => (
            <>
              {props.rosforms && props.rosforms.length > 0 ? (
                <div>
                  {props.rosforms.map((rosform, index) => (
                    <Tab
                      key={"" + Math.random()}
                      label={rosform.title}
                      {...a11yProps(index)}
                    />
                  ))}
                </div>
              ) : (
                <p>No forms</p>
              )}
            </>
          )}
        </FieldArray>
      </Tabs>
      <div></div>
    </div>
  );
}

/*
{props.rosforms.map((rosform, index) => (
        <TabPanel key={"" + Math.random()} value={value} index={0}>
          {rosform.title}
        </TabPanel>
      ))}
<FieldArray name={props.name}>
          {(arrayHelpers) => (
            <>
              {props.rosforms && props.rosforms.length > 0 ? (
                <div>
                  {props.rosforms.map((rosform, index) => (
                    <TabPanel
                      key={"" + Math.random()}
                      value={value}
                      index={index}
                    >
                      {rosform.title}
                    </TabPanel>
                  ))}
                </div>
              ) : null}
            </>
          )}
        </FieldArray>
{props.rosforms.map((rosform, index) => (
          <Tab
            key={"" + Math.random()}
            label={rosform.title}
            {...a11yProps(index)}
          />
        ))}
 */
