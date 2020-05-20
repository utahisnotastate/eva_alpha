import React, { useEffect } from 'react';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import ICD10Search from "../../basestyledcomponents/ICD10Search/icd10search";
import AssessmentsList from "./assessmentslist";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


const API_URL = "http://127.0.0.1:8000/api";


export default function AppointmentAssessment(props) {
    let { id } = useParams();
    const { register, errors, handleSubmit, setValue, control, getValues } = useForm({
    });
    const dispatch = useDispatch();
    const assessments = useSelector(state => state.appointment.assessments.assessments);
    const complaints = useSelector(state => state.appointment.complaints.complaints);
    const onSubmit = (data) => {console.log(data)};
    const formProps = { register, errors, setValue, control, getValues};

    const handleAddAssessment = (assessment) => {
        axios.post(`${API_URL}/appointments/${id}/assessments/`, {
            appointment: assessment.appointmentId,
            icd_code: assessment.icd10assessmentcode,
            icd_description: assessment.icd_description
        }).then(response => {

            const fetchAssessments = async () => {
                const result = await axios(`${API_URL}/appointments/${id}/assessments/`);
                return result.data;
            };
            fetchAssessments().then( (response) => {
                console.log(response);
                dispatch({type: 'load_assessments', assessments: response});
            })
        })
    };


    useEffect( () => {
        const fetchAssessments = async () => {
            const result = await axios(`${API_URL}/appointments/${id}/assessments/`);
            return result.data;
        }
        fetchAssessments().then( (response) => {
            console.log(response);
            dispatch({type: 'load_assessments', assessments: response});
        })
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <AssessmentsList assessments={assessments} complaints={complaints} formProps={formProps}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <ICD10Search register={formProps.register} dispatch={dispatch} handleSelect={handleAddAssessment} id={id}/>
                            <Button>Add Assessment</Button>
                        </CardContent>
                    </Card>
                </Grid>
        </Grid>
        </form>
    )
}