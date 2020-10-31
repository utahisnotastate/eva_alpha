import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.appointment.appointmentplans);
  const methods = useForm({
    defaultValues: {
      plans: plans,
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
      name: "plans", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    getAppointmentBasicDetails(id).then((response) => {
      console.log("plan response is " + JSON.stringify(response));
      if (response.appointment_plan === null) {
        console.log("No plans!");
        dispatch({
          type: "load_plans",
          plan: response.appointment_assessment.assessments,
        });
        append(response.appointment_assessment.assessments);
      } else {
        console.log("There are plans!");
        dispatch({ type: "load_plans", plan: response.appointment_plan.plans });
        append(response.appointment_plan.plans);
      }
    });
  }, [id]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container direction={`column`} spacing={3}>
          <Grid item>
            <Card raised>
              <Grid container direction={`column`}>
                <Grid item>
                  <Typography>Appointment Plans</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {fields.length > 0
            ? fields.map((field, index) => (
                <Grid item key={field.id}>
                  <Card raised>
                    <Grid container direction={`column`}>
                      <Grid item>
                        <Grid container direction={`row`}>
                          <Grid item>
                            <TextField
                              inputRef={methods.register()}
                              defaultValue={field.icd10assessmentcode}
                              disabled
                              name={`plans[${index}].icd10assessmentcode`}
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              inputRef={methods.register()}
                              defaultValue={field.icd_description}
                              disabled
                              name={`plans[${index}].icd_description`}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container direction={`row`}>
                          <Grid item>
                            <Typography>
                              Requires follow up appointment
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography>Follow up options</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Requires medication prescription
                        </Typography>
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
              ))
            : null}
        </Grid>
      </form>
    </FormProvider>
  );
}
