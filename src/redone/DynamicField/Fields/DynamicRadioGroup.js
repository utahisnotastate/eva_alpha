import React from "react";
import { FormControlLabel, Radio, LinearProgress } from "@mui/material";
import { Field } from "formik";
import { RadioGroup } from "formik-mui";

export default function DynamicRadioGroup(props) {
  return (
    <Field component={RadioGroup} name={props.name}>
      {props.options && props.options.length > 0
        ? props.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))
        : null}
    </Field>
  );
}
