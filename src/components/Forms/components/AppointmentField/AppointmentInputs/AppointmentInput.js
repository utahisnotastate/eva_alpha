import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Checkbox,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  InputLabel,
  RadioGroup,
  Radio,
  Input,
} from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const useStyles = makeStyles({
  fieldcontainer: {
    height: "100%",
  },
});

export default function AppointmentInput(props) {
  const { register, control, setValue } = useFormContext();
  const classes = useStyles();
  const handleFormFieldChange = (e) => {
    if (e.target.value === "" || null) {
      setValue(`${props.name}[${props.fieldindex}].checked]`, false);
    } else {
      setValue(`${props.name}[${props.fieldindex}].checked]`, true);
    }
  };

  switch (props.type) {
    case "TextInput":
      return (
        <TextField
          inputRef={register()}
          fullWidth
          className={classes.input}
          defaultValue={props.value}
          variant={`outlined`}
          placeholder={`Please enter your findings for the '${props.label}' field here`}
          onChange={(e) => handleFormFieldChange(e)}
          name={`${props.name}[${props.fieldindex}].value]`}
        />
      );
    case "textarea":
      return (
        <TextField
          inputRef={register()}
          multiline
          fullWidth
          className={classes.fieldcontainer}
          placeholder={`Please enter your findings for the '${props.label}' field here`}
          variant={`outlined`}
          defaultValue={props.value}
          onChange={(e) => handleFormFieldChange(e)}
          rows={3}
          name={`${props.name}[${props.fieldindex}].value]`}
        />
      );
    default:
      return (
        <Typography>Sorry we don't recognize that field input type.</Typography>
      );
  }
}

/*
onChange={(e) => setValue(`appointmentform[${props.fieldindex}].checked]`, true)}
 */
