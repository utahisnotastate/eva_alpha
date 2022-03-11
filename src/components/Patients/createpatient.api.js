import axios from 'axios'
import API_URL from '../../api/api_url'
export default function createNewPatientInDB(patient) {
	/*axios
	.post(`${API_URL}/api/patients/`, {
		first_name: values.first_name,
		last_name: values.last_name,
		middle_name: values.middle_name,
		preferred_name: values.preferred_name,
		date_of_birth: values.date_of_birth,
		ssn: values.ssn,
		details: {
			demographics: {
				race: '',
				gender: '',
				marital_status: '',
				employment_status: '',
			},
			address: {
				address_one: '',
				address_two: '',
				city: '',
				state: '',
				zip_code: '',
			},
			allergies: [],
			medical_history: [],
			loadSurgicalHistory: [],
			contact_methods: [],
		},
	})
	.then((response) => {
		if (response.statusText === 'Created') {
			const patientId = response.data.id
			console.log('patient id: ' + patientId)
			setNewUserId(patientId)
			setUserCreated(true)
		}
		console.log(response)
	})
	.catch((error) => {
		console.log(error)
	})*/

	return axios.post(`${API_URL}/patients/`, patient)
}
