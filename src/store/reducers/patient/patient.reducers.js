const default_nameanddetails = {
  first_name: "",
  last_name: "Hans",
  middle_name: "",
  preferred_name: "",
  date_of_birth: "",
  ssn: "",
};

export function patientnameanddetails(state = default_nameanddetails, action) {
  switch (action.type) {
    case "load_name_and_details":
      return action.nameanddetails;
    default:
      return state;
  }
}
const default_patient_contact_methods = [
  { type: "home", special_instructions: "testing", number: "804-241-6659" },
  { type: "work", special_instructions: "testing2", number: "804-420-6969" },
];
export function patient_contact_methods(
  state = default_patient_contact_methods,
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
export function patientdiagnoses(state = [], action) {
  switch (action.type) {
    case "load_all_diagnoses":
      return action.diagnoses;
    default:
      return state;
  }
}
// contains all patient insurances, filter which ones appropriately in components
export function patientinsurances(state = [], action) {
  switch (action.type) {
    case "load_insurance":
      return action.insurance;

    case "updateinsurance":
      return action.insurance;

    default:
      return state;
  }
}

const default_address = {
  address_one: "",
  address_two: "",
  city: "",
  state: "",
  zip_code: "",
};

export function patientaddress(state = default_address, action) {
  switch (action.type) {
    case "load_address":
      return action.address;
    case "address_is_null":
      return default_address;
    default:
      return state;
  }
}

export function patientdemographics(state = {}, action) {
  switch (action.type) {
    case "load_demographics":
      return action.demographics;
    default:
      return state;
  }
}
/*
// probably getting rid of this
export function hasinsurance(state = false, action) {
  switch (action.type) {
    case "patient_has_no_insurance":
      return false;
    case "patient_has_insurance":
      return true;
    default:
      return state;
  }
}
// probably getting rid of this
export function primaryinsurance(state = {}, action) {
  switch (action.type) {
    case "set_primary_insurance":
      return action.primary_insurance;
    default:
      return state;
  }
}
// probably getting rid of this
export function secondaryinsurance(state = {}, action) {
  switch (action.type) {
    case "set_secondary_insurance":
      return action.secondary_insurance;
    default:
      return state;
  }
}
 */

export function surgicalhistory(state = [], action) {
  switch (action.type) {
    case "load_surgical_history":
      return action.surgicalhistory;

    case "update_surgical_history":
      return action.surgicalhistory;

    default:
      return state;
  }
}
export function addmedicationformicd10result(
  state = {
    icd10assessmentcode: "",
    assessment_description: "",
  },
  action
) {
  switch (action.type) {
    case "updated_icd10":
      return action.icd10value;

    default:
      return state;
  }
}

export function addMedicationFormMedication(state = "", action) {
  switch (action.type) {
    case "set_medication":
      return action.name;
    default:
      return state;
  }
}

export function patientmedications(state = [], action) {
  switch (action.type) {
    case "load_all_medications":
      return action.medications;
    case "update_patient_medications":
      return action.medications;
    default:
      return state;
  }
}

export function drugallergies(state = [], action) {
  switch (action.type) {
    case "load_all_drug_allergies":
      return action.drugallergies;
    default:
      return state;
  }
}

export function foodallergies(state = [], action) {
  switch (action.type) {
    case "load_all_food_allergies":
      return action.foodallergies;
    default:
      return state;
  }
}

export function latexallergy(state = false, action) {
  switch (action.type) {
    case "load_latex_allergy":
      return action.latexallergy;
    default:
      return state;
  }
}

export function petallergies(state = [], action) {
  switch (action.type) {
    case "load_all_pet_allergies":
      return action.petallergies;
    default:
      return state;
  }
}

export function pollenallergy(state = false, action) {
  switch (action.type) {
    case "load_pollen_allergy":
      return action.pollenallergy;
    default:
      return state;
  }
}
// export function familymedicalhistory(state = )
