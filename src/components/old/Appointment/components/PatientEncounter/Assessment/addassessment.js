import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import ICD10search from "../../../../ICD10Search/icd10search";
import AssessmentICD10search from "./assessmentICD10Search";

const useStyles = makeStyles({
  newcomplaintcontainer: {
    display: "flex",
    margin: "15px",
    flexDirection: "row",
    width: "100%",
  },
  searchinput: {
    padding: "15px",
    width: "100%",
  },
});

export default function AddAssessment(props) {
  return (
    <Grid container direction="row">
      <Grid item xs={1}>
        <Typography>ICD Code</Typography>
      </Grid>
      <Grid item xs={11}>
        <AssessmentICD10search
          arrayHelpers={props.arrayHelpers}
          extrafield={{ relatedTo: false }}
        />
      </Grid>
    </Grid>
  );
}

/*
  const classes = useStyles();
  const [suggestions, setSuggestions] = useState([]);
  const [complaint_name, setComplaintName] = useState("");
  const onComplaintNameChange = (event, { newValue, method }) => {
    setComplaintName(newValue);
  };
// https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name

//old api https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm&terms=
const API_URL =
  "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name&terms=";

const EVA_URL = "http://127.0.0.1:8000/api";

function getComplaintNameSuggestionValue(suggestion) {
  return `${suggestion[0]} ${suggestion[1]}`;
}
function renderSuggestion(suggestion) {
  return <span>{suggestion}</span>;
}


  const onSuggestionsFetchRequested = ({ value }) => {
    fetch(`${API_URL}${value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuggestions([...suggestions, ...data[3]]);
      });
  };
  const onComplaintNameSuggestionSelected = (
    event,
    { suggestion, suggestionValue }
  ) => {
    props.addAssessment(suggestion);
    setComplaintName("");
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const addNewComplaint = () => {
    const defaultcomplaint = {
      onset: "",
      other_notes: "",
      patient_belief_caused_by: "",
      patient_therapeutic_attempts: "",
    };
    console.log(defaultcomplaint);
    props.addComplaintToForm(defaultcomplaint);
    setComplaintName("");
  };
  const inputComplaintNameDescriptionProps = {
    placeholder: "Search Medical Conditions",
    value: complaint_name,
    className: classes.searchinput,
    onChange: onComplaintNameChange,
  };


          <Grid item xs={12} className={classes.newcomplaintcontainer}>
            <Typography>Complaint Description</Typography>
            <TextField
              multiline
              placeholder={`Enter complaint description here`}
              rows={5}
              name={`complaint_description`}
              variant={`outlined`}
              fullWidth
              defaultValue={``}
            />
          </Grid>
          <Grid item>
            <Button
              color={`primary`}
              onClick={() => {
                addNewComplaint();
              }}
            >
              Add Complaint
            </Button>
          </Grid>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getComplaintNameSuggestionValue}
              renderSuggestion={renderSuggestion}
              onSuggestionSelected={onComplaintNameSuggestionSelected}
              inputProps={inputComplaintNameDescriptionProps}
            />

const addNewComplaint = () => {
    const values = props.getValues();
    axios
      .post(`${EVA_URL}/appointments/${id}/complaints/`, {
        appointment: id,
        complaint_name: values.complaint_name,
        complaint_description: values.complaint_description,
        onset_number: 0,
      })
      .then((response) => {
        const fetchData = async () => {
          const result = await axios(
            `http://127.0.0.1:8000/api/appointments/${id}/complaints/`
          );
          console.log(result.data);
          return result.data;
        };
        fetchData().then((response) => {
          dispatch({ type: "load_complaints", complaints: response });
        });
      });
  };

value: clinical_complaint,
<Controller as={<Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getComplaintNameSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            onSuggestionSelected={onComplaintNameSuggestionSelected}
                            inputProps={inputComplaintNameDescriptionProps}
                        />} name="complaint_name" control={control} />
        <form onSubmit={handleSubmit(onSubmit)}> </form>
<div>
                    <h3>Describe Complaint Below</h3>
                    <textarea className={`w3-input`} name="other_complaint" ref={register} />
                </div>
<input type={`submit`} value={`Add Complaint`} />
<button onClick={handleSubmit(onSubmit)}>
                            Add Complaint
                        </button>
<button onClick={() => {
                            console.log(complaint_name);
                            handleSubmit(data => console.log(data));
                            // addNewComplaint(icd10code, complaint_name);
                        }
                        }
                        >Add Complaint
                        </button>
<Autosuggest
                            id="complaint_name"
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getComplaintNameSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputComplaintNameDescriptionProps}
                        />
 */
