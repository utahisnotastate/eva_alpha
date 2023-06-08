import * as React from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import { Formik, Form, FieldArray, useFormikContext, Field } from "formik";
import Fields from "./fields";
import AddFieldButton from "./addfieldbutton";

export default function FieldsEditor({ formikProps }) {
  return (
    <>
      <CardContent>
        <Fields name={`fields`} formikProps={formikProps} />
      </CardContent>
      <CardActions style={{ display: "flex", flexDirection: "row" }}>
        <AddFieldButton
          formikProps={formikProps}
          blankitem={{
            label: "",
            type: "number",
            placeholder: "",
            helperText: ""
          }}
          buttontext={`Number`}
        />
        <AddFieldButton
          formikProps={formikProps}
          blankitem={{
            label: "",
            type: "select",
            options: [{ label: "" }],
            placeholder: "",
            helperText: ""
          }}
          buttontext={`Select`}
        />
        <AddFieldButton
          formikProps={formikProps}
          blankitem={{
            label: "",
            type: "range",
            placeholder: "",
            helperText: ""
          }}
          buttontext={`Range`}
        />
      </CardActions>
    </>
  );
}
