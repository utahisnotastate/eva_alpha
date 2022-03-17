import axios from 'axios'
import API_URL from './api_url'

export default function getAllRequests() {
	return axios.get(`${API_URL}/requests`)
}
