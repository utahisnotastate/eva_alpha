import React from "react";
import { FormControlLabel, Radio, LinearProgress } from "@mui/material";
import { Field } from "formik";
import { RadioGroup } from "formik-mui";

export default function DynamicRadioGroup({ options, label, name }) {
  return (
    <Field component={RadioGroup} label={label}>
      {options && options.length > 0
        ? options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Radio />}
              value={option.label}
              label={option.label}
            />
          ))
        : null}
    </Field>
  );
}

/*{
  options && options.length > 0
    ? options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={<Radio />}
          label={option.label}
        />
      ))
    : null;
}*/
