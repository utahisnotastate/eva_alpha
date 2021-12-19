import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import { Divider } from "@mui/material";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
});

export default function FormsList({ label, form_type }) {
  const classes = useStyles();
  const forms = useSelector((state) => state.formsmanager.forms);

  const handleSwitch = console.log("clicked~");

  return (
    <List
      className={classes.root}
      subheader={<ListSubheader>{`${label}`}</ListSubheader>}
    >
      <Divider />
      {forms && forms.length > 0
        ? forms
            .filter((form) => form.form_type === form_type)
            .map((form, index) => (
              <ListItem key={index}>
                <ListItemText primary={form.title} />
                <Switch
                  edge={`end`}
                  onChange={handleSwitch}
                  checked={form.active}
                />
              </ListItem>
            ))
        : null}
    </List>
  );
}
