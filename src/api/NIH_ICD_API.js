import axios from 'axios';

const NIH_ICD_API = {};

NIH_ICD_API.fetchICDData = async (code) => {
  try {
    const response = await axios.get(`https://api.icd.nih.gov/v1/icd/${code}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default NIH_ICD_API;