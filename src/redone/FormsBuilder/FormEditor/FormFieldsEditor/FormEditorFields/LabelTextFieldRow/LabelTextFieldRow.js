import React from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";

export default function LabelTextFieldRow({ label, name, index }) {
  return (
    <Field
      component={TextField}
      fullWidth
      label={label}
      name={`${name}.${index}.label`}
      variant="standard"
    />
  );
}
