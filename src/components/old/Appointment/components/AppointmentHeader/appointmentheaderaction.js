import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AppointmentDetails from "./appointmentdetails";
import AppointmentHeaderButton from "../Buttons/AppointmentButtons/appointmentHeaderButton";

export default function AppointmentHeaderAction(props) {
  // Determines which component to render based on the status propert
  function handleEncounterEnd() {}

  function handleEncounterBegin() {}

  switch (props.appointment.status) {
    case "in_progress":
      return (
        <AppointmentHeaderButton
          text={`End Encounter`}
          buttonAction={handleEncounterEnd}
        />
      );
    default:
      return (
        <AppointmentHeaderButton
          text={`Begin Appointment`}
          buttonAction={handleEncounterBegin}
        />
      );
  }
}
