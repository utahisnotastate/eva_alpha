import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";

export default function SystemItem({ fields }) {
  return (
    <Grid container direction={`column`}>
      <Grid item>
        <Typography variant="h6">Label</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Choices</Typography>
      </Grid>
    </Grid>
  );
}
