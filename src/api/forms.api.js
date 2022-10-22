import API_URL from './api_url'
import axios from 'axios'

export const fetchAllForms = async () => {
	const result = await axios(`${API_URL}/forms/`)
	return result.data
}

export const getAllForms = async () => {
	const result = await axios(`${API_URL}/forms/`)
	return result.data
}
//not used

export const fetchForm = async (formId) => {
	const result = await axios(`${API_URL}/forms/${formId}/`)
	return result.data
}

export const updateForm = async (form) => {
	const result = await axios.put(`${API_URL}/forms/${form.id}/`, form)
	return result.data
}
