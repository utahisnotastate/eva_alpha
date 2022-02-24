import API_URL from './api_url'
import axios from 'axios'

export const fetchAllForms = async () => {
	const result = await axios(`${API_URL}/forms/`)
	return result.data
}

//not used

export const fetchForm = async (formId) => {
	const result = await axios(`${API_URL}/forms/${formId}/`)
	return result.data
}

export const updateForm = async (form) => {
	const result = await axios.put(`${API_URL}/forms/${form.id}/`, form)
	return result.data
}

/*
export const checkIfAppointmentHasForms = async () => {
	getAppointmentForms()
		.then((response) => {
			console.log('appointment forms = ' + response)
		})
		.catch((error) => console.log(error))
}

export const fetchFormFields = async (formId) => {
	const result = await axios(`${API_URL}/forms/${formId}/formfields/`)
	return result.data
}
export const getAllActivePEAndRosForms = async () => {
	const result = await axios(`${API_URL}/activeforms/`)
	return result.data
}

export const getAppointmentClinicalData = async (appointmentId) => {
	const result = await axios(`${API_URL}/appointments/${appointmentId}/`)
	return result.data.clinical_data
}

export const getAllAppointmentInformation = async (appointmentId) => {
	const result = await axios(`${API_URL}/appointments/${appointmentId}/`)
	return result.data
}

export const getAppointmentForms = async (appointmentId) => {
	const result = await axios(
		`${API_URL}/appointments/${appointmentId}/forms/`
	)
	return result.data
}
export const updateFormProp = async (formId, formChanges) => {
  const result = await axios.patch(`${API_URL}/forms/${formId}/`, formChanges);
  return result;
};

export const createNewForm = async (formData) => {
  const result = await axios.post("http://127.0.0.1:8000/api/forms/", {
    form_type: formData.type,
    title: formData.title,
    form: { customformfields: [] },
  });
  return result.data;
};
export const updateForm = async (formId, formData) => {
  const customform = {
    customformfields: formData.customformfields,
  };
  const result = await axios.patch(`${API_URL}/forms/${formId}/`, {
    form_type: formData.form_type,
    title: formData.form_title,
    form: customform,
  });
  return result.data;
};

export const createNewFormInDBAndLoadAllForms = async(newform) => {

  const newformcreated = await createNewForm(newform)
  const allforms = await fetchAllForms()

  dispatch({ type: "load_forms", forms: allforms });

}*/

/*
axios.post('http://127.0.0.1:8000/api/forms/', {
        form_type: formData.type,
        title: formData.title,
    }).then(response => {
        if(response.statusText === "Created") {
            const formId = response.data.id;
            let newfields = formData.formfields.forEach((item) => item.form = formId)

            axios.post(`http://127.0.0.1:8000/api/forms/${formId}/formfields/`, {
                form_fields: newfields
            })
        }
    }).catch(error => {
        console.log(error);
    });
 */

/*export const addFormFieldOption = async (formId, formFieldId, option) => {
    const result = await axios.post(`${API_URL}/forms/${formId}/formfields/${formFieldId}/options/`, {
        form_field: formFieldId,
        label: option.label,
    });
    return result.data;
}*/

/*const createFormFieldWithOption = async (formId, formField) => {
    const result = await axios.post(`${API_URL}/forms/${formId}/formfields/`, {
        form: formId,
        label: formField.label,
        type: formField.type,
        has_options: true,
    });
    return result.data;
}*/

/*export const addNewFormFieldWithOptions = async (formId, formField, options) => {
    createFormFieldWithOption(formId, formField).then(response => {
        let optionposts = []
        options.forEach(option => {
            console.log(option);
            optionposts.push(addFormFieldOption(formId, response.id, option))
        })
        return axios.all(optionposts)
    })

}*/
/*export const addSimpleNewFormField = async (formId, formField) => {
    console.log('adding field!')
    const result = await axios.post(`${API_URL}/forms/${formId}/formfields/`, {
        form: formId,
        label: formField.label,
        type: formField.type,
        has_options: false,
    });
    console.log(result);
    return result;
}*/

/*export const addNewFormField = async(formId, formField) => {
    let fieldOptions = formField.options;
    if(fieldOptions === undefined) {
        const result = await axios.post(`${API_URL}/forms/${formId}/formfields/`, {
            form: formId,
            label: formField.label,
            type: formField.type,
        });
        return result;
    } else {
        fieldOptions.split(";")
        let fixedoptionsarray = [];
        for(const option of fieldOptions) {
            fixedoptionsarray.push({})
        }

    }

}*/
/*export const addNewFormFieldOption = async(formfield, formOptions) => {
    let options = formOptions.split(";");
    let convertedoptions = [];
    for (const option of options) {
        console.log({form_field: formfield, label: option, name:`${option.replace(/\s/g, '').toLocaleLowerCase()}`});
        convertedoptions.push({form_field: formfield, label: option, name:`${option.replace(/\s/g, '').toLocaleLowerCase()}`})
    }
    console.log(convertedoptions);

}*/
