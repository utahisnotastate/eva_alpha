import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NewAssessment from "./newassessment";
import ICD10Search from "../../basestyledcomponents/ICD10Search/icd10search";
import AssessmentsList from "./assessmentslist";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {
  getAppointmentForms,
  getAppointmentAssessments,
  getAppointmentComplaints,
  createAppointmentComplaints,
  getAppointmentBasicDetails,
  saveAppointmentAssessments,
} from "../../../api/appointment.api";
import NewComplaint from "../Complaints/NewComplaint/NewComplaint.FunComp";
import { appointmentfindings } from "../../../store/reducers/appointment/appointment.reducers";

const API_URL = "http://127.0.0.1:8000/api";

export default function AppointmentAssessment(props) {
  let { id } = useParams();

  const dispatch = useDispatch();
  const assessments = useSelector(
    (state) => state.appointment.clinical_data.assessments
  );
  const assessmentinputs = useSelector(
    (state) => state.appointment.assessments.inputfields
  );
  const complaints = useSelector(
    (state) => state.appointment.clinical_data.complaints
  );
  /*const findings = useSelector(
      (state) => state.appointment.appointmentfindings
    );*/

  const findings = [];
  const onSubmit = (data) => {
    console.log(data.appointmentassessments);
    saveAppointmentAssessments(id, data.appointmentassessments).then(
      (response) => {
        console.log(
          "saved assessments resposne is " + JSON.stringify(response)
        );
      }
    );
  };

  //const formProps = { register, errors, setValue, control, getValues };

  const handleAddAssessment = (assessment) => {
    const newassessment = {
      icd10assessmentcode: assessment[0],
      icd_description: assessment[1],
      based_on: {
        complaints: complaints,
        findings: findings,
      },
    };
    console.log(newassessment);
    append(newassessment);
  };
  const handleRemoveAssessment = (pos) => {
    console.log(pos);
    if (fields.length === 1) {
      remove();
    } else {
      remove(pos);
    }
    //remove(pos);
  };
  const getAppointmentFindings = (id) => {
    getAppointmentForms(id).then((response) => {
      //console.log(response);
      let appointmentfindings = [];
      for (let appointmentform of response) {
        //console.log(appointmentform.form.customformfields);
        let checkedfields = appointmentform.form.customformfields.filter(
          (field) => field.checked === true
        );
        checkedfields.forEach((checkedfield) =>
          appointmentfindings.push(checkedfield)
        );
      }
      //console.log("We got the findings!");
      //console.log(appointmentfindings);
      dispatch({
        type: "load_all_appointment_findings",
        findings: appointmentfindings,
      });
    });
  };
  console.log(complaints);
  console.log(findings);
  return (
    <Grid container>
      <Grid item xs={12}>
        <AssessmentsList
          assessments={fields}
          complaints={complaints}
          removeAssessment={handleRemoveAssessment}
          formProps={methods}
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <NewAssessment
              control={methods.control}
              register={methods.register}
              setValue={methods.setValue}
              getValues={methods.getValues}
              addAssessment={handleAddAssessment}
              addComplaintToForm={() => console.log("add!")}
              complaints={complaints}
            />

            <input type="submit" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
