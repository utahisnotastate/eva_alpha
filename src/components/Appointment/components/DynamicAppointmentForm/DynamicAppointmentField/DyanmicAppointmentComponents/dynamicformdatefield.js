import React from "react";
import { Field } from "formik";
import { TextField, Typography } from "@material-ui/core";

export default function DynamicFormDateField(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        gap: "5px",
      }}
    >
      <Typography>{props.label}:</Typography>
      <Field
        component={TextField}
        type={`date`}
        fullWidth
        name={`${props.formname}.${props.index}.${props.fieldname}`}
      />
    </div>
  );
}
