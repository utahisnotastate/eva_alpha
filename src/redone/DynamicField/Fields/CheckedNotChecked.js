import React from "react";
import { Typography } from "@mui/material";

export default function CheckedNotChecked({ touched }) {
  return <Typography>{touched ? "Checked" : "Not Checked"}</Typography>;
}
