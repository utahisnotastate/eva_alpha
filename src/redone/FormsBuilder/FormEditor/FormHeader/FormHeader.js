import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { useFormikContext, Field } from "formik";

const useStyles = makeStyles({
  fieldrow: {
    display: "flex",
  },
});
export default function FormHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.fieldrow}>
      <Typography>Title</Typography>
      <Field name={"title"} placeholder={`Enter Title for form`} />
    </div>
  );
}
