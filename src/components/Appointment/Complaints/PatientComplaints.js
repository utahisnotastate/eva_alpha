import React, { Component, useEffect } from 'react';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import {useSelector, useDispatch} from "react-redux";
import { useForm, useFieldArray } from 'react-hook-form';
import NewComplaint from './NewComplaint/NewComplaint.FunComp';
import AppointmentComplaints from "./AppointmentComplaints/AppointmentComplaints";
import {useParams} from "react-router-dom"
// import PatientComplaint from './PatientComplaint/PatientComplaint';

const editorStyle = {
    minWidth: '100px',
    minHeight: '100px',
    'touch-action': 'none',
};
const API_URL = "http://127.0.0.1:8000/api";

export default function PatientComplaints(props) {
        let { id } = useParams();
        let dispatch = useDispatch();
        const complaints = useSelector(state => state.appointment.complaints.complaints);
        const { register, errors, handleSubmit, setValue, control, getValues } = useForm({
            defaultValues: {
                complaints: complaints,
            }
        });
        // const { complaints, values } = props;
        const onSubmit = (data) => {console.log(data)}
    useEffect(() => {
        const fetchComplaints = async () => {
            const result = await axios(`${API_URL}/appointments/${id}/complaints/`);
            return result;
        }
        fetchComplaints().then(response => {
            console.log(response.data);
            dispatch({type: 'load_complaints', complaints: response.data})
        });

    }, []);
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container
                  direction={`column`}
                  justify="space-evenly"
                  alignItems="stretch"
                  spacing={2}
            >
                <Grid item>
                    <AppointmentComplaints complaints={complaints} control={control} setValue={setValue} register={register} useFieldArray={useFieldArray} />

                </Grid>
                <Grid item>
                    <h3>Add Complaint: {id}</h3>
                    <NewComplaint control={control} register={register} setValue={setValue} getValues={getValues} />
                </Grid>
            </Grid>
                <Grid item>
                    <input type="submit" value={`Save`}/>
                </Grid>
            </form>
        );

}
/*
<Grid item>
                    <h3>Reason for Visit /Chief Complaint id: {id}</h3>
                    <AppointmentComplaints complaints={complaints} />
                </Grid>
                <Grid item>
                            <NewComplaint/>
                </Grid>

<Grid container>
                <Grid item xs={10}>
                    <Card className={`w3-padding-large`}>
                            <AppointmentComplaints/>
                            <h3>Reason for Visit /Chief Complaint id: {id}</h3>
                            <NewComplaint/>
                    </Card>
                </Grid>

            </Grid>
<div className="w3-padding w3-bottombar w3-leftbar w3-rightbar w3-topbar w3-margin-bottom">
                            <AppointmentComplaints/>
                        </div>
                        <div className="w3-padding w3-bottombar w3-leftbar w3-rightbar w3-topbar">
                            <h3>Reason for Visit /Chief Complaint id: {id}</h3>
                            <NewComplaint/>
                        </div>
<Grid item xs={2}>
                    <div className="w3-ul">
                        <li>Complaints</li>
                        <li>Review of Systems</li>
                        <li>Physical Exam</li>
                        <li>Assessment</li>
                        <li>Plan</li>
                        <li>Follow Up</li>
                    </div>
                </Grid>
<NewComplaint />
<FieldArray
                            name="current_concerns"
                            render={arrayHelpers => (
                                <div>
                                    <div>
                                        {complaints.map((complaint, index) => (
                                            <PatientComplaint index={index} complaint={complaint} arrayHelpers={arrayHelpers} values={values} />
                                        ))}
                                    </div>
                                    <div>
                                        <NewComplaint />
                                    </div>
                                </div>
                            )}
                        />
 */
