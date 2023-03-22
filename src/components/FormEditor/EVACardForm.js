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

export default function EVACardForm(props) {
  const { title } = props;
  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardHeader
        title={title}
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
      <CardContent>
        <Formik
          initialValues={{ fields: [] }}
          enableReinitialize
          onSubmit={(values) => {
            console.log(values);
          }}>
          {(formikProps) => (
            <Form>
               <FieldArray name=`fields`}>
               {({ move, swap, remove, push, insert, unshift, pop, form }) => {

               }}
               </FieldArray>
              <FieldArray name={`fields`} formikProps={formikProps} />
            </Form>
          )}
        </Formik>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "row" }}>
        <Button>Test</Button>
      </CardActions>
    </Card>
  );
}
