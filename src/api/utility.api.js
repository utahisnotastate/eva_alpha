import axios from 'axios'
import { getAllAppointments } from './appointment.api'
import { getAllPatients } from './patients.api'
import getAllRequests from './requests.api'
import API_URL from './api_url'

const getSettings = async () => {
	const response = await axios.get(`${API_URL}/settings/1/`)
	return response.data
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

var text = 'this is text'
var replacedtext = text.replace(' ', '_').toLowerCase().trim()
