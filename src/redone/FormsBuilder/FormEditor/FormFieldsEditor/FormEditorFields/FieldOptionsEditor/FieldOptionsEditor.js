import React, { useState, useCallback } from "react";
import { Typography, Button, TextField as MUITextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
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
const useStyles = makeStyles((theme) => ({
  newchoice: {
    marginTop: theme.spacing(2),
    border: "1px solid #000",
    padding: theme.spacing(1),
  },
  optionrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
}));

function FieldOptionsEditor({ options, label, name }) {
  const classes = useStyles();
  const [newChoice, setNewChoice] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          <Typography>Edit Choices for {label}</Typography>
          <Stack spacing={2}>
            {options && options.length > 0
              ? options.map((option, index) => (
                  <div key={index} className={classes.optionrow}>
                    <Field
                      name={`${name}.${index}.label`}
                      component={TextField}
                      fullWidth
                      type={`text`}
                      variant={`standard`}
                    />
                    <Button
                      onClick={() => arrayHelpers.remove(index)}
                      variant="contained"
                      color="secondary"
                    >
                      X
                    </Button>
                  </div>
                ))
              : null}
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            className={classes.newchoice}
          >
            <MUITextField
              name={`${name}.new_choice`}
              value={newChoice}
              onChange={(e) => setNewChoice(e.target.value)}
              fullWidth
              type={`text`}
              label={`Add New Choice`}
              variant={`standard`}
            />
            <Button
              variant={`contained`}
              onClick={() => {
                arrayHelpers.push({ label: newChoice });
                setNewChoice("");
              }}
            >
              Add Choice
            </Button>
          </Stack>
        </div>
      )}
    />
  );
}
export default React.memo(FieldOptionsEditor);
/*
<Stack spacing={2}></Stack>
 */
