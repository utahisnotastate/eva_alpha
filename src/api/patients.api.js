import axios from 'axios'
import API_URL from './api_url'

//get all patients
export const getAllPatients = () => {
	return axios.get(`${API_URL}/patients`)
}
