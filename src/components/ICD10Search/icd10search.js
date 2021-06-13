import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { useField } from "formik";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./icd10search.css";

const API_URL =
  "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name&terms=";

const useStyles = makeStyles({
  newcomplaintcontainer: {
    display: "flex",
    margin: "15px",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  searchinput: {
    padding: "15px",
    width: "100%",
  },
});

export default function ICD10search(props) {
  const [field] = useField(props);
  const [suggestions, setSuggestions] = useState([]);
  const [searchinput, setSearchInput] = useState("");
  const [icdcode, setICDCode] = useState("");
  const [icddescription, setICDDescription] = useState("");
  const classes = useStyles();

  const onSuggestionsFetchRequested = ({ value }) => {
    fetch(`${API_URL}${value}`)
      .then((response) => response.json())
      .then((data) => {
        setSuggestions(data[3]);
      });
  };

  const getComplaintNameSuggestionValue = (suggestion) => {
    return `${suggestion[0]} ${suggestion[1]}`;
  };
  const renderSuggestion = (suggestion) => {
    return (
      <div>
        {suggestion[0]} : {suggestion[1]}{" "}
      </div>
    );
  };
  //When the user selects an ICD10 code
  const onComplaintNameSuggestionSelected = (
    event,
    { suggestion, suggestionValue }
  ) => {
    props.arrayHelpers.push({
      complaint_name: suggestion[0],
      complaint_description: suggestion[1],
    });
    console.log(suggestion);
    console.log(suggestionValue);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onComplaintNameChange = (event, { newValue }) => {
    setSearchInput(newValue);
  };

  const renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
      <div {...containerProps}>
        <Grid container direction={`column`}>
          <Grid item>
            <Grid container direction={`row`}>
              <Grid item xs={1}>
                <p>ICD 10 code</p>
              </Grid>
              <Grid item xs={11}>
                <p>ICD 10 Description</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={`column`}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  const inputComplaintNameDescriptionProps = {
    placeholder: "Search ICD 10 Codes",
    value: searchinput,
    className: classes.searchinput,
    onChange: onComplaintNameChange,
  };

  return (
    <Grid item>
      <Autosuggest
        {...field}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getComplaintNameSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onComplaintNameSuggestionSelected}
        inputProps={inputComplaintNameDescriptionProps}
      />
    </Grid>
  );
}

/*
  const onSuggestionsFetchRequested = ({ value }) => {
    fetch(`${API_URL}${value}`)
      .then((response) => response.json())
      .then((data) => {
        setSuggestions([...suggestions, ...data[3]]);
      });
  };
 */
