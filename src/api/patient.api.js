import axios from "axios";
import API_URL from "./api_url";

export const getPatientLatexAllergies = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/latexallergy/`);
  return result.data;
};

export const getPatientPollenAllergies = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/pollenallergy/`);
  return result.data;
};

export const getPatientPetAllergies = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/petallergy/`);
  return result.data;
};

export const getPatientDrugAllergies = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/drugallergy/`);
  return result.data;
};

export const getPatientFoodAllergies = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/foodallergy/`);
  return result.data;
};

export const getPatientInsectAllergies = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/insectallergy/`);
  return result.data;
};

export const getAllPatientAllergyInfo = async (patientId) => {
  const result = await axios.all([
    getPatientLatexAllergies(patientId),
    getPatientPollenAllergies(patientId),
    getPatientPetAllergies(patientId),
    getPatientDrugAllergies(patientId),
    getPatientFoodAllergies(patientId),
    getPatientInsectAllergies(patientId),
  ]);
  return result;
};

/*
  const [pollenstatus, setPollenStatus] = useState();
  const [petstatus, setPetStatus] = useState();
  const [drugstatus, setDrugStatus] = useState();
  const [foodstatus, setFoodStatus] = useState();
  const [insectstatus, setInsectStatus] = useState();
 */
