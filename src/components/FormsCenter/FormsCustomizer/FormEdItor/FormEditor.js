import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../basestyledcomponents/Button";
import Card from "../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import { TextField } from "formik-material-ui";
import FormFields from "./FormFields/FormFields";
import { useParams, useRouteMatch, NavLink } from "react-router-dom";
import { updateForm, fetchForm } from "../../../../api/forms.api";
import EditorInput from "./EditorInput/EditorInput";

const useStyles = makeStyles({
  builderroot: {
    border: 1,
    borderColor: "black",
    padding: "10px",
    // backgroundColor: 'lightgrey'
  },
  addfieldcontainer: {
    backgroundColor: "white",
    padding: "10px",
  },
  addfielditem: {
    padding: "10px",
    flexGrow: 2,
  },
  formTitle: {
    padding: "15px",
  },
  formTypeSelectContainer: {
    marginTop: "5px",
  },
});

export default function FormEditor(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  let { formId } = useParams();
  const formtitle = useSelector(
    (state) => state.formsmanager.newform.newformtitle
  );
  const formtype = useSelector(
    (state) => state.formsmanager.newform.newformtype
  );
  const customfields = useSelector(
    (state) => state.formsmanager.newform.newformfields
  );
  const defaultValues = {
    form_title: formtitle,
    form_type: formtype,
    customformfields: [],
    new_checkbox_field: "",
    new_field: {
      type: "",
      label: "",
    },
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={defaultValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ props }) => (
          <Form>
            <Grid container direction={`column`}>
              <Grid item>
                <Card>
                  <CardHeader>
                    <Grid container justify={`flex-end`}>
                      <Grid item>
                        <Typography variant="h2">
                          MAKE SURE FORM IS SAVED BEFORE PREVIEWING
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button color={`primary`} onClick={props.handleSubmit}>
                          Save Form
                        </Button>
                      </Grid>
                      <Grid item>
                        <NavLink to={`/formscenter/${formId}/preview/`}>
                          <Button color={`primary`}>Preview Form</Button>
                        </NavLink>
                      </Grid>
                    </Grid>
                  </CardHeader>
                  <CardBody>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          component={TextField}
                          name={`form_title`}
                          fullWidth
                        />
                      </Grid>
                      <Grid item>
                        <Typography>{formtype}</Typography>
                      </Grid>
                    </Grid>
                  </CardBody>
                </Card>
              </Grid>
              <Grid item>
                <FormFields
                  customfields={props.fields}
                  handleDeleteFIeld={props.handleDeleteFIeld}
                />
              </Grid>
              <Grid item>
                <EditorInput
                  methods={props.methods}
                  handleAddField={props.handleAddField}
                  append={props.append}
                />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}
