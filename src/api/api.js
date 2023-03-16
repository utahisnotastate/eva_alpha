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

export const getProviders = async () => {
	const result = await axios(`${API_URL}/providers/`)
	return result.data
}

export const deleteProvider = async (id) => {
	await axios.delete(`/api/providers/${id}/`)
	getProviders()
}

export const addProvider = async (provider) => {
	await axios.post('/api/providers/', provider)
	getProviders()
}

export const getAllData = async () => {
	try {
		const [forms, patients, appointments, requests, providers] =
			await Promise.all([
				getForms(),
				getPatients(),
				getAppointments(),
				getRequests(),
				getProviders(),
			])

		return {
			forms,
			patients,
			appointments,
			requests,
			providers,
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
