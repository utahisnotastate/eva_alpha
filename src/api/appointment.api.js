import API_URL from './api_url'
import axios from 'axios'

export const getAppointment = async (appointmentId) => {
	const result = await axios(`${API_URL}/appointments/${appointmentId}/`)
	return result.data
}

export const getAppointmentForms = async (appointmentId) => {
	const result = await axios(
		`${API_URL}/appointments/${appointmentId}/forms/`
	)
	return result.data
}
export const getAppointmentForm = async (appointmentId, formId) => {
	const result = await axios(
		`${API_URL}/appointments/${appointmentId}/forms/${formId}/`
	)
	return result.data
}
export const getAppointmentBasicDetails = async (appointmentId) => {
	const result = await axios(`${API_URL}/appointments/${appointmentId}/`)
	return result.data
}
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
	)
	return result.data
}
