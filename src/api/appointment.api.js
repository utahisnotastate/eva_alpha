import API_URL from "./api_url";
import axios from "axios";

export const getAppointmentForms = async (appointmentId) => {
    const result = await axios(`${API_URL}/appointments/${appointmentId}/forms/`)
    return result.data;
}
export const getAppointmentForm = async(appointmentId, formId) => {
    const result = await axios(`${API_URL}/appointments/${appointmentId}/forms/${formId}/`)
    return result.data;
}
export const createAppointmentForm = async(appointmentId,form) => {
    const result = await axios.post(`${API_URL}/appointments/${appointmentId}/forms/`, {
        appointment: appointmentId,
        form_type: form.form_type,
        title: form.title,
        form: form.form,

    })
    return result.data;
}

export const getAllActiveForms = async() => {
    const result = await axios(`${API_URL}/activeforms`);
    return result.data;
}
export const saveAppointmentForm = (appointmentId, form ) => {

}
export const checkIfAppointmentHasForms = async() => {
    getAppointmentForms().then(response => {
        console.log('appointment forms = ' + response)
    }).catch(error => console.log(error))
}