import axios from "axios";
import API_URL from "./api_url";

export const getFullPatientInformation = async (patientId) => {
  const basic_information = await axios.get(
    `${API_URL}/patients/${patientId}/`
  );
  const address = await axios.get(`${API_URL}/patients/${patientId}/address/`);
  const demographics = await axios.get(
    `${API_URL}/patients/${patientId}/demographics/`
  );
  const patient_contact_methods = await axios.get(
    `${API_URL}/patients/${patientId}/contactinformation/`
  );
  const fullpatientinformation = {
    basic_information: basic_information.data,
    address: address.data,
    demographics: demographics.data,
    patient_contact_methods: patient_contact_methods.data,
  };
  return fullpatientinformation;
};
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
const phone_prefix = "+1";
export const saveDemographicsFormToDB = async (patientId, demographicsform) => {
  console.log(demographicsform);
  const stringedobject = JSON.stringify(demographicsform);
  //console.log(JSON.stringify(demographicsform));
  const exampleform = {
    first_name: demographicsform.first_name,
    patient_demographics: {
      race: "unknown",
      gender: "unknown",
      marital_status: "unknown",
      employment_status: "unknown",
      email: "",
    },
    patient_address: demographicsform.patient_address,
    //patient_contact_methods: demographicsform.patient_contact_methods,
    last_name: demographicsform.last_name,
    middle_name: demographicsform.middle_name,
    preferred_name: demographicsform.preferred_name,
    date_of_birth: demographicsform.date_of_birth,
    ssn: demographicsform.ssn,
  };
  const result = await axios.put(`${API_URL}/patients/${patientId}/`, {
    first_name: demographicsform.first_name,
    patient_demographics: {
      race: "unknown",
      gender: "unknown",
      marital_status: "unknown",
      employment_status: "unknown",
      email: "",
    },
    patient_address: demographicsform.patient_address,
    patient_contact_methods: [],
    last_name: demographicsform.last_name,
    middle_name: demographicsform.middle_name,
    preferred_name: demographicsform.preferred_name,
    date_of_birth: demographicsform.date_of_birth,
    ssn: demographicsform.ssn,
  });
  return result.data;
};

export const getBasicPatientInformation = async (patientId) => {
  const result = await axios.get(`${API_URL}/patients/${patientId}/`);
  console.log(result.data);
  return result.data;
};

export const getPatientAddress = async (patientId) => {
  const result = await axios.get(`${API_URL}/patients/${patientId}/`);
  console.log(result.data);
  return result.data;
};

export const updatePatientBasicInfo = async (patientId, demographics) => {
  const result = await axios.patch(`${API_URL}/patients/${patientId}/`, {
    demographics: {
      race: demographics.patientnamedetails(),
    },
    first_name: demographics.patientnamedetails.first_name,
    last_name: demographics.patientnamedetails.last_name,
    date_of_birth: demographics.patientnamedetails.date_of_birth,
    middle_name: demographics.patientnamedetails.middle_name,
    preferred_name: demographics.patientnamedetails.preferred_name,
    address: demographics.address,
    patient_contact_methods: demographics.patient_contact_methods,
    ssn: demographics.patientnamedetails.ssn,
  });
  return result.data;
};

export const updatePatientAddressInfo = async (patientId, address) => {
  const result = await axios.patch(
    `${API_URL}/patients/${patientId}/address/`,
    address
  );
  return result.data;
};

const default_demographics = {
  race: "",
  gender: "",
  marital_status: "",
  employment_status: "",
  email: "",
};
export const updatePatientDemographics = async (
  patientId,
  patientnamedetails,
  address,
  patient_contact_methods = [],
  demographics = default_demographics
) => {
  console.log(demographics);
  /*
      address,
    patient_contact_methods,
   */
  const new_demographics = {
    first_name: patientnamedetails.first_name,
    middle_name: patientnamedetails.middle_name,
    last_name: patientnamedetails.last_name,
    preferred_name: patientnamedetails.preferred_name,
    date_of_birth: patientnamedetails.date_of_birth,
    ssn: patientnamedetails.ssn,
  };
  console.log(new_demographics);
  //const result = await updatePatientBasicInfo(patientId, demographics);
  const result = await axios.put(
    `${API_URL}/patients/${patientId}/`,
    new_demographics
  );

  console.log(result);
  //return result;
};

