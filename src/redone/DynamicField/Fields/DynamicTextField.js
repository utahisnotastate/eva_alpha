import React from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";

export default function DynamicTextField({ label, multiline }) {
  return (
    <Field
      component={TextField}
      label={label}
      name="outlined"
      variant="standard"
      InputProps={{ notched: true }}
    />
  );
}
