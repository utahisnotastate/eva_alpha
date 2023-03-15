import API_URL from './api_url'
import axios from 'axios'

export const getForms = async () => {
	const result = await axios(`${API_URL}/forms/`)
	return result.data
}

export const getPatients = async () => {
	const result = await axios(`${API_URL}/patients/`)
	return result.data
}

export const getAppointments = async () => {
	const result = await axios(`${API_URL}/appointments/`)
	return result.data
}

export const getRequests = async () => {
	const result = await axios(`${API_URL}/requests/`)
	return result.data
}

export const getAllData = async () => {
	try {
		const [forms, patients, appointments, requests] = await Promise.all([
			getForms(),
			getPatients(),
			getAppointments(),
			getRequests(),
		])

		return {
			forms,
			patients,
			appointments,
			requests,
		}
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}

export const updateForm = async (form) => {
	console.log(form)
	//const result = await axios.put(`${API_URL}/forms/${form.id}/`, form)
	//return result.data
}

export const getPatient = async (id) => {
	const result = await axios(`${API_URL}/patients/${id}/`)
	return result.data
}

export const getPatientRequests = async () => {
	const result = await axios(`${API_URL}/patientrequests/`)
	return result.data
}

export const getPatientRequest = async (id) => {
	const result = await axios(`${API_URL}/patientrequests/${id}/`)
	return result.data
}
