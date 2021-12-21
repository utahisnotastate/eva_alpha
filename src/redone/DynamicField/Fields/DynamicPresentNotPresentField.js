import React from "react";
import { Field } from "formik";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "formik-mui";

export default function DynamicPresentNotPresentField({ label }) {
  return (
    <Field
      InputLabelProps={{
        shrink: true,
      }}
      component={TextField}
      fullWidth
      label={label}
      margin="normal"
      name="present_not_present"
      defaultValue="unchecked"
      select
      type="text"
      variant="standard"
    >
      <MenuItem key={`unchecked`} value={`unchecked`}>
        Unchecked
      </MenuItem>
      <MenuItem key={`present`} value={`present`}>
        Present
      </MenuItem>
      <MenuItem key={`not_present`} value={`not_present`}>
        Not Present
      </MenuItem>
    </Field>
  );
}

/*
{ranges.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
 */
