import React, { useEffect, useState } from 'react'
import Autosuggest from 'react-autosuggest'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useFormContext, Controller } from 'react-hook-form'
import './newcomplaint.css'
import { TextField, Checkbox } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '../../../../basestyledcomponents/Button'
import { useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const API_URL =
	'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm&terms='

const EVA_URL = 'http://127.0.0.1:8000/api'

function getComplaintNameSuggestionValue(suggestion) {
	return suggestion[0]
}
function renderSuggestion(suggestion) {
	return <span>{suggestion}</span>
}

const useStyles = makeStyles({
	newcomplaintcontainer: {
		display: 'flex',
		margin: '15px',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	searchinput: {
		padding: '15px',
		width: '100%',
	},
})

export default function NewComplaint(props) {
	let { id } = useParams()
	let dispatch = useDispatch()
	const { register, getValues, setValue, control, watch } = useFormContext()
	const classes = useStyles()
	const watchcomplaint_name = watch('complaint_name')
	const watchcomplaint_description = watch('complaint_description')
	const [suggestions, setSuggestions] = useState([])
	// const clinical_complaint = useSelector(state => state.appointment.complaints.inputfields.patient_complaint)
	const [complaint_name, setComplaintName] = useState('')
	const onComplaintNameChange = (event, { newValue, method }) => {
		setComplaintName(newValue)
	}
	const onSuggestionsFetchRequested = ({ value }) => {
		fetch(`${API_URL}${value}`)
			.then((response) => response.json())
			.then((data) => {
				setSuggestions([...suggestions, ...data[3]])
			})
	}
	const onComplaintNameSuggestionSelected = (event, { suggestionValue }) => {
		// event.preventDefault();
		console.log(suggestionValue)
		setValue('complaint_name', suggestionValue)
	}
	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	const addNewComplaint = () => {
		const newcomplaint = getValues()
		const defaultcomplaint = {
			onset: '',
			other_notes: '',
			patient_belief_caused_by: '',
			patient_therapeutic_attempts: '',
			complaint_name: watchcomplaint_name,
			complaint_description: watchcomplaint_description,
		}
		console.log(defaultcomplaint)
		props.addComplaintToForm(defaultcomplaint)
		setComplaintName('')
	}
	const inputComplaintNameDescriptionProps = {
		placeholder: 'Search Medical Conditions',
		value: complaint_name,
		className: classes.searchinput,
		onChange: onComplaintNameChange,
	}
	return (
		<Card>
			<CardContent>
				<Grid container direction="column">
					<Grid
						item
						className={classes.newcomplaintcontainer}
						xs={12}>
						<Typography>ICD Code</Typography>
						<Controller
							name={`complaint_name`}
							as={
								<Autosuggest
									suggestions={suggestions}
									onSuggestionsFetchRequested={
										onSuggestionsFetchRequested
									}
									onSuggestionsClearRequested={
										onSuggestionsClearRequested
									}
									getSuggestionValue={
										getComplaintNameSuggestionValue
									}
									renderSuggestion={renderSuggestion}
									onSuggestionSelected={
										onComplaintNameSuggestionSelected
									}
									inputProps={
										inputComplaintNameDescriptionProps
									}
								/>
							}
							defaultValue={``}
							control={control}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						className={classes.newcomplaintcontainer}>
						<Typography>Complaint Description</Typography>
						<TextField
							multiline
							placeholder={`Enter complaint description here`}
							rows={5}
							name={`complaint_description`}
							variant={`outlined`}
							fullWidth
							defaultValue={``}
							inputRef={register}
						/>
					</Grid>
					<Grid item>
						<Button
							color={`primary`}
							onClick={() => {
								addNewComplaint()
							}}>
							Add Complaint
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

/*
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
