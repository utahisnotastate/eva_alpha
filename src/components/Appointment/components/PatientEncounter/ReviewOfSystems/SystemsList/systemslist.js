import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import SystemItem from "./SystemItem";

export default function SystemsList({ system }) {
  return (
    <Grid item>
      <Typography>{system.name}</Typography>
      <>
        {system.fields && system.fields.length > 0 ? (
          system.fields.map((system, index) => {
            return <SystemItem key={index} system={system} />;
          })
        ) : (
          <Typography>No fields</Typography>
        )}
      </>
    </Grid>
  );
}
