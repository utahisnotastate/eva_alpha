import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
  useForm,
  FormProvider,
  useFormContext,
  useFieldArray,
} from "react-hook-form";
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
} from "../../../api/appointment.api";
import NewComplaint from "../Complaints/NewComplaint/NewComplaint.FunComp";
import { appointmentfindings } from "../../../store/reducers/appointment/appointment.reducers";

const API_URL = "http://127.0.0.1:8000/api";

export default function AppointmentAssessment(props) {
  let { id } = useParams();

  const dispatch = useDispatch();
  const assessments = useSelector(
    (state) => state.appointment.assessments.assessments
  );
  const assessmentinputs = useSelector(
    (state) => state.appointment.assessments.inputfields
  );
  const complaints = useSelector(
    (state) => state.appointment.appointmentcomplaints
  );
  const findings = useSelector(
    (state) => state.appointment.appointmentfindings
  );
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    errors,
    handleSubmit,
    setValue,
    control,
    watch,
    getValues,
  } = useForm({
    defaultValues: {
      appointmentassessments: assessments,
    },
  });
  const methods = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "appointmentassessments", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  //const formProps = { register, errors, setValue, control, getValues };

  const handleAddAssessment = (assessment) => {
    const newassessment = {
      icd10assessmentcode: assessment[0],
      icd_description: assessment[1],
    };
    console.log(newassessment);
    append(newassessment);
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
      console.log("We got the findings!");
      dispatch({
        type: "load_all_appointment_findings",
        findings: appointmentfindings,
      });
    });
  };
  useEffect(() => {
    getAppointmentBasicDetails(id).then((response) => {
      if (response.appointment_assessment === null) {
        getAppointmentFindings(id);
        dispatch({ type: "load_assessments", assessments: [] });
      } else {
        getAppointmentFindings(id);
        dispatch({
          type: "load_assessments",
          assessments: response.appointment_assessment.assessments,
        });
      }
    });
    getAppointmentComplaints(id).then((response) => {
      if (response.length === 0) {
        console.log("There are no complaints yet!");
        dispatch({ type: "load_complaints", complaints: [] });
      } else {
        dispatch({
          type: "load_complaints",
          complaints: response[0].appointment_complaints.complaints,
        });
      }
    });
  }, [id]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12}>
            <AssessmentsList
              assessments={fields}
              complaints={complaints}
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
      </form>
    </FormProvider>
  );
}

/*
<Button onClick={() => handleAddAssessment()}>ADD</Button>
<ICD10Search
                  register={methods.register}
                  dispatch={dispatch}
                  append={append}
                  assessmentform={true}
                  handleSelect={handleAddAssessment}
                  id={id}
                />
  const handleAddAssessment = (assessment) => {
    axios
      .post(`${API_URL}/appointments/${id}/assessments/`, {
        appointment: assessment.appointmentId,
        icd_code: assessment.icd10assessmentcode,
        icd_description: assessment.icd_description,
      })
      .then((response) => {
        const fetchAssessments = async () => {
          const result = await axios(
            `${API_URL}/appointments/${id}/assessments/`
          );
          return result.data;
        };
        fetchAssessments().then((response) => {
          console.log(response);
          dispatch({ type: "load_assessments", assessments: response });
        });
      });
  };

getAppointmentAssessments(id).then((response) => {
      if (response.appointment_assessment === null) {
        //getAppointmentFindings(id);
        dispatch({ type: "load_assessments", assessments: [] });
        getAppointmentBasicDetails(id).then((response) => {
          console.log("Assessments are " + JSON.stringify(response));
        });
      } else {
        dispatch({ type: "load_assessments", assessments: response.appointment_assessment.assessments });
        //getAppointmentFindings(id);
        // dispatch({ type: "load_assessments", assessments: [] });
      }
    });
<Card>
              <CardContent>
                <AssessmentsList
                  assessments={assessments}
                  complaints={complaints}
                  formProps={methods}
                />
              </CardContent>
            </Card>
  const formProps = { register, errors, setValue, control, getValues };
useEffect( () => {
        const fetchAssessments = async () => {
            const result = await axios(`${API_URL}/appointments/${id}/assessments/`);
            return result.data;
        }
        fetchAssessments().then( (response) => {
            console.log(response);
            dispatch({type: 'load_assessments', assessments: response});
        })
    }, []);
 */
