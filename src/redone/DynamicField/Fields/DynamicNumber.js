import React from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";

export default function DynamicNumberField({ label }) {
  return (
    <Field
      name="number_field"
      label={label}
      component={TextField}
      type={"number"}
      variant="standard"
      fullWidth
    />
  );
}