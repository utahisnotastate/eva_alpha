import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function FormEditorHeader({ title, setView }) {
  return (
    <CardHeader
      sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      action={
        <ButtonGroup>
          <Button variant="outlined" sx={{ color: "primary.contrastText" }}>
            Edit
          </Button>
          <Button sx={{ color: "primary.contrastText" }} variant="outlined">
            Preview
          </Button>
          <Button sx={{ color: "primary.contrastText" }} variant="outlined">
            Save
          </Button>
        </ButtonGroup>
      }
    />
  );
}
