import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
/*import Card from "../../basestyledcomponents/Card/Card";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";*/
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useField,
  useFormikContext,
} from "formik";
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
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  RadioGroup,
  Select,
  Switch,
} from "formik-material-ui";
import { useParams } from "react-router-dom";
//Follow Up Icon
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
//Complaints Icon
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
//Plan Icon
import AssignmentIcon from "@material-ui/icons/Assignment";
//Asessment ICon
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
//ROS Icon
import SettingsIcon from "@material-ui/icons/Settings";
//Physical Exam
import BallotIcon from "@material-ui/icons/Ballot";
//Summary Icon
import ReceiptIcon from "@material-ui/icons/Receipt";
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
    "Complaints",
    "Review of Systems",
    "Physical Exam",
    "Assessment",
    "Plan",
    "Follow Up",
    "Summary",
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
  const [activeStep, setActiveStep] = useState("Complaints");
  const steps = getSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  function getStepContent(step) {
    switch (step) {
      case "Complaints":
        return <PatientComplaints />;
      case "Review of Systems":
        return <FakeCompoent label="Review of Systems" />;
      case "Physical Exam":
        return <FakeCompoent label="Physical Exam" />;
      case "Assessment":
        return <AppointmentAssessment />;
      case "Plan":
        return <AppointmentPlan />;
      case "Follow Up":
        return <FakeCompoent label="Follow Up" />;

      case "Summary":
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
              {steps.map((label, index) => (
                <Step
                  key={label}
                  active={activeStep === label}
                  className={classes.step}
                >
                  <StepButton
                    icon={<InsertInvitationIcon />}
                    onClick={handleStep(label)}
                    className={activeStep === label ? classes.active : ""}
                  >
                    <StepLabel>
                      <Typography
                        className={activeStep === label ? classes.active : ""}
                      >
                        {label}
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
