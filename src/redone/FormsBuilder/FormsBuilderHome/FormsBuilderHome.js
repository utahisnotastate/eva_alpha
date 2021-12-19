import React from "react";
import _ from "lodash";
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import FormsList from "../FormsList/FormsList";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import { Divider } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default function FormsBuilderHome() {
  const { url } = useRouteMatch();
  const classes = useStyles();

  const formslistobjects = [
    { label: "Physical Exam", form_type: "physical_exam" },
    { label: "Review Of Sytems", form_type: "review_of_systems" },
  ];

  return (
    <div className={classes.root}>
      {formslistobjects.map((form, index) => (
        <FormsList
          key={index}
          form_type={form.form_type}
          label={form.label}
          url={url}
        />
      ))}
    </div>
  );
}
