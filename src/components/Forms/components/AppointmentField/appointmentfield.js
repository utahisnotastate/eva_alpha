import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import {
  TextField,
  Typography,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Switch,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppointmentInput from "./AppointmentInputs/AppointmentInput";

const useStyles = makeStyles({
  basecontainer: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  label: {
    textAlign: "center",
  },
  fieldcontainer: {
    flex: 1,
  },
});

export default function AppointmentField(props) {
  const { register, setValue } = useFormContext();
  const classes = useStyles();
  const [fieldchecked, setFieldChecked] = useState("");
  const fieldname = props.fieldname || "customformfields";
  console.log(fieldname);

  const setAdditionalInfoToNull = (name) => {
    setValue(name, null);
  };
  const handleChange = (checked) => {
    //return setValue(`${fieldname}[${props.fieldindex}]['checked']`, checked);
    return checked;
    //console.log("hello!");
  };
  return (
    <Grid container direction="row" className={classes.basecontainer}>
      <Grid item xs={3}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography variant={`h6`}>{props.label}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row">
              <Grid item xs={4}>
                <Typography>Not Checked</Typography>
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name={`${fieldname}[${props.fieldindex}]["checked"]`}
                  defaultValue={false}
                  render={({ onChange, onBlur, name, value }) => (
                    <Switch
                      checked={value}
                      color="primary"
                      inputRef={register()}
                      onChange={(e) => onChange(handleChange(e.target.checked))}
                      name={`${fieldname}[${props.fieldindex}]['checked']`}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Checked</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column" className={classes.fieldcontainer}>
          <Grid item xs={12}>
            <AppointmentInput
              value={props.value}
              fieldindex={props.fieldindex}
              type={props.type}
              label={props.label}
              name={`${fieldname}[${props.fieldindex}]`}
              choices={props.choices}
            />
          </Grid>
          {props.type === "textarea" ? null : (
            <Grid item xs={12}>
              <Grid container direction="column">
                <Grid item>
                  <Typography>Additional Notes about this field</Typography>
                </Grid>
                <Grid item>
                  <TextField
                    variant={`outlined`}
                    fullWidth
                    inputRef={register()}
                    multiline
                    defaultValue={props.additionalInformation}
                    name={`${fieldname}[${props.fieldindex}].additionalInformation`}
                    placeholder={`Enter in any additional notes about the above field. ONLY leave notes about findings for this specfic field.`}
                    rows={3}
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <input
          type={`hidden`}
          ref={register()}
          value={props.label}
          name={`${fieldname}[${props.fieldindex}].label`}
        />
      </Grid>
    </Grid>
  );
}

/*
onChange={(e) => onChange(e.target.checked)}
<Controller
                  name={`appointmentform[${props.fieldindex}].checked]`}
                  defaultValue={props.fieldchecked}
                  render={({ onChange, onBlur, name, value }) => (
                    <Switch
                      checked={value}
                      color="primary"
                      onChange={(e) => onChange(e.target.checked)}
                      name={name}
                    />
                  )}
                />



                <TextField
                    variant={`outlined`}
                    fullWidth
                    inputRef={register()}
                    multiline
                    defaultValue={props.additionalInformation}
                    name={`appointmentform[${props.fieldindex}].additionalInformation]`}
                    placeholder={`Enter in any additional notes about the above field. ONLY leave notes about findings for this specfic field.`}
                    rows={3}
                  />
 */
