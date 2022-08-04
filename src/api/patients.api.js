import axios from 'axios'
import API_URL from './api_url'

//get all patients
export const getAllPatients = async () => {
	const response = await axios(`${API_URL}/patients/`)
	console.log(response.data)
	return response.data
}
