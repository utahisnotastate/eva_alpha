import React, { useEffect, useState } from "react";
import { Grid, Typography, Checkbox, TextField } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Button from "../../../basestyledcomponents/Table/Button";

export default function ResolvedDiagnoses(props) {
  const columns = [
    { label: "ICD Code", name: "diagnosis_icd_code" },
    { label: "ICD Description", name: "diagnosis_description" },
    {
      name: "id",
      label: "Reactivate Diagnoses",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.setDiagnosisActive(value)}
            >
              Reactive Dx
            </Button>
          </div>
        ),
      },
    },
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test orp", "Dallas", "TX"],
  ];

  return (
    <Grid container direction="column">
      <Grid item>
        <MUIDataTable
          title={"Resolved Diagnoses"}
          data={props.resolveddiagnoses}
          columns={columns}
        />
      </Grid>
    </Grid>
  );
}