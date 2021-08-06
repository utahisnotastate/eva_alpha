import React from "react";
import { Field } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Select } from "formik-material-ui";

export default function FormikMUISelectField(props) {
  return (
    <FormControl>
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <Field component={Select} name={props.name}>
        {props.options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  );
}
