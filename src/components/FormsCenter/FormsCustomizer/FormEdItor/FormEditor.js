import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { TextField } from "formik-material-ui";
import { useParams, useRouteMatch, NavLink } from "react-router-dom";
import Button from "../../../basestyledcomponents/Button";
import Card from "../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import FormFields from "./FormFields/FormFields";
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
/*

 */

export default function FormEditor(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  // let { path, url } = useRouteMatch();
  const { formId } = useParams();
  const formtitle = useSelector(
    (state) => state.formsmanager.newform.newformtitle
  );
  const formtype = useSelector(
    (state) => state.formsmanager.newform.newformtype
  );
  const customfields = useSelector(
    (state) => state.formsmanager.newform.newformfields
  );
  /* const defaultValues = {
    form_title: formtitle,
    form_type: formtype,
    customformfields: [],
    new_checkbox_field: "",
    new_field: {
      type: "",
      label: "",
    },
  }; */

  const defaultValues = {
    id: formId,
    title: "Test Form TItle",
    type: "review_of_systems",
    fields: [],
    new_checkbox_field: "",
    new_field: {
      type: "",
      label: "",
    },
  };

  async function handleSubmit(values) {
    console.log(values);
  }
  function dispatchFormDetailsToStore(formdetails) {
    dispatch({ type: "update_form_title", newtitle: formdetails.title });
    if (formdetails.form) {
      dispatch({ type: "load_form_fields", newformfields: formdetails.form });
    } else {
      dispatch({ type: "load_form_fields", newformfields: {} });
    }
  }

  useEffect(() => {
    async function getFormDetailsFromServer(id) {
      const form = await fetchForm(id);
      console.log(`form response is: ${JSON.stringify(form)}`);
      // dispatchFormDetailsToStore(form);
    }
    getFormDetailsFromServer(formId);
  }, [formId]);
  return (
    <Formik
      enableReinitialize
      initialValues={defaultValues}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Grid container direction="column">
            <Grid item>
              <Card>
                <CardHeader>
                  <Grid container>
                    <Grid item>
                      <Typography>
                        MAKE SURE FORM IS SAVED BEFORE PREVIEWING
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button color="primary" onClick={handleSubmit}>
                        Save Form
                      </Button>
                    </Grid>
                    <Grid item>
                      <NavLink to={`/formscenter/${formId}/preview/`}>
                        <Button color="primary">Preview Form</Button>
                      </NavLink>
                    </Grid>
                  </Grid>
                </CardHeader>
                <CardBody>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        component={TextField}
                        fullWidth
                        name="form_title"
                      />
                    </Grid>
                    <Grid item>
                      <Typography>review_of_systems</Typography>
                    </Grid>
                  </Grid>
                </CardBody>
              </Card>
            </Grid>
            <Grid item>
              <Typography>Placeholder for Form Fields</Typography>
            </Grid>
            <Grid item>
              <Typography>Placeholder for Form Editor Input</Typography>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

/*
<FormFields
                customfields={props.fields}
                handleDeleteFIeld={props.handleDeleteFIeld}
              />


<EditorInput
                append={props.append}
                handleAddField={props.handleAddField}
                methods={props.methods}
              />
 */

/*
<Formik initialValues={defaultValues} onSubmit={handleSubmit}>
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
                      <Button color={`primary`} onClick={handleSubmit}>
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
                        fullWidth
                        name={`form_title`}
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



 */

/*
    fetchForm(formId).then((response) => {
      //setFormTitle(response.title);
      // dispatch({type: 'update_form_title', newtitle: response.title})
      dispatch({ type: "update_form_type", newtype: response.form_type });
      if (response.form) {
        dispatch({ type: "load_form_fields", newformfields: response.form });
      } else {
        dispatch({ type: "load_form_fields", newformfields: {} });
      }
      // dispatch({type: 'load_form_fields', newformfields: response.form })
    });
 */
