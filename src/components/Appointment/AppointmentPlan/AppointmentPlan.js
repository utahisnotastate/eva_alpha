import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { getAppointmentBasicDetails } from "../../../api/appointment.api";
import {
  useForm,
  FormProvider,
  useFormContext,
  useFieldArray,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

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

export default function AppointmentPlan() {
  let { id } = useParams();
  const plans = useSelector((state) => state.appointment.appointmentfindings);
  const methods = useForm();
  const {
    register,
    errors,
    handleSubmit,
    setValue,
    control,
    watch,
    getValues,
  } = useForm({
    defaultValues: {
      plans: plans,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    getAppointmentBasicDetails(id).then((response) => {
      if (response.appointment_assessment === null) {
      }
    });
  }, [id]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container direction={`column`}>
          <Grid item>
            <Card raised>
              <Grid container direction={`column`}>
                <Grid item>
                  <Typography>Appointment Plans</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item>
            <Card raised>
              <Grid container direction={`column`}>
                <Grid item>
                  <Grid container direction={`row`}>
                    <Grid item>
                      <Typography>ICD Code</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>ICD Description</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>Requires follow up appointment</Typography>
                </Grid>
                <Grid item>
                  <Typography>Requires medication prescription</Typography>
                </Grid>
                <Grid item>
                  <Typography>Requires specialist referral</Typography>
                </Grid>
                <Grid item>
                  <Typography>Requires radiology</Typography>
                </Grid>
                <Grid item>
                  <Typography>Requires labs</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
