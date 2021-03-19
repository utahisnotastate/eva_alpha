import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Card from "../../basestyledcomponents/Card/Card";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider } from "@material-ui/core";
import {
  getAppointmentForm,
  updateAppointmentForm,
} from "../../../api/appointment.api";
import CompletedAppointment from "./CompletedAppointment/completedappointment";
import PatientEncounter from "./PatientEncounter/patientencounter";
import PreAppointment from "./PreAppointment/PreAppointment";
import AppointmentHeaderButton from "./Buttons/AppointmentButtons/appointmentHeaderButton";
import { getAppointment } from "../../../api/appointment.api";
import { useParams } from "react-router-dom";
import AppointmentHeader from "./AppointmentHeader/appointmentheader";
import example_appointment from "./fake.data";
import moment from "moment";
// var toDate = require("@fav/type.to-date");
import patientroutes from "../../Patient/routes";
import NavLinks from "./NavLinks/NavLinks";

const useStyles = makeStyles({
  header: {
    paddingLeft: "15px",
  },
  content: {
    padding: "15px",
    minHeight: "100vh",
  },
  button: {
    padding: "20px",
  },
});

export default function MedicalAppointment() {
  let { id } = useParams();
  let { path, url } = useRouteMatch();
  const classes = useStyles();
  const [appointment, setAppointment] = useState(
    example_appointment.clinical_data
  );
  const methods = useForm({
    defaultValues: appointment,
  });
  const watchSummary = methods.watch("clinical_data.summary");

  // Determines which component to render based on the status propert
  function handleEncounterEnd() {
    const encounter_end = {
      status: "encounter_ended",
      actual_end: moment().toISOString(),
    };
    const encounter_ended_appointment = {
      ...appointment,
      ...encounter_end,
    };
    setAppointment(encounter_ended_appointment);
  }

  /*
  This changes the state of the appointment component to in progress. it was most likely in the scheduled
  state before meaning that the only thing showing was the scheduling note. Now it will show the exam forms and such
   */

  function handleEncounterBegin() {
    const encounter_start = {
      status: "in_progress",
      actual_start: moment().toISOString(),
    };
    const in_progress_appointment = { ...appointment, ...encounter_start };
    setAppointment(in_progress_appointment);
    //setStatus("in_progress");
  }

  /*
  instead of splitting the medical appointment into different routes, it's easier to just render different
  components based on the status of the appointment.
   */

  function handleNotesCompleted() {
    const notes_completed = {
      status: "notes_completed",
    };
    const notes_completed_appointment = {
      ...appointment,
      ...notes_completed,
    };
    setAppointment(notes_completed_appointment);
  }

  function determineAppointmentComponentToRender(appointmentstatus) {
    switch (appointmentstatus) {
      case "encounter_ended":
        return <CompletedAppointment appointment={appointment} />;
      case "in_progress":
        return (
          <PatientEncounter appointment={appointment} summary={watchSummary} />
        );
      default:
        return (
          <PreAppointment
            appointment={appointment}
            buttonAction={handleEncounterBegin}
          />
        );
    }
  }
  /*
  The button rendered by this function is what the provider uses to change the progress of an appointment.

  An appointment progress should go something like
  scheduled (which means you only need to display any notes made during scheduling --> "in progress" which
  means that the doctor can fill out the medical forms
  --> encounter ended which means that the clinical documentation still isn't done, but the patient is no
  longer in the office and follow up can be scheduled (if necessary)
  --> "notes completed" which means the final notes have been written, and no one besides the provider can make
  changes to it. Additionallyu this will only show the medical chart fields that were filled out as a summary
   */
  function determineAppointmentHeaderActionButtonToRender(appointmentstatus) {
    switch (appointmentstatus) {
      case "scheduled":
        return (
          <AppointmentHeaderButton
            text={`Begin Encounter`}
            buttonAction={handleEncounterBegin}
            className={classes.button}
          />
        );
      case "in_progress":
        return (
          <AppointmentHeaderButton
            text={`End Encounter`}
            buttonAction={handleEncounterEnd}
            className={classes.button}
          />
        );
      case "notes_completed":
        return (
          <AppointmentHeaderButton
            text={`Edit Encounter Documentation`}
            buttonAction={handleEncounterEnd}
            className={classes.button}
          />
        );
      case "encounter_ended":
        return (
          <AppointmentHeaderButton
            text={`Mark notes complete`}
            buttonAction={handleNotesCompleted}
            className={classes.button}
          />
        );
      default:
        return (
          <AppointmentHeaderButton
            text={`Begin Appointment`}
            buttonAction={handleEncounterBegin}
            className={classes.button}
          />
        );
    }
  }
  useEffect(() => {
    const getAppointmentAndPopulateDetails = async (appointmentId) => {
      const appointment = await getAppointment(appointmentId);
      /*
      {
        actual_end: null
        actual_start: null
        clinical_data: {plans: Array(0), summary: "", complaints: Array(0), assessments: Array(0), physical_exam: Array(0), …}
        end: "2021-02-15T22:00:00Z"
        id: 1
        patient: 1
        patient_display_name: "Jack Robles"
        provider: 2
        provider_display_name: "Nurse Howard"
        scheduled_on: "2021-02-15T07:50:55.743111Z"
        scheduling_note: ""
        start: "2021-02-15T20:30:00Z"
        status: "scheduled"
        type: "first_appointment"
      }
       */
      console.log(appointment);
      setAppointment(appointment);
    };
    getAppointmentAndPopulateDetails(id);
  }, [id]);

  return (
    <FormProvider {...methods}>
      <form>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={3}>
            <Card>
              <CardBody>
                <NavLinks patientroutes={patientroutes} />
              </CardBody>
            </Card>
          </Grid>

          <Grid item xs={9}>
            <Card>
              <Grid container direction={`column`}>
                <Grid item className={classes.header}>
                  <CardHeader color={`primary`}>
                    <AppointmentHeader appointment={appointment} />
                  </CardHeader>
                </Grid>
                <Grid item className={classes.content}>
                  <Switch>
                    <Route exact path={path}>
                      {determineAppointmentComponentToRender(
                        appointment.status
                      )}
                    </Route>
                    <Route path={`${path}/test`}>
                      <AppointmentHeaderButton
                        text={`Begin Appointment`}
                        buttonAction={handleEncounterBegin}
                        className={classes.button}
                      />
                    </Route>
                  </Switch>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}

/*

              <div style={{ display: "flex", flexDirection: "row" }}>
                {determineAppointmentHeaderActionButtonToRender(
                  appointment.status
                )}
              </div>


            <Grid item>
              <Divider variant={`middle`} />
            </Grid>
<Grid item>
            <Card>
              <CardBody>
                {determineAppointmentComponentToRender(appointment.status)}
              </CardBody>
            </Card>
          </Grid>


<CardHeader color={`primary`}>
                <AppointmentHeader appointment={appointment} />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {determineAppointmentHeaderActionButtonToRender(
                    appointment.status
                  )}
                </div>
              </CardHeader>



            <Typography>Medical Appointment</Typography>
            <Typography>Patient: {appointment.patient_display_name}</Typography>
            <Typography>Scheduled Start: {appointment.start}</Typography>
            <Typography>Appointment ENd: {appointment.end}</Typography>
 */
