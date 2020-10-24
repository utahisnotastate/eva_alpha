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

export const getAppointmentAssessments = async (appointmentId) => {
  const result = await axios(
    `${API_URL}/appointments/${appointmentId}/assessments/`
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
