import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import { useFormikContext, Field } from "formik";
import { TextField } from "formik-mui";

const useStyles = makeStyles({
  fieldrow: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
});
export default function FormHeader(props) {
  const classes = useStyles();
  return (
    <div className={classes.fieldrow}>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Preview
        </Button>
      </div>
      <Field
        name="title"
        label={`Title`}
        component={TextField}
        variant="standard"
        fullWidth
      />
    </div>
  );
}
