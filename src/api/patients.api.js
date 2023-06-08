import axios from 'axios'
import API_URL from './api_url'

//get all patients
export const getAllPatients = async () => {
	const response = await axios(`${API_URL}/patients/`)
	return response.data
}

//add a new patient
export const addNewPatient = async (patient) => {
	const response = await axios.post(`${API_URL}/patients/`, patient)
	return response.data
}

//get a single patient
export const getPatient = async (id) => {
	const response = await axios(`${API_URL}/patients/${id}/`)
	return response.data
}
