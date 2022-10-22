import axios from 'axios'
import API_URL from './api_url'

export const getPatientInformation = async (patientId) => {
	const response = await axios(`${API_URL}/patients/${patientId}/`)
	return response.data
}

/*
{
      address_one: "unknown",
      address_two: "unknown",
      city: "unknown",
      state: "unknown",
      zip_code: "unknown",
    },

    [
      {
        type: "cell",
        number: phone_prefix.concat("", "8042223333"),
        special_instructions: "None",
      },
      {
        type: "home",
        number: phone_prefix.concat("", "8049993333"),
        special_instructions: "Stuff",
      },
    ]


 */

export const getPatientAppointments = async (patientId) => {
	const result = await axios.get(
		`${API_URL}/patients/${patientId}/appointments/`
	)
	return result.data
}

export const getPatientDiagnoses = async (patientId) => {
	const result = await axios(`${API_URL}/patients/${patientId}/diagnoses/`)
	return result.data
}

export const getPatientInsurance = async (patientId) => {
	const result = await axios.get(
		`${API_URL}/patients/${patientId}/patient_insurances/`
	)
	// 	return result.dataI love you Manda
	return result.data
}

export const addNewInsuranceForPatient = async (patientId, insurance) => {
	console.log({ ...insurance, patient: patientId })
	const result = await axios.post(
		`${API_URL}/patients/${patientId}/patient_insurances/`,
		{ ...insurance, patient: patientId }
	)
	return result.data
}

export const setPatientDiagnosisStatus = async (
	patientId,
	diagnosisId,
	newstatus
) => {
	const result = await axios.patch(
		`${API_URL}/patients/${patientId}/diagnoses/${diagnosisId}/`,
		{
			status: newstatus,
			patient: patientId,
		}
	)
	return result.data
}

export const setPatientDiagnosisActive = async (patientId, diagnosisId) => {
	const result = await axios.patch(
		`${API_URL}/patients/${patientId}/diagnoses/${diagnosisId}/`,
		{
			status: 'active',
			patient: patientId,
		}
	)
	return result.data
}

export const addNewPatientDiagnosis = async (patientId, diagnosis) => {
	const result = await axios.post(
		`${API_URL}/patients/${patientId}/diagnoses/`,
		{
			patient: patientId,
			diagnosis_icd_code: diagnosis.icd_code,
			diagnosis_description: diagnosis.icd_description,
		}
	)
	return result.data
}

export const getPatientMedications = async (patientId) => {
	const result = await axios(`${API_URL}/patients/${patientId}/medications/`)
	return result.data
}

export const changeMedicationStatus = async (
	patientId,
	medicationId,
	status
) => {
	const result = await axios.patch(
		`${API_URL}/patients/${patientId}/medications/${medicationId}/`,
		{ active: status }
	)
	return result.data
}

export const addNewMedicationAuthorization = async (
	patientId,
	medicationId,
	authorization
) => {
	const result = await axios.post(
		`${API_URL}/patients/${patientId}/medications/${medicationId}/authorizations/`,
		authorization
	)
	return result.data
}

export const getMedicationPrescriptionHistory = async (
	patientId,
	medicationId
) => {
	const result = await axios(
		`${API_URL}/patients/${patientId}/medications/${medicationId}/`
	)
	return result.data
}

export const addNewMedicationPrescription = async (patientId, medication) => {
	const result = await axios.post(
		`${API_URL}/patients/${patientId}/medications/${medication.medicationId}/prescriptions/`,
		{
			strength: medication.strength,
			frequency: medication.frequency,
			name: medication.name,
			medication: medication.medicationId,
			type: 'No Change',
			refills: medication.refills,
			provider: 1,
		}
	)
	return result.data
}

export const stopPrescribingMedication = async (
	patientId,
	medicationId,
	medication
) => {
	const result = await axios.patch(
		`${API_URL}/patients/${patientId}/basicmedications/${medicationId}/`,
		{
			name: medication.name,
			active: false,
			reason_stopped: medication.reason_stopped,
		}
	)
	return result.data
}

export const getMedicationClinicalDetails = async (name) => {
	const result = await axios(
		`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?sf=DISPLAY_NAME,STRENGTHS_AND_FORMS&df=DISPLAY_NAME,STRENGTHS_AND_FORMS&terms=${name}`
	)
	return result.data
}

export const getPatientLatexAllergies = async (patientId) => {
	const result = await axios(`${API_URL}/patients/${patientId}/latexallergy/`)
	return result.data
}

export const getPatientPollenAllergies = async (patientId) => {
	const result = await axios(
		`${API_URL}/patients/${patientId}/pollenallergy/`
	)
	return result.data
}

export const getPatientPetAllergies = async (patientId) => {
	const result = await axios(`${API_URL}/patients/${patientId}/petallergy/`)
	return result.data
}

export const getPatientDrugAllergies = async (patientId) => {
	const result = await axios(`${API_URL}/patients/${patientId}/drugallergy/`)
	return result.data
}

export const getPatientFoodAllergies = async (patientId) => {
	const result = await axios(`${API_URL}/patients/${patientId}/foodallergy/`)
	return result.data
}

export const getPatientInsectAllergies = async (patientId) => {
	const result = await axios(
		`${API_URL}/patients/${patientId}/insectallergy/`
	)
	return result.data
}

export const getAllPatientAllergyInfo = async (patientId) => {
	const result = await axios.all([
		getPatientLatexAllergies(patientId),
		getPatientPollenAllergies(patientId),
		getPatientPetAllergies(patientId),
		getPatientDrugAllergies(patientId),
		getPatientFoodAllergies(patientId),
		getPatientInsectAllergies(patientId),
	])
	return result
}
