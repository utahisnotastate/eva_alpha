import React, { useState, useEffect, Fragment } from "react";
import _ from "lodash";
import { Prompt } from "react-router-dom";
import {
  useForm,
  FormContext,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";
import AppointmentFormFieldContainer from "./AppointmentFormComponents/appointmentformfieldcontainer.js";
import AppointmentFormField from "./AppointmentFormComponents/appointmentformfield.js";
import {
  updateAppointmentForm,
  getAppointmentForm,
} from "../../../../api/appointment.api.js";
import { fetchForm } from "../../../../api/forms.api.js";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    margin: "15px",
  },
});

export default function FormTemplate(props) {
  const dispatch = useDispatch();
  const appointmentformdetails = useSelector(
    (state) =>
      state.appointment.activeappointmentform.activeAppointmentFormDetails
  );
  const appointmentformfields = useSelector(
    (state) =>
      state.appointment.activeappointmentform.activeAppointmentFormFields
  );
  const masteractiveappointmentformfields = useSelector(
    (state) =>
      state.appointment.activeappointmentform.masteractiveappointmentformfields
  );
  const methods = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    // console.log( 'Dirty FIelds are ' + JSON.stringify(methods.formState.dirtyFields));
    Object.keys(data).forEach((field) => {
      data[field].checked = !!methods.formState.dirtyFields[field];
      data[field].type = masteractiveappointmentformfields[field].type;
      data[field].label = masteractiveappointmentformfields[field].label;
    });
    console.log(data);
    let appointmentform = {
      id: appointmentformdetails.id,
      title: appointmentformdetails.title,
      form_type: appointmentformdetails.form_type,
      form: data,
    };
    // console.log('appointment Id is ' + props.appointmentId);
    // console.log( 'appointment form is ' +  JSON.stringify(appointmentform));

    updateAppointmentForm(props.appointmentId, appointmentform).catch((error) =>
      console.log(error)
    );
  };
  // console.log('form fields are ' + JSON.stringify(formfields));
  useEffect(() => {
    getAppointmentForm(props.appointmentId, props.formId)
      .then((response) => {
        // console.log( 'Get appointment form respoinse is ' + JSON.stringify(response));
        dispatch({ type: "load_active_form", form: response });
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetchForm(props.formId).then((response) => {
      dispatch({
        type: "set_master_active_appointment_form_fields",
        form: response.form,
      });
    });
  }, []);

  // console.log('Appointment form is ' + JSON.stringify(appointmentform.form))

  return (
    <Fragment>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {Object.keys(appointmentformfields).map((field) => (
            <div key={field}>
              <AppointmentFormFieldContainer
                name={field}
                fieldprops={appointmentformfields[field]}
              />
            </div>
          ))}
          <input type="submit" value="Save" />
        </form>
      </FormProvider>
      <DevTool control={methods.control} />
    </Fragment>
  );
}
/*
<form onSubmit={methods.handleSubmit(onSubmit)}>

                {Object.keys(appointmentform.form).map(field => (
                    <div key={field}>
                        <AppointmentFormFieldContainer name={field} fieldprops={appointmentform.form[field]}/>
                    </div>
                ))}
                <input type="submit" value="Save"/>
            </form>

<Prompt
                    when={methods.formState.isDirty}
                    message={() => 'If you want to navigate without saving, hit OK. Otherwise hit cancel and save the form before navigating away.'}
                />
{Object.keys(appointmentForm).map(field => {
                    return (
                        <AppointmentFormField name={field} />
                    )
                })}
{Object.keys(props.form.form).forEach(field => (
                <Grid className={classes.root} container direction={`column`}>
                    <Grid item xs={2}>
                        <Grid container direction={`column`}>
                            <Grid item>
                                <Typography>{field}</Typography>
                            </Grid>
                            <Grid item>
                                <Controller
                                    as={Switch}
                                    type="checkbox"
                                    name={`switch`}
                                    control={control}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container direction={`column`} justify="center">
                            <Typography>Input goes here</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
<Grid className={classes.root} container direction={`column`}>
                <Grid item xs={2}>
                    <Grid container direction={`column`}>
                        <Grid item>
                            <Typography>Label</Typography>
                        </Grid>
                        <Grid item>
                            <Controller
                                as={Switch}
                                type="checkbox"
                                name={`switch`}
                                control={control}
                                />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction={`column`} justify="center">
                        <Typography>Input goes here</Typography>
                    </Grid>
                </Grid>
            </Grid>
 */
