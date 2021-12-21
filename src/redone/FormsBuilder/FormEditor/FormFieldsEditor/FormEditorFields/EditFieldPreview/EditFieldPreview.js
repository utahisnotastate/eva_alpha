import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@mui/material";
import DynamicField from "../../../../../DynamicField/DynamicField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
  },
  row: {
    width: "100%",
  },
}));

export default function EditFieldPreview({ label, type, options, index }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography>Field Preview</Typography>
        <Divider />
      </div>
      <div>
        <DynamicField label={label} type={type} options={options} />
      </div>
    </div>
  );
}
