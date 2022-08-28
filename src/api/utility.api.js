import axios from 'axios'
import { getAllAppointments } from './appointment.api'
import { getAllPatients } from './patients.api'
import { getAllRequests } from './requests.api'
import fakepatients from '../components/Patient/patients.mock'
import API_URL from './api_url'

export const getSettings = async () => {
	const response = await axios.get(`${API_URL}/settings/1/`)

	return response.data
}

//update the settings
export const updateSettings = async (settings) => {
	console.log(settings)
	const response = await axios.put(`${API_URL}/settings/1/`, settings)

	return response.data
}

export const getPatientMockData = async () => {
	const response = await axios(`https://www.mockaroo.com/2f1cf230`)

	return response.data
}

export const getProviders = async () => {
	const response = await axios(`${API_URL}/providers/`)
	return response.data
}

export const getSchedulingComponentData = async () => {
	const [appointments, providers] = await Promise.all([
		getAllAppointments(),
		getProviders(),
	])
	return { appointments, providers }
}

export const getAllInitDataOnLoad = async () => {
	const [appointments, patients, requests, settings] = await Promise.all([
		getAllAppointments(),
		getAllPatients(),
		getAllRequests(),
		getSettings(),
	])
	return { appointments, patients, requests, settings }
}
export const apifetch = async (apifunc, api_param, log_result = false) => {
	const result = await apifunc(...api_param)

	if (log_result) {
		console.log(result)
		return result
	} else {
		return result
	}
}

export const bulkCreatePatients = async () => {
	//map over the patients and create them one by one in the database
	await Promise.all(
		fakepatients.map(async (patient) => {
			const response = await axios.post(`${API_URL}/patients/`, patient)
			return response.data
		})
	)
}
