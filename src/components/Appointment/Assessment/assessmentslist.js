import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, TextField, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { useFormContext } from "react-hook-form";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAllForms } from "../../../api/forms.api";
import { useParams } from "react-router-dom";
import { getAppointmentComplaints } from "../../../api/appointment.api";

const useStyles = makeStyles({
  fieldcontainer: {
    display: "flex",
    padding: "15px",
    border: "1px solid #000000",

    margin: "5px",
  },
  assessment: {
    marginTop: "15px",
    marginBottom: "15px",
    padding: "15px",
  },
  base: {
    backgroundColor: "#fff",
  },
});

export default function AssessmentsList(props) {
  let { id } = useParams();
  const classes = useStyles();
  const findings = useSelector(
    (state) => state.appointment.appointmentfindings
  );
  const complaints = useSelector(
    (state) => state.appointment.appointmentcomplaints
  );
  const { register } = useFormContext();

  useEffect(() => {
    console.log(complaints);
    getAppointmentComplaints(id).then((response) => {});
  }, [id]);
  return (
    <Grid container direction={`column`}>
      <Typography>Assessments</Typography>
      {props.assessments.map((assessment, index) => (
        <div key={index}>
          <Grid item className={classes.assessment}>
            <Card raised>
              <Grid container direction={`column`}>
                <Grid item>
                  <Grid container direction={`row`}>
                    <Grid item>
                      <TextField
                        disabled
                        inputRef={register()}
                        defaultValue={assessment.icd_code}
                        name={`appointmentassessments[${index}].icd_code`}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        disabled
                        inputRef={register()}
                        defaultValue={assessment.icd_description}
                        name={`appointmentassessments[${index}].icd_description`}
                      />
                    </Grid>
                    <Typography>
                      {assessment.icd_code}: {assessment.icd_description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>Related to:</Typography>
                  <Grid
                    container
                    direction={`column`}
                    justify="flex-start"
                    alignItems="stretch"
                    spacing={4}
                  >
                    <Grid item>
                      <Typography>
                        Which of the following patient complaints:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row">
                        {complaints
                          ? complaints.map((complaint, complaintindex) => (
                              <Grid item key={complaintindex}>
                                <Grid
                                  container
                                  className={classes.fieldcontainer}
                                >
                                  <Grid item>
                                    <TextField
                                      disabled
                                      inputRef={register()}
                                      defaultValue={complaint.complaint_name}
                                      name={`appointmentassessments[${index}].based_on.complaints[${complaintindex}].label`}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <Checkbox
                                      inputRef={register()}
                                      name={`appointmentassessments[${index}].based_on.complaints[${complaintindex}].value`}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                            ))
                          : null}
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography>
                            Which of the following physical exam findings:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container direction={`row`}>
                            {findings.map((finding, findingindex) => (
                              <Grid
                                item
                                xs={2}
                                key={findingindex}
                                className={classes.fieldcontainer}
                              >
                                <TextField
                                  disabled
                                  inputRef={register()}
                                  defaultValue={finding.label}
                                  name={`appointmentassessments[${index}].based_on.findings[${findingindex}].label`}
                                />
                                <Checkbox
                                  inputRef={register()}
                                  name={`appointmentassessments[${index}].based_on.findings[${findingindex}].value`}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Which of the following review of systems findings:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button>Delete Assessment</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </div>
      ))}
    </Grid>
  );
}
