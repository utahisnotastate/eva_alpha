import React from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";

export default function DynamicTextField({ label, name, index, test }) {
  console.log(name);
  return (
    <Field
      name={name}
      label={label}
      component={TextField}
      variant="standard"
      fullWidth
    />
  );
}
/*
InputProps={{ notched: true }}
 */
