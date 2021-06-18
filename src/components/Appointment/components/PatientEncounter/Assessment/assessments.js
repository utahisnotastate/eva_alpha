import React, { useEffect } from "react";
import { useFormikContext, Field, FieldArray } from "formik";
import Grid from "@material-ui/core/Grid";
import AddAssessment from "./addassessment";
import RelatedToAssessment from "./relatedToAssessments";

export default function AppointmentAssessment(props) {
  const { values } = useFormikContext();
  const complaints = values.clinical_data.complaints;

  const handleAddNewItem = (helper, baseObject) => {
    helper.push(baseObject);
  };

  return (
    <Grid container direction={`column`}>
      <Grid item xs={12}>
        <FieldArray
          name={`clinical_data.assessments`}
          render={(arrayHelpers) => (
            <Grid container direction={`column`}>
              {values.clinical_data.assessments &&
              values.clinical_data.assessments.length > 0 ? (
                values.clinical_data.assessments.map(
                  (assessment, assessmentindex) => (
                    <Grid container direction={`column`} key={assessmentindex}>
                      <Grid item>
                        <p>{assessment.code}</p>
                        <p>{assessment.description}</p>
                      </Grid>
                      <Grid item>
                        <p>Related To:</p>
                      </Grid>
                      <Grid item>
                        <p>Complaints</p>
                        <Grid container>
                          <RelatedToAssessment
                            name={`clinical_data.assessments[${assessmentindex}].complaints`}
                            items={complaints}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                )
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
<Grid item>
                        {assessment.complaints &&
                        assessment.complaints.length > 0 ? (
                          <Grid container direction={`column`}>
                            <Grid item>
                              <p>Complaints:</p>
                              <Grid container direction={`row`}>
                                {assessment.complaints.map(
                                  (complaint, assessmentcomplaintindex) => {
                                    return (
                                      <Grid item key={assessmentcomplaintindex}>
                                        <RelatedToField
                                          name={`clinical_data.assessments[${assessmentindex}].complaints`}
                                          index={assessmentcomplaintindex}
                                          label={complaint.complaint_name}
                                        />
                                        {JSON.stringify(complaint, null, 2)}
                                      </Grid>
                                    );
                                  }
                                )}
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid container direction={`row`}></Grid>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid item>
                            <p>No complaints have been recorded</p>
                          </Grid>
                        )}
                      </Grid>

{values.clinical_data.complaints &&
                      values.clinical_data.complaints.length > 0 ? (
                        <Grid container direction={`column`}>
                          <Grid item>
                            <p>Complaints:</p>
                            <Grid container direction={`row`}>
                              {values.clinical_data.complaints.map(
                                (complaint, index) => {
                                  return (
                                      <Grid item>
                                          {JSON.stringify(complaint, null, 2)}
                                      </Grid>
                                  );
                                }
                              )}
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid container direction={`row`}></Grid>
                          </Grid>
                        </Grid>
                      ) : (
                        <Grid item>
                          <p>No complaints have been recorded</p>
                        </Grid>
                      )}
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
