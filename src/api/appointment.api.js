import API_URL from "./api_url";
import axios from "axios";

export const getAppointmentForms = async (appointmentId) => {
  const result = await axios(`${API_URL}/appointments/${appointmentId}/forms/`);
  return result.data;
};
export const getAppointmentForm = async (appointmentId, formId) => {
  const result = await axios(
    `${API_URL}/appointments/${appointmentId}/forms/${formId}/`
  );
  return result.data;
};
export const createAppointmentForm = async (appointmentId, form) => {
  const result = await axios.post(
    `${API_URL}/appointments/${appointmentId}/forms/`,
    {
      appointment: appointmentId,
      form_type: form.form_type,
      title: form.title,
      form: form.form,
    }
  );
  return result.data;
};
export const getAppointmentBasicDetails = async (appointmentId) => {
  const result = await axios(`${API_URL}/appointments/${appointmentId}/`);
  return result.data;
};
export const getAllActiveForms = async () => {
  const result = await axios(`${API_URL}/activeforms`);
  return result.data;
};

export const updateAppointmentForm = async (appointmentId, form) => {
  const result = await axios.patch(
    `${API_URL}/appointments/${appointmentId}/forms/${form.id}/`,
    {
      id: form.id,
      title: form.title,
      form_type: form.form_type,
      form: { customformfields: form.formfields },
      appointment: appointmentId,
    }
  );
  return result.data;
};
// THIS GET APPOINTMENT ASSESSMENTS NO LONGER USED. USE GETAPPOINTMENTBASICDETAILS
export const getAppointmentAssessments = async (appointmentId, assessments) => {
  const result = await axios(
    `${API_URL}/appointments/${appointmentId}/assessments/`
  );
  return result.data;
};

export const saveAppointmentAssessments = async (
  appointmentId,
  assessments
) => {
  const result = await axios.patch(
    `${API_URL}/appointments/${appointmentId}/`,
    {
      appointment_assessment: {
        assessments: assessments,
      },
    }
  );
  return result.data;
};
/*
export const getAppointmentFindings = (appointmentId) => {
  getAppointmentForms(appointmentId).then((response) => {
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
    console.log(appointmentfindings);
    dispatch({type: "load_all_appointment_findings", findings: appointmentfindings})
  });
};
*/

export const checkIfAppointmentHasForms = async () => {
  getAppointmentForms()
    .then((response) => {
      console.log("appointment forms = " + response);
    })
    .catch((error) => console.log(error));
};
export const getAppointmentComplaints = async (appointmentId) => {
  const result = await axios(
    `http://127.0.0.1:8000/api/appointments/${appointmentId}/complaints/`
  );
  console.log(result.data);
  return result.data;
};

export const addNewAppointmentComplaint = async (appointmentId, complaint) => {
  axios.post(`${API_URL}/appointments/${appointmentId}/complaints/`, {
    appointment: appointmentId,
    complaint_name: complaint.complaint_name,
    complaint_description: complaint.complaint_description,
    patient_belief_caused_by: complaint.patient_belief_caused_by,
    patient_therapeutic_attempts: complaint.patient_therapeutic_attempts,
    other_notes: complaint.other_notes,
  });
};

export const createAppointmentComplaints = async (appointmentId) => {
  axios.post(`${API_URL}/appointments/${appointmentId}/complaints/`, {
    appointment: appointmentId,
    appointment_complaints: { complaints: [] },
  });
};

export const saveAppointmentComplaints = async (appointmentId, complaints) => {
  const result = await axios.patch(
    `${API_URL}/appointments/${appointmentId}/complaints/1/`,
    {
      appointment: appointmentId,
      appointment_complaints: complaints,
    }
  );
  return result.data;
};

export const saveAppointmentPlan = async (appointmentId, plan) => {
  const result = await axios.patch(
    `${API_URL}/appointments/${appointmentId}/`,
    {
      appointment: appointmentId,
      appointment_plan: { plan: plan },
    }
  );
  return result.data;
};

export const getAppointmentFindings = (id) => {
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
    return appointmentfindings;
  });
};

export const getAppointmentSummary = async (appointmentId) => {};