export const getPatientDiagnoses = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/diagnoses/`);
  return result.data;
};

export const getPatientInsurance = async (patientId) => {
  const result = await axios.get(
    `${API_URL}/patients/${patientId}/patient_insurances/`
  );
  return result.data;
};

export const addNewInsuranceForPatient = async (patientId, insurance) => {
  console.log({ ...insurance, patient: patientId });
  const result = await axios.post(
    `${API_URL}/patients/${patientId}/patient_insurances/`,
    { ...insurance, patient: patientId }
  );
  return result.data;
};

export const getPatientAndDemographics = async (patientId) => {
  const result = await axios.get(`${API_URL}/patients/${patientId}/`);
  return result.data;
};
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
  );
  return result.data;
};

export const setPatientDiagnosisActive = async (patientId, diagnosisId) => {
  const result = await axios.patch(
    `${API_URL}/patients/${patientId}/diagnoses/${diagnosisId}/`,
    {
      status: "active",
      patient: patientId,
    }
  );
  return result.data;
};

export const addNewPatientDiagnosis = async (patientId, diagnosis) => {
  const result = await axios.post(
    `${API_URL}/patients/${patientId}/diagnoses/`,
    {
      patient: patientId,
      diagnosis_icd_code: diagnosis.icd_code,
      diagnosis_description: diagnosis.icd_description,
    }
  );
  return result.data;
};

export const getPatientMedications = async (patientId) => {
  const result = await axios(`${API_URL}/patients/${patientId}/medications/`);
  return result.data;
};

export const addNewPatientMedication = async (patientId, medication) => {
  const result = await axios.post(
    `${API_URL}/patients/${patientId}/medications/`,
    {
      patient: patientId,
      name: medication.name,
      active: true,
      medication_diagnoses: [],
      strength: medication.dosage,
      frequency: medication.frequency,
    }
  );
  return result.data;
};

export const changeMedicationStatus = async (
  patientId,
  medicationId,
  status
) => {
  const result = await axios.patch(
    `${API_URL}/patients/${patientId}/medications/${medicationId}/`,
    { active: status }
  );
  return result.data;
};

export const addNewMedicationAuthorization = async (
  patientId,
  medicationId,
  authorization
) => {
  const result = await axios.post(
    `${API_URL}/patients/${patientId}/medications/${medicationId}/authorizations/`,
    authorization
  );
  return result.data;
};

export const getMedicationPrescriptionHistory = async (
  patientId,
  medicationId
) => {
  const result = await axios(
    `${API_URL}/patients/${patientId}/medications/${medicationId}/`
  );
  return result.data;
};

export const addNewMedicationPrescription = async (patientId, medication) => {
  const result = await axios.post(
    `${API_URL}/patients/${patientId}/medications/${medication.medicationId}/prescriptions/`,
    {
      strength: medication.strength,
      frequency: medication.frequency,
      name: medication.name,
      medication: medication.medicationId,
      type: "No Change",
      refills: medication.refills,
      provider: 1,
    }
  );
  return result.data;
};

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
  );
  return result.data;
};

export const getMedicationClinicalDetails = async (name) => {
  const result = await axios(
    `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?sf=DISPLAY_NAME,STRENGTHS_AND_FORMS&df=DISPLAY_NAME,STRENGTHS_AND_FORMS&terms=${name}`
  );
  return result.data;
};

export const getPatientMedicationSummary = async (patientId, medicationId) => {
  const result = await axios(
    `${API_URL}/patients/${patientId}/medications/${medicationId}/`
  );
  return result.data;
};
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
