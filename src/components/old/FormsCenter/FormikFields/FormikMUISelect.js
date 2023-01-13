import React from "react";
import { Field } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { Select } from "formik-material-ui";

export default function FormikMUISelectField(props) {
  return (
    <FormControl>
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <Field component={Select} name={props.name}>
        <MenuItem value="">
          {props.selecttext ? (
            <Typography>{`${props.selecttext}`}</Typography>
          ) : null}
        </MenuItem>
        {props.options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  );
}
