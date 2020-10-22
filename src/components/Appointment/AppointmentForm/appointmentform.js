import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import API_URL from "../../../api/api_url";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
//import FormGenerator from '../../FormsCenter/FormGenerator/FormGenerator.js'
import Card from "../../basestyledcomponents/Card/Card.js";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import FormTemplate from "./appointmentformtemplate.js";
import MedicalAppointmentForm from "../../Forms/components/MedicalAppointmentForm/medicalappointmentform";
import "./appointmentform.css";

export default function AppointmentForm(props) {
  let { formId } = useParams();
  const dispatch = useDispatch();
  const appointmentform = useSelector(
    (state) =>
      state.appointment.activeappointmentform.activeAppointmentFormDetails
  );
  // const formfields = useSelector(state => state.appointment.appointmentformfields);
  const getAppointmentForm = async (appointmentId, formId) => {
    const result = await axios(
      `${API_URL}/appointments/${appointmentId}/forms/${formId}/`
    );
    return result.data;
  };

  useEffect(() => {
    //check if appointment has any forms associated with it
    getAppointmentForm(props.appointmentId, formId).then((result) => {
      console.log("form id response is " + JSON.stringify(result));
      dispatch({
        type: "load_active_appointment_form_details",
        details: {
          title: result.title,
          id: result.id,
          form_type: result.form_type,
        },
      });
      dispatch({ type: "load_active_form_fields", fields: result.form });
    });
  }, [props.appointmentId, formId]);

  return (
    <Card>
      <CardHeader color={`primary`}>
        <h4>{appointmentform.title}</h4>
        <h4>{appointmentform.form_type}</h4>
      </CardHeader>
      <CardBody>
        <FormTemplate appointmentId={props.appointmentId} formId={formId} />
      </CardBody>
    </Card>
  );
}

/*
<FormTemplate appointmentId={props.appointmentId} formId={formId} />

<Card>
            <CardHeader color={`primary`}>
                <h4>{title}</h4>
            </CardHeader>
            <CardBody>
                <FormGenerator formfields={form} />
            </CardBody>
        </Card>
 */
