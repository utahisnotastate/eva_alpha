import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import FormEditor from "./formeditor";
import "./styles.css";

const fields = [
  { label: "Label 1", type: "text", placeholder: "", helperText: "" },
  { label: "Label 2", type: "textarea", placeholder: "", helperText: "" },
  {
    label: "Label 3",
    type: "select",
    options: [
      { label: "Option Label 1" },
      { label: "Option Label 2" },
      { label: "Option Label 3" }
    ]
  }
];

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <FormEditor title={`Test Exam`} fields={fields} />
    </StyledEngineProvider>
  </React.StrictMode>
);
