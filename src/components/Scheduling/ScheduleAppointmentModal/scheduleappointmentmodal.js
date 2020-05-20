import React, {Fragment, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../basestyledcomponents/Grid/GridItem";
import moment from "moment";
import { Controller } from 'react-hook-form';
import TextField from "@material-ui/core/TextField";
import {Typography} from "@material-ui/core";
import PatientSearch from "../../Home/PatientSearch/patientsearch";

function PatientSearchContainer() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>No patient selected, please search for a patient below. </Typography>
            </Grid>
            <Grid item xs={12}>
                <PatientSearch/>
            </Grid>
        </Grid>
    )
}

export default function ScheduleAppointmentModal(props) {
console.log(props.slottoschedule);
console.log('Start: ' + moment(props.slottoschedule.start).toISOString())
    return (
        <Grid container>
            <Grid item xs={12}>
                {props.patient ? null : <PatientSearchContainer/>}
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography>Appointment Type:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <select name="type" ref={props.register}>
                            <option value="first_appointment">First Appointment</option>
                            <option value="medication_management">Medication Management</option>
                            <option value="follow_up">Follow Up</option>
                            <option value="appointment">Appointment</option>
                        </select>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography>Patient</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Controller
                            as={<TextField disabled />}
                            name="patient"
                            control={props.control}
                            defaultValue={props.patient}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography>Appointment Start:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Controller
                            as={<TextField disabled />}
                            name="start"
                            control={props.control}
                            defaultValue={moment(props.slottoschedule.start).format('MMM DD YYYY @ h:mm a')}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography>Appointment End:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Controller
                            as={<TextField disabled />}
                            name="end"
                            control={props.control}
                            defaultValue={moment(props.slottoschedule.end).format('MMM DD YYYY @ h:mm a')}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography>Provider:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Controller
                            as={<TextField disabled />}
                            name="provider"
                            control={props.control}
                            defaultValue={props.slottoschedule.resourceId}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography>Comment:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Controller
                            as={<TextField multiline />}
                            name="comment"
                            control={props.control}
                            defaultValue={`Please enter any patient comments here`}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

/*
defaultValue={moment(props.slottoschedule.resourceId).format('MMM DD YYYY @ h:mm a')}
 */