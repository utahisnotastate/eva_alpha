import React, {useState, useEffect, Fragment} from "react";
import _ from "lodash";
import {useForm, FormContext,FormProvider, useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
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
    const formfields = useSelector(state => state.appointment.appointmentformfields);
    const methods = useForm({ defaultValues: formfields});
    const classes = useStyles();

    const onSubmit = data => console.log((data));
    const appointmentForm = props.appointmentform;
    console.log('form fields are ' + JSON.stringify(formfields));

    return (
        <Fragment>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {Object.keys(formfields).map(field => (
                    <div key={field}>
                        <AppointmentFormFieldContainer name={field} fieldprops={formfields[field]}/>
                    </div>

                ))}
                <input type="submit" value="Save"/>
            </form>
        </FormProvider>
            <DevTool control={methods.control} />
        </Fragment>
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