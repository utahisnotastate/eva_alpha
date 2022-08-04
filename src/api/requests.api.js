import axios from 'axios'
import API_URL from './api_url'

export default async function getAllRequests() {
	const response = await axios.get(`${API_URL}/requests/`)
	console.log(response.data)
	return response.data
}
