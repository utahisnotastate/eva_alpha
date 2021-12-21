import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { useFormikContext, Field } from "formik";
import { TextField } from "formik-mui";

const useStyles = makeStyles({
  fieldrow: {
    display: "flex",
  },
});
export default function FormHeader(props) {
  return (
    <Field
      name="title"
      label={`Title`}
      component={TextField}
      variant="standard"
      fullWidth
    />
  );
}
