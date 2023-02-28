import API_URL from './api_url'
import axios from 'axios'

export const getForms = async () => {
	const result = await axios(`${API_URL}/forms/`)
	return result.data
}

export const saveForm = async (form) => {
	const result = await axios.post(`${API_URL}/forms/`, form)
	return result.data
}
