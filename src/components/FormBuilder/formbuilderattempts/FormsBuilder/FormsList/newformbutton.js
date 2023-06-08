import React from "react";
import { Button } from "@mui/material";
export default function NewFormButton({ displaytext }) {
  return (
    <Button variant={`contained`} fullWidth>
      {displaytext}
    </Button>
  );
}
