import React from "react";
import Card from "@mui/material/Card";
import { Field } from "formik";
import { CardActions, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import DynamicTextField from "../../../../DynamicField/Fields/DynamicTextField";
import DynamicField from "../../../../DynamicField/DynamicField";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: "1rem",
  },
}));

export default function EditField({ type, label, choices, index }) {
  const classes = useStyles();

  return (
    <Card variant={`outlined`}>
      <CardContent className={classes.row}>
        <Typography>Label</Typography>
        <DynamicTextField label={label} />
      </CardContent>
      <CardActions>
        <Typography>Preview</Typography>
      </CardActions>
    </Card>
  );
}
/*
<DynamicField
          type={type}
          options={choices ? choices : []}
          label={label}
          index={index}
        />
 */
