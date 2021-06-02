import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  Grid,
  StepButton,
  StepContent,
  StepLabel,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  FormLabel,
  FormGroup,
  InputLabel,
  Input,
} from "@material-ui/core";
//Follow Up Icon
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import PatientComplaints from "../../Complaints/PatientComplaints";
import AppointmentPlan from "../../AppointmentPlan/AppointmentPlan";
import AppointmentAssessment from "../../Assessment/AppointmentAssessment";
import AppointmentSummary from "../../AppointmentSummary/AppointmentSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  active: {
    color: "#0BB5FF",
  },

  step: {
    display: "flex",
    color: "#0BB5FF",
  },
  end_encounter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
function getSteps() {
  return [
    { index: 0, label: "Complaints" },
    { index: 1, label: "Review of Systems" },
    { index: 2, label: "Physical Exam" },
    { index: 3, label: "Assessment" },
    { index: 4, label: "Plan" },
    { index: 5, label: "Follow Up" },
    { index: 6, label: "Summary" },
  ];
}

function FakeCompoent(props) {
  return (
    <div>
      <Typography>{props.label}</Typography>
    </div>
  );
}

export default function PatientEncounter(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  // i have no idea why i did the steps like this
  const steps = getSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  function getStepContent(step) {
    switch (step) {
      //display patient complaints component
      case 0:
        return <PatientComplaints />;
      //display review of systems component
      case 1:
        return <FakeCompoent label="Review of Systems" />;
      //display physical exam component
      // case "Physical Exam":
      case 2:
        return <FakeCompoent label="Physical Exam" />;
      //display assessment component
      // case "Assessment":
      case 3:
        return <AppointmentAssessment />;
      //display plan component
      // case "Plan":
      case 4:
        return <AppointmentPlan />;
      //display follow up component
      // case "Follow Up":
      case 5:
        return <FakeCompoent label="Follow Up" />;
      // case "Summary":
      case 6:
        return <AppointmentSummary summary={props.summary} />;

      default:
        return <FakeCompoent label="Unknown" />;
    }
  }

  return (
    <Grid container direction={`column`} className={classes.root}>
      <Grid item>
        <Grid container direction={`row`}>
          <Grid item xs={10}>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((step, index) => (
                <Step
                  key={step.label}
                  active={activeStep === step.index}
                  className={classes.step}
                >
                  <StepButton
                    icon={<InsertInvitationIcon />}
                    onClick={handleStep(step.index)}
                    className={activeStep === step.index ? classes.active : ""}
                  >
                    <StepLabel>
                      <Typography
                        className={
                          activeStep === step.index ? classes.active : ""
                        }
                      >
                        {step.label}
                      </Typography>
                    </StepLabel>
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={2} className={classes.end_encounter}>
            <Button variant={`contained`} color={`primary`}>
              End Encounter
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div>{getStepContent(activeStep)}</div>
      </Grid>
    </Grid>
  );
}

/*
                    <Typography
                      className={activeStep === label ? classes.active : ""}
                    >
                      Test
                    </Typography>
 */
