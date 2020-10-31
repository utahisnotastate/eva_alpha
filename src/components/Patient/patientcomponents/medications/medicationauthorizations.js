import React, { useEffect, useState } from "react";
import { Grid, Typography, Checkbox, TextField } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

export default function MedicationAuthorizations(props) {
  const columns = [
    "Authorized",
    "Authorization Number",
    "Contact Method",
    "Authorized On",
    "Date of Next Authorization",
    "Obtained By",
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  return (
    <Grid container direction="column">
      <Grid item>
        <MUIDataTable
          title={"Authorization History"}
          data={data}
          columns={columns}
        />
      </Grid>
    </Grid>
  );
}
