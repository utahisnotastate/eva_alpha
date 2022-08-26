import axios from 'axios'
import API_URL from './api_url'

export async function getAllRequests() {
	const response = await axios.get(`${API_URL}/requests/`)
	return response.data
}
