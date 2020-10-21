import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { DevTool } from "@hookform/devtools";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import SingleField from "./singlefield";
import AppointmentField from "../../Forms/components/AppointmentField/appointmentfield";
import {
  useForm,
  Controller,
  FormContext,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
const handleFormSave = (formData) => {
  console.log(formData);
};
export default function FormGenerator(props) {
  const methods = useForm();
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSave)}>
          <Grid container direction={`column`}>
            <Grid item>
              {props.fields.length > 0 ? (
                props.fields.map((field, index) => (
                  <div key={field.id}>
                    <AppointmentField
                      label={field.label}
                      type={field.type}
                      fieldindex={index}
                      value={null}
                      choices={field.choices}
                      fieldchecked={false}
                      additionalInformation={field.additionalInformation}
                    />
                  </div>
                ))
              ) : (
                <Typography>Add fields to show a preview!</Typography>
              )}
            </Grid>
            <Grid item>
              <input type="submit" />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <DevTool control={methods.control} />
    </div>
  );
}

/*
<SingleField field={field} fieldindex={index} />
{Object.keys(props.formfields).map(field => {
                return (
                    <SingleField label={props.formfields[field].label} type={props.formfields[field].type} checked={false} />
                );
            })}
 */
