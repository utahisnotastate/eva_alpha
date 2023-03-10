import API_URL from './api_url'
import axios from 'axios'


export const getForms = async () => {
	const result = await axios(`${API_URL}/forms/`)
	return result.data
}



export const updateForm = async (form) => {
	console.log(form)
	const result = await axios.put(`${API_URL}/forms/${form.id}/`, form)
	return result.data
}

export const getPatients = async () => {
	const result = await axios(`${API_URL}/patients/`)
	return result.data
}
