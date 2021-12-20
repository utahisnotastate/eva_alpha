import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import DynamicField from "../../../../../DynamicField/DynamicField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function EditFieldPreview({ label, type, options, index }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography>Preview</Typography>
      </div>

      <div>
        <DynamicField label={label} type={type} options={options} />
      </div>
    </div>
  );
}
