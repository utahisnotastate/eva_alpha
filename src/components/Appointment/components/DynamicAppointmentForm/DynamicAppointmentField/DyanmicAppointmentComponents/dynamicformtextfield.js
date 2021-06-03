import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";

export default function DynamicFormTextField(props) {
  return (
    <Field
      name={`${props.formname}.${props.index}.${props.fieldname}`}
      as={TextField}
      label={props.label}
      fullWidth={!!props.fullWidth}
      multiline={!!props.multiline}
      rows={props.multiline ? 5 : null}
      variant={`outlined`}
    />
  );
}
