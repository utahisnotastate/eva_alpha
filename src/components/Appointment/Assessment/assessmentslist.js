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
  const classes = useStyles();
  const findings = useSelector(
    (state) => state.appointment.appointmentfindings
  );
  const { register } = useFormContext();

  useEffect(() => {}, []);
  return (
    <Grid container direction={`column`}>
      <Typography>Assessments</Typography>
      {props.assessments.map((assessment, index) => (
        <div key={index}>
          <Grid item className={classes.assessment}>
            <Card raised>
              <Grid container direction={`column`}>
                <Grid item>
                  <Typography>
                    {assessment.icd_code}: {assessment.icd_description}
                  </Typography>
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
                      {props.complaints
                        ? props.complaints.map((complaint) => (
                            <Grid container className={classes.fieldcontainer}>
                              <Grid item></Grid>
                              <Grid item>
                                <Typography>
                                  {complaint.complaint_name}
                                </Typography>
                              </Grid>
                            </Grid>
                          ))
                        : null}
                    </Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography>
                            Which of the following {findings.length} physical
                            exam findings:
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
                                  name={`appointmentassessments[${index}].based_on[${findingindex}].label`}
                                />
                                <Checkbox
                                  inputRef={register()}
                                  name={`appointmentassessments[${index}].based_on[${findingindex}].value`}
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
