import React, { useEffect, useState } from "react";
import { Formik, Field, Form, useField, FieldArray } from "formik";
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
//import PatientComplaints from "../../Complaints/PatientComplaints";
import Complaints from "./Complaints/complaints";
import AppointmentPlan from "../../AppointmentPlan/AppointmentPlan";
import AppointmentAssessment from "../../Assessment/AppointmentAssessment";
import AppointmentSummary from "../../AppointmentSummary/AppointmentSummary";
import VerticalTabs from "../VerticalTabs/VerticalTabs";
import Physicalexam from "../VerticalTabs/PhysicalExam/physicalexam";
import ReviewOfSystems from "../VerticalTabs/ReviewOfSystems/reviewofsystems";
import * as PropTypes from "prop-types";

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

function EncounterStepper(props) {
  return (
    <Grid item>
      <Grid container direction={`row`}>
        <Grid item xs={10}>
          <Stepper nonLinear activeStep={props.activeStep}>
            {props.steps.map(props.prop2)}
          </Stepper>
        </Grid>
        <Grid item xs={2} className={props.classes.end_encounter}>
          <Button variant={`contained`} color={`primary`}>
            End Encounter
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

EncounterStepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.any,
  prop2: PropTypes.func,
  classes: PropTypes.any,
};

function EncounterStep(props) {
  return (
    <Step
      active={props.activeStep === props.step.index}
      className={props.classes.step}
    >
      <StepButton
        icon={<InsertInvitationIcon />}
        onClick={props.onClick}
        className={
          props.activeStep === props.step.index ? props.classes.active : ""
        }
      >
        <StepLabel>
          <Typography
            className={
              props.activeStep === props.step.index ? props.classes.active : ""
            }
          >
            {props.step.label}
          </Typography>
        </StepLabel>
      </StepButton>
    </Step>
  );
}

EncounterStep.propTypes = {
  activeStep: PropTypes.number,
  step: PropTypes.any,
  classes: PropTypes.any,
  onClick: PropTypes.func,
};
export default function PatientEncounter(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  // i have no idea why i did the steps like this
  const steps = getSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  function getStepContent(step, formvalues) {
    switch (step) {
      //display patient complaints component
      case 0:
        return (
          <Complaints
            name={`clinical_data.complaints`}
            complaints={formvalues.clinical_data.complaints}
          />
        );
      //display review of systems component
      case 1:
        return <Complaints />;
      case 2:
        return <Complaints />;
      case 3:
        return <Complaints />;
      case 4:
        return <Complaints />;
      case 5:
        return <Complaints />;
      case 6:
        return <Complaints />;

      default:
        return <FakeCompoent label="Unknown" />;
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          clinical_data: {
            complaints: [
              {
                id: "" + Math.random(),
                complaint_name: "Test Complaint Name",
                complaint_description: "This is complaint description",
                fieldname: "complaint_name",
              },
            ],
            assessments: [],
            plan: [],
            followup: [],
            summary: "",
          },
        }}
      >
        {({ values }) => (
          <Form>
            <Grid container direction={`column`} className={classes.root}>
              <EncounterStepper
                activeStep={activeStep}
                steps={steps}
                prop2={(step, index) => (
                  <EncounterStep
                    key={step.label}
                    activeStep={activeStep}
                    step={step}
                    classes={classes}
                    onClick={handleStep(step.index)}
                  />
                )}
                classes={classes}
              />
              <Grid item>
                <div>{getStepContent(activeStep, values)}</div>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

/*
      case 1:
        return (
          <ReviewOfSystems
            label="Review of Systems"
            form_type={`review_of_systems`}
          />
        );
      //display physical exam component
      // case "Physical Exam":
      case 2:
        return (
          <Physicalexam label="Physical Exam" form_type={`physical_exam`} />
        );
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




                    <Typography
                      className={activeStep === label ? classes.active : ""}
                    >
                      Test
                    </Typography>
 */
