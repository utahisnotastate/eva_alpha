import React, { useEffect } from "react";
import { useFormikContext, Field, FieldArray } from "formik";
import Grid from "@material-ui/core/Grid";
import AddAssessment from "./addassessment";

export default function AppointmentAssessment(props) {
  const { values } = useFormikContext();

  return (
    <Grid container direction={`column`}>
      <Grid item xs={12}>
        <FieldArray
          name={`clinical_data.assessments`}
          render={(arrayHelpers) => (
            <Grid container direction={`column`}>
              {values.clinical_data.assessments &&
              values.clinical_data.assessments.length > 0 ? (
                values.clinical_data.assessments.map((assessment, index) => (
                  <Grid container direction={`column`} key={index}>
                    <Grid item>
                      <p>{assessment.complaint_name}</p>
                      <p>{assessment.complaint_description}</p>
                    </Grid>
                    <Grid item>
                      {values.clinical_data.complaints &&
                      values.clinical_data.complaints.length > 0 ? (
                        <Grid container>
                          {values.clinical_data.complaints.map(
                            (complaint, index) => {
                              return (
                                <pre key={index}>
                                  {JSON.stringify(complaint, null, 2)}
                                </pre>
                              );
                            }
                          )}
                        </Grid>
                      ) : (
                        <Grid item>
                          <p>No complaints have been recorded</p>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                ))
              ) : (
                <Grid item>
                  <p>
                    No complaints, physical exam findings, or review of system
                    findings found
                  </p>
                </Grid>
              )}
              <Grid item>
                <AddAssessment arrayHelpers={arrayHelpers} />
              </Grid>
            </Grid>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <pre>{JSON.stringify()}</pre>
      </Grid>
    </Grid>
  );
}

/*
        <AssessmentsList
          assessments={fields}
          complaints={complaints}
          removeAssessment={handleRemoveAssessment}
          formProps={methods}
        />

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
 */
