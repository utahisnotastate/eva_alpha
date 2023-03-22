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
import EVAFormFieldsPreview from "./EVAFormFieldsPreview";
import { useTheme } from "@mui/material/styles";
import EVACardForm from "./EVACardForm";

const FormFields = ({ form, name, push }) => {
  return (
    <div>
      {form.values[name].map((friend, index) => (
        <Field key={index} name={`${name}.${index}`} />
      ))}
    </div>
  );
};

export default function FormEditor({ title }) {
  const theme = useTheme();
  return (
    <EVACardForm
      title={title}
      sx={{ display: "flex", flexDirection: "column" }}>
      <p>Test</p>
    </EVACardForm>
  );
}
