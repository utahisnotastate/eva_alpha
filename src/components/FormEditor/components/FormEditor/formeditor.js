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
import Fields from "../../fields";
import AddFieldButton from "../../addfieldbutton";
import EVAFormFieldsPreview from "../../EVAFormFieldsPreview";
import FormEditorHeader from "./formeditor.header";
import { useTheme } from "@mui/material/styles";
import EVASelectField from "../../EVASelectField";

export default function FormEditor({ title, fields }) {
  const theme = useTheme();
  const testfield = {
    label: "Label 3",
    type: "select",
    options: [
      { label: "Option Label 1" },
      { label: "Option Label 2" },
      { label: "Option Label 3" }
    ]
  };
  const [view, setView] = React.useState("edit");
  const inputs = [
    {
      buttontext: "Text",
      blankitem: {
        label: "",
        type: "text",
        placeholder: "",
        helperText: ""
      }
    },
    {
      buttontext: "Text",
      blankitem: {
        label: "",
        type: "number",
        placeholder: "",
        helperText: ""
      }
    },
    {
      buttontext: "Select",
      blankitem: {
        label: "",
        type: "select",
        options: [{ label: "" }],
        placeholder: "",
        helperText: ""
      }
    },
    {
      buttontext: "Range",
      blankitem: {
        label: "",
        type: "range",
        placeholder: "",
        helperText: ""
      }
    }
  ];
  return (
    <Formik
      initialValues={{ fields, select: [] }}
      enableReinitialize
      onSubmit={(values) => {
        console.log(values);
      }}>
      {(formikProps) => (
        <Card sx={{ boxShadow: 3 }}>
          <FormEditorHeader setView={setView} />
          <CardContent>
            <Form>
              {view === "edit" ? (
                <Fields name={`fields`} view={view} />
              ) : (
                <EVAFormFieldsPreview name={`fields`} />
              )}
            </Form>
          </CardContent>
          <CardActions sx={{ display: "flex", flexDirection: "column" }}>
            <div>
              {view === "edit"
                ? inputs.map((input, index) => (
                    <AddFieldButton
                      key={index}
                      formikProps={formikProps}
                      blankitem={input.blankitem}
                      buttontext={input.buttontext}
                    />
                  ))
                : null}
              {view === "edit" ? <input type="submit" /> : null}
            </div>
          </CardActions>
        </Card>
      )}
    </Formik>
  );
}
/* 
 <Card sx={{ boxShadow: 3 }}>
          <CardHeader
            title={title}
            sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
            action={
              <ButtonGroup>
                <Button
                  variant="outlined"
                  sx={{ color: "primary.contrastText" }}
                  onClick={() => setView("edit")}>
                  Edit
                </Button>
                <Button
                  sx={{ color: "primary.contrastText" }}
                  variant="outlined"
                  onClick={() => setView("preview")}>
                  Preview
                </Button>
                <Button
                  sx={{ color: "primary.contrastText" }}
                  variant="outlined"
                  onClick={() => setView("preview")}>
                  Save
                </Button>
              </ButtonGroup>
            }
          />
          <CardContent>
            <Form>
              {view === "edit" ? (
                <Fields name={`fields`} view={view} />
              ) : (
                <EVAFormFieldsPreview name={`fields`} />
              )}
            </Form>
          </CardContent>
          <CardActions sx={{ display: "flex", flexDirection: "row" }}>
            {view === "edit"
              ? inputs.map((input, index) => (
                  <AddFieldButton
                    key={index}
                    formikProps={formikProps}
                    blankitem={input.blankitem}
                    buttontext={input.buttontext}
                  />
                ))
              : null}
            {view === "edit" ? <input type="submit" /> : null}
          </CardActions>
        </Card>



<AddFieldButton
                formikProps={formikProps}
                blankitem={{
                  label: "",
                  type: "text",
                  placeholder: "",
                  helperText: ""
                }}
                buttontext={`Text`}
              />
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

<Button
                  onClick={() =>
                    handleAddFieldToForm(
                      formikProps.values.fields,
                      formikProps.setFieldValue,
                      {
                        label: "",
                        type: "number",
                        placeholder: "",
                        helperText: ""
                      }
                    )
                  }>
                  Add New Number Field
                </Button>
                <Button
                onClick={() =>
                  handleAddFieldToForm(
                    formikProps.values.fields,
                    formikProps.setFieldValue,
                    {
                      label: "",
                      type: "select",
                      placeholder: "",
                      helperText: ""
                    }
                  )
                }
                >Add New Select Field</Button>
                <Button
                onClick={() =>
                  handleAddFieldToForm(
                    formikProps.values.fields,
                    formikProps.setFieldValue,
                    {
                      label: "",
                      type: "range",
                      placeholder: "",
                      helperText: ""
                    }
                  )
                }
                >Add New Range Field</Button>


<Formik
          initialValues={{ fields }}
          enableReinitialize
          onSubmit={async (values) => {
            console.log(values);
          }}>
          {(formikProps) => (
            <Form>
              <FieldArray name={name}>
                {({ move, swap, remove, push, insert, unshift, pop, form }) => {
                  return (
                    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                      {form.values.fields && form.values.fields.length > 0
                        ? form.values.fields.map((field, index) => (
                            <ListItem
                              key={index}
                              sx={{
                                display: "flex",
                                flexDirection: "column"
                              }}
                              divider
                              secondaryAction={
                                <IconButton
                                  edge="end"
                                  aria-label="delete"
                                  onClick={() => remove(index)}>
                                  <DeleteIcon />
                                </IconButton>
                              }>
                              <ListItemText
                                sx={{ width: "100%" }}
                                primary={
                                  <Field
                                    component={TextField}
                                    name={`fields.${index}.label`}
                                    label={`Label`}
                                    margin={`normal`}
                                    fullWidth
                                  />
                                }
                              />
                              <ListItemText
                                sx={{ width: "100%" }}
                                primary={
                                  <Field
                                    label={`Placeholder`}
                                    margin={`normal`}
                                    component={TextField}
                                    name={`fields.${index}.placeholder`}
                                    fullWidth
                                  />
                                }
                              />
                            </ListItem>
                          ))
                        : null}
                    </List>
                  );
                }}
              </FieldArray>
            </Form>
          )}
        </Formik>


*/
/* 
<List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem
            sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            divider
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemText
              primary={<Typography variant="body1">Label</Typography>}
              secondary={
                <React.Fragment>
                  <input type="text" placeholder={`Placeholder`} />
                </React.Fragment>
              }
            />
            <ListItemText
              primary={<Typography variant="body1">Placeholder</Typography>}
              secondary={
                <React.Fragment>
                  <input type="text" placeholder={`Placeholder`} />
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start" divider>
            <ListItemText
              primary="Summer BBQ"
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          
          
        </List>

*/
