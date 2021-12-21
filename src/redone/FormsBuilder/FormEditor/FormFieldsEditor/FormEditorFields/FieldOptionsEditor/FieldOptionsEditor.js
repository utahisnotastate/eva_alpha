import React from "react";
import {
  FormControlLabel,
  Radio,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Field, useFormikContext, FieldArray } from "formik";
import { TextField } from "formik-mui";

import Stack from "@mui/material/Stack";

/*
{
    "type": "radio",
    "label": "Extremity Issues",
    "choices": [
    {
        "label": "Poor Rotation"
    },
    {
        "label": "Pain on exertion"
    },
    {
        "label": "Discolored Skin"
    }
],
    "new_choice": ""
}
*/

export default function FieldOptionsEditor({ options, label, name }) {
  const { values, setFieldValue } = useFormikContext();

  console.log(`${name}`);
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          <Typography variant="h6">Choices</Typography>
          <Stack spacing={2}>
            {options && options.length > 0
              ? options.map((option, index) => (
                  <div key={index}>
                    <Field
                      name={`${name}.${index}.label`}
                      component={TextField}
                      fullWidth
                      type={`text`}
                      variant={`standard`}
                    />
                  </div>
                ))
              : null}
          </Stack>

          <Typography>Add Choice</Typography>
        </div>
      )}
    />
  );
}

/*
<Stack spacing={2}></Stack>
 */
