```javascript
import React, { useState, useEffect } from 'react';
import FormBuilder from './FormBuilder';
import { fetchICDData } from '../api/NIH_ICD_API';
import { enhanceUI } from '../utils/AI_Integration';

const EMRForm = () => {
  const [formSchema, setFormSchema] = useState(null);
  const [formSubmissionSuccess, setFormSubmissionSuccess] = useState(false);
  const [formSubmissionError, setFormSubmissionError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchICDData();
      setFormSchema(data);
    };
    fetchData();
  }, []);

  const submitForm = (formData) => {
    // Here you would typically send the form data to the server
    // For this example, we'll just log it to the console and set the success state
    console.log(formData);
    setFormSubmissionSuccess(true);
  };

  useEffect(() => {
    if (formSchema) {
      enhanceUI();
    }
  }, [formSchema]);

  return (
    <div id="emr-form">
      {formSubmissionSuccess && <p>Form submitted successfully!</p>}
      {formSubmissionError && <p>There was an error submitting the form.</p>}
      {formSchema && <FormBuilder schema={formSchema} onSubmit={submitForm} />}
    </div>
  );
};

export default EMRForm;
```