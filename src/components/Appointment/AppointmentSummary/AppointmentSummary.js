import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function AppointmentSummary() {
    let { id } = useParams();
    const summaryvalues = {
        age: '33',
        gender: 'male',
        complaints: ['abdominal pain', 'eye pain']
    }
    const mergedsummary = `Patient is a ${summaryvalues.age} year old ${summaryvalues.gender} complaining today of: ${summaryvalues.complaints.map((complaint) => `${complaint}`)}`
    return (
        <Grid container direction={`column`}>
            <Grid item>
                <h3>Appointment Summary id:{id}</h3>
            </Grid>
            <Grid item>
                <TextField multiline rows={`10`} fullWidth value={mergedsummary} />
            </Grid>
        </Grid>
    )
}