import React, {useState, useEffect} from "react";
import _ from "lodash";
import {useForm, FormContext, useFormContext, Controller} from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography} from "@material-ui/core";
import AppointmentFormFieldContainer from './AppointmentFormComponents/appointmentformfieldcontainer.js';
import AppointmentFormField from './AppointmentFormComponents/appointmentformfield.js';
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    root: {
        margin: '15px',
    }
})


export default function FormTemplate(props) {
    const methods = useForm();
    const classes = useStyles();
    const formfields = useSelector(state => state.appointment.appointmentformfields);
    const { register, handleSubmit, watch, control, errors } = useForm({defaultValues: {
            customfield3213: {checked: true}
        }});
    const onSubmit = data => console.log((data));
    const appointmentForm = props.appointmentform;
    const appointmentFields = appointmentForm.form
    return (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {Object.keys(formfields).map(field => (
                    <div key={field}>
                        <AppointmentFormFieldContainer name={field} fieldprops={formfields[field]} />
                    </div>

                ))}
                <input type="submit" value="Save" />
            </form>
        </FormContext>
    )
}
/*
{Object.keys(appointmentForm).map(field => {
                    return (
                        <AppointmentFormField name={field} />
                    )
                })}
{Object.keys(props.form.form).forEach(field => (
                <Grid className={classes.root} container direction={`column`}>
                    <Grid item xs={2}>
                        <Grid container direction={`column`}>
                            <Grid item>
                                <Typography>{field}</Typography>
                            </Grid>
                            <Grid item>
                                <Controller
                                    as={Switch}
                                    type="checkbox"
                                    name={`switch`}
                                    control={control}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container direction={`column`} justify="center">
                            <Typography>Input goes here</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
<Grid className={classes.root} container direction={`column`}>
                <Grid item xs={2}>
                    <Grid container direction={`column`}>
                        <Grid item>
                            <Typography>Label</Typography>
                        </Grid>
                        <Grid item>
                            <Controller
                                as={Switch}
                                type="checkbox"
                                name={`switch`}
                                control={control}
                                />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction={`column`} justify="center">
                        <Typography>Input goes here</Typography>
                    </Grid>
                </Grid>
            </Grid>
 */