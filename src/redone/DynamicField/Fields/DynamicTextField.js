import React from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";

export default function DynamicTextField({ label }) {
  return (
    <Field
      name="text"
      label={label}
      component={TextField}
      variant="outlined"
      fullWidth
    />
  );
}
/*
InputProps={{ notched: true }}
 */
